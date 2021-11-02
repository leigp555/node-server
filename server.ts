import * as http from "http";
import {IncomingMessage, ServerResponse} from "http";
import * as p from "path";
import * as fs from "fs";
import {URL} from "url";

const pubPath = p.resolve(__dirname, "public")
let server = http.createServer();

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
    const {method, headers} = request
    const path = new URL(request.url, `https://${request.headers.host}`)
    const {pathname, search} = path
    const typeOfText:string=pathname.substring(1)
    console.log(typeOfText)
    fs.readFile(p.resolve(pubPath, `./${pathname}`), (error, chunk) => {
        if (error) throw error
        response.setHeader("Content-Type", "text/html;charset=utf-8")
        response.end(chunk.toString())
    });
});
server.listen(8888);