export const Button = {
  baseStyle: {
    fontWeight: "medium",
  },
  variants: {
    gradientBorder: {
      position: "relative",
      zIndex: 0,
      borderRadius: "100px",
      paddingInline: "20px",
      paddingBlock: "15px",
      color: "black",
      background: "white",
      _before: {
        content: `""`,
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: "inherit",
        padding: "2px",
        background:
          "linear-gradient(90deg, #C85EDC 0%, #8A8DD4 30.29%, #4720D5 47.6%, #8C5EDB 81.25%)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      },
    },
  },
};
