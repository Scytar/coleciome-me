class NewCollection {
    #collectionsTable = require("../../database/postgres/collections");
  
    async execute(collection_data) {
        try {
            const NEWCOLLECTION = await new this.#collectionsTable().create(collection_data)

            
            if (NEWCOLLECTION) {
            return { message: "Success in creating new collection" };
            } else {
            return { message: "Failed in creating new collection" };
            }
    
        } catch (error) {
            throw new Error(error);
        }
    }
}
  
module.exports = NewCollection;
  