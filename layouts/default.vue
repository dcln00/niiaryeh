<template lang="pug">
div
	Navigation
	Header(v-if='$route.path === "/dev" || $route.path === "/dev/"' :tagline="`Web Development`")
	Header(v-else-if='$route.path === "/brand" || $route.path === "/brand/"' :tagline="`Branding Identity`")
	Header(v-else)
	main
		slot
	Footer
</template>

