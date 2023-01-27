const crypto = require("node:crypto");
const password = "hunter2";

console.log(password);

const hashed = crypto.createHash("sha256").update(password).digest("hex");

console.log(password);
