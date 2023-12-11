<template lang="pug">
NuxtLink(:to='customUrl' external)
	button(:style='customStyle')
		.d-flex.align-items-center
			slot
			Icon(:name="iconName" :size="iconSize")
</template>

<script setup lang="ts">
const props = defineProps<{
  customUrl: string,
  customStyle?: string,
  iconName: string,
  iconSize: {
	type: string,
	default: '1em'
  }
}>()
</script>