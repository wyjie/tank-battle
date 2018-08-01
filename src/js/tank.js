class Tank extends Component
{
    //坦克下蛋(初始化)
    constructor ({x, y, life, bullet, launchSpeed, runSpeed}) {
        super();　
        
        //生成一个随机码作为坦克的编号
        this.id =  Math.random();

        this.state = {
            x: x, //横坐标范围
            y: y, //纵坐标范围
            life: life, //生命值
            bullet: bullet, //子弹类型,数量.x表示无限制
            launchSpeed: launchSpeed, //打出的子弹一秒钟移动的距离
            runSpeed: runSpeed //坦克一秒钟走过的距离
        }
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
        if ((this.x === this.bullet.x) && (this.state.y === this.state.bullet.y)) {
            //播放爆炸动画，声音.

            //我还会回来的～
        }
    }

    render () {
        this.el = this.string2Dom(`
            <div class="tank" style="margin-left:${this.state.x}px; margin-top:${this.state.y}px" data-tank-id=${this.id}></div>
        `);

        return this.el;
    }

    //核能发动机，斜眼笑
    run (event) {
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
        //一共需要移动 this.state.runSpeed px
        let distance = 0;
        let timer = setInterval(_ => {
            distance++;
            if (distance >= this.state.runSpeed) {
                clearInterval(timer);
            }

            this.state.y -= 1;
            this.setState(this.state);
        }, 60);
    }

    //秘技，反复横跳~下移
    down() {
        let distance = 0;
        let timer = setInterval(_ => {
            distance++;
            if (distance >= this.state.runSpeed) {
                clearInterval(timer);
            }

            this.state.y += 1;
            this.setState(this.state);
        }, 60);
    }

    //秘技，反复横跳~往左走
    left() {
        let distance = 0;
        let timer = setInterval(_ => {
            distance++;
            if (distance >= this.state.runSpeed) {
                clearInterval(timer);
            }

            this.state.x -= 1;
            this.setState(this.state);
        }, 60);
    }

    //秘技，反复横跳~往右走
    right() {
        let distance = 0;
        let timer = setInterval(_ => {
            distance++;
            if (distance >= this.state.runSpeed) {
                clearInterval(timer);
            }

            this.state.x += 1;
            this.setState(this.state);
        }, 60);
    }


}