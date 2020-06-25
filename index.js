var PORT = 3000;
var http = require('http');

//create a server object:
var server = http.createServer( handleRequest );

// Start tthe server listening for connections
server.listen( PORT, listenCallback );


function listenCallback()
{
    console.log("server start at port 3000"); //the server object listens on port 3000
}


function handleRequest( req, res )
{
    var url = req.url;

    if ( url ==='/map' )
    {
        res.writeHead( 200, {'Content-Type': 'text/html'} ); // http header for the 200

        var map = generateMap();

        res.write( map );
        res.end();
    }
    else
    {
        res.writeHead( 404, {'Content-Type': 'text/html'} ); // http header for the 404 
        res.write('<h1>Endpoint not found<h1>\n'); //write a response
        res.end(); //end the response
    }
}


function generateMap()  // pass parameters from the query string or POST body here
{
    // Generate the core map here
    var map = "OOOO\nOXOO\nOXOO\nOXXO\n";

    // Wrap it in the HTML <pre> tag
    var body = "<pre>\n" + map + "</pre>\n";

    return body;
}
