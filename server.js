const {joinImages} = require('join-images');
const express = require('express')
const app = express()
const port =  process.env.PORT || 3000
const imgPath = __dirname + '/babyyoda.png'

app.get('/:length', (req, res) => {
    const length = req.params.length;

    let imgArr = [];

    for (let i = 0; i < length; i++) {
        imgArr.push(imgPath)
    }

    joinImages(imgArr, {
        direction: 'horizontal',
        color: { alpha: 0.0, b: 0, g: 0, r: 0 },
    }).then((img) => {
      img.toFile('out.png').then(() => {
         res.sendFile(__dirname + '/out.png')
      })

    });
})


app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
  })