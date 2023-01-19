import { Module } from '@nestjs/common';
import { DebtsModule } from 'src/modules/debts/debts.module';
import { IncomesModule } from 'src/modules/incomes/incomes.module';
import { UsersModule } from 'src/modules/users/users.module';

@Module({
  imports: [UsersModule, IncomesModule, DebtsModule],
})
export class AppModule {}
