<template lang="pug">
section#hero.container-fluid
	.container
		.text #[ContentSlot(:use='$slots.text')]
		.buttons.d-flex
			Button(customUrl='projects') My Work
</template>
