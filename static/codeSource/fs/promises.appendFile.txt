const fs = require("fs");

(async () => {
  try {
    await fs.promises.appendFile("example.txt", "HELLO WORLD!");
  } catch (error) {
    console.error("追加失败", error);
  }
})();
