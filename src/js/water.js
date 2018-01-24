class Water extends Component
{
    constructor () {
        super();
    }

    render () {
        this.el = this.string2Dom(`
            <div class="water"></div>
        `);

        return this.el;
    }
}