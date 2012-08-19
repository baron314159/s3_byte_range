
var knox = require('knox'),
    fs = require('fs');

var client = knox.createClient({
    key: '',
    secret: '',
    bucket: '',
});

var fp = fs.openSync('./download.bin', 'w');

var headers = {
    'Range': 'bytes=1000000-1000000',
};

client.get('/blob.bin', headers).on('response', function(res) {
    res.on('data', function(chunk) {
        fs.writeSync(fp, chunk, 0, chunk.length);
    });
}).end();
