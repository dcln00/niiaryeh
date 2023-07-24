<template lang="pug">
section#brands.container
	.title
		ContentSlot(:use='$slots.title')
	.row
		.col-lg-3.col-6.d-flex.justify-content-center(v-for='(item, index) in data.brands' :key='index')
			img(:src='item.photo' :alt='item.alt')
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>