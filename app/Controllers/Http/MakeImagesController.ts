// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import Database from '@ioc:Adonis/Lucid/Database'
import nodeFetch from 'node-fetch'
import { Configuration, OpenAIApi } from 'openai'
import { createApi } from 'unsplash-js'

const configuration = new Configuration({
  apiKey: Env.get('API_KEY'),
})

const unsplash = createApi({
  accessKey: 'E3M4VUOFDnpwMcPK7vdOxv1W9xC1IDu5vYlbfdavits',
  fetch: nodeFetch,
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

  public async unsplashImage({ request }) {
    const { page } = request.qs()

    let allImages = unsplash.photos.list({ page: page, perPage: 15 })

    return allImages
  }

  public async searchUnsplashImage({ request }) {
    const { query } = request.qs()

    const result = unsplash.search.getPhotos({ query: query, page: 1, perPage: 15 })

    return result
  }
}
