import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrderDetail extends BaseModel {
  public static table = 'order_details'

  @column({ isPrimary: true })
  public orderId: number

  @column()
  public orderSummary: number[]

  @column()
  public total: number

  @column()
  public type: string

  @column()
  public isArchive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
