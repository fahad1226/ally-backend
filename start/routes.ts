/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'Heyy' }
})

Route.get('grammer-check', 'GrammerController.checkErrors')
Route.get('fix-grammer', 'GrammerController.fixErrors')

Route.get('open-ai/make-image', 'MakeImagesController.generateFromOAI')
Route.get('my-db/make-image', 'MakeImagesController.generateFromDB')
Route.get('unsplash/all-images', 'MakeImagesController.unsplashImage')
Route.get('unsplash/search-image', 'MakeImagesController.searchUnsplashImage')
