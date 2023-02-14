const express = require('express')
const responseHandlers = require('./utils/handleResponses')

const app = express()

app.get('/', () => {
    responseHandlers.success({
        res,
        status:200,
        message: 'Server chido',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations",
        }
    })
})

//?This one goes last
app.use('*', (req, res) => {
    responseHandlers.error({
        res,
        status:404, 
        message: "Not found"
    })
})

app.listen(9000, () => {
    console.log('Server started at port 9000')
})