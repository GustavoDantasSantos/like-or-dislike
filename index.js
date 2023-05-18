function likeOrDislike(arr) {
  let result = "Nothing";
  arr.map((item) => {
    if (item == "Like") {
      result === "Like" ? (result = "Nothing") : (result = "Like");
    } else {
      result === "Dislike" ? (result = "Nothing") : (result = "Dislike");
    }
  });
  return result;
}

module.exports = {
  likeOrDislike,
};
