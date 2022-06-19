import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
   content: String,
   completed: Boolean,
},
   {
      timestamps: true,
      toObject: {
         transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
         }
      }
   }
);

export default mongoose.model('Tasks', taskSchema);
