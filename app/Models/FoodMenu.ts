import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class FoodMenu extends BaseModel {
  public static table = 'product_details'

  @column({ isPrimary: true })
  public id: number

  @column()
  public productName: string

  @column()
  public price: number

  @column()
  public quantity: number

  @column()
  public isArchive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
