import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Image from 'App/Models/Image'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'email' })
  public email: string

  @column({ columnName: 'password' })
  public password: string

  @column({ columnName: 'user_name' })
  public user_name: string

  @column({ columnName: 'first_name' })
  public first_name: string

  @column({ columnName: 'last_name' })
  public last_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Image)
  public images: HasMany<typeof Image>
}
