class GetCard {
    #get_card = require("../../services/cards/get_card");
  
    async handler(req, res) {
      try {
        const response = await new this.#get_card().execute(req.params.id);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = GetCard;