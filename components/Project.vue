<template lang="pug">
.project 
	.row 
		.col-lg-8
			.header
				.row 
					div.pe-2(:class="!github || !$device.isDesktop ? 'col-8' : 'col-7'")
						.title {{ title }}
					.col-4.ps-2.pe-2
						NuxtLink(:to="url" target="_blank")
							.title view live
					.col-1.ps-2(v-if="github && $device.isDesktop")
						NuxtLink(:to="githuburl" target="_blank")
							.title
								Icon(name="mdi:github" size="1.5em")
			.photo 
				NuxtImg(:src="photo")
		.col-lg-4
			.description.
				{{ description }}
			.tech-stack.d-flex.flex-wrap
				.stack(v-for="(item, index) in stack" :key="index") {{ item }}
</template>

<script setup lang="ts">
interface Props {
	title: string,
	url: string,
	github: {
		type: boolean,
		default: false
	},
	githuburl?: string,
	photo: string,
	description: string,
	stack: string[]
}

defineProps<Props>()
</script>