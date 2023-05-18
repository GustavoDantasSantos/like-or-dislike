const { likeOrDislike } = require("./index");

describe("Like and Dislike Kata", () => {
  test("should be return like", () => {
    let result = likeOrDislike(["Dislike"]);
    expect(result).toBe("Dislike");
  });

  test("should be return dislike", () => {
    let result = likeOrDislike(["Like", "Like"]);
    expect(result).toBe("Nothing");
  });

  test("should be return dislike", () => {
    let result = likeOrDislike(["Dislike", "Like"]);
    expect(result).toBe("Like");
  });

  test("should be return dislike", () => {
    let result = likeOrDislike(["Like", "Dislike", "Dislike"]);
    expect(result).toBe("Nothing");
  });
});
