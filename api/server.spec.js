const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  it("should set the test env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    xit("should return 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return 200 using async/await", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return api: up", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });

  describe("GET /hobbits", () => {
    it("should return hobbits", async () => {
      const res = await request(server).get("/hobbits");
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
  });
});
