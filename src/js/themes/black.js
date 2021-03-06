import { deepFreeze } from 'grommet/utils/object';

const brandColor = '#000000';
const accentColors = ['#FF4081', '#4eadeb', '#56cf98', '#8e6ee1'];
const neutralColors = ['#b23d07', '#ce4709', '#e74f09', '#f7540a'];
const statusColors = {
  critical: '#d2293f',
  error: '#d2293f',
  warning: '#c5a502',
  ok: '#78ab00',
  unknown: '#868686',
  disabled: '#b0b0b0',
};
const light = ['#333333', '#555555', '#666666', '#777777', '#999999', '#AAAAAA'];
const dark = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];

const backgroundColor = '#5e5e5e';
const textColor = '#ebebeb';
const borderColor = 'rgba(255, 255, 255, 0.33)';
const activeColor = 'rgba(235, 235, 235, 0.33)';
const shadowColor = 'rgba(200, 200, 200, 0.5)';
const focusColor = accentColors[1];

export default deepFreeze({
  global: {
    colors: {
      active: activeColor,
      accent: accentColors,
      background: '#444444',
      border: borderColor,
      brand: brandColor,
      neutral: neutralColors,
      placeholder: '#AAAAAA',
      status: statusColors,
      text: textColor,
      focus: focusColor,
      light,
      dark,
      darkBackground: {
        text: '#ffffff',
      },
    },
    drop: {
      backgroundColor: {
        light: '#f8f8f8',
        dark: '#222222',
      },
      border: {
        width: '0px',
        radius: '0px',
      },
      shadow: `0px 3px 8px ${shadowColor}`,
    },
    elevation: {
      none: 'none',
      xsmall: `0px 1px 2px ${shadowColor}`,
      small: `0px 2px 4px ${shadowColor}`,
      medium: `0px 3px 8px ${shadowColor}`,
      large: `0px 6px 12px ${shadowColor}`,
      xlarge: `0px 8px 16px ${shadowColor}`,
    },
    font: {
      family: "'Inconsolata', monospace",
      face: `
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 400;
          src: local('Inconsolata Regular'), local('Inconsolata-Regular'), url(https://fonts.gstatic.com/s/inconsolata/v16/QldKNThLqRwH-OJ1UHjlKGlZ5qhExfHw.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Inconsolata';
          font-style: normal;
          font-weight: 700;
          src: local('Inconsolata Bold'), local('Inconsolata-Bold'), url(https://fonts.gstatic.com/s/inconsolata/v16/QldXNThLqRwH-OJ1UHjlKGHiw71p5_zaDpwm.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
      size: '16px',
    },
    hover: {
      textColor: '#ffffff',
    },
    input: {
      border: {
        radius: '0px',
      },
    },
  },
  anchor: {
    color: '#4eadeb',
  },
  button: {
    border: {
      radius: '0px',
    },
  },
  checkBox: {
    border: {
      color: {
        light: 'rgba(255, 255, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)',
      },
      radius: '0px',
    },
    toggle: {
      color: '#d9d9d9',
      radius: '0px',
    },
  },
  layer: {
    backgroundColor,
    border: {
      radius: '0px',
    },
    overlayBackgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  radioButton: {
    border: {
      color: {
        light: 'rgba(255, 255, 255, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  rangeInput: {
    track: {
      color: '#4eadeb',
    },
  },
  icon: {
    color: textColor,
  },
  heading: {
    font: false,
  },
});
