import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
import user from './router/user'
import errorHandler from './middleware/errorHandler'
import notFound from './middleware/notFound'



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/auth' , user)
app.use(errorHandler)
app.use(notFound)

const port = Number(process.env.PORT) || 5000

const start = async()=>{
    try{
        
        app.listen(port , ()=>{console.log('server lestening')})
    }catch(error){
        console.log(error)
    }
}

start()