const fs = require("fs");

(async () => {
  try {
    const result = await fs.promises.readFile("example.txt", "utf-8");
    console.log(result); // 读取成功 Hello World!
  } catch (error) {
    console.error("读取失败", error);
  }
})();
