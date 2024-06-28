const fs = require("fs");

try {
  fs.appendFileSync("example.txt", "HELLO WORLD!");
} catch (error) {
  console.error("追加失败", error);
}
