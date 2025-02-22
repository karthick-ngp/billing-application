import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class Auth {
  public async handle({request,response}: HttpContextContract, next: () => Promise<void>) {
    const appKeyFromEnv = Env.get('APP_KEY')
     
    const appKeyFromRequest = request.header('app_key')

    console.log(appKeyFromRequest)
    
    if (appKeyFromRequest !== appKeyFromEnv) {
      return response.unauthorized({ message: 'Invalid application key' })
    }
    await next()
  }
}
