import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { IncomesService } from './incomes.service';

@Controller('incomes')
export class IncomesController {
  constructor(private readonly incomesService: IncomesService) {}

  @Post('create')
  async createIncome(@Body() incomeData: Prisma.IncomeCreateInput) {
    try {
      return await this.incomesService.create(incomeData);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(error.message, 400);
      }

      if (error instanceof Prisma.PrismaClientValidationError) {
        console.log(error.message);

        throw new HttpException(
          'Request did not pass database client validation. What may have occurred: - An required field is missing. - Wrong type on a required field.',
          400,
        );
      }

      throw new HttpException(error.message, 500);
    }
  }
}
