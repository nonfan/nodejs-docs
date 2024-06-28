const fs = require("fs");

fs.writeFile("example.txt", "HELLO WORLD!", (err) => {
  if (err) {
    return console.err("写入失败", err);
  }

  console.log("写入成功"); // example.txt 显示 HELLO WORLD！
});
