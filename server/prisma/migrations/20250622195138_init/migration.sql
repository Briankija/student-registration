-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "registrationNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Update" (
    "id" SERIAL NOT NULL,
    "registerId" INTEGER NOT NULL,
    "oldUsername" TEXT NOT NULL,
    "oldEmail" TEXT NOT NULL,
    "newUsername" TEXT NOT NULL,
    "newEmail" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Update_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Register_username_key" ON "Register"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Register_registrationNo_key" ON "Register"("registrationNo");

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_registerId_fkey" FOREIGN KEY ("registerId") REFERENCES "Register"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
