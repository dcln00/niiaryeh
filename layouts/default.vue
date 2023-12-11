<template lang="pug">
div
	Header(
		:description="route.path === '/' ? `${settings.tagline}` : route.path.includes('/about') ? 'about' : route.path.includes('/contact') ? 'contact' : route.path.includes('/projects') ? 'projects' : `${settings.tagline}`" 
		:settings="settings"
		)
	main
		slot
	Footer
</template>

<script setup lang="ts">
const route = useRoute()
const settings = useSettings()

console.log(route.path)
</script>