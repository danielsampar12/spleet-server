/*
  Warnings:

  - You are about to drop the column `month_id` on the `debts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `debts` table. All the data in the column will be lost.
  - You are about to drop the column `month_id` on the `incomes` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `incomes` table. All the data in the column will be lost.
  - Added the required column `monthId` to the `debts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthId` to the `incomes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `months` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "debts" DROP CONSTRAINT "debts_month_id_fkey";

-- DropForeignKey
ALTER TABLE "debts" DROP CONSTRAINT "debts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "incomes" DROP CONSTRAINT "incomes_month_id_fkey";

-- DropForeignKey
ALTER TABLE "incomes" DROP CONSTRAINT "incomes_user_id_fkey";

-- AlterTable
ALTER TABLE "debts" DROP COLUMN "month_id",
DROP COLUMN "user_id",
ADD COLUMN     "monthId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "incomes" DROP COLUMN "month_id",
DROP COLUMN "user_id",
ADD COLUMN     "monthId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "months" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "months" ADD CONSTRAINT "months_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "months"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "debts" ADD CONSTRAINT "debts_monthId_fkey" FOREIGN KEY ("monthId") REFERENCES "months"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
