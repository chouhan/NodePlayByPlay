/**
 * Created by rakeshchouhan on 4/24/17.
 */
var client = require('./connection.js');

client.ping({
  requestTimeout: 30000
}, function (error) {
  if (error) {
    console.trace('Error:', error);
  } else {
    console.log('Elastic Search is Connected!. Here are the available indices: ' + indices());
    // console.log('Here is the Occupation: ' + occupations());
    console.log('Here is the Occupation By Name: ' + occupationByName('Actuaries'));
  }
  // on finish
  //client.close();
});


client.cluster.health({}, function (err, resp, status) {
  console.log("-- Client Health --", resp);
});


/*
 client.indices.getAliases({
 index: "_all",
 level: "indices"
 }, function (error, response, status) {
 if (error) {
 console.log("search error: " + error)
 }
 else {
 //callback(response);---> this works
 Object.keys(response);
 }
 });*/


const indices = function indices() {
  return client.cat.indices({v: true})
  .then(console.log)
  .catch(err => console.error(`Error connecting to the es client: ${err}`));
};

//get all occupations
const search = function search(index, body) {
  return client.search({index: index, body: body});
};

const occupations = function getOccupations() {
  let body = {
    size: 2000,
    from: 0,
    query: {
      match_all: {}
    }
  };

  search('occupations', body)
  .then(results => {
    console.log(`found ${results.hits.total} items in ${results.took}ms`);
    console.log(`returned article titles:`);
    results.hits.hits.forEach(
      (hit, index) => console.log(
        `\t${body.from + ++index} - ${hit._source.occupation} - ${hit._source.occupation_id}`
      )
    )
  })
  .catch(console.error);
};

// get occupation by occupation name

const occupationByName = function getOccupationByName(occupationName) {
  let body = {
    size: 20,
    from: 0,
    query: {
      match: {
        occupation: {
          query: occupationName,
          minimum_should_match: 3,
          fuzziness: 2
        }
      }
    }
  };

  console.log(`retrieving occupations whose occupation matches '${body.query.match.occupation.query}' (displaying ${body.size} items at a time)...`);
  search('occupations', body)
  .then(results => {
    console.log(`found ${results.hits.total} items in ${results.took}ms`);
    if (results.hits.total > 0) console.log(`returned occupation names:`);
    results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.occupation} - ${hit._source.occupation_id} (score: ${hit._score})`));
  })
  .catch(console.error);
};