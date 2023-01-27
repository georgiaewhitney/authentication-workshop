const bcrypt = require("bcryptjs");

const password = "hunter2";

console.log(password);

bcrypt.hash(password, 12).then((hash) => console.log(hash));

console.log(password);
// node bcrypt.js
// hunter2
// hunter2
// $2a$12$Vxr1mAN1DagxrFuoDsfee.oJ5OIRJD6lEiyatP350o56pT6DhhAMW

// 12 === cost

bcrypt.hash(password, 12).then((hash) => {
  bcrypt.compare("hunter2", hash).then((result) => console.log(result));
  bcrypt.compare("incorrect", hash).then((result) => console.log(result));
});

// hunter2
// hunter2
// $2a$12$Lgs5kwgjJCrFisp4o8OGeu0bhIx9LuBp9yM62rScGIvo0mAsMfzem
// true
// false

// npm install bcryptjs
