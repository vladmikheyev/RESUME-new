import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';

import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';

import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import './style.css';

import './style.css';

new Carousel(
  document.getElementById('productCarousel'),
  {
    infinite: false,
    Dots: false,
    Thumbs: {
      type: 'classic',
      Carousel: {
        slidesPerPage: 1,
        Navigation: true,
        center: true,
        fill: true,
        dragFree: true,
      },
    },
  },
  { Thumbs }
);

Fancybox.bind('[data-fancybox="gallery"]', {
  idle: false,
  compact: false,
  dragToClose: false,

  animated: false,
  showClass: 'f-fadeSlowIn',
  hideClass: false,

  Carousel: {
    infinite: false,
  },

  Images: {
    zoom: false,
    Panzoom: {
      maxScale: 1.5,
    },
  },

  Toolbar: {
    absolute: true,
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },

  Thumbs: {
    type: 'classic',
    Carousel: {
      axis: 'x',

      slidesPerPage: 1,
      Navigation: true,
      center: true,
      fill: true,
      dragFree: true,

      breakpoints: {
        '(min-width: 640px)': {
          axis: 'y',
        },
      },
    },
  },
});
