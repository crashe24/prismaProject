//  "type":"module", debe estar esto para que me sirva el import en el paquete
// https://supabase.com/ para gestionar la bdd de postgresql
//https://supabase.com/dashboard/sign-in?returnTo=%2Fprojects
// una ves configurada la bd en supabase se debe 
// generar npx prisma migrate dev --name init
// generar npx prisma migrate dev --name user_age
// caundo se haga un cambio se debe generar 
// npx prisma migrate deploy

import { PrismaClient } from '@prisma/client'

// node index.js
const prismaInstance = new PrismaClient()


async function main() {
    /*
   const newUser =  await prismaInstance.user.create({
        data: {
            name: 'Gael',
            email: 'gael24@hotmail.com',
            lastname: 'Leon '

        }
    })
    console.log('mi usuario', newUser)
    
    const newPost = await prismaInstance.post.create({
        data: {
            title: 'Mi primer publicacion',
            content: 'Este es mi primer post',
            authorId: newUser.id
        }
    })

    console.log('mi post', newPost)

    const otherPost = await prismaInstance.post.create({
        data: {
            title: 'Mi segunda publicacion',
            content: 'Este es mi segundo post',
            author: {
                connect: {
                    id: newUser.id
                }
            }
        }
    })

    console.log('ohter post', otherPost)
    */
   
    //crear datos relacionados 
   /*
    const newUser =  await prismaInstance.user.create({
        data: {
            name: 'Martin',
            email: 'martin24@hotmail.com',
            lastname: 'Leon ',
            posts: {
                create: {
                    title: 'Otro post de prisma',
                    content: 'Para este tutorial...'
                }
            }
        }
    })
    console.log('newUser: ', newUser)

    const allPost = await prismaInstance.post.findMany()
    console.log('allPost: ', allPost)
    */

    //consultar datos relacionados
    const users = await prismaInstance.user.findMany({
        include: {
            posts:true
        }
    })

    users.forEach( userRef => {
        console.log('name: ', userRef.name)
        console.log('email: ', userRef.email)
        userRef.posts.forEach( (pos, i) => {
            console.log(`${i} --> ${pos.title} ${pos.content}`)
        })
    } )
    // prisma studio
    // con el modulo de prisma npx prisma studio
    // abre una apliacaion puerto http://localhost:5555
}

main()