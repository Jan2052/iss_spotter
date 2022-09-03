// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('99.227.6.212', (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned Coords:', data);
// });

// const coords = { latitude: '43.653226', longitude: '-79.3831843' }

// fetchISSFlyOverTimes(coords, (error, flyTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned fly times:', flyTimes);
// });


/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const duration = pass.duration
    const datetime = new Date(0)
    datetime.setUTCSeconds(pass.risetime)
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    // console.log('date', date)
  }
}

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes)
});

// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIP };
// module.exports = { fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };