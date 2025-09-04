import prisma from "../../prisma/prisma.js";

class MusicModel {
  // Obter todas as músicas
  async findAll() {
    const musicas = await prisma.music.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return musicas;
  }

  // Obter uma música pelo ID
  async findById(id) {
    const musica = await prisma.music.findUnique({
      where: {
        id: Number(id),
      },
    });

    return musica;
  }

  // Criar uma nova música
  async create(title, duration, releaseYear, story, playbackUrl) {
    const novaMusica = await prisma.music.create({
      data: {
        title,
        duration,
        releaseYear,
        story,
        playbackUrl,
      },
    });

    return novaMusica;
  }

  // Atualizar uma música
  async update(id, title, duration, releaseYear, story, playbackUrl) {
    const musica = await this.findById(id);

    if (!musica) {
      return null;
    }

    // Atualize os campos somente se forem definidos
    const dataToUpdate = {};
    if (title !== undefined) dataToUpdate.title = title;
    if (duration !== undefined) dataToUpdate.duration = duration;
    if (releaseYear !== undefined) dataToUpdate.releaseYear = releaseYear;
    if (story !== undefined) dataToUpdate.story = story;
    if (playbackUrl !== undefined) dataToUpdate.playbackUrl = playbackUrl;

    const musicaAtualizada = await prisma.music.update({
      where: {
        id: Number(id),
      },
      data: dataToUpdate,
    });

    return musicaAtualizada;
  }

  // Remover uma música
  async delete(id) {
    const musica = await this.findById(id);

    if (!musica) {
      return null;
    }

    await prisma.music.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new MusicModel();