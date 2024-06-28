const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    return console.error("读取失败", err);
  }

  console.log("读取成功", data); // 读取成功 Hello World!
});
