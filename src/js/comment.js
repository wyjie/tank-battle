//画钢板(你打不打我的脸哦)
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

//小心草丛。一个刘备三个大汉
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

//大河向东流
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

//生成己方坦克
const tankInit = () => {
    //子弹
    const bullet = {type: 1, count: 'x'};
    const tank = new Tank({x: 420, y: 535, life: 5, bullet: bullet, launchSpeed: 20, runSpeed: 30});
    const floor = document.querySelector('#floor');

    floor.appendChild(tank.render());
}