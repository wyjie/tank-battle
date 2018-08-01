class Grass extends Component
{

    constructor () {
        super();
    }

    render () {
        this.el = this.string2Dom(`
            <div class="grass"></div>
        `);

        return this.el;
    }
}