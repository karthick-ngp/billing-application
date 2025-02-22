// import { Exception } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'

class UserLoginRepo {
    public async create(data) {
        return User.create(data).then((data) => data).catch((error) => console.log({ error }))
    }

    public async getMultiple({ email, password }) {
        return User.query()
            .if(email, (e) => e.whereILike('email', email))
            .andWhere('password', password)
            .then((d) => d.map((d) => d.toObject()))
            .catch((err) => console.log({ err }))
    }
}

export default new UserLoginRepo()