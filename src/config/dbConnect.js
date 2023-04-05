import mongoose from 'mongoose';

// mongoose.connect(process.env.STRING_CONEXAO_DB);


mongoose.connect("mongodb+srv://almeida:123@cluster0.ijmwhet.mongodb.net/gama-node")

const db = mongoose.connection;

export default db;