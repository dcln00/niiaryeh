<template lang="pug">
NuxtLink(:to='customUrl' external)
	button(:style='customStyle')
		.d-flex.align-items-center
			slot
</template>

<script setup lang="ts">
const props = defineProps<{
  customUrl: string,
  customStyle?: string,
}>()
</script>