import mongoose from 'mongoose';

import 'dotenv/config';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.connection = mongoose
      .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => console.log(' ===> MONGODB conectado com sucesso <===  :)'))
      .catch(() =>
        console.log('===> ERRO ao conectar ao banco de dados <=== :( ')
      );
  }
}

export default new Database();
