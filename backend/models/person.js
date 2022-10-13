module.exports = (mongoose) => {
    const person = mongoose.model(
        'person',
        mongoose.Schema(
            {
                _id: Number,
                firstName: String,
                lastName: String,
                career: String,
                degree: String,
                location: String
            },
            { timestamps: true }
        )
    );
    return person
};