const mongoose = require("mongoose")

const { Schema } = mongoose;

const taskSchema = new Schema({
  name: { type: String, unique: true },
  difficulty: {type: Number, default: 0}
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;