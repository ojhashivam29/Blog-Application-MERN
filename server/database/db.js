import mongoose from 'mongoose';

 const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-sa1060r-shard-00-00.whzek1k.mongodb.net:27017,ac-sa1060r-shard-00-01.whzek1k.mongodb.net:27017,ac-sa1060r-shard-00-02.whzek1k.mongodb.net:27017/?ssl=true&replicaSet=atlas-e17t7q-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
}

export default Connection;