const express = require('express');
const fs = require('fs');


const app = express();



app.use(express.static('www'))


app.get('/', function (req, res) {
	fs.readFile("www/index.html", function (err, data) {
		/*res.writeHead(200, {
			'Content-Type': 'text/html'
		});*/
		res.write(data);
		res.end();
	});
});
app.get('/trial', function (req, res) {
	console.log("request");
	console.log(req.query);
	//if (req.query) {
	res.send("heelo");
	//}
});


app.listen(3000, function () {
	console.log('App listening on port 3000!');
});
