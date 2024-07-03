import {Type, Static} from '@sinclair/typebox'

const user = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    email: Type.String(),
    user_catalogue_id: Type.Number(),
})


const catalogue = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    user: Type.Array(user)
})

const getListUserSchema = {
    response: {
        200: Type.Array(user),
        404: Type.Object({
            message: Type.String()
        })
    }
}

export {user, catalogue, getListUserSchema}
