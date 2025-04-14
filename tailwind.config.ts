import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
  		'6xl': '4rem'
  	},
  	container: {
  		center: true,
  		screens: {
  			sm: '576px',
  			md: '768px',
  			lg: '992px',
  			xl: '1200px'
  		}
  	},
  	extend: {
  		colors: {
  			primary: {
  				'50': '#2196f3',
  				'100': '#2196f3',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'0': 'rgb(var(--color-secondary-0) / <alpha-value>)',
  				'50': 'rgb(var(--color-secondary-50) / <alpha-value>)',
  				'100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
  				'200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
  				'300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
  				'400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
  				'500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
  				'700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
  				'900': 'rgb(var(--color-secondary-900) / <alpha-value>)',
  				black: 'rgb(var(--color-secondary-black) / <alpha-value>)',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			green: {
  				'50': '#ECFDF3',
  				'100': '#1BAD2A',
  				'150': '#097728',
  				'200': '#00973a'
  			},
  			blue: {
  				'50': '#D1E9FF',
  				'100': '#175CD3',
  				'300': '#35a8e0',
  				'400': '#2A83E9'
  			},
  			red: {
  				'50': '#ff0000',
  				'100': 'rgb(var(--color-red-100) / <alpha-value>)',
  				'300': 'rgb(var(--color-red-300) / <alpha-value>)',
  				'500': 'rgb(var(--color-red-500) / <alpha-value>)',
  				'700': 'rgb(var(--color-red-700) / <alpha-value>)',
  				'900': 'rgb(var(--color-red-900) / <alpha-value>)'
  			},
  			border: 'hsl(var(--border))',
  			gray: {
  				'500': '#797979'
  			},
  			content: {
  				subtle: '#797979',
  				DEFAULT: '#6b7280',
  				emphasis: '#e5e7eb',
  				strong: '#f9fafb',
  				inverted: '#000000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		minWidth: {
  			'56': '14rem',
  			'36': '9rem',
  			'20': '5rem'
  		},
  		screens: {
  			sm: '576px',
  			md: '768px',
  			lg: '992px',
  			xl: '1200px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
    plugins: [require("tailwindcss-animate")]
};
export default config;
