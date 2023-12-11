<template lang="pug">
section#profile.container
	.row 
		.col-lg-8
			.description #[ContentSlot(:use='$slots.profile' unwrap)]
			.signature
				ContentSlot(:use='$slots.signature' unwrap='div')
		.col-lg-4.px-0
			ContentSlot(:use='$slots.photo' unwrap='div')
</template>

<script setup lang="ts">
const profile = `

`
</script>