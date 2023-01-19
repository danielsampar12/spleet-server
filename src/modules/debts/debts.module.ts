import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/database/prisma.module';

import { DebtsService } from './debts.service';
import { DebtsController } from './debts.controller';

@Module({
  imports: [PrismaModule],
  providers: [DebtsService],
  controllers: [DebtsController],
})
export class DebtsModule {}
