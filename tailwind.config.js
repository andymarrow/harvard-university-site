/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
			'xl': '1rem',
			'2xl': '1.5rem',
			'3xl': '2rem',
		},
		animation: {
        	'float': 'float 6s ease-in-out infinite',
		},
		keyframes: {
			float: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-20px)' },
			}
		},
  		colors: {
			harvard: {
				crimson: '#A51C30',
				electric: '#D7263D', 
				dark: '#1A080A', 
				accent: '#F3F4F6',
			},
			slate: {
				900: '#0F172A',
				800: '#1E293B',
			},
			 krimson: {
				DEFAULT: '#8B0000', 
				light: '#A52A2A',  
				dark: '#2D0A0A',    
				cream: '#F5F5F0',   
				gold: '#D4AF37',    
			},
			amber: {
				400: '#fbbf24',
				500: '#f59e0b',
			},
  			'primary-blue-dark': '#03045E',
  			'secondary-blue': '#0077b6',
  			'accent-blue': '#00b4d8',
  			'light-blue-100': '#90e0ef',
  			'light-blue-50': '#caf0f8',
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
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
  require("tailwindcss-animate"),
  require("@tailwindcss/typography"),
],

};
