const mongoose = require('mongoose');

/* const connectDB = async()=>{
    try{
        //mongodb connection string
        const con = await mongoose.connect("mongodb://localhost:27017/api/users",{
        useNewUriParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
        })
        console.log(`MongoDB connected:${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);

    }
} */


mongoose.connect('mongodb://localhost:27017/api/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connectDB
