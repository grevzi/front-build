// core version + navigation, pagination modules:
import Swiper, * as modules from 'swiper';
import 'swiper/swiper-bundle.css';
import './slider.sass';

class Slider {
    constructor(config = {}) {
        this.config = {
            containerClass: '.swiper-container',
            modules: ['Navigation', 'Pagination'],
            swiper: {
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            },
            ...config
        }
        this.swiper = null;
        if (!this.config.$el) {
            throw new Error(`U have to provide "this.config.$el" - ${this.config.$el} as DOM element`)
        }
    }

    init() {
        const filtered = Object.keys(modules)
            .map((key) => {
                if (this.config.modules.includes(key)) {
                    return modules[key]
                }
                return false

            }).filter(i => i)

        Swiper.use(filtered)

        // for (let module of this.config.modules ){
        //     console.log(modules[module]);
        //     // Swiper.use([Navigation, Pagination]);
        // }
        this.swiper = new Swiper(this.config.containerClass, {...this.config.swiper})
    }
}

export default Slider