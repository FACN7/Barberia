const cookieModule = require("cookie");
const { verify } = require("jsonwebtoken");
const env = require("env2");
env("./config.env");
let SECRET = process.env.SECRET;

const checkIfLoggedIn = (req, res) => {
    return new Promise((resolve, reject) => {
        if (typeof req.headers.cookie == "undefined") {
            reject(new Error({error:true, messege:"not logged in"}));
        }
        const { jwt } = cookieModule.parse(req.headers.cookie);
        if (!jwt) reject(new Error({error:true, messege:"not logged in"}));
        resolve(verify(jwt, SECRET)); 
    });
}



// function authCheck(req, res) {
//     if (cookieModule.parse(req.headers.cookie).jwt) {
//         console.log(cookieModule.parse(req.headers.cookie).jwt);

//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         return res.end("<h1>were authorized</h1>");
//     } else {
//         res.writeHead(401, {
//             "Content-Type": "text/html"
//         });
//         return res.end("<h1>were NOT authorized</h1>");
//     }
// }


module.exports = {
    checkIfLoggedIn
    // ,authCheck
};