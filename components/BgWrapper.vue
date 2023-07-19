<template lang="pug">
section#wrapper.container-fluid(:style='color')
</template>

<script setup>
defineProps({
	color: {
		type: String,
		default: 'transparent'
	}
})
</script>

<style lang="scss">
#wrapper {
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
}
</style>