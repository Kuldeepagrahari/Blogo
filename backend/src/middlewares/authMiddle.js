const validate = async (Schema) => {
    try {
        const parseBody = await Schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        res.status(400).json({msg:error.errors[0].message})
    }
}

export default validate