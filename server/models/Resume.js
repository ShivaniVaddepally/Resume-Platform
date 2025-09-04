import mongoose from 'mongoose';

const versionSchema = new mongoose.Schema({
  data: Object
}, { timestamps: true });

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
  versions: [versionSchema]
}, { timestamps: true });

export default mongoose.model('Resume', resumeSchema);
