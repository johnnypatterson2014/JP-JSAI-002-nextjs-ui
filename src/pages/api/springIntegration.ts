import { NextApiRequest, NextApiResponse } from 'next'
import logger from '../../utils/logger';

export default async function createMessage(req: NextApiRequest, res: NextApiResponse) {
  const { messages } = req.body
  const apiKey = process.env.OPENAI_API_KEY
  // const url = 'http://localhost:8080/rag/qa-over-pdf' 
  logger.info(req.query)
  const myQuery = req.query['message']
  const url = 'http://localhost:8080/api/chat/query-with-response?message=' + myQuery
  logger.info('url: ' + url)

  const body = JSON.stringify({
    messages,
    model: 'gpt-3.5-turbo',
    stream: false
  })

  try {
    logger.info('About to call the springboot backend.')
    logger.info('url: ' + url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X_CONV_ID': 'convo-id-123456',
        Authorization: `Bearer ${apiKey}`
      }
    })
    const data = await response.json()
    logger.info(data)
    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
