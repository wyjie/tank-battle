class Wall extends Component
{
    constructor ({type: type}) {
        super();
        this.state = {isShow: true};
        this.type = type;
    }

    //墙被子弹击中
    hitEvent () {
        if (this.state.isShow) {
            this.style.display="none";
            this.state.isShow = false;
        }
    }

    render () {
        //生成一个随机码作为墙的编号
        let wall_id = Math.random();
        this.el = this.string2Dom(`
            <div class="${this.type == 1 ? 'wall' : 'wall2'}" data-wall-id=${wall_id}></div>
        `);

        return this.el;
    }
}