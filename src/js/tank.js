class Tank
{
    //坦克下蛋(初始化)
    constructor () {
        this.life = 5; //生命值
        this.x = 0;
        this.y = 0;
        this.bullet = new Bullet({type:1, count:'x'}); //子弹类型,数量.x表示无限制
        this.launchSpeed = 20;  //打出的子弹一秒钟移动的距离
        this.runSpeed = 10;　//坦克一秒钟走过的距离
    }

    //biubiubiu~ 发射子弹
    biubiubiu () {
        //冒蓝火的加特林。嘟嘟嘟嘟嘟～
        if (this.bullet.count !== 'x') {
            this.bullet.count--;
        }
    }

    //啊!宝宝被打中了
    shotdown () {
        //子弹坐标与坦克坐标重合
        if ((this.x === this.bullet.x) && (this.y === this.bullet.y)) {
            //播放爆炸动画，声音.

            //我还会回来的～
        }
    }

    //秘技，反复横跳~上移
    up() {
        //打不到我略略略 
    }

    //秘技，反复横跳~下移
    down() {

    }

    //秘技，反复横跳~往左走
    left() {

    }

    //秘技，反复横跳~往右走
    right() {

    }
}