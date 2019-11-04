let mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost", function(err, client) {
  let sandbox = client.db("sandbox3");
  let humans = sandbox.collection("humans");

  humans.deleteMany({name: "ALEEEEX"}, function(err, documents) {
    if (documents.length > 0) {
      console.log(documents[0].name);
    }
  });
});
