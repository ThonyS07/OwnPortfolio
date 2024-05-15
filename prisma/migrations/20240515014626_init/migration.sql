-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "repoLink" TEXT NOT NULL,
    "deployLink" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SoftSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "percent" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SoftSkills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HardSkills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "percent" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "HardSkills_pkey" PRIMARY KEY ("id")
);
