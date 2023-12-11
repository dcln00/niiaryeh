<template lang="pug">
section#portfolio.container-fluid
	.container
		Project(v-for="(item, index) in data.projects" :key="index" :title="item.title" :url="item.url" :github="item.github" :githuburl="item.githuburl" :photo="item.photo" :description="item.description" :stack="item.stack")
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryContent('/projects').findOne())
</script>

