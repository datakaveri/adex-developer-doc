// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ADeX Documentation',
	tagline: 'Learn about exploring, building , deploying your apps with ADeX',
	url: 'https://docs.ADeX.org.in/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/icon.ico',
	organizationName: 'ADeX', // Usually your GitHub org/user name.
	projectName: 'ADeX', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo docs
					editUrl:
						'https://github.com/datakaveri/ADeX-developer-docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo blog
					editUrl:
						'https://github.com/datakaveri/ADeX-developer-docs/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	themes: ['docusaurus-theme-search-typesense'],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */

		({
			hideOnScroll: true,
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/ADeX_logo.png'
				},
				items: [
					{
						type: 'dropdown',
						label: 'Who Are You',
						position: 'left',
						items: [
							{
								label: 'New User',
								href: '/docs/registration'
							},
							{
								label: 'Consumer',
								href: '/docs/Consumer/consumer'
							},
							{
								label: 'Provider',
								href: '/docs/Provider/provider'
							},
							{
								label: 'Delegate',
								href: '/docs/Delegate/delegate'
							}
						]
					},
					// {
					//   type: 'doc',
					//   docId: 'intro',
					//   position: 'left',
					//   label: 'Getting Started',
					// },
					{
						href: 'https://github.com/datakaveri/ADeX-developer-docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			typesense: {
				typesenseCollectionName: 'ADeX', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

				typesenseServerConfig: {
					nodes: [
						{
							host: 'typsense-test.ADeX.io',
							port: 443,
							protocol: 'https'
						}
						// {
						//   host: 'xxx-2.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
						// {
						//   host: 'xxx-3.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
					],
					apiKey: 'xyz',
					connectionTimeoutSeconds: 120
				},

				// Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.html#arguments
				typesenseSearchParameters: {}

				// Optional
				// contextualSearch: true,
			},
			footer: {
				style: 'light',
				links: [
					{
						items: [
							{
								html: `
                      <div class="logo-address-col">
                        <a routerLink="/">
                          <img
                            src="https://ADeX-catalogue-assets.s3.ap-south-1.amazonaws.com/ADeX.png"
                            class="logo"
                          />
                        </a>
                        <div class="place">
                          <a href="https://goo.gl/maps/sHqNUTRGFDmD2kbX8" target="_blank">
                            <img src="img/location.png" />
                            <span>
                              Ground Floor, Indian Institute of Science,<br>
			      Entrepreneurship Centre Road, Entrepreneurship Centre,<br>
			      Bengaluru - 560012, Karnataka
                            </span>
                          </a>
                        </div>
                      </div>`
							}
						]
					},
					{
						title: 'Important Links',
						items: [
							{
								label: 'ADeX Home',
								to: 'https://ADeX.org.in/'
							},
							{
								label: 'Datasets Catalogue',
								to: 'https://dataexplorer.ts.adex.org.in/'
							},
							{
								label: 'Provider Dashboard',
								to: 'https://publisher.ADeX.org.in/'
							},
							{
								label: 'Consumer Dashboard',
								to: 'https://consumer.ADeX.org.in/'
							},
							{
								label: 'Community Forum',
								to: 'https://forum.ADeX.org.in/'
							}
						]
					},
					{
						title: 'For Developers',
						items: [
							{
								label: 'Sandbox',
								to: 'https://sandbox.ADeX.org.in/'
							},
							{
								label: 'Documentation',
								to: 'https://docs.ADeX.org.in/'
							},
							{
								label: 'Catalogue Server API Docs',
								to: 'https://dataexplorer.ts.adex.org.in'
							},
							{
								label: 'Resource Server API Docs',
								to: 'https://rs.ADeX.org.in/apis'
							},
							{
								label: 'Authorization Server API Docs',
								to: 'https://authorization.ADeX.org.in/apis'
							}
						]
					},
					{
						items: [
							{
								html: `
                ${foot}
                `
							}
						]
					}
				],
				copyright: `© ${new Date().getFullYear()} ADeX.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
			//   plugins: [
			//     [
			//         '@docusaurus/plugin-sitemap',
			//         {
			//             cacheTime: 600 * 1000, // 600 sec - cache purge period
			//             changefreq: 'weekly',
			//             priority: 0.5,
			//         },
			//     ],
			// ],
		})
};

module.exports = config;

