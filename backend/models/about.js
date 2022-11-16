module.exports = (mongoose) => {
    const about = mongoose.model(
        'about',
        mongoose.Schema(
            {
                _id: Number,
                firstName: String,
                lastName: String,
                career: String,
                degree: String,
                location: String,
                introduction: String,
                interest: [mongoose.SchemaTypes.Mixed]
            },
            { timestamps: true }
        )
    );
    return about
};