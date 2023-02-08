// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Env from '@ioc:Adonis/Core/Env'
import Database from '@ioc:Adonis/Lucid/Database'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: Env.get('API_KEY'),
})

const openai = new OpenAIApi(configuration)

export default class MakeImagesController {
  public async getAllImages() {
    const images = await Database.query().from('images').select('*')
    return images
  }

  public async generateFromOAI({ request }) {
    const command = 'make it the most beutiful and realastic image'
    const { text } = request.qs()

    const response = await openai.createImage({
      prompt: command + '. ' + text,
      n: 1,
      size: '1024x1024',
    })
    const image_url = response.data.data[0].url

    return image_url
  }

  public async generateFromDB({ request }) {
    const { text } = request.qs()
    return text
  }
}
