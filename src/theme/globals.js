import { injectGlobal } from 'emotion';
import addReactSelectStyles from './vendor/react-select';
import { bodyFontFamily } from './variables';

// These are injected in the main layout component (layouts/main)
export default function applyGlobalStyles() {
  addReactSelectStyles();

  injectGlobal`
    * {
      box-sizing: border-box;
    }

    body {
      font-family: ${bodyFontFamily}
    }

    ul {
      list-style-type: none;
    }
  `;
}
