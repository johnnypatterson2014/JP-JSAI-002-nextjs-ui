import { ChatCompletionRequestMessage } from 'openai'
// import logger from './logger';

export const sendSpringMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    // logger.info('About to call the springboot backend.')
    const response = await fetch('/api/springIntegration', {
      method: 'GET'
    })

    return await response.json()
  } catch (error) {
    console.log(error)
    // logger.error(error)
  }
}
