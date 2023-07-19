<template lang="pug">
section#cta.container
	.row 
		.col-sm-6 
			.title Lets Get in #[br] touch
		.col-sm-6
			.details.d-flex.justify-content-end(v-if='$device.isDesktop')
				.mail-one #[a(href="mailto:sup@niiaryeh.com") sup@niiaryeh.com]
				.mail-two #[a(href="mailto:work@niiaryeh.com") work@niiaryeh.com]
			.details.d-flex.justify-content-start(v-else-if='$device.isMobileOrTablet')
				.mail-one #[a(href="mailto:sup@niiaryeh.com") sup@niiaryeh.com]
				.mail-two #[a(href="mailto:work@niiaryeh.com") work@niiaryeh.com]
</template>

<script setup>
useHead({
	titleTemplate: '%s > contact',
})
</script>