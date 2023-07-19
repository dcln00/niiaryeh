<template lang="pug">
section#dev_grid.container
	.parent 
		ContentList(path="dev" v-slot="{ list }")
			div(v-for="(article, index) in list" :key="article._path")
				.featured-img
					NuxtLink(:to="article._path")
						img(:src="article.featured")
				NuxtLink(:to="article._path")
					div {{ `${index + 1} // ${article.title}` }}
</template>


<script setup>
useHead({
	titleTemplate: `%s > web dev`
})
</script>