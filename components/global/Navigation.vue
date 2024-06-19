<template lang="pug">
#navigation.container-fluid.px-0
	.container 
		.close-btn.d-flex.justify-content-center.align-items-center(@click="handleShow") 
			Icon(name="solar:close-square-bold" size="2em")
		.links
			NuxtLink(to='/about' class="btn button-one" external) about
			NuxtLink(to='/work' class="btn button-two" external) work
			NuxtLink(to='/contact' class="btn button-one" external) contact
</template>

<script setup lang="ts">
defineProps<{
	handleShow: Function
}>()
</script>