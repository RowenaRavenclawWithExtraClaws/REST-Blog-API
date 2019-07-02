# REST-Blog-API
This project is a simple restful API that implements methods for handling posts and comments in a blog-like application.<br /><br />
The project has one main file (server.js) and a folder called routes with three files (posts.js, comments.js and index.js).<br /><br />
posts.js implements methods that handles operations done on the posts in the blog, comments.js implements methods that handles operations done on the comments under the posts in the blog, index.js imports the posts and comments modules and exports it to be imported in the main file (server.js).<br /><br />
Multiple middlewares were installed to help parsing and error-handle the request body. These npm middlewares are body-parser, morgan and errorhandler. <br />
# REST-Blog-API
1- Open terminal<br />
2- Navigate to app directory<br />
3- type 'node server.js'<br />
4- test it with GUI tools (like postman) or with curl commands
