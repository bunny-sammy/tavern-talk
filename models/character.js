import mongoose, { Schema, models } from "mongoose";

const charSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    str: {
      type: Number,
      required: true,
    },
    con: {
      type: Number,
      required: true,
    },
    dex: {
      type: Number,
      required: true,
    },
    int: {
      type: Number,
      required: true,
    },
    wis: {
      type: Number,
      required: true,
    },
    cha: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Character = models.Character || mongoose.model("Character", charSchema);
export default Character;