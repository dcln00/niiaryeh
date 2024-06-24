<template lang="pug">
section#hero.container-fluid
	.container
		.text #[ContentSlot(:use='$slots.text')]
		.buttons.d-flex
			Button(customUrl='work') My Work
</template>
