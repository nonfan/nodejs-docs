const fs = require("fs");

try {
  fs.writeFileSync("example.txt", "HELLO WORLD!");
} catch (error) {
  console.error("写入失败", error);
}
