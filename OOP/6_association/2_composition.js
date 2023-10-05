// In Composition, objects are tightly coupled and cannot exist independently.

// Here’s the javascript implementation of composition:

class Wall {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Room {
  constructor(width, height) {
    this.wall = new Wall(width, height);
  }

  print() {
    console.log(this.wall);
  }
}

var room = new Room(1, 1);
room.print();

// If we destroy the room object, the wall is also destroyed as it’s enclosed inside the room object.

// Composition is also called strong association.
