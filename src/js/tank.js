class Tank extends Component
{
    //坦克下蛋(初始化)
    constructor ({x, y, life, bullet, launchSpeed, runSpeed}) {
        super();
        this.x = x;     //横坐标范围
        this.y = y;     //纵坐标范围
        this.life = life; //生命值
        this.bullet = bullet; //子弹类型,数量.x表示无限制
        this.launchSpeed = launchSpeed;  //打出的子弹一秒钟移动的距离
        this.runSpeed = runSpeed;　//坦克一秒钟走过的距离
    }

    //biubiubiu~ 发射子弹
    biubiubiu () {
        //冒蓝火的加特林。嘟嘟嘟嘟嘟～
        if (this.bullet.count !== 'x') {
            this.bullet.count--;
        }
    }
    
    //啊!宝宝被打中了
    shutdown ({bullet: bullet}) {
        //子弹坐标与坦克坐标重合
        if ((this.x === this.bullet.x) && (this.y === this.bullet.y)) {
            //播放爆炸动画，声音.

            //我还会回来的～
        }
    }

    render () {
        //生成一个随机码作为坦克的编号
        let tank_id = Math.random();
        this.el = this.string2Dom(`
            <div class="tank" style="margin-left:${this.x}px; margin-top:${this.y}px" data-tank-id=${tank_id}></div>
        `);
        //添加移动事件
        this.el.addEventListener('keydown', this.run.bind(this, event), false);

        return this.el;
    }

    //核能发动机，斜眼笑
    run (event) {
        console.log(keyCode);
        const keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                this.left();
                break;
            case 38:
                this.up();
                break;
            case 39:
                this.right();
                break;
            case 40:
                this.down();
                break;
            default:
                break;
        }
    }

    //秘技，反复横跳~上移
    up() {
        //你打不到我的脸哦.略略略
        this.y -= this.runSpeed;
        console.log(this.y);
    }

    //秘技，反复横跳~下移
    down() {
        this.y += this.runSpeed;
    }

    //秘技，反复横跳~往左走
    left() {
        this.x -= this.runSpeed;
    }

    //秘技，反复横跳~往右走
    right() {
        this.y -= this.runSpeed;
    }


}