export const ButtonStyle = {
  // style object for base or default style
  baseStyle: {
    p: '3.5',
    border: '1px',
    borderColor: 'secondary',
    bg: 'transparent',
    borderRadius: '100em',
    h: '7',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    cart: {
      border: '0',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};
