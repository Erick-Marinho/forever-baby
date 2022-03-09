/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
};

module.exports = nextConfig;
