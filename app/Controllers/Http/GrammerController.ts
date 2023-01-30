import Env from '@ioc:Adonis/Core/Env'

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: Env.get('API_KEY'),
})

const openai = new OpenAIApi(configuration)

export default class GrammerController {
  public async index({ request }) {
    const command = 'fix the grammer of this sentence'
    const { text } = request.qs()

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: command + '. ' + text,
      temperature: 0,
      max_tokens: 50,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })

    return response.data
  }
}
