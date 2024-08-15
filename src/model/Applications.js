
import mongoose from 'mongoose';

const ApplicationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  workExperience: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  recommendBy: {
    type: String,
    required: true,
  },
  postName: {
    type: String,
    required: true,
  },
  workingArea: {
    type: String,
    required: true,
  },
  gramPanchayatName: {
    type: String,
    required: true,
  },
});

const Applications = mongoose.models.Applications || mongoose.model('Applications', ApplicationsSchema);
export default Applications;
