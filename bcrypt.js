const bcrypt = require("bcryptjs");

const password = "hunter2";

console.log(password);

bcrypt.hash(password, 12).then((hash) => console.log(hash));

console.log(password);
