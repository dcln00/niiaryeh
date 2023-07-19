<template lang="pug">
div
	article#brand.container-fluid.px-5
		div
			.row 
				.col-sm-3.details
					.details__inner
						.doc-title {{ `${data.title} / ${data.created}` }}
						.description {{ data.description }}
						.tag-cloud(v-for="item in data.tags" :key="item")
							.tag {{ item }}
				.col-sm-8.document 
					.featured-img 
						img(:src='data.featured')
					ContentRenderer(:value="data")
				.col-sm-1.pagination-icons
					.navigation.d-flex.justify-content-center
						NuxtLink(v-if='prev' :to="prev._path")
							Icon(name='material-symbols:chevron-left' color='#8e8e8e')
						NuxtLink(v-if='next' :to="next._path")
							Icon(name='material-symbols:chevron-right' color='#8e8e8e')
</template>

<script setup>
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () =>
  queryContent(`${route.path}`).findOne()
)

const [prev, next] = await queryContent()
  .only(['title', '_path'])
  .where({ created: { $in: [2022, 2023] }, category: ['brand'] })
  .findSurround(`${route.path}`)

definePageMeta({
  layout: 'article',
})

useHead({
  titleTemplate: `${data.value.title} > niiaryeh`
})

useContentHead(data)
</script>