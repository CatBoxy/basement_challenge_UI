export const DrawerStyles = {
  // The parts of the component
  parts: [
    'drawer',
    'dialogContainer',
    'dialog',
    'overlay',
    'header',
    'closeButton',
    'body',
    'footer',
  ],
  // The base styles for each part
  baseStyle: {
    dialog: {
      bg: 'primary',
      border: '1px',
      borderColor: 'secondary',
    },
    header: {
      color: 'secondary',
    },
    body: {
      color: 'secondary',
    },
    footer: {
      color: 'secondary',
      display: 'flex',
      justifyContent: 'flex-start',
      p: 0,
    },
  },
  // The size styles for each part
  sizes: {},
  // The variant styles for each part
  variants: {
    mobile: {
      dialog: {
        h: '100%',
      },
      header: {
        color: 'secondary',
      },
      footer: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    wide: {
      dialog: {
        h: '70%',
      },
      header: {
        color: 'secondary',
      },
      footer: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
