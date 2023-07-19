<template lang="pug">
div
	BgWrapper(:style="`background-color: ${data.color}`")
	article#dev.container-fluid.px-5
		div
			.row
				.col-sm-9.document
					.featured-img 
						img(:src='data.featured')
					ContentRenderer(:value="data")
				.col-sm-3.details
					.details__inner
						.doc-title {{ `${data.title} / ${data.created}` }}
						.tag(v-for="(item, index) in data.category" :key="index") {{ item }}
						.description {{ data.description }}
						.stack Stack Used:
							div(v-for="(item, index) in data.frameworks" :key="index") {{ item }}
						NuxtLink(:to='data.url' target='_blank')
							.preview
								.prv-text Preview
	section.nextprev.container-fluid.px-5
		div
			.row 
				.col-sm-6(v-if="prev")
					.prev Prev Project 
					.prev-url
						NuxtLink(:to="prev._path") {{ prev.title }}
				.col-sm-6(v-if="next") 
					.next Next Project
					.next-url
						NuxtLink(:to="next._path") {{ next.title }}
					

</template>

<script setup>
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent(`${route.path}`).findOne()
)

const [prev, next] = await queryContent()
  .only(['title', '_path'])
  .where({ created: { $in: [2022, 2023] }, category: ['web dev'] })
  .findSurround(`${route.path}`)

definePageMeta({
  layout: 'article',
})

useHead({
  titleTemplate: `${data.value.title} > niiaryeh`
})

useContentHead(data)
</script>
