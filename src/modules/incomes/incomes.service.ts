import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class IncomesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.IncomeCreateInput) {
    return this.prisma.income.create({ data });
  }
}
