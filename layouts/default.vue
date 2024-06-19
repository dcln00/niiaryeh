<template lang="pug">
div
	Transition(name="mobile")
		Navigation(v-if="$device.isMobileOrTablet && show" :handle-show="handleShow")
	Header(
		:description="route.path === '/' ? `${settings.tagline}` : route.path.includes('/about') ? 'about' : route.path.includes('/contact') ? 'contact' : route.path.includes('/work') ? 'work' : `${settings.tagline}`" 
		:settings="settings"
		:show="show"
		:handle-show="handleShow"
		)
	main
		slot
	Footer
</template>

<script setup lang="ts">
const show = ref(false)
const route = useRoute()
const settings = useSettings()

function handleShow() {
	show.value = !show.value
}
</script>