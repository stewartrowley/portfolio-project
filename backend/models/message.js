module.exports = (mongoose) => {
    const message = mongoose.model(
        'message',
        mongoose.Schema(
            {
                firstName: String,
                lastName: String,
                email: String,
                phoneNumber: String,
                message: String
            },
            { timestamps: true }
        )
    );
    return message
};