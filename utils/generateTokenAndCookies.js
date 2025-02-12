const jwt = require("jsonwebtoken");


const generateTokenAndCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
    
    res.cookie("token", token, {
        httpOnly: true, //XSS
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //CSRF
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    })  
    return token
}

module.exports = generateTokenAndCookie;