<template lang="pug">
footer.container-fluid.px-5
	div(v-if="$device.isDesktop")
		.row 
			.col-sm-2
				.copyright {{settings.footer.copyright}}
			.col-sm-8
				.footer-socials(v-for='(item, index) in settings.footer.socials' :key='index') #[a(:href='item.link') {{item.name}}] 
			.col-sm-2
				.footer-info {{ settings.firstName }} {{ settings.lastName }}
				.footer-mail #[a(:href='`mailto:${settings.footer.mail}`') {{ settings.footer.mail }}]
	
	div.px-4(v-if='$device.isMobileOrTablet')
		.copyright {{ settings.footer.subcopy }}
	</template>

<script setup lang="ts">
const settings = useSettings()
</script>