var fs = require('fs');
var http = require('http');

fs.readFile('../public/ImagesForTesting/dog-smile.jpg', function (err,data) {
    if (err) {
        return console.log(err);
    }
     // send the image to the server on uploads.js as formData

    var options = {
        host: 'localhost',
        port: 80,
        path: '/upload',
        method: 'POST',        
        headers: {                                  
            'Content-Type': 'multipart/form-data; boundary=XXX',
            'Content-Length': data.length

        }
    };

    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log("body: " + chunk);
        });
    });


    req.write(data);    
    req.end();
});


    
