<script setup lang="ts">
const route = useRoute()
console.log(route.path)
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <div class="content">
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
  </div>
</template>

<style>
.content,
.content>div {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}
</style>
