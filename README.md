# Awesome Links — Part 4

This branch contains the final code for [this article](https://www.prisma.io/blog/fullstack-nextjs-graphql-prisma-4-1k1kc83x3v), and will be the starting point for the 4th part of the course


npx prisma migrate dev --name init
npx prisma db seed
npx prisma studio

--- To use proxy
npx prisma generate --data-proxy


pg_dump -f my-dump.sql postgresql://postgres:postgres@localhost:5432/mydb
psql postgresql://postgres:postgres@database-1.cb0hu92fjd9o.us-west-1.rds.amazonaws.com:5432/myDatabase < my-dump.sql