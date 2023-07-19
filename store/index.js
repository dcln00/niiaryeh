import { defineStore } from 'pinia'

export const siteSettings = defineStore('settings', () => {
  const name = ref({
	firstname: 'Nii',
	lastname: 'Aryeh',
	tagline: 'Web Dev. Design. Art.'
  })

  const footer = ref({
	firstname: name.value.firstname,
	lastname: name.value.lastname,
	copyright: `© Nii Aryeh 2023`,
	mail: `sup@niiaryeh.com`,
	subcopy: `© copyright 2023 niiaryeh.com all rights reserved`
  })


  return { name, footer }
})