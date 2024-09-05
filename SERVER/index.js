const http = require('http')
// const fs = require('fs')


http.createServer((req, res) => {

    // res.write('<h1>First Project</h2>')
    // res.end()

    // fs.appendFile('first.html',
    //     '<p>Appdend File</p>', function (error) {
    //         console.log(error)
    //     })

    // fs.readFile('first.html', function
    //     (error, data) {
    //     res.write('<p>mohit</p>')
    //     res.end
    // })

        res.write('<h2>First Server</h2>')
        res.end

}).listen(8000);