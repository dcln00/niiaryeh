<template lang="pug">
header.container-fluid.px-0(v-if="$device.isDesktop" :style="style")
	//- .subheader.d-flex.justify-content-between.align-items-center.px-5
		.header-text 
			| Branding and Development Portfolio
		.header-time 
			| Tue May 3rd 2023 | 7:02:16 PM
			
	.mainheader.d-flex.justify-content-between.align-items-center.px-5
		.logo.me-5
			NuxtLink(to="/") {{`${name.firstname} ${name.lastname}`}}

		.other-button.me-auto {{ tagline }}

		.hamburger(@click="toggleMenu")
			span

header.container-fluid.px-0(v-else-if="$device.isMobileOrTablet")
	.mainheader.container.d-flex.justify-content-between.align-items-center.px-4
		.logo.me-5
			NuxtLink(to="/") {{name.firstname}}{{name.lastname}}

		.hamburger(@click="toggleMenu")
			span

</template>

<script setup>
import {siteSettings} from '~/store/index'
import { storeToRefs } from 'pinia'
const settings = siteSettings()
const { name } = storeToRefs(settings)

defineProps({
	style: String,
	tagline: {
		type: String,
		default: 'Web Dev. Design. Art.'
	}
})

const button = 'ayvasdev'

function toggleMenu() {
	const nav = document.querySelector('.nav-box')
	const blur = document.querySelector('.blur')
	// const menu = document.querySelectorAll('.slidelink')

	nav.classList.toggle('is-active')
	blur.classList.toggle('is-active')

	// for (var i = 0; i < menu.length; i++) {
    //     ['animate__animated', 'animate__fadeInUp'].map(item=> menu[i].classList.toggle(item) ) 
    //   }
}
</script>