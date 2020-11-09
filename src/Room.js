class Room {
  constructor(roomData) {
    this.roomData = roomData;
    this.singleRooms;
    this.juniorSuites;
    this.suites;
    this.residentialSuites;
  }

  sortRoomsByType() {
    this.singleRooms = this.roomData.filter(room => {
      return room.roomType === 'single room';
    });
    this.juniorSuites = this.roomData.filter(room => {
      return room.roomType === 'junior suite';
    });
    this.suites = this.roomData.filter(room => {
      return room.roomType === 'suite';
    });
    this.residentialSuites = this.roomData.filter(room => {
      return room.roomType === 'residential suite';
    });
  }
  
  //filterRoomsByType(roomType) {
    //this.roomData.filter(roomData)
  //}
}

export default Room;