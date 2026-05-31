import http from "http"

const server = http.createServer((req, res) => {
    console.log(req)
    if (req.url === "/course") {
        res.end("Courses are here...")
    }
    res.end("Server is running")

})

server.listen(8000, () => {
    console.log(`
=======================================\n
            Server is running\n
=======================================\n
        `);
})