import type {IPost} from "~/types/model";

import {defineStore} from "pinia";

export const usePostStore = defineStore("post", () => {
  const {$api} = useNuxtApp();
  const postList = ref<IPost[]>([]);

  const fetchPostList = async () => {
    try {
      $api.post.fetchAll().then(data => {
        console.log(data)
      }).catch(error => {
        console.error(error)
      })
    } catch (error) {
      console.error("fetchPostList error:" + error);
    }
  };

  return {postList, fetchPostList};
});
