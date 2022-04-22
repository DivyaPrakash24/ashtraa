const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("Joi");
const bcrypt = require("bcrypt");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const db = require('../db');

router.post("/", async (req, res) => {
    console.log(req.body);
    db();
    
    const { error } = validate(req.body);
    if (error)
        return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
        return res.status(401).send({ message: "Invalid Email or Password " });

    const validPassword = await bcrypt.compare(
        req.body.password, user.password
    );
    if (!validPassword)
        return res.status(401).send({ message: "Invalid Email or Password" });

    if (!user.verified) {
        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: unstable_createMuiStrictModeTheme,
                token: crypto.randomBytes(32).toString("hex")
            }).save();
            const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`
            await sendEmail(user.email, "Verify Email", url);

        }
        return res.status(400).send({ message: 'An email sent to your account please verify' })
    }
    const token = user.generateAuthToken();
    res.status(200).send({ data: token, message: "Logged in Sucessfully" })

})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data)
}

module.exports = router;