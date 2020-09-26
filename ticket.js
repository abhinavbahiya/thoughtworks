const { getStationDetails } = require('./data');
const BASE_FARE = 10;
const FLAT_FARE = 20;
const ADD_ON_FARE = 5;
const RETURN_TICKET_MULTIPLIER = 1.75;

module.exports = class Ticket {
  constructor(fromStation, toStation, age, isReturnTicket = false) {
    this.fromStation = fromStation;
    this.toStation = toStation;
    this.purchaseDateTime = new Date();
    if(age < 3) {
      this.fareMultiplier = 0;
    } else if(age >= 3 && age < 10) {
      this.fareMultiplier = 0.75;
    } else {
      this.fareMultiplier = 1;
    }
    this.isReturnTicket = isReturnTicket;
    this.setMetaData();
  }

  setMetaData() {
    this.fromStationDetails = getStationDetails(this.fromStation);
    this.toStationDetails = getStationDetails(this.toStation);
    this.setNumberOfStations();
    this.setDistaneToBeTravelled();
  }

  setNumberOfStations() {
    this.numberOfStations = Math.abs(this.toStationDetails.stationNumber - this.fromStationDetails.stationNumber);
  }

  getNumberOfStations() {
    return this.numberOfStations;
  }

  setDistaneToBeTravelled() {
    this.distanceToBeTravelled = Math.abs(this.toStationDetails.mileStone - this.fromStationDetails.mileStone);
  }

  getDistaneToBeTravelled() {
    return this.distanceToBeTravelled;
  }

  getFare() {
    if(this.fromStationDetails.flatFare && this.toStationDetails.flatFare) {
      return FLAT_FARE;
    } else {
      if(this.numberOfStations <= 5) {
        return BASE_FARE;
      } else {
        let multiplier = Math.ceil((this.numberOfStations - 5) / 5); 
        return BASE_FARE + multiplier * ADD_ON_FARE;
      }
    }
  }

  getFinalFare() {
    if(this.isReturnTicket) {
      return this.fareMultiplier * this.getFare() * RETURN_TICKET_MULTIPLIER;
    } else {
      return this.fareMultiplier * this.getFare();
    }
  }

  printTicket() {
    console.log('Purchase Date Time', this.purchaseDateTime);
    console.log('FROM', this.fromStation, 'TO', this.toStation);
    console.log('Number of Stations', this.getNumberOfStations());
    console.log('Distance to be travel', this.getDistaneToBeTravelled());
    if(this.isReturnTicket) {
      console.log('RETURN TICKET')
      console.log('FROM', this.toStation, 'TO', this.fromStation);
      console.log('Number of Stations', this.getNumberOfStations());
      console.log('Distance to be travel', this.getDistaneToBeTravelled());
    }
    console.log('Final fare: Rs', this.getFinalFare());
  }
}