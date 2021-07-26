const { PrismaClient, Prisma } = require('@prisma/client')

const newBook = await prisma.books.create({
    data: {
          name: '$.title',
          url: '$.url',
          lang: '$.lang',
          chap: '$.chap',
          status: '$.status',
    },
})
