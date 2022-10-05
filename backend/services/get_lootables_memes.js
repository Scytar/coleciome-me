class GetLootablesMemes {
    #Memes = require("../database/postgres/memes");
  
    async execute(data) {
      try {
        const lootablesMemes = await new this.#Memes().getLootables(data);
  
        if (lootablesMemes) {
          return { message: "Success getting lootables", data: lootablesMemes };
        } else {
          return { message: "Failed getting lootables", data: "" };
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = GetLootablesMemes;
  