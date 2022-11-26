module.exports = (mongoose) => {
    const gallery = mongoose.model(
        'gallery',
        mongoose.Schema(
            {
                _id: Number,
                images_url: [{
                    vertical_images: [{
                        title: String,
                        sub_title: String,
                        image_url: String
                    }],
                    horizontal_images: [{
                        title: String,
                        sub_title: String,
                        image_url: String
                    }]
                }]
            },
            { timestamps: true }
        )
    );
    return gallery
};