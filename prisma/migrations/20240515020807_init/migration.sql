/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "repoLink" TEXT NOT NULL,
    "deployLink" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
