<template lang="pug">
section#projects.container.px-0
	.title #[ContentSlot(:use='$slots.title' unwrap)]
	.heading
	.project-container.d-flex
		.box(v-for="(item, index) in data.projects" :key="index") 
			.port-img 
				NuxtLink
					NuxtImg(:src="item.photo")
				.tag Preview
			.port-header
				.port-title {{ item.title }}
			.port-desc {{ item.description }}
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>