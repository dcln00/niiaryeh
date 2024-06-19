<template lang="pug">
section#profile.container(:class="!$device.isDesktop ? 'px-4' : ''")
	.row 
		.col-lg-8
			.description-box
				.description #[ContentSlot(:use='$slots.profile' unwrap)]
				.signature
					ContentSlot(:use='$slots.signature' unwrap='div')
		.col-lg-4(:class="$device.isDesktop ? 'px-0' : ''")
			ContentSlot(:use='$slots.photo' unwrap='div')
</template>