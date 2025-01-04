<script setup lang="ts">
useHead({
	title: 'Nii Aryeh',
})

useSeoMeta({
	title: 'Nii Aryeh',
	ogTitle: 'Nii Aryeh',
	description: `Best Vue Developer in Ghana. Top 1% of Software Developers in Ghana.`,
	ogDescription: `Best Vue Developer in Ghana. Top 1% of Software Developers in Ghana.`,
	ogType: 'website',
	ogImage: 'https://res.cloudinary.com/dyr6sb7gn/image/upload/v1736003562/niiaryeh_q4xeqm.jpg',
	ogUrl: 'https://www.niiaryeh.com',
	twitterDescription: 'Best Vue Developer in Ghana. Top 1% of Software Developers in Ghana.',
	twitterCard: 'summary_large_image',
})

const dayjs = useDayjs()
const time= ref()

onNuxtReady(() => {
  setInterval(() => {
    time.value = dayjs().format('h:mm:ss A')
  }, 1000)
})
</script>

<template lang="pug">
main.container(class="flex flex-wrap")
	section#profile(class="w-full lg:w-1/2 p-4 max-lg:px-0 pt-20")
		div(class="sticky top-[5rem]")
			NuxtLink(to="/" class="inline-block")
				.title(class="font-spartan tracking-tight text-3xl font-bold") Nii Aryeh
			.description(class="text-[12px] text-gray-500") Software Developer.
			.details(class="flex *:text-[12px] *:text-gray-500 space-x-2")
				.time {{ time }}
				.loc Accra, Ghana 🇬🇭
			.socials(class="flex space-x-4 mt-8 *:text-xl")
				NuxtLink(to="https://github.com/dcln00")
					svgo-github
				NuxtLink(to="https://www.linkedin.com/in/nii-aryeh/")
					svgo-linkedin
	section#content(class="w-full lg:w-1/2 p-4 max-lg:px-0 py-20")
		NuxtPage
</template>
