
import User from '../models/User.js';
import bcrypt from "bcryptjs"
// import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
  const { name, email,phone, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

   
    const userdata = await User.create({name, email, phone, password})

    // const payload = {
    //   userdata: {
    //     id: user.id,
    //   },
    // };

    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   { expiresIn: '1h' },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );
    res.status(200).json(userdata)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({msg:"invalid credentials"});
    }

    // const payload = {
    //   user: {
    //     id: user.id,
    //   },
    // };

    // jwt.sign(
    //   payload,
    //   process.env.JWT_SECRET,
    //   { expiresIn: '1h' },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );
    res.status(200).json(user)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export {loginUser, registerUser}
