import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        /**
         * Bacground image for page header
         */
        'mp-section': "url('/page_code.jpg')",
      },
      
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },

        strokeSpin: {
          "0%": {
            strokeDasharray: "0 630"
          }
        },

        slideUp: {
          "0%": {
            transform: "translateY(100%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        'fadeIn': "fadeIn .3s linear 2.5s forwards",
        'strokeSpin': "strokeSpin .5s ease-in-out 350ms",
        'slideUp': "slideUp 1s ease-in-out",
      }
    },
  },
  plugins: [],
}
export default config
