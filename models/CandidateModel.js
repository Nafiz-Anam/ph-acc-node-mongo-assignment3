const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const candidateSchema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Candidate name is required."],
            maxLength: 100,
            unique: true,
            lowercase: true,
        },
        user: {
            id: {
                type: ObjectId,
                ref: "User",
            },
        },
        appliedInfo: [
            {
                type: ObjectId,
                ref: "AppliedInfo",
            },
        ],
        jobs: [
            {
                type: ObjectId,
                ref: "Job",
            },
        ],
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
