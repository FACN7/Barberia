const bcrypt = require("bcrypt");
const hashPassword = password => {
  bcrypt.genSalt(10, (err, salt) => {
    console.log(password, salt);
    return new Promise((resolve, reject) => {
      if (err) reject(err);
      bcrypt
        .hash(password, salt)
        .then(res => {
          console.log(1, res);
        })
        .catch(err => console.log(err));
    });
  });
};

const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) =>
    resolve(bcrypt.compare(password, hashedPassword))
  );
};

module.exports = { comparePassword, hashPassword };
