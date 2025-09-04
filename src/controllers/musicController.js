import MusicModel from "../models/musicModel.js";

class MusicController {
  // GET /musics
  async getAllMusics(req, res) {
    try {
      const musics = await MusicModel.findAll();
      res.json(musics);
    } catch (error) {
      console.error("Erro ao buscar as músicas:", error);
      res.status(500).json({ error: "Erro ao buscar as músicas" });
    }
  }

  // GET /musics/:id
  async getMusicById(req, res) {
    try {
      const { id } = req.params;

      const music = await MusicModel.findById(id);

      if (!music) {
        return res.status(404).json({ error: "Música não encontrada!" });
      }

      res.json(music);
    } catch (error) {
      console.error("Erro ao buscar música:", error);
      res.status(500).json({ error: "Erro ao buscar música!" });
    }
  }

  // POST /musics
  async createMusic(req, res) {
    try {
      const { title, duration, releaseYear, story, playbackUrl } = req.body;

      // Validação básica
      if (!title || !duration || !releaseYear || !playbackUrl) {
        return res.status(400).json({
          error: "Os campos título, duração, ano de lançamento e link de reprodução são obrigatórios",
        });
      }

      const newMusic = await MusicModel.create(
        title,
        duration,
        releaseYear,
        story,
        playbackUrl
      );

      if (!newMusic) {
        return res.status(400).json({ error: "Erro ao criar música" });
      }

      res.status(201).json({
        message: "Música criada com sucesso",
        newMusic,
      });
    } catch (error) {
      console.error("Erro ao criar música:", error);
      res.status(500).json({ error: "Erro ao criar música" });
    }
  }

  // PUT /musics/:id
  async updateMusic(req, res) {
    try {
      const { id } = req.params;
      const { title, duration, releaseYear, story, playbackUrl } = req.body;

      const updatedMusic = await MusicModel.update(
        id,
        title,
        duration,
        releaseYear,
        story,
        playbackUrl
      );

      if (!updatedMusic) {
        return res.status(404).json({ error: "Música não encontrada" });
      }

      res.json(updatedMusic);
    } catch (error) {
      console.error("Erro ao atualizar música:", error);
      res.status(500).json({ error: "Erro ao atualizar música!" });
    }
  }

  // DELETE /musics/:id
  async deleteMusic(req, res) {
    try {
      const { id } = req.params;

      const result = await MusicModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Música não encontrada!" });
      }

      res.status(200).json({
        message: "Música removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover música:", error);
      res.status(500).json({ error: "Erro ao remover música!" });
    }
  }
}

export default new MusicController();