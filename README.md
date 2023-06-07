# Awesome Links — Part 4

This branch contains the final code for [this article](https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-4-1k1kc83x3v), and will be the starting point for the 4th part of the course


npx prisma migrate dev --name init
npx prisma db seed
npx prisma studio

--- To use proxy
npx prisma generate --data-proxy
--- To get rid of proxy (might be a better way to do it)
npx prisma generate
npx prisma migrate dev --name init