<template lang="pug">
section#projects.container(:class="!$device.isDesktop ? 'px-4' : 'px-0'")
	.title #[ContentSlot(:use='$slots.title' unwrap)]
	.heading
	.project-container(:class="$device.isDesktop ? 'd-flex' : ''")
		.box(v-for="(item, index) in data.projects" :key="index") 
			.port-img 
				NuxtLink(:to="item.url")
					NuxtImg(:src="item.photo")
				.tag(v-if="$device.isDesktop") Preview
			.port-header
				.port-title #[NuxtLink(:to="item.url") {{ item.title }}]
			.port-desc {{ item.description }}
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>