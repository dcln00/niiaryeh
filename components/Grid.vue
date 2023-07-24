<template lang="pug">
div
	section#portfolio-box.container.px-0(v-if='$device.isDesktop')
		.box(v-for='(item, index) in data.portfolio' :key='index')
			.port-img
				NuxtLink(:href='item.url')
					img(:src='item.photo' alt='portfolio')
				.tag {{item.tag}}
			.port-desc #[NuxtLink(:href='item.url') {{ `0${index + 1}/ ${item.title}` }}]
			
	section#portfolio-box.container.px-4(v-else-if='$device.isMobileOrTablet')
		.box(v-for='(item, index) in data.portfolio' :key='index')
			.port-img
				NuxtLink(:href='item.url')
					img(:src='item.photo' alt='portfolio')
				.tag {{item.tag}}
			.port-desc #[NuxtLink(:href='item.url') {{ `0${index + 1}/ ${item.title}` }}]
</template>

<script setup>
const durationNumber = 100
let currentNumber = 0

const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>