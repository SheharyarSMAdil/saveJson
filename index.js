const express = require('express');
const path = require('path');
const parser = require('body-parser');
const fs = require('fs');
// const { writeFile } = require('fs/promises');

const port = process.env.PORT || 5000;
const app = express();
var fileData = fs.readFileSync('data.json');


var objArr = JSON.parse(fileData);
console.log(objArr);

// objArr = fs.ReadFile('data.json');
let urlencodedParser = parser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')));


app.post('/saveData', urlencodedParser, (req, res) => {


    var dataObj = { "name": req.body.name, "email": req.body.email, "designation": req.body.designation, "status": req.body.status };
    objArr.push(dataObj);
    var finalData = JSON.stringify(objArr);
    fs.writeFile('data.json', finalData, copied);
    function copied() {
        res.send("Data Saved Successfully")
    }


});


app.get('/zoom', (req, res) => {
    res.send("your are now zooming");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})