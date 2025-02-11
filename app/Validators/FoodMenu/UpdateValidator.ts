import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public get data() {
    return {
      ...this.ctx.request.all(),
      id: this.ctx.request.param('id'),
    }
  }

  public schema = schema.create({
    id: schema.number([rules.unsigned()]),
    productName: schema.string.optional([rules.trim()]),
    price: schema.number.optional([rules.unsigned()])
  })

  public messages: CustomMessages = {}
}
