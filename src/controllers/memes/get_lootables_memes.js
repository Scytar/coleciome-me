class GetLootablesMemes {
    #get_lootables_memes = require("../../services/memes/get_lootables_memes");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_lootables_memes().execute(req.params);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetLootablesMemes;