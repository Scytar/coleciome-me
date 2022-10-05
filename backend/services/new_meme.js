class NewMeme {
    #memesTable = require("../database/postgres/memes");
  
    async execute(meme_data) {
        try {
            const NEWMEME = await new this.#memesTable().create(meme_data)

            
            if (NEWMEME) {
            return { message: "Success in creating new meme" };
            } else {
            return { message: "Failed in creating new meme" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = NewMeme;
  