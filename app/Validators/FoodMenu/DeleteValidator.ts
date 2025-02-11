import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeleteValidator {
  constructor(protected ctx: HttpContextContract) { }

  public get data() {
    return {
      ...this.ctx.request.all(),
      id: this.ctx.request.param('id'),
      isArchive: this.ctx.request.input('isArchive', true)
    }
  }

  public schema = schema.create({
    id: schema.number([rules.unsigned()]),
    isArchive: schema.boolean()
  })

  public messages: CustomMessages = {}
}
