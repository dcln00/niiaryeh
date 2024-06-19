<template lang="pug">
header.container-fluid.px-0
	.mainheader.d-flex.justify-content-between.align-items-center.px-5
		.logo.me-5
			NuxtLink(to="/") {{ `${settings.firstName} ${settings.lastName}` }}

		.description.me-auto(v-if="$device.isDesktop") {{ description }}

		Transition(name='nav')
			.menu.me-5.d-flex(v-if="show && $device.isDesktop")
				NuxtLink(to='/about' class="button-one me-3" @click.native="show = false" external) about
				NuxtLink(to='/work' class="button-two me-3" @click.native="show = false" external) work
				NuxtLink(to='/contact' class="button-one" @click.native="show = false" external) contact

		.hamburger(@click="handleShow")
			span
</template>

<script setup lang="ts">
interface Props {
	description: string,
	settings: object,
	show: boolean,
	handleShow: Function,
}

defineProps<Props>()

</script>