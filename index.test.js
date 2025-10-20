const request = require("supertest");
const app = require("./index.js")

describe("Express App",() => {
    it("GET / returns Hello From the root", async() => {
        const res = await request(app).get("/")
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hello From the root")
    })

    it("GET /:id returns Hello from id", async() => {
        const res = await request(app).get("/test")
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("Hello from test")
    })

})