let http = require("http");

let server = http.createServer(
  function( req, res )
  {
    
    let string = "You Are Not Logged In";
    
    if ( req.url === "/Dashboard" ) 
    {
      string = "Welcome To Your Dashboard!";
    } 

    res.writeHead( 200, { "Content-Type": "text/plain" } );

    res.end( string );
  }
);

server.listen(8080, "0.0.0.0");

console.log("Node Server Is Running");