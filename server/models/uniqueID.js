// uniqueID.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const uniqueIDSchema = new Schema({
  uniqueId: {
    type: String,
    required: true,
  },
  currentOwner: {
    type: String,
    required: true,
  },
  previousOwners:{
    type: Array,
  }
});

const UniqueID = mongoose.model("UniqueID", uniqueIDSchema);

export default UniqueID;
