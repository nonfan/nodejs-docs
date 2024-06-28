const fs = require("fs");

(async () => {
  try {
    await fs.promises.writeFile("example.txt", "HELLO WORLD!");
  } catch (error) {
    console.error("写入失败", error);
  }
})();
