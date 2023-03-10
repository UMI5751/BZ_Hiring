import 'express-async-errors'
import express from 'express'
import notFoundMiddleware from './middleware/not-found.js';
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";
import authRouter from './routes/authRoutes.js'
import jobsRouter from "./routes/jobsRoutes.js";


const app = express()

if (process.env.NODE_ENV !== 'product') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
    res.json({msg: 'welcome'})
})
app.get('/api/v1', (req, res) => {
    res.json({msg: 'Welcome'})
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()