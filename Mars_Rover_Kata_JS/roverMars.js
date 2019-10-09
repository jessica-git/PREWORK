let rover = {
  direction: "N",
  x: 0,
  y: 0, 
  travelLog: [{x:0,y:0}],
  obstacles: [{x:0,y:0},{x:1,y:0}],
};

let path1 = "rffrfflfrfrfffffffrrfflffffE";
let path2 = "rffrfflfrfrff"

function path(rover,travelLog){
  for(let position = 0; position < travelLog.length; position++){
    console.log(travelLog[position]);
  }
};

// ======================
function command(rover,orders){
  console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`);

  for (let position = 0; position < orders.length; position++){
    let order = orders[position];
    switch (order){
      case "f": 
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log("The command is not correct");
     } 
      
  }

  path(rover,rover.travelLog);

  if (rover.x == 2 && rover.y == 0){   //Test
    console.log('El camino se ha ejecutado correctamente');
  } else {
    console.log('El código no funciona correctamente');
  }
};
command(rover, path1);






// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if (rover.direction == "N"){
    rover.direction = "W";
  }else if (rover.direction == "W"){
    rover.direction = "S";
  }else if (rover.direction == "S"){
    rover.direction = "E"; 
  }else if (rover.direction == "E"){
    rover.direction = "N";
  }else{
    console.log("Error turn left");
  }
    console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`);
   
};


function turnRight(rover){
  console.log("turnRight was called!");
   if (rover.direction == "N"){
    rover.direction = "E";
  }else if (rover.direction == "E"){
    rover.direction = "S";
  }else if (rover.direction == "S"){
    rover.direction = "W"; 
  }else if (rover.direction == "W"){
    rover.direction = "N";
  }else{
    console.log("Error turn right");
  } 
    console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`)
 
};


function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction == "S"){
    if (rover.y + 1 > 9){
          console.log("Error move forward, rover leaves the board");
        } else {
          rover.y = rover.y + 1;
          let newPosition = {x:rover.x, y:rover.y};
          rover.travelLog.push(newPosition);
          console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`) 
        }
    
  }else if (rover.direction == "E"){
    if (rover.x + 1 > 9){
          console.log("Error move forward, rover leaves the board");
        } else {
          rover.x = rover.x + 1;
          let newPosition = {x:rover.x, y:rover.y};
          rover.travelLog.push(newPosition);
          console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`) 
        }
    
  }else if (rover.direction == "N"){
    if (rover.y - 1 < 0){
           console.log("Error move forward, rover leaves the board");
        } else {
          rover.y = rover.y - 1;
          let newPosition = {x:rover.x, y:rover.y};
          rover.travelLog.push(newPosition);
          console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`) 
        }
    
  }else if (rover.direction == "W"){
    if (rover.x - 1 < 0){
          console.log("Error move forward, rover leaves the board");
        } else {
          rover.x = rover.x - 1;
          let newPosition = {x:rover.x, y:rover.y};
          rover.travelLog.push(newPosition);
          console.log(`Rover has position: x=${rover.x}, y=${rover.y}, direction=${rover.direction}`) 
        }
 
    }
};
