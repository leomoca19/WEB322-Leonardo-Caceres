const express = require('express')
const clientSessions = require('client-sessions')
const cookies = express()

cookies.use(
    clientSessions({
        cookieName: "session",
        secret: "SECRETCODE",
        duration: 2 * 60 * 100000,
        activeDuration: 1000 * 60,
    })
)


const path = req.path
if (path === "/" || path.includes("/api")) 
  next()

else {
  if (req?.session?.auth?.isAuthenticated) 
    next()
  else 
    res.redirect("/");
}


module.exports = cookies