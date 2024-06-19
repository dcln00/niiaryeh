<template lang="pug">
section#skills.container(:class="!$device.isDesktop ? 'px-4' : 'px-0'")
	.row 
		.col-lg-3
			.title #[ContentSlot(:use='$slots.title' unwrap)]
		.col-lg-9
			.description.d-flex.justify-content-between(v-for='(item, index) in data.services' :key='index') 
				.details 
					.desc-title {{ item.title }}
					.desc-par {{ item.paragraph }}
				.count {{ `0${index + 1}` }}
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>