// TWO METHODS TO CREATE ASYNCHANDLER 
// BOTH ARE USED IN INDUSTRY 
//DEPENDS ON COMPANY WHAT THEY USE

// THIS METHOD IS WITH PROMISES 
const asynHandler = (requestHandler) => {
    (req , res, next) => {
        Promise.resolve(requestHandler(req , res, next)).catch((err) => next(err))
    }
}

export {asynHandler}


/*THIS METHOD IS FOR TRY CATCH

const asynHandler = () => async (req , res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}



*/