<template lang="pug">
nav.container-fluid.px-0(v-if="$device.isDesktop")
	.blur
	.nav-box
		.close-btn.d-flex.justify-content-center.align-items-center(@click="closeMenu")
			i(class="fa fa-times" aria-hidden="true")
		.navlinks
			NuxtLink.slidelink(v-for='(item, index) in nav' :to="item.url" @click='closeMenu' :key='index') {{ item.title }}
		.navfooter.d-flex
			NuxtLink(to="/brand" @click='closeMenu') Brand
			NuxtLink(to="/dev" @click='closeMenu') Dev

#navmobile.container-fluid.px-0(v-if="$device.isMobileOrTablet")
	.nav-box
	.col-sm-6.blur
		.close-btn.d-flex.justify-content-center.align-items-center(@click="closeMenu")
			i(class="fa fa-times" aria-hidden="true")
		.navlinks
			NuxtLink.slidelink(v-for='(item, index) in nav' :to="item.url" @click='closeMenu' :key='index') {{ item.title }}
		.navfooter.d-flex
			NuxtLink(to="/brand" @click='closeMenu') Brand
			NuxtLink(to="/dev" @click='closeMenu') Dev

</template>

<script setup>
const nav = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'About',
		url: '/about',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
]

function closeMenu() {
	const nav = document.querySelector('.nav-box')
	const blur = document.querySelector('.blur')
	// const menu = document.querySelectorAll('.slidelink')

	nav.classList.remove('is-active')
	blur.classList.remove('is-active')

	// for (var i = 0; i < menu.length; i++) {
    //     ['animate__animated', 'animate__fadeInUp'].map(item=> menu[i].classList.remove(item) ) 
    //   }
}
</script>