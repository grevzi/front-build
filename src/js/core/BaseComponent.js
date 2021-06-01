class BaseComponent {
    constructor(config = {}) {
        this.config = config;
    }

    init() {
        this
            ._preInit()
            ._checkConfig()
            ._bindDOM()
            ._bindEvents()

        return this

    }

    _preInit() {
        console.log('_preInit');
        return this
    }

    _checkConfig() {

        if (typeof this.config !== 'object') {
            throw new Error(`Your config must in object`)
        }

        return this
    }

    _bindDOM() {
        console.log('DOM');
        return this
    }

    _bindEvents() {
        console.log('evt');
        return this
    }


}

export default BaseComponent