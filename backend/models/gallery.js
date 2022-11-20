module.exports = (mongoose) => {
    const gallery = mongoose.model(
        'gallery',
        mongoose.Schema(
            {
                _id: Number,
                images_url: [mongoose.SchemaTypes.Mixed]
            },
            { timestamps: true }
        )
    );
    return gallery
};