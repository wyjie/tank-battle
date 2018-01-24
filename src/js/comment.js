//画钢板
const getWalls = (element, type, wallType) => {
    let value = 0;
    if (type == 1) {
        value = element.offsetWidth * 2;
    } else {
        value = element.offsetHeight * 2;
    }
    
    while (value > 0) {
        let wall = new Wall({type: wallType});
        element.appendChild(wall.render());
        value -= 30;
    }
}

//草丛
const getGrass = (element, type, count) => {
    let value = 0;
    if (type == 1) {
        value = element.offsetWidth * count;
    } else {
        value = element.offsetHeight * count;
    }
    console.log(value);
    
    while (value > 0) {
        let grass = new Grass();
        element.appendChild(grass.render());
        value -= 60;
    }
}

//水
const getWater = (element, type, count) => {
    let value = 0;
    if (type == 1) {
        value = element.offsetWidth * count;
    } else {
        value = element.offsetHeight * count;
    }
    console.log(value);
    
    while (value > 0) {
        let water = new Water();
        element.appendChild(water.render());
        value -= 60;
    }
}