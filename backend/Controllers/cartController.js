const Cart = require('./models/Cart');

exports.addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // જો કાર્ટ પહેલેથી હોય, તો ચેક કરો કે પ્રોડક્ટ અંદર છે કે નહીં
            let itemIndex = cart.products.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                // જો પ્રોડક્ટ હોય તો તેની સંખ્યા (quantity) વધારો
                cart.products[itemIndex].quantity += quantity;
            } else {
                // નવી પ્રોડક્ટ ઉમેરો
                cart.products.push({ productId, quantity });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // જો કાર્ટ ન હોય તો નવું કાર્ટ બનાવો
            const newCart = await Cart.create({
                userId,
                products: [{ productId, quantity }]
            });
            return res.status(201).send(newCart);
        }
    } catch (err) {
        res.status(500).send("કાર્ટમાં ઉમેરવામાં ભૂલ આવી!");
    }
};