import File from '../schema/File';

class FileController {
  async store(req, res) {
    try {
      const { path, originalname, filename, size } = req.file;

      const [, extensao] = originalname.split('.');

      const { _doc } = await File.create({
        nome_original: originalname,
        nome_criptografado: filename,
        caminho: path,
        extensao,
        tamanho: size,
      });

      return res.json(_doc);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new FileController();
