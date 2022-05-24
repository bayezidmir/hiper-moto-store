module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#570DF8",

        secondary: "#F000B8",

        accent: "#e67e22",

        neutral: "#3D4451",

        base: "#FFFFFF",

        info: "#3ABFF8",

        success: "#36D399",

        warning: "#FBBD23",

        error: "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
};
