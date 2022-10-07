class InsertMeme {
    #new_meme = require("../../services/memes/new_meme");
  
    async handler(req, res) {
      try {
        const response = await new this.#new_meme().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = InsertMeme;