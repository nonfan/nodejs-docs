const fs = require("fs");

(async () => {
  try {
    await fs.promises.unlink("example.txt");
    console.log("删除成功");
  } catch (error) {
    console.error("删除失败", error);
  }
})();
