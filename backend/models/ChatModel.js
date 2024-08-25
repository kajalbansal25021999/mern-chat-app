//chatname
//isgroupchat
//list of users
//ref to latest msg
//if gp chat then who is gp admin

const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    chatName: {
      type: String,
      // require: true,
      trim: true,
    },
    isGroupChat: {
      type: Boolean,
      default: false,
    },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;
