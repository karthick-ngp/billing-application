import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Env from '@ioc:Adonis/Core/Env'


export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    // Get email and password from the request
    const { email, password } = request.only(['email', 'password'])

    // Find the user by email
    const user = await User.findBy('email', email)

    if (!user) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    // Compare the provided password with the stored hashed password
    const passwordVerified = await Hash.verify(user.password, password)

    if (!passwordVerified) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    console.log("email",email);
    console.log("pass",password);
    
    
    // Log the user in if password is correct
    await auth.login(user)

    return response.ok({ message: 'Login successful', app_key:Env.get('APP_KEY') })
  }
}
