<script setup lang="ts">
const skills = [
	{
		title: 'Front end Development',
		description: 'html/css, react, vue, typescript, cms (wordpress, squarespace, webflow, etc)'
	},
	{
		title: 'Back end Development',
		description: 'nodejs, express, graphql'
	},
	{
		title: 'Brand Identity',
		description: 'adobe photoshop, illustrator, after effects'
	},
	{
		title: 'UI/UX design',
		description: 'figma, adobe photoshop'
	},
]

const projects = [
	{
		title: 'Invoice',
		url: 'https://invoice.niiaryeh.com/',
		description: 'Simple Invoice App in 3 easy steps. Fill in your details, choose a template, and download your invoice.'
	},
	{
		title: 'Resume',
		url: 'https://resume.niiaryeh.com/',
		description: 'Simple Resume App in 3 easy steps. Fill in your details, choose a template, and download your resume.'
	},
	{
		title: 'Hire Africa',
		url: 'https://hireafrica.io/',
		description: 'Hire Africa is an initiative which ensures African talent is recognized and included not as a token gesture, but for the real value we bring to the table. We\’re here to challenge and change the perception of African professionals on the global stage.'
	},
	{
		title: 'Blackband',
		url: 'https://blackband.co/',
		description: 'Our dynamic platform connects individuals and enterprises to strategic partnerships, travel, and lifestyle experiences to learn more about Africa.Our experts, including travel planners, cultural ambassadors, and local guides, curate premium cultural experiences connecting African diaspora travelers with authentic African cultural experiences.'
	},
	{
		title: 'Crescendo Foods',
		url: 'https://www.crescendogh.com/',
		description: 'Crescendo, an affordable community centered Ghana FDA-approved kitchen space.'
	},
	{
		title: 'Ka-né Studios',
		url: 'https://www.ka-nestudios.com/',
		description: 'Ka-né studios is an independent creative studio dedicated to culture and development.'
	},
	{
		title: 'Cassette',
		url: 'https://cassette.productions/',
		description: 'Cassette, a media production collective based in Ghana.'
	},
	{
		title: 'Streamlab',
		url: 'https://streamlab.niiaryeh.com/',
		description: 'Working with APIs. Movie database app built with nuxt 3 + typescript. Powered with the TMdB API.'
	},
]

const other = [
	{
		title: 'Kwasi Darko',
		url: 'https://kwasidarko.online/'
	},
	{
		title: 'The Creative Inc',
		url: 'https://thecreativeinc.agency/'
	},
	{
		title: 'Contacts',
		url: 'https://contacts.niiaryeh.com/'
	},
	{
		title: 'Eisenlegal',
		url: 'https://eisenlegal.vercel.app/'
	},
	{
		title: 'Themeaduane',
		url: 'https://themeaduane.vercel.app/'
	},
]
</script>

<template lang="pug">
div
	#intro
		.title Passionate about building professional digital experiences
		.description(class="text-[12px] text-gray-500") I aim to create innovative and seamless applications. I focus on user-centric design, ensuring that every solution is both functional and visually appealing.
	hr(class="my-8")
	#skills
		.title Skills and Expertise
		.skill(class="mb-6 w-full lg:w-4/5" v-for="(skill, idx) in skills" :key="idx")
			.skill-title(class="font-spartan tracking-tight text-gray-700") {{ skill.title }}
			.description(class="text-[12px] text-gray-500") {{ skill.description }}
	hr(class="my-8")
	#projects
		.title Projects
		.project(class="mb-6" v-for="(project, idx) in projects" :key="idx")
			NuxtLink(:to="project.url" class="inline-block")
				.project-title(class="font-spartan tracking-tight text-gray-700") {{ project.title }}
			.description(class="text-[12px] text-gray-500") {{ project.description }}
		.project
			.project-title(class="font-spartan tracking-tight text-gray-700") Landing Pages
			ul(class="text-[12px] text-gray-500 columns-2 gap-x-8")
				li(v-for="(project, idx) in other" :key="idx") #[NuxtLink(:to="project.url") {{ project.title }}]
	hr(class="my-8")
	#contact
		.title Contact
		.contact(class="flex space-x-4")
			NuxtLink(to="mailto:sup@niiaryeh.com")
				.description(class="text-[12px] text-gray-500") sup@niiaryeh.com
			NuxtLink(to="mailto:work@niiaryeh.com")
				.description(class="text-[12px] text-gray-500") work@niiaryeh.com
</template>