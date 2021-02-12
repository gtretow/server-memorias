import mongoose from "mongoose";

//Schema são como esqueletos para as postagens, cada post devera ter o que contem no Schema
const postSchema = mongoose.Schema({
  tittle: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
