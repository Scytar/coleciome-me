class GetMeme {
    #get_meme = require("../../services/memes/get_meme");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_meme().execute(req.params.id);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetMeme;