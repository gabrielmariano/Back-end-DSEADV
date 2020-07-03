import { extname, resolve } from 'path';
import multer from 'multer';
import crypto from 'crypto';

module.exports = {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'public', 'tmp'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
