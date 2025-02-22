import { schema, rules,CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CustomerLoginValidator {
  constructor(protected ctx: HttpContextContract) {  }

  public schema = schema.create({
    email:schema.string([rules.email(), rules.unique({ table: 'user_details', column: 'email' })]),
    password:schema.string()
  })

  public messages: CustomMessages = {}
}
