import { Controller, HttpException, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DebtsService } from './debts.service';

@Controller('debts')
export class DebtsController {
  constructor(private readonly debtsService: DebtsService) {}

  @Post('create')
  async createDebt(debtData: Prisma.DebtCreateInput) {
    try {
      return await this.debtsService.create(debtData);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(error.message, 400);
      }

      if (error instanceof Prisma.PrismaClientValidationError) {
        throw new HttpException(
          'Request did not pass database client validation. What may have occurred: - An required field is missing. - Wrong type on a required field.',
          400,
        );
      }

      throw new HttpException(error.message, 500);
    }
  }
}
