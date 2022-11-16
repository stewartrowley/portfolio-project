module.exports = (mongoose) => {
    const employment = mongoose.model(
        'employment',
        mongoose.Schema(
            {
                _id: Number,
                first_name: String,
                middle_intial: String,
                last_name: String,
                phone_number: String,
                email: String,
                linkedin_url: String,
                education: [mongoose.SchemaTypes.Mixed],
                professional_experience: [mongoose.SchemaTypes.Mixed],
                work_experience: [mongoose.SchemaTypes.Mixed],
                personal_experience: [mongoose.SchemaTypes.Mixed],
                skills: [mongoose.SchemaTypes.Mixed]
            },
            { timestamps: true }
        )
    );
    return employment
};