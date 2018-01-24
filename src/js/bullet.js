class Bullet extends Component
{
    constructor ({x, y, type, count}) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.count = count;
    }

    setAttack (attack) {
        this.attack = attack;
    }

    //销毁子弹
    destory () {
        
    }

    //摧毁墙体, 怎么获取被打中的墙
    wallDestory ({wall: wall}) {
        wall.shutdown({bullet: this});
    }

    //摧毁敌方坦克, 怎么获取被打中的坦克
    tankDestory ({tank: tank}) {
        tank.shutdown({bullet: this});
    }
        
    //监听子弹轨迹
    trajectoryEvent () {
        //子弹打中墙
        this.wallDestory();
        //子弹打中坦克
        this.tankDestory();
        //销毁子弹
        this.destory();
    }

    //在页面上生成一个子弹。二营长，把老夫的意大利炮推上来！   
    render () {
        this.el = this.string2Dom(`
            <div class="bullet"></div>
        `);
        //添加监听子弹轨迹事件
        this.el.addEventListener('trajectory', this.trajectoryEvent.bind(this));

        return this.el;
    }
}