import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/database/prisma.module';

import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';

@Module({
  imports: [PrismaModule],
  providers: [IncomesService],
  controllers: [IncomesController],
})
export class IncomesModule {}
