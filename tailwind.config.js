/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./bai-giang.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Scholar Theme
        serif: ['"Playfair Display"', "serif"],
        script: ['"Dancing Script"', "cursive"],
        // Pro Max Theme
        sans: ['"Plus Jakarta Sans"', "sans-serif"], // Default sans override
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        scholar: {
          paper: "#fdfbf7",
          ink: "#2c2c2c",
          red: "#cd3838",
          wood: "#594a42",
          gold: "#c5a059",
        },
        pro: {
          primary: "#6366f1", // Indigo 500
          secondary: "#ec4899", // Pink 500
          bg: "#f8fafc", // Slate 50
        },
      },
      backgroundImage: {
        "paper-pattern":
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmRmYmY3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM1OTRhNDIiIG9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')",
        "gradient-pro": "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
      },
      boxShadow: {
        ink: "2px 2px 4px rgba(44, 44, 44, 0.2)",
        scroll: "0 10px 30px -10px rgba(89, 74, 66, 0.3)",
        pro: "0 20px 40px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
        "pro-hover": "0 25px 50px -12px rgba(99, 102, 241, 0.15)",
      },
    },
  },
  plugins: [],
};
