import Env from '@ioc:Adonis/Core/Env'

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: Env.get('API_KEY'),
})

const openai = new OpenAIApi(configuration)

export default class GrammerController {
  public async checkErrors({ request }) {
    const command =
      'Show me what are the grammatical mistakes or common mistakes this sentence has:\n'
    const { text } = request.qs()


    // can you improve the whole writing of this paragraph? (improve anyway button)

    // we have to take the number of words lenght from the input and set the max_tokens to it.
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: command + '. ' + text,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })

    return response.data
  }

  public async fixErrors({ request }) {
    const command = 'Correct this to standard English:\n\n'
    const { text } = request.qs()

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: command + '. ' + text,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })

    return response.data
  }
}
