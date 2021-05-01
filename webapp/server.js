var express = require('express')

app.get('*' , (req, res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
    });


var app = express()
var port =  process.env.PORT || 3000
app.use(express.static('build'))
app.listen(port)