'use strict';
const people = require('./person');

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    this.startInterval = setInterval(update(), 1000);
  }

  stop() {
    clearInterval(this.startInterval);
  }

  update() {
    this.log();
  }

  passengersEnter() {
    if (this.waitingList.length > 0) {
      this.passengers.push(people.Person.name);
      this.waitingList.shift();
      this.requests.push(people.Person.destinationFloor);
      console.log(people.Person.name + ' has enter the elevator');
    }
  }

  passengersLeave() {}

  floorUp() {
    if (this.floor < 10) {
      this.floor += 1;
    }
    console.log(this.floor);
  }

  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
    }
    console.log(this.floor);
  }

  call() {
    this.waitingList.push(people.Person);
    this.requests.push(people.Person.originFloor);
  }

  log() {
    if (this.floorUp) {
      let upDir = 'UP';
      console.log('Direction: ' + upDir + ' | ' + 'Floor: ' + this.floor);
    }
    if (this.floorDown) {
      let downDir = 'DOWN';
      console.log('Direction: ' + downDir + ' | ' + 'Floor: ' + this.floor);
    }
  }


}

var elevator = new Elevator();
elevator.floorDown();
elevator.start();



module.exports = Elevator;
