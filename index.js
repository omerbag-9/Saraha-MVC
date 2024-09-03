import express from 'express'
import session from 'express-session'
import mongoSession from 'connect-mongodb-session'
import { connectDB } from './db/connection.js'
import authRouter from './src/modules/auth/auth.router.js'
import messageRouter from './src/modules/messages/message.router.js'
import userRouter from './src/modules/user/user.router.js'

const MongoDBStore = mongoSession(session)
const app = express()
const port = process.env.PORT || 3000
connectDB()
const store = MongoDBStore({
    uri: 'mongodb+srv://omerbagprog:Lx6X9u7ZyeJtB87a@cluster0.89df3.mongodb.net/sarahaMVC',
    collection : 'mySessions'
})
app.use(cors())
app.use(session({
    secret:"secret",
    resave: false,
    saveUninitialized: true,
    store
}))
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'))
app.get('/', (req, res, next) => {
    res.render('home.ejs')
})
app.use('/auth', authRouter)
app.use('/message', messageRouter)
app.use('/user', userRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))