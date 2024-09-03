import { User } from "../../../db/models/user.model.js"

export const login = (req, res, next) => {
    res.render('login.ejs', {error : req.query.error})
}
export const register = (req, res, next) => {
    res.render('register.ejs' , {error : req.query.error})
}
export const handleLogin = async (req, res, next) => {
    // logic of code
    const {email} = req.body
    const userExist = await User.findOne({ email })
    if(!userExist || userExist.password !== req.body.password){
        return res.redirect('/auth/login?error=invalid credentials')
    }
    // res.cookie('userId',userExist._id.toString())
    req.session.isLoggedIn = true
    req.session.email = userExist.email
    req.session.userId = userExist._id.toString()
    // redirect for profile
    res.redirect('/message')
}

export const handleRegister = async (req, res, next) => {
    // check existance
    const { name, email, password } = req.body
    const userExist = await User.findOne({ email })
    if (userExist) {
        return res.redirect('/auth/register?error=user already exist')
    }
    const createdUser = await User.create({ name, email, password })
    res.redirect("login")
}