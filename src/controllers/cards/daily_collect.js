class DailyCollect {
    #daily_collect = require("../../services/cards/daily_collect");
  
    async handler(req, res) {
      try {
        const response = await new this.#daily_collect().execute(req.body);
        res.json(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  module.exports = DailyCollect;