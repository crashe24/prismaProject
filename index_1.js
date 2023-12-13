//  "type":"module", debe estar esto para que me sirva el import en el paquete
import { PrismaClient } from '@prisma/client'

// node index.js
const prismaInstance = new PrismaClient()


async function main() {
  /* const newUser =  await prismaInstance.user.create({
        data: {
            name: 'Gael',
            email: 'gael@hotmail.com',
            lastname: 'Leon '

        }
    })
    console.log('mi usuario', newUser)
    */
   //const users = await prismaInstance.user.findMany()
   //console.table(users)
   
   //where
   /*const user = await prismaInstance.user.findFirst({
       where: {
           id:2, email: 'crashe25@hotmail.com'
       }
   })
   console.table(user)*/
   /*
   const user = await prismaInstance.user.findFirst({
       where:{
           OR: [
               {id:1},
               {email:'crashe24@hotmail.com'}
           ]
       }
   })*/
   //console.log(user)
   // delete 
   /*const user = await prismaInstance.user.delete({
       where: {
           id:1
       }
   })*/
   // delete con try
   /*try {
    const user = await prismaInstance.user.delete({
        where: {
            id:100
        }
    }) 
    console.table(user)
   } catch (error) {
    console.log(error.meta.causa)
    console.log(error.code)
   }
   
   const resulta = await prisma.user.deleteMany ({
       where: {
           name:'martha'
       },

   })
   console.log(resulta)
  
   // update 
  const usert =  await prismaInstance.user.update({
       where: {id:2},
       data: {
           name:'Alejandra',
           lastname:'Cunalata'
       }
   })

   console.table(usert)
    */

   // upsert 
  const usuario =  await prismaInstance.user.upsert({
       where:  {email:'jon@gmail.com'},
       create: {name:'jhon', lastname:'leon', email: 'jon@gmail.com'},
       update: {name:'juan', lastname:'cunalata'}
   })
   console.log(usuario)
}

main()