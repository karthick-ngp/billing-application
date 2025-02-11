import { Exception } from '@adonisjs/core/build/standalone'
import FoodMenu from 'App/Models/FoodMenu'

class FoodMenuRepo {
    public async create(data) {
        return FoodMenu.create(data).then((data) => data).catch((error) => console.log({ error }))
    }

    public async update(params) {
        const data = await FoodMenu.find(params['id'])
        return data?.merge(params).save()
    }

    public async delete({ id, isArchive }) {
        const data = await FoodMenu.find(id)
        return data?.merge({ isArchive }).save() || []
    }

    public async getMultiple({ productName, isArchive }) {
        return FoodMenu.query()
            .if(productName, (e) => e.whereILike('productName', productName))
            .andWhere('isArchive', isArchive)
            .then((d) => d.map((d) => d.toObject()))
            .catch((err) => console.log({ err }))
    }
}

export default new FoodMenuRepo()