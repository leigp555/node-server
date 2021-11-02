import * as http from "http";
import {IncomingMessage, request, ServerResponse} from "http";
import {Buffer} from "buffer";


let server = http.createServer();
let arr=[]
server.on("request", (request: IncomingMessage, response: ServerResponse) => {
    console.log("有人请求了")
    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    // console.log(request.constructor);
    // console.log(response.constructor);
    // console.log(response.statusCode);
    request.on("data",(chunk)=>{
        arr.push(chunk)
    })
    request.on("end",()=>{
        const postContent=Buffer.concat(arr).toString()
        console.log(postContent)

    })
    response.statusCode=400
    response.setHeader("xxx","yyy")
    response.write("fang")
    response.end("hi" + "\n");
});
server.listen(8888,()=>{
    // console.log(server.address())
});