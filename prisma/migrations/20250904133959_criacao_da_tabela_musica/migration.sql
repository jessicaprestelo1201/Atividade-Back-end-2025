-- CreateTable
CREATE TABLE "musics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "story" TEXT,
    "playbackUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
