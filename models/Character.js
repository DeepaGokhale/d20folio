var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var CharacterSchema = new Schema({
  // `name` must be unique and of type String
  name: String,
  imageUrl: String,

  race: {
      type: String,
      //enum: ['Elf', 'Dwarf', 'Human']

  },
  class: {
      type: String,
      //enum: ['Warrier', 'Mystic', 'Rogue']
  },
  level: {
      type:Number,
      default: 1
  },

  STR: Number,
  DEX: Number,
  CON: Number,
  INT: Number,
  WIS: Number,
  CHA: Number,

  equipment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Equipment"
      }
  ]

});

// This creates our model from the above schema, using mongoose's model method
var Character = mongoose.model("Character", CharacterSchema);

// Export the User model
module.exports = Character;
