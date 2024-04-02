<script setup lang="ts">
import type {IPost} from "~/types/model";
import {usePostStore} from "~/stores/post.store";

const {$api} = useNuxtApp()
const postStore = usePostStore();

// const {data, error, pending} = useAsyncData('fetchPostList', () => $api.post.fetchAll())
useAsyncData("fetchPosts", () => postStore.fetchPostList())
const createPost = (dto: IPost) => {
  $api.post.createPost(dto).then(data => {
  }).
  catch((error => {
  }))
}
</script>

<template>
</template>

<style scoped>
</style>