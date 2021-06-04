const Cart = require('../../models/cart')
exports.getCart = (req, res, next) => {
   console.log(req.body._id)
   Cart.find({ user: req.body._id })
      .exec((err, cart) => {
         if (err) {
            return res.json({ msg: 'error' })
         }
         if (cart) {
            return res.json({ data: cart })
         }
      })
}
exports.addToCart = async (req, res, next) => {
   try {
      const cart = new Cart({
         item: req.body.item,
         user: req.body._id
      })
      const crt = await cart.save()
      return res.json({
         msg: 'success',
         cart: cart
      })
   }
   catch (e) {
      console.log(e);
      return res.json({ msg: 'error' })
   }
}