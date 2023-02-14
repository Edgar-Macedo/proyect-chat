//? Success request 
const success = ({res, status, data, message}) => {
    res.status(201).json({
        error: false, 
        status: status, 
        message: message,
        data: data
    })
}

//? Error request 
const error = ({res, status, data, message, fields}) => {
    res.status(400).json({
        error:true,
        status: status, 
        message: message,
        fields: fields

    })
} 

module.exports = {
    success,
    error
}