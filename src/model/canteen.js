
import mongoose from 'mongoose';

const CanteenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  marital_status: {
    type: String,
    required: true,
  },
  Aadhaar: {
    type: String,
    required: true,
  },
  Canteen: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Nominee: {
    type: String,
    required: true,
  },
  Residence_Address: {
    type: String,
    required: true,
  },
  BankName: {
    type: String,
    required: true,
  },
  AccountNo: {
    type: String,
    require: true,
  },
  ChequeNo: {
    type: String,
    require: true,
  },
  Security_Amount: {
    type: String,
    require: true,
  },
  voter_id:{
    type:String,
    require:true,
  },
  Nominee_Aadhaar:{
    type:String,
    require:true
  },
  block:{
    type:String,
    require:true
  },
  branch_manager:{
    type:String,
    require:true
  },
  Residence_status:{
    type:String,
    require:true
  },
  IFSC_CODE:{
    type:String,
    require:true
  },


});

const Canteen = mongoose.models.Canteen || mongoose.model('Canteen', CanteenSchema);
export default Canteen;
