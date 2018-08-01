class Component
{
    constructor () {

    }

    setState (state) {
        const oldElement = this.el;
        const newElement = this.render();
        this.state = state;
        this.string2Dom();
        if (this.onStateChange) {
            this.onStateChange(oldElement, newElement);
        }
    }

    string2Dom (str) {
        const _div = document.createElement('div');
        _div.innerHTML = str;

        return _div;
    }
}