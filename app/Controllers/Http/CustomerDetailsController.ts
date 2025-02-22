// import User from 'App/Models/User'
import UserLoginRepo  from 'App/Repository/UserLogin'

import  CustomerLoginValidator from 'App/Validators/Login/CustomerLoginValidator'

export default class CustomerDetailsController {

        public async create({ request }) {
            const params = await request.validate(CustomerLoginValidator)
            return UserLoginRepo.create(params)
        }

         public async get({ request }) {
                const { email, password } = await request.validate(CustomerLoginValidator)
                console.log("email",email);
                console.log("pass",password);
                return UserLoginRepo.getMultiple({ email, password })
         }
    
}
