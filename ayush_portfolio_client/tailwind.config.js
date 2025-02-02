/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
	  extend: {
		colors: {},
		// colors: {
		//   primary: {
		//     50: "#fefce8",
		//     100: "#fffac2",
		//     200: "#fff187",
		//     300: "#ffe243",
		//     400: "#ffcb05", //main
		//     500: "#efb403",
		//     600: "#ce8b00",
		//     700: "#a46204",
		//     800: "#884c0b",
		//     900: "#733e10",
		//     950: "#432005",
		//   },
  
		//   primaryX: {
		//     50: "#fffaeb",
		//     100: "#fff0c6",
		//     200: "#fee089",
		//     300: "#fec63d",
		//     400: "#feb421",
		//     500: "#f89208",
		//     600: "#db6b04",
		//     700: "#b64907",
		//     800: "#94380c",
		//     900: "#792f0e",
		//     950: "#461602",
		//   },
		//   primary2: {
		//     50: "#eff6ff",
		//     100: "#dbeafe",
		//     200: "#bfdbfe",
		//     300: "#93c5fd",
		//     400: "#60a5fa",
		//     500: "#3b82f6",
		//     600: "#2563eb",
		//     700: "#1d4ed8",
		//     800: "#1e40af",
		//     900: "#1e3a8a",
		//   },
		//   secondary: {
		//     50: "#f6f6f6",
		//     100: "#e7e7e7",
		//     200: "#d1d1d1",
		//     300: "#b0b0b0",
		//     400: "#888888",
		//     500: "#6d6d6d",
		//     600: "#5d5d5d",
		//     700: "#4f4f4f",
		//     800: "#454545",
		//     900: "#3d3d3d",
		//     950: "#1c1c1c",
		//   },
		//   secondaryX: { DEFAULT: "#6B7280", 50: "#FAFAFB", 100: "#EFEFF1", 200: "#D8DADF", 300: "#C2C5CC", 400: "#ACB0BA", 500: "#969BA7", 600: "#7F8694", 700: "#6B7280", 800: "#515761", 900: "#383C43", 950: "#2B2E34" },
		//   secondary2: {
		//     50: "#fdf2f8",
		//     100: "#fce7f3",
		//     200: "#fbcfe8",
		//     300: "#f9a8d4",
		//     400: "#f472b6",
		//     500: "#ec4899",
		//     600: "#db2777",
		//     700: "#be185d",
		//     800: "#9d174d",
		//     900: "#831843",
		//   },
		//   danger: {
		//     50: "#fef2f2",
		//     100: "#fee2e2",
		//     200: "#fecaca",
		//     300: "#fca5a5",
		//     400: "#f87171",
		//     500: "#ef4444",
		//     600: "#dc2626",
		//     700: "#b91c1c",
		//     800: "#991b1b",
		//     900: "#7f1d1d",
		//   },
		// },
	  },
	},
	daisyui: {
	  themes: [
		{
		  mytheme: {
			primary: "#fec63d",
			"primary-content": "#1a1914",
			secondary: "#64748b",
			"secondary-content": "#f9fafb",
			accent: "#c00000",
			"accent-content": "#f9d5cf",
			neutral: "#080f0f",
			"neutral-content": "#c6c8c8",
			"base-100": "#f5feff",
			"base-200": "#d5ddde",
			"base-300": "#b6bdbe",
			"base-content": "#151616",
			info: "#00bdff",
			"info-content": "#000d16",
			success: "#00aa60",
			"success-content": "#000b03",
			warning: "#f57100",
			"warning-content": "#150400",
			error: "#fc0014",
			"error-content": "#160000",
		  },
		},
	  ],
	},
	plugins: [require("daisyui")],
  };