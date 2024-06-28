const fs = require("fs");

fs.unlink("example.txt", (err) => {
  if (err) {
    return console.error("删除文件失败", err);
  }

  console.log("删除成功");
});
