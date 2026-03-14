const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Nava Delivery Boy ne add karva mate (e.g., Postman thi)
const registerDeliveryBoy = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // 1. Check karo ke email pehla thi chhe?
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // 2. Password ne hash (encrypt) karo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Database ma save karo
    user = new User({
      name,
      email,
      password: hashedPassword,
      role: 'delivery_boy', // Fix role
      phone
    });

    await user.save();
    res.status(201).json({ success: true, message: "Delivery Boy Registered!" });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};