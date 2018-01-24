class Component
{
    constructor () {

    }

    string2Dom (str) {
        const _div = document.createElement('div');
        _div.innerHTML = str;

        return _div;
    }
}