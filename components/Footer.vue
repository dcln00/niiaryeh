<template lang="pug">
footer.container-fluid.px-5
	div(v-if="$device.isDesktop")
		.row 
			.col-sm-2
				.copyright {{footer.copyright}}
			.col-sm-8
				.footer-socials(v-for='(item, index) in socials' :key='index') #[a(:href='item.link') {{item.name}}] 
			.col-sm-2
				.footer-info {{ footer.firstname }} {{ footer.lastname }}
				.footer-mail #[a(:href='`mailto:${footer.mail}`') {{ footer.mail }}]
	
	div.px-4(v-else-if='$device.isMobileOrTablet')
		.copyright {{ footer.subcopy }}
</template>

<script setup>
import {siteSettings} from '~/store/index'
import { storeToRefs } from 'pinia'
const settings = siteSettings()
const { footer } = storeToRefs(settings)

const socials = [
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
</script>