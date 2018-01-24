const formidable = require('express-formidable');
const express = require('express');
const fs = require('fs');
const app = express();


app.use(express.static("public"));

app.use(formidable());



app.post('/create-post', function (req, res) {
   
    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
        
        const parsedFile = JSON.parse(file);

        console.log(parsedFile);

        res.send(parsedFile);



        parsedFile[Date.now()] = req.fields.blogpost
        fs.writeFile('data/posts.json', JSON.stringify(parsedFile, null, 2), function (error) {
            console.log('saved');


        });





    });


});


app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});


  // app.get("/", function (req, res) {
//     res.send("Yay Node Girls!");
//   });

// app.get("/node", function (req, res) {
//     res.send("woooo node girls");
// }) 

// app.get("/girls", function (req, res) {
//     res.send("girls");
// })

  // const data = {};
    // const ts = Date.now();
    // data[ts] = req.fields.blogpost
    // fs.writeFile('data/posts.json', JSON.stringify(data), function (error) {
    //     // do something
    //     console.log('saved');
    //     // res.send("File correctly saved")
    // });