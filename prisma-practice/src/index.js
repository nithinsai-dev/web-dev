import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    // const user = await prisma.user.create({
    //     data : {
    //         name:'Nithin',
    //         email:'nithin@example.com',
    //         posts:{
    //             create : [
    //                 {title : 'First post',content : 'Learning Prisma'},
    //                 {title : 'Second Post'},
    //             ],    
    //         },
    //     },
    // });
    // console.log('Created user with posts:',user);

    // const userWithPosts = await prisma.user.findMany({
    //     include:{posts:true},
    // });
    // console.log(JSON.stringify(userWithPosts,null,2));
    
    // const a = await prisma.post.findMany({
    //     select : {title:true},
    //     where : {title:{contains:"post"}}
    // });

    // const b = await prisma.user.findUnique({
    //     where : {email : "nithin@example.com"},
    //     select : {posts : true}
    // });

    // const c = await prisma.user.update({
    //     where : {post : {title : "first post"}},
    //     data : {content : "updated content"}
    // });

    // const d = await prisma.user.findMany({
    //     orderBy : {name:'asc'},
    //     select : {name:true,email:true}  
    // });

    // const e = await prisma.post.findMany({
    //     where:{authorId:1}
    // });

    const a = await prisma.user.findMany({
        where : {posts : { some : {}}}
    });

    const b = await prisma.post.findMany({
        where : {
            OR:[{title : {contains : "post"}},{content : {contains : "prisma"}}]
        }
    });

    const post  = await prisma.post.findFirst({
        where : {title : "Second post"}
    })
    
    const c = await prisma.post.delete({
        where : {id : post.id}
    });

    const d = await prisma.user.findMany({
        include : {
            _count : {select : {posts : true}},
        }
    })

    const e = await prisma.user.upsert({
        where : {email:"priya@example.com"},
        update : {name : "Priya S"},
        create : {name :"Priya S",email : "priya@example.com"}
    })
}

main()
    .catch(console.error)
    .finally(()=>prisma.$disconnect);


//prisma.user.findUnique({
//   where: { id: 1 },
//   include: {
//     tasks: true
//   }
// });