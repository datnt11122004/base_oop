    import {PrismaClient} from "@prisma/client";
    import dotenv from 'dotenv'
    import {UserRepositoryInterface} from "./RepositoryInterface/UserRepositoryInterface";

    const prisma = new PrismaClient();
    export class UserRepository implements UserRepositoryInterface {

        private userRepository;
        private prismaClient;

        constructor() {
            this.prismaClient = new PrismaClient();
            this.userRepository = "user";
        }

        getAll(): Array<any> | null {
            return this.prismaClient[this.userRepository].findMany();
        }

        getById(id: string): Object | null {
            return this.userRepository.findOne({where: {id}});
        }

        create(user: Array<any>): boolean {
            try {
                this.userRepository.create({data: user});
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }

        update(id: string, user: Array<any>): boolean {
            try {
                this.userRepository.update({where: {id}, data: user});
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }

        delete(id: string): boolean {
            try {
                this.userRepository.delete({where: {id}});
                return true;
            } catch (error) {
                console.error(error);
                return false;
            }
        }
    }