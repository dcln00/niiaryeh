<template lang="pug">
section#services.container.px-0(v-if='$device.isDesktop')
	.row 
		.col-lg-3
			.title(data-aos="fade-right") #[ContentSlot(:use='$slots.title' unwrap)]
		.col-lg-9
			.description.d-flex.justify-content-between(v-for='(item, index) in data.services' :key='index' data-aos="fade-left" data-aos-delay='500') 
				.details
					.desc-title #[NuxtLink(:to="item.url") {{ item.title }}]
					.desc-par {{ item.paragraph }}
				.count 0{{ index + 1 }}

section#services.container.px-4(v-if='$device.isMobileOrTablet')
	.row 
		.col-lg-3
			.title #[ContentSlot(:use='$slots.title' unwrap)]
		.col-lg-9
			.description.d-flex.justify-content-between(v-for='(item, index) in data.services' :key='index') 
				.details
					.desc-title {{ item.title }}
					.desc-par {{ item.paragraph }}
				.count 0{{ index + 1 }}
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
</script>