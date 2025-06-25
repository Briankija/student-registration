/*
  Warnings:

  - Made the column `newRegistrationNo` on table `Update` required. This step will fail if there are existing NULL values in that column.
  - Made the column `oldRegistrationNo` on table `Update` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Update" ALTER COLUMN "newRegistrationNo" SET NOT NULL,
ALTER COLUMN "oldRegistrationNo" SET NOT NULL;
