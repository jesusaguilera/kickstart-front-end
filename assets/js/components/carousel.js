/* ==========================================================================
   #CAROUSEL
   ========================================================================== */

const carousel = () => {

  let glide = new Glide('.js-carousel', {

    // carousel, slider or slideshow.
    type: 'carousel',

    // Start slider at specifed slide number.
    startAt: 0,

    // Pause autoplay on mouseover the slider.
    hoverpause: true,

    // The number of slides to show per screen
    perView: 3,

    // 'center' or 1,2,3...
    focusAt: 0,

    // Space between slides
    gap: 8,

    // Options applied at specified media breakpoints
    breakpoints: {
      768: {
        perView: 2,
      },
      420: {
        perView: 1,
      }
    },

    // Default CSS classes
    classes: {
      swipeable: 'c-carousel--swipeable',
      dragging: 'c-carousel--dragging',
      direction: {
        ltr: 'c-carousel--ltr',
        rtl: 'c-carousel--rtl'
      },
      type: {
        slider: 'c-carousel--slider',
        carousel: 'c-carousel'
      },
      slide: {
        clone: 'c-carousel__slide--clone',
        active: 'c-carousel__slide--active'
      },
      arrow: {
        disabled: 'c-carousel__arrow--disabled'
      },
      nav: {
        active: 'c-carousel__bullet--active'
      }
    }

  });

  // Create bullets
  let slides = document.querySelectorAll('.c-carousel__slide');
  var bulletsWrapper = document.querySelector('.c-carousel__bullets-container');

  [].forEach.call(slides, (slide, index) => {

    const button = document.createElement('button');
    button.className = 'c-carousel__bullet';
    button.setAttribute("data-glide-dir", '='+index);

    bulletsWrapper.appendChild(button)
  })
  // @Create bullets

  glide.mount();

}

export default carousel;

