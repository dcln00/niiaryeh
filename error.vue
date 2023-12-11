<template lang="pug">
section#error.container-fluid.d-flex.align-items-center.justify-content-center
	.error-message
		.title  404
		.message Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
		.button Back to our #[span(@click="handleError") homepage]
</template>

<script setup>
const handleError = () => clearError({ redirect: '/' })

useHead({
	title: 'Page Not Found'
})
</script>