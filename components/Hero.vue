<template lang="pug">
section#hero.container-fluid
	.container
		.text #[ContentSlot(:use='$slots.text')]
		.buttons.d-flex
			Button(customUrl='contact' iconName='material-symbols:android-contacts-outline' iconSize='1.2rem') Hire Me
			Button(customUrl='projects' iconName='carbon:portfolio' iconSize='1.2rem') My Portfolio
</template>
