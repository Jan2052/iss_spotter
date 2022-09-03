// const { fetchMyIP, 
//         fetchCoordsByIP, 
//         fetchISSFlyOverTimes } = require("./iss_promised")
const { nextISSTimesForMyLocation } = require("./iss_promised")

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const printPassTimes = function (response) {
  for (const pass of response) {
    const duration = pass.duration
    const datetime = new Date(0)
    datetime.setUTCSeconds(pass.risetime)
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((response) => {
    printPassTimes(response);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
