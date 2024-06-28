const fs = require("fs");

try {
  fs.unlinkSync("example.txt");
  console.log("删除成功");
} catch (error) {
  // 捕获异常
  console.err("删除失败", error);
}
