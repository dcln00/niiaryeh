interface Settings {
	firstName: string,
	lastName: string,
	tagline: string,
	footer: {
		copyright: string,
		mail: string,
		subcopy: string,
		socials: object[]
	}
}

export function useSettings() {
	return useState('settings', ():Settings => ({
		firstName: 'Nii',
		lastName: 'Aryeh',
		tagline: 'Web Dev. Design. Art.',
		footer: {
			copyright: `© Nii Aryeh 2023`,
			mail: `sup@niiaryeh.com`,
			subcopy: `© copyright 2023 niiaryeh.com all rights reserved`,
			socials: [
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/n.aryeh'
				},
				{
					name:'Github',
					link: 'https://github.com/dcln00'
				},
				{
					name:'Linkedin',
					link: 'https://www.linkedin.com/in/nii-aryeh'
				},
				{
					name:'Behance',
					link: 'https://www.behance.net/niiaryeh'
				},
			]
		}
	}))
}