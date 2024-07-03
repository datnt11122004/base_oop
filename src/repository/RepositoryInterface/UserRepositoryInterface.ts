import {user} from '../../type'
export interface UserRepositoryInterface{
    getAll(): Array<user> |  null

    getById(id: string): Object | null

    create(user: Array<user>): boolean

    update(id: string, user: Array<user>): boolean

    delete(id: string): boolean

}