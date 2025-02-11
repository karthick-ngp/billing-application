// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { FoodMenuRepo } from 'App/Repository'
import { Get, Create, Update, Delete } from 'App/Validators/FoodMenu/index'

export default class FoodMenusController {
    public async create({ request }) {
        const params = await request.validate(Create)
        return FoodMenuRepo.create(params)
    }

    public async update({ request }) {
        const params = await request.validate(Update)
        return FoodMenuRepo.update(params)
    }

    public async delete({ request }) {
        const { id, isArchive } = await request.validate(Delete)
        return FoodMenuRepo.delete({ id, isArchive })
    }

    public async get({ request }) {
        const { productName, isArchive } = await request.validate(Get)
        return FoodMenuRepo.getMultiple({ productName, isArchive })
    }
}
