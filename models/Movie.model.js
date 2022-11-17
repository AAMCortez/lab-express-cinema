const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
   {
      title: String,
      director: String,
      stars: [String],
      image: String,
      description: String,
      showtimes: [String],
   },
   { timestamps: true }
);

const Movies = model("Movies", movieSchema);
module.exports = Movies;
