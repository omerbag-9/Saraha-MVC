import { Message } from "../../../db/models/message.model.js"

export const getUser = (req, res, next) => {
    return res.render('user.ejs', { userId: req.params.id })
}

export const send = async (req, res, next) => {
    // save message
    req.body.user= req.params.id
    await Message.create(req.body)
    res.redirect('/user/' + req.params.id)
}