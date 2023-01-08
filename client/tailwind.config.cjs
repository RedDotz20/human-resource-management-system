/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				BgModal: "BgModal 300ms ease-out",
				ConModal: "ConModal 150ms ease-out",
			},

			keyframes: {
				BgModal: {
					"0%": { backgroundColor: "transparent" },
					"100%": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
				},

				ConModal: {
					"0%": { scale: "0.75", opacity: "0" },
					"100%": { scale: "1", opacity: "100%" },
				},
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
			addVariant("child-th", "& > th");
			addVariant("child-td", "& > td");
		},
	],
};
