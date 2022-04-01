const markdownDemo = `
# markdown pog

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
`;

export const loadedData = {
	uuid: '1',
	name: 'Addon Name',
	category: 'addons',
	version: '0.0.1',
	updatedAt: new Date(),
	createdAt: new Date('2022-03-20T05:02:14.778Z'),
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aliquam, morbi dolor turpis proin cras consequat at.',
	description: markdownDemo,
	price: 10,
	views: 100,
	downloads: 2,
	rating: 16,
	activeStars: 4.3, // out of 5
	ratingType: { excellent: 8, good: 3, average: 4, poor: 2 },
	reviews: [
		{
			name: 'Frank Garrett',
			rating: 5.0,
			version: '1.12.20',
			createdAt: new Date('2022-02-20T05:02:14.778Z'),
			text: 'You can customize this text to your complete needs. Bold, italic, strikethrough and more. Feel free to write whatever. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			name: 'Miles Jason',
			rating: 2.0,
			version: '1.12.24',
			createdAt: new Date('2022-03-20T05:02:14.778Z'),
			text: 'You can customize this text to your complete needs. Bold, italic, strikethrough and more. Feel free to write whatever. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			name: 'Anna Wilson',
			rating: 4.0,
			version: '1.10.0',
			createdAt: new Date('2022-01-20T05:02:14.778Z'),
			text: 'You can customize this text to your complete needs. Bold, italic, strikethrough and more. Feel free to write whatever. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	],
	userProfile: {
		discord: 'theMackabu#6568',
		username: 'theMackabu',
		avatar: 'https://avatars.githubusercontent.com/u/32078755',
		productCount: 2,
		salesCount: 10,
		createdAt: new Date(),
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aliquam, morbi dolor turpis proin cras consequat at.',
		role: 'Seller',
	},

	image: 'https://source.boringavatars.com/marble/2?square',
	banner: 'https://source.boringavatars.com/bauhaus/2?square',
	tags: [
		{ tag: 'Addon', id: 'pre-defined' },
		{ tag: 'Cheap', id: 'user-added' },
		{ tag: 'Useful', id: 'user-added' },
		{ tag: 'Ready', id: 'pre-defined' },
		{ tag: 'Fast', id: 'user-added' },
	],
	versions: [
		{
			releaseName: 'Version 1.12.24 Release',
			shortDescription: 'New Content',
			version: '1.12.24',
			createdAt: new Date('2022-03-20T05:02:14.778Z'),
			rating: 3,
			activeStars: 4.3,
			latest: true,
			changelog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aliquam, morbi dolor turpis proin cras consequat at.',
		},
		{
			releaseName: '1.12.20 releaseName',
			shortDescription: 'Miscellaneous Changes',
			version: '1.12.20',
			createdAt: new Date('2022-02-20T05:02:14.778Z'),
			rating: 3,
			activeStars: 3.1,
			latest: false,
			changelog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aliquam, morbi dolor turpis proin cras consequat at.',
		},
		{
			releaseName: '1.11.10 Update',
			shortDescription: 'Bug Fixes',
			version: '1.11.10',
			createdAt: new Date('2022-01-20T05:02:14.778Z'),
			rating: 5,
			activeStars: 5.0,
			latest: false,
			changelog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque aliquam, morbi dolor turpis proin cras consequat at.',
		},
		{
			releaseName: '1.10.0 Release',
			shortDescription: 'Initial release',
			version: '1.10.0',
			createdAt: new Date('2021-12-20T05:02:14.778Z'),
			rating: 8,
			activeStars: 2.1,
			latest: false,
			changelog: markdownDemo,
		},
	],
};
