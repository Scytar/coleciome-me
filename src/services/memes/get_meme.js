class GetMeme {
    #Memes = require("../../database/postgres/memes");
  
    async execute(data) {
      try {
        const get_Meme = await new this.#Memes().getMeme(data);
  
        if (get_Meme) {
          return { message: "Success getting meme", data: get_Meme };
        } else {
          return { message: "Failed getting meme", data: "" };
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetMeme;
  