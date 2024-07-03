import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // const userCatalogue = await prisma.userCatalogue.createMany({
    //     data: [
    //         {
    //             name: 'admin',
    //         },
    //         {
    //             name: 'user',
    //         },
    //     ],
    // })
    const user = await prisma.user.createMany({
        data: [
            {
                name: 'giap',
                email: 'test@example.com',
                user_catalogue_id : 2, // Replace with the ID of the desired user catalogue
            },
            {
                name: 'dat',
                email: 'dat@example.com',
                user_catalogue_id : 1, // Replace with the ID of the desired user catalogue
            }
        ]
    })
    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })