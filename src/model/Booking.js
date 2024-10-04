import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters']
  },
  address: {
    type: String,
    required: [true, 'Please provide an address'],
    maxlength: [200, 'Address cannot be more than 200 characters']
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide a phone number'],
    maxlength: [15, 'Phone number cannot be more than 15 characters']
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide a quantity'],
    min: [1, 'Quantity must be at least 1']
  },
  productName: {
    type: String,
    required: [true, 'Please provide a product name']
  },
  productId: {
    type: Number,
    required: [true, 'Please provide a product ID']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);