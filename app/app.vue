<script setup lang="ts">
useHead({
	title: 'Nii Aryeh',
})

useSeoMeta({
	title: 'Nii Aryeh',
	ogTitle: 'Nii Aryeh',
	description: `Software Developer`,
	ogDescription: `Software Developer`,
	ogType: 'website',
	ogImage: 'https://res.cloudinary.com/dyr6sb7gn/image/upload/v1736003562/niiaryeh_q4xeqm.jpg',
	ogUrl: 'https://www.niiaryeh.com',
	twitterDescription: 'Software Developer',
	twitterCard: 'summary_large_image',
})

const dayjs = useDayjs()
const time= ref()

onNuxtReady(() => {
  setInterval(() => {
    time.value = dayjs().tz("Africa/Accra").format('h:mm:ss A')
  }, 1000)
})
</script>

<template lang="pug">
main.container(class="flex flex-wrap")
	section#profile(class="w-full lg:w-1/2 p-4 max-lg:px-0 pt-20")
		div(class="sticky top-20")
			NuxtLink(to="/" class="inline-block")
				.title(class="font-spartan tracking-tight text-xl font-medium") Nii Aryeh
			.description(class="text-[12px] text-gray-500") Software Developer.
			.details(class="flex *:text-[12px] *:text-gray-500 space-x-2")
				.time {{ time }}
				.loc Accra, Ghana 🇬🇭
	section#content(class="w-full lg:w-1/2 p-4 max-lg:px-0 py-20")
		NuxtPage
</template>
