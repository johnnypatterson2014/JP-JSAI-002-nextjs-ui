import { ChatCompletionRequestMessage } from 'openai'
// import logger from './logger';

export const sendSpringMessage = async (chatMessage: ChatCompletionRequestMessage) => {
  try {
    // logger.info('About to call the springboot backend.')

    // const myQuery = JSON.stringify({ messages })

    //     {messages: [
    // 		{role:system,content:You are ChatGPT, a large language model trained by OpenAI.		},
    // 		{role:assistant,content:Hi, How can I help you today?		},
    // 		{role:user,content:What day is it today?		}
    // 	]
    // }

    const myQuery = chatMessage.content

    console.log('myQuery: ' + myQuery)

    // example GET
    // const response = await fetch('/api/springIntegration?message=' + myQuery, {
    //   method: 'GET'
    // })
    // return await response.json()

    // example POST
    const mapBody = { 'question': myQuery };
    const response = await fetch('/api/springIntegrationPost', {
      method: 'POST',
      body: JSON.stringify(mapBody),
    });

    return await response.json();
  } catch (error) {
    console.log(error)
    // logger.error(error)
  }
}
