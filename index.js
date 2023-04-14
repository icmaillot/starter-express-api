const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const taskRouter = require("./routers/task.controller")

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Je test le déploiement de un server express')
})


app.use("/tasks", taskRouter)


connectDB().then(() => {
    app.listen(process.env.PORT || 3000)
})
