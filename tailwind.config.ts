import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    container: {
			center: true,
		},
    extend: {
      colors: {
        primary: {
          50: '#2196f3',
          100: '#2196f3',
        },
        secondary: {
          0: 'rgb(var(--color-secondary-0) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
					200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
					'black': 'rgb(var(--color-secondary-black) / <alpha-value>)'
        },
        red: {
          50: 'rgb(var(--color-red-50) / <alpha-value>)',
          100: 'rgb(var(--color-red-100) / <alpha-value>)',
          300: 'rgb(var(--color-red-300) / <alpha-value>)',
          500: 'rgb(var(--color-red-500) / <alpha-value>)',
          700: 'rgb(var(--color-red-700) / <alpha-value>)',
          900: 'rgb(var(--color-red-900) / <alpha-value>)'
        },
        border: {
          DEFAULT: '#1f2937', // gray-800
        },
        gray: {
					500: '#797979'
				},
        content: {
          subtle: '#797979', // gray-600
          DEFAULT: '#6b7280', // gray-500
          emphasis: '#e5e7eb', // gray-200
          strong: '#f9fafb', // gray-50
          inverted: '#000000', // black
        },
      },
      minWidth: {
				'56': '14rem',
				'36': '9rem',
				'20': '5rem'
			},
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1366px',
        '3xl': '1440px'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
