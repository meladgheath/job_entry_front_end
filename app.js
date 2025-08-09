

import express from "express" ;




const app = new express();
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

app.listen(7777, function () {
    console.log("Listening  on port 7777");
});
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(express.json());

app.use(express.static('build'));

app.get('*', (req,res)=> {
    res.sendFile('index.html',{root: 'build'}) ;
})
