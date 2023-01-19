import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { hash } from 'bcrypt';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const hashedPassword = await hash(data.password, 10);

    return await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }
}
