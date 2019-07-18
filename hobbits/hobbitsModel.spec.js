const db = require("../data/dbConfig");
const Hobbits = require("./hobbitsModel");

describe("the hobbits model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert hobbits into the db", async () => {
      // using our model method - check model
      await Hobbits.insert({ name: "Sam" });
      await Hobbits.insert({ name: "Frodo" });

      //confirm with knex - check database
      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(2);
      expect(hobbits[0].name).toBe("Sam");
    });

    it("should return the new hobbit on insert", async () => {
      const hobbit = await Hobbits.insert({ name: "Sam" });

      expect(hobbit).toEqual({ id: 1, name: "Sam" });
    });
  });
});
