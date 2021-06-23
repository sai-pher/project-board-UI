const express = require("express");

const app = express();

app.use(express.static(__dirname + '/dist/project-board-ui'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/project-board-ui/index.html'));
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);