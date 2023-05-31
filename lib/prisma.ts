// /lib/prisma.ts
import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient;
}

console.log(process);
console.log(process.env);
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}
export default prisma
