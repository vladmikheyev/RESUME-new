import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import './style.css';

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,

  animated: false,
  showClass: false,
  hideClass: false,

  dragToClose: false,

  Images: {
    // Disable animation from/to thumbnail on start/close
    zoom: false,
  },

  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },

  Thumbs: false,

  Carousel: {
    // Remove the navigation arrows
    Navigation: true,
  },
});
