import { ChatCompletionRequestMessage } from 'openai'

export const sendSpringMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/springIntegration', {
      method: 'GET'
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
