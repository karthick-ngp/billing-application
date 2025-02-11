import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'order_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('order_id')
      table.specificType('order_summary', 'numeric[]')
      table.decimal('total')
      table.enu('type', ['ONLINE', 'OFFLINE']).defaultTo(['OFFLINE'])
      table.string('is_archive').defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
