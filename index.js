/* --------------------------- Load .env variables -------------------------- */
require('dotenv').config()

/* ------------------------------ Import server ----------------------------- */
const server = require('./api/server.js')

//PORT is either the port provided by Heroku via process.env or 4949.
const port = process.env.PORT || 4949

/* ----------------------------- Start listining ---------------------------- */
server.listen(port, () => {
	console.log(`Serving Soup On Port ${port}`)
})
