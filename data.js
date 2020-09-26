const stationData = [
  {
    stationName: 'Chennai Beach',
    stationNumber: 1,
    flatFare: true, 
    mileStone: 0
  },
  {
    stationName: 'Chennai Fort',
    stationNumber: 2,
    flatFare: false,
    mileStone: 5
  },
  {
    stationName: 'Chennai Park',
    stationNumber: 3,
    flatFare: false,
    mileStone: 15
  },
  {
    stationName: 'Chennai Egmore',
    stationNumber: 4,
    flatFare: false,
    mileStone: 28
  },
  {
    stationName: 'Chetpet',
    stationNumber: 5,
    flatFare: false,
    mileStone: 32
  },
  {
    stationName: 'Nungambakkam',
    stationNumber: 6,
    flatFare: false,
    mileStone: 44
  },
  {
    stationName: 'Kodambakkam',
    stationNumber: 7,
    flatFare: false,
    mileStone: 48
  },
  {
    stationName: 'Mambalam',
    stationNumber: 8,
    flatFare: false,
    mileStone: 54
  },
  {
    stationName: 'Saidapet',
    stationNumber: 9,
    flatFare: false,
    mileStone: 59
  },
  {
    stationName: 'Guindy',
    stationNumber: 10,
    flatFare: false,
    mileStone: 65
  },
  {
    stationName: 'St. Thomas Mount',
    stationNumber: 11,
    flatFare: false,
    mileStone: 70
  },
  {
    stationName: 'Pazhavanthangal',
    stationNumber: 12,
    flatFare: false,
    mileStone: 74
  },
  {
    stationName: 'Meenambakkam',
    stationNumber: 13,
    flatFare: false,
    mileStone: 78
  },
  {
    stationName: 'Trisulam',
    stationNumber: 14,
    flatFare: false,
    mileStone: 85
  },
  {
    stationName: 'Pallavaram',
    stationNumber: 15,
    flatFare: false,
    mileStone: 88
  },
  {
    stationName: 'Chromepet',
    stationNumber: 16,
    flatFare: false,
    mileStone: 92
  },
  {
    stationName: 'Tambaram Sanatorium',
    stationNumber: 17,
    flatFare: false,
    mileStone: 94
  },
  {
    stationName: 'Tambaram',
    stationNumber: 18,
    flatFare: true,
    mileStone: 100
  },
]

module.exports.getStationDetails = (stationToFind) => {
  return stationData.find(stationDetails => {
    return stationDetails.stationName === stationToFind
  });
}

module.exports.getDistanceTravel = (fromStation, toStation) => {
  const { mileStone: fromMileStone } = this.getStationDetails(fromStation);
  const { mileStone: toMileStone } = this.getStationDetails(fromStation);
  return Math.abs(toMileStone - fromMileStone);
}

module.exports.getNumberOfStations = (fromStation, toStation) => {
  const { stationNumber: fromStationNumber } = this.getStationDetails(fromStation);
  const { stationNumber: toStationNumber } = this.getStationDetails(fromStation);
  return Math.abs(toStationNumber - fromStationNumber);
}