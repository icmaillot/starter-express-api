const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Je test le déploiement de un server express')
})
app.listen(process.env.PORT || 3000)