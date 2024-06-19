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

function getYear() {
	return new Date().getFullYear()
}

export function useSettings() {
	return useState('settings', ():Settings => ({
		firstName: 'Nii',
		lastName: 'Aryeh',
		tagline: 'Web Dev. Design. Art.',
		footer: {
			copyright: `© Nii Aryeh ${getYear()}`,
			mail: `sup@niiaryeh.com`,
			subcopy: `© copyright ${getYear()} niiaryeh.com all rights reserved`,
			socials: [
				{
					name: 'Showwcase',
					link: 'https://showwcase.niiaryeh.com/'
				},
				{
					name:'Github',
					link: 'https://github.com/dcln00'
				},
				{
					name: 'Instagram',
					link: 'https://www.instagram.com/niiaryeh_'
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