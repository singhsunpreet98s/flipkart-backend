const jwt = require('jsonwebtoken');
exports.adminAuthentication = (req, res, next) => {
   try {

      const token = req.headers.authorization.split(" ")[1]
      jwt.verify(token, process.env.JWTKEY, (err, decoded) => {
         if (err) {
            return res.json({ msg: 'token expired' })
         }
         if (decoded) {
            if (decoded.admin) {
               req.body._id = decoded._id
               next()
            }
            else {
               return res.json({ msg: "error", stats: "only admin can add" })
            }

         }
      })
   }
   catch (err) {
      console.log(err)
      return res.json({ msg: 'error' })
   }
}
exports.authenticate = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(" ")[1]
      jwt.verify(token, process.env.JWTKEY, (err, decoded) => {
         if (err) {
            return res.json({ msg: 'token expired' })
         }
         if (decoded) {
            req.body._id = decoded._id
            next()
         }
      })
   }
   catch (err) {
      return res.json({ msg: 'error' })
   }
}