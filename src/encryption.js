const bcrypt = require("bcrypt");
const hashPassword = password => {
  bcrypt.genSalt(10, (err, salt) => {
    console.log(password, salt);
    return new Promise((resolve, reject) => {
     
      
      bcrypt
        .hash(password, salt)
        .then(res => {
          console.log(1, res);
        })
        .catch(err => reject(err));
    });
  });
};

const comparePassword = (password, hashedPassword) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(password, hashedPassword).then(data=>resolve(data)).catch(err=>reject(err))
  );
};

module.exports = { comparePassword, hashPassword };
