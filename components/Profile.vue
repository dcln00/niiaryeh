<template lang="pug">
div
	section#profile-text.container.pb-0.px-4(v-if="$device.isMobileOrTablet")
		.row
			.col-sm-4
				.profile-title(data-aos="fade-right" v-if="$device.isDesktop") #[ContentSlot(:use='$slots.text' unwrap='div')]

			.col-sm-8
				.profile-desc #[ContentSlot(:use='$slots.profile' unwrap='div')]
				.signature #[ContentSlot(:use='$slots.signature' unwrap)]

	section#profile.container
		.row
			.col-lg-8.d-flex.justify-content-center.align-items-center.text.px-5(v-if="$device.isDesktop")
				.name #[ContentSlot(:use='$slots.title' unwrap='div')]
				svg#Layer_1(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewbox='0 0 531.5 251.7' style='enable-background:new 0 0 531.5 251.7;' xml:space='preserve')
					g#about
						path.st0(d='M116.3,1v104.9H87.3L47.4,58.3v47.7H12.9V1H42l39.8,47.7V1H116.3z')
						path.st0(d='M127.4,1h35.4v104.9h-35.4V1z')
						path.st0(d='M173.9,1h35.4v104.9h-35.4V1z')
						path.st0(d='M84.4,232.4H44.5l-7,18.3h-36l45.8-104.9h34.8L128,250.7H91.4L84.4,232.4z M74.7,207l-10.2-26.4L54.3,207H74.7\
						z')
						path.st0(d='M172.7,224.4h-9.6v26.4h-35.4V145.8h50.5c29.2,0,47.8,15.3,47.8,39.6c0,15.1-7.2,26.5-19.8,33l22,32.4h-37.7\
						L172.7,224.4z M176,173.1h-12.9v24.6H176c9.7,0,14.4-4.6,14.4-12.3S185.7,173.1,176,173.1z')
						path.st0(d='M294.2,212.7v38.1h-35.4v-38.5l-39.6-66.4h37.3l21.4,36.3l21.6-36.3h34.2L294.2,212.7z')
						path.st0(d='M419.5,224.1v26.7h-87.2V145.8h85.3v26.7H367v12.3h44.4v25.5H367V224L419.5,224.1z')
						path.st0(d='M530.5,145.8v104.9h-35.4v-38.7h-32.7v38.7h-35.4V145.8h35.4V183h32.7v-37.2H530.5z')

			.col-lg-4.jumbo-img.px-0(v-if="$device.isDesktop")
				ContentSlot(:use='$slots.image' unwrap='div')
			.col-lg-4.jumbo-img.px-4(v-if="$device.isMobileOrTablet")
				ContentSlot(:use='$slots.image' unwrap='div')

	section#profile-text.container(v-if="$device.isDesktop")
		.row
			.col-sm-4
				.profile-title(data-aos="fade-right" v-if="$device.isDesktop") #[ContentSlot(:use='$slots.text' unwrap='div')]

			.col-sm-8(data-aos="fade-left" data-aos-delay='500')
				.profile-desc #[ContentSlot(:use='$slots.profile' unwrap='div')]
				.signature #[ContentSlot(:use='$slots.signature' unwrap='div')]
		.row.mt-5
			.col-sm-4
				.profile-title(data-aos="fade-right" v-if="$device.isDesktop") Music Picks

			.col-sm-8(data-aos="fade-left" data-aos-delay='500')
				.profile-desc
					iframe(src='https://open.spotify.com/embed/playlist/68HOm9ZCB1PO47Xyg0EMBN?theme=0' width='100%' height='80' frameborder='0' allowtransparency='true' allow='encrypted-media')
</template>

<script setup>
</script>