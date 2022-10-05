class GetLootablesMemes {
    #get_lootables_memes = require("../services/get_lootables_memes");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_lootables_memes().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetLootablesMemes;