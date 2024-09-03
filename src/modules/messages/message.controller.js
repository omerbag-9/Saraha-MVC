import Qrcode from 'qrcode'
import { Message } from '../../../db/models/message.model.js'
export const getMessage = async (req,res,next)=>{
    if(req.session.isLoggedIn){
        let url = `http://localhost:3000/user/${req.session.userId}`
        let qrCode = await Qrcode.toDataURL(url) 
        const messages = await Message.find({user:req.session.userId})       
        return res.render('message.ejs', { url, qrCode,messages })
    }
    return res.redirect('/auth/login')
}   