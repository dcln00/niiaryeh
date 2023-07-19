<template lang="pug">
section#brands.container
	.title(data-aos="fade-up")
		ContentSlot(:use='$slots.title')
	.row(v-if='$device.isDesktop') 
		.col-3.d-flex.justify-content-center(v-for='(item, index) in data.brands' :key='index' data-aos="fade" :data-aos-delay="currentNumber += durationNumber + 100")
			img(:src='item.photo' :alt='item.alt')
	.row(v-if='$device.isMobileOrTablet') 
		.col-3.d-flex.justify-content-center(v-for='(item, index) in data.brands' :key='index')
			img(:src='item.photo' :alt='item.alt')

</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())

const durationNumber = 100
let currentNumber = 0
</script>