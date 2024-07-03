import {getListUserSchema} from "../type";
import {getListUser} from "../app";
import Fastify, { FastifyInstance } from 'fastify'

const getUserOpts = {
    schema: getListUserSchema,
    handler: getListUser,
};

module.exports = function(app: FastifyInstance, opts:any ,done:any): void {
    app.get('/api/user', getUserOpts)
    done();
}
