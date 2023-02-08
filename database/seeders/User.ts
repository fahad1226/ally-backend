import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        first_name: 'Vikram',
        last_name: 'Bhutt',
        user_name: 'bhutt34',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        first_name: 'Roman',
        last_name: 'Adonis',
        user_name: 'roman123',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
      },
      {
        first_name: 'Fahad',
        last_name: 'Bin Munir',
        user_name: 'fahad1226',
        email: 'fahadbinmunir@gmail.com',
        password: 'supersecret',
      },
    ])
  }
}
