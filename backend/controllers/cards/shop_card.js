class ShopCard {
    #shop_card = require("../../services/cards/shop_card");
  
    async handler(req, res) {
      try {
        const response = await new this.#shop_card().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = ShopCard;