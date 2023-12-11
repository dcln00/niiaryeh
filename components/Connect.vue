<template lang="pug">
section#cta.container
	.row 
		.col-sm-6 
			.title #[ContentSlot(:use='$slots.title' unwrap)]
		.col-sm-6
			.details.d-flex(:class="$device.isDesktop ? 'justify-content-end' : ''")
				.mail(v-for="(item, index) in data.emails" :key="index") #[a(:href="`mailto:${item}`") {{ item }}]
</template>

<script setup lang="ts">
const { data } = await useAsyncData('contact', () => queryContent('/contact').findOne())
</script>