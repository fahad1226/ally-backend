import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import { DateTime } from 'luxon'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'image_url' })
  public image_url: string

  @column({ columnName: 'user_id' })
  public user_id: number

  @column({ columnName: 'file' })
  public file: string

  @column({ columnName: 'file_type' })
  public file_type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
