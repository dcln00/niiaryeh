<script setup lang="ts">
const skills = [
	{
		title: 'Web Development',
		description: 'react, nuxt, typescript'
	},
	{
		title: 'Brand Identity',
		description: 'adobe, affinity'
	},
	{
		title: 'UI/UX design',
		description: 'figma'
	},
]

const projects = [
	{
		title: 'Stained Fruit',
		url: 'https://stainedfruit.com/',
		description: 'Stained Fruit is a creative agency specializing in marketing research and strategy, branding, visual media, and web development.'
	},
	{
		title: 'Loft',
		url: 'https://loftaccra.com/',
		description: 'Loft is a furniture store specializing in modern contemporary furniture, offering stylish and functional pieces designed to elevate modern living spaces.'
	},
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
	
]
</script>

<template lang="pug">
div
	#intro
		.title Passionate about building professional digital experiences
		.description(class="text-[12px] text-gray-500") I aim to create innovative and seamless applications. I focus on user-centric design, ensuring that every solution is both functional and visually appealing.
	hr(class="my-8 text-gray-200")
	#skills
		.title Skills and Expertise
		.skill(class="mb-6 w-full lg:w-4/5" v-for="(skill, idx) in skills" :key="idx")
			.skill-title(class="font-spartan tracking-tight text-gray-700") {{ skill.title }}
			.description(class="text-[12px] text-gray-500") {{ skill.description }}
	hr(class="my-8 text-gray-200")
	#projects
		.title Projects
		.project(class="mb-6" v-for="(project, idx) in projects" :key="idx")
			NuxtLink(:to="project.url" class="inline-block")
				.project-title(class="font-spartan tracking-tight text-gray-700") {{ project.title }}
			.description(class="text-[12px] text-gray-500") {{ project.description }}
	hr(class="my-8 text-gray-200")
	#contact
		.title Contact
		.contact(class="flex space-x-4")
			NuxtLink(to="mailto:work@niiaryeh.com")
				.description(class="text-[12px] text-gray-500") work@niiaryeh.com
</template>