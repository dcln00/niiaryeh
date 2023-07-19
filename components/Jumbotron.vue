<template lang="pug">
section#portfolio.container.px-0(data-aos="fade")
	ContentSlot(:use='$slots.image' unwrap)
	.title #[ContentSlot(:use='$slots.title' unwrap)] 
	.description
		ContentSlot(:use='$slots.description' unwrap)
	.tag 
		ContentSlot(:use='$slots.tag' unwrap)
</template>