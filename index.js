/////////////// STARTUP FLAGS ///////////////
const flags = [
    // Edit flags here when being unable to use the flags in the command prompt.
    //PTERODACTYL PANEL
    //add startup flags here (e.g. "--no-compile") when running via the panel
]
/////////////// STARTUP FLAGS ///////////////

/*
 ██████╗ ██████╗ ███████╗███╗   ██╗    ████████╗██╗ ██████╗██╗  ██╗███████╗████████╗  
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ╚══██╔══╝██║██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝  
██║   ██║██████╔╝█████╗  ██╔██╗ ██║       ██║   ██║██║     █████╔╝ █████╗     ██║     
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║       ██║   ██║██║     ██╔═██╗ ██╔══╝     ██║     
╚██████╔╝██║     ███████╗██║ ╚████║       ██║   ██║╚██████╗██║  ██╗███████╗   ██║     
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝       ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝     
 v4.2.2 - Made by DJj123dj & Contributors

 Discord: https://discord.dj-dj.be
 Docs: https://otdocs.dj-dj.be
 Support Us: https://github.com/sponsors/DJj123dj/
 
 */

///////////////////////////////////////////
////////// COMPILATION + STARTUP //////////
///////////////////////////////////////////

import http from "http"
import { frameworkStartup } from "@open-discord-bots/framework"

// HTTP server for Render / Keep-alive
const PORT = process.env.PORT || 3000
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Open Ticket Bot is running!")
}).listen(PORT, () => {
    console.log(`[Render KeepAlive] Server listening on port ${PORT}`)
})

frameworkStartup(flags,"openticket",async () => {
    await import("./dist/src/index.js")
})