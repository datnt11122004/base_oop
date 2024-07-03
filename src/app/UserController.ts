import {FastifyRequestTypebox, FastifyReplyTypebox} from "../utilities/fastify"
import {user, getListUserSchema} from "../type/index";
import { UserService } from "../service/index";

const user = new UserService();
export async function getListUser(req: any, reply: FastifyReplyTypebox<typeof getListUserSchema> ) {
    try {
        const users = await user.getAllUsers()
        reply.send(users)
    } catch (error) {
        reply.status(500).send({ error: error.message })
    }
}


