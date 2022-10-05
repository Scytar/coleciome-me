class GetCollections {
    #Collections = require("../database/postgres/collections");
  
    async execute(data) {
      try {
        const collections = await new this.#Collections().get(data);
  
        if (collections) {
          return { message: "Success getting collections", data: collections };
        } else {
          return { message: "Failed getting collections", data: "" };
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }
  
  module.exports = GetCollections;
  