const theme = {
  global: {
    colors: {
      brand: "#796E62",
      light: "#F2EEEB",
      "ligth-2": "#EEEAE6",
      "brand-contrast": "#C59143",
      "primary-main": "#C59143",
    },
    font: {
      family:
        "Caladea, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      size: "18px",
      height: "20px",
    },
    focus: {
      outline: {
        color: "light",
      },
    },
  },
  button: {
    default: {
      color: "text",
      border: undefined,
      padding: {
        horizontal: "12px",
        vertical: "8px",
      },
    },
    primary: {
      background: { color: "brand" },
      border: undefined,
      color: "text-strong",
      font: { weight: "bold" },
      padding: {
        horizontal: "12px",
        vertical: "8px",
      },
    },
    secondary: {
      border: { color: "brand-contrast", width: "4px" },
      color: "light-1",
      padding: {
        horizontal: "8px",
        vertical: "4px",
      },
      extend: {
        "font-weight": "700",
      },
    },
    active: {
      background: { color: "brand-contrast" },
      color: "text",
      secondary: {
        background: "none",
        border: {
          color: "brand-contrast",
        },
      },
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: { color: "text-weak" },
      },
    },
    hover: {
      background: { color: "brand-contrast" },
      secondary: {
        border: { color: "brand-contrast" },
      },
    },
  },
  card: {
    container: {
      round: "none",
    },
  },
};

export default theme;
