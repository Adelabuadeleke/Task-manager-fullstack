const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'must provide a name'],
    trim: true,
    maxlength:[20, 'name cannot exceed 20 characters']
  },
  commpleted:{
    type:Boolean,
    default: false,
  }
})

module.exports  = mongoose.model('Task', TaskSchema)