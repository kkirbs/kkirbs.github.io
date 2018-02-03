var stationString = "1,1,R01,BMT,Astoria,Astoria - Ditmars Blvd,Q,N W,Elevated,40.775036,-73.912034,2,2,R03,BMT,Astoria,Astoria Blvd,Q,N W,Elevated,40.770258,-73.917843,3,3,R04,BMT,Astoria,30 Av,Q,N W,Elevated,40.766779,-73.921479";

function createStations() {
	// stationString.split(',');
	var stations = stationString.split(',');
	// console.log(stations);
	var stationsArray = [];
	// var n = 0;

	// stationsArray.push({
	// 	stationId: stations[n+0],
	// 	completeId: stations[n+1],
	// 	gtfsStopId: stations[n+2],
	// 	division: stations[n+3],
	// 	line: stations[n+4],
	// 	stopName: stations[n+5],
	// 	dorough: stations[n+6],
	// 	daytimeRoutes: stations[n+7],
	// 	structure:stations[n+8],
	// 	gtfsLatitude: stations[n+9],
	// 	gtfsLongitude: stations[n+10]

	// });

	// n = 11;

	// stationsArray.push({
	// 	stationId: stations[n+0],
	// 	completeId: stations[n+1],
	// 	gtfsStopId: stations[n+2],
	// 	division: stations[n+3],
	// 	line: stations[n+4],
	// 	stopName: stations[n+5],
	// 	dorough: stations[n+6],
	// 	daytimeRoutes: stations[n+7],
	// 	structure:stations[n+8],
	// 	gtfsLatitude: stations[n+9],
	// 	gtfsLongitude: stations[n+10]

	// });

	for(n = 0; n < stations.length; n= n+11) {
		stationsArray.push({
			stationId: stations[n+0],
			completeId: stations[n+1],
			gtfsStopId: stations[n+2],
			division: stations[n+3],
			line: stations[n+4],
			stopName: stations[n+5],
			dorough: stations[n+6],
			daytimeRoutes: stations[n+7],
			structure:stations[n+8],
			gtfsLatitude: stations[n+9],
			gtfsLongitude: stations[n+10]
		});
	}

	console.log(stationsArray);


  // var allStationData =  {
  //   stationOneData: {
  //     StationId: 
  //     compledId:
  //     gtfsStopId:
  //     Division:
  //     Line:
  //     stopName:
  //     Borough:
  //     daytimeRoutes:
  //     Structure:
  //     LinesAvailable:
  //     gtfsLatitude:
  //     gtfsLongitude:
  //   }
  // }
}

createStations();

var myObj = {};
myObj.name = 'Kevin';
myObj['name'];