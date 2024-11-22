import mongoose, { Schema, models } from "mongoose";

const charSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Character = models.Character || mongoose.model("character", charSchema);
export default Character;