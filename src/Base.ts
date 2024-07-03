import { PrismaClient } from "@prisma/client";

export class BaseRepository<T> {
    protected prismaClient: PrismaClient;
    private model: keyof PrismaClient;

    constructor(model: keyof PrismaClient) {
        this.prismaClient = new PrismaClient();
        this.model = model;
    }

    private getModel() {
        // Type casting to access model methods dynamically
        return this.prismaClient[this.model] as any;
    }

    async getAll(): Promise<T[]> {
        try {
            return await this.getModel().findMany();
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async getById(id: string): Promise<T | null> {
        try {
            return await this.getModel().findUnique({ where: { id } });
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async create(data: Omit<T, 'id'>): Promise<boolean> {
        try {
            await this.getModel().create({ data });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async update(id: string, data: Partial<T>): Promise<boolean> {
        try {
            await this.getModel().update({ where: { id }, data });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.getModel().delete({ where: { id } });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
