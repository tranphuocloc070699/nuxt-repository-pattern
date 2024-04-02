import PostModule from "~/repository/modules/post.module";
import AuthModule from "~/repository/modules/auth.module";
export interface IApiInstance {
  post: PostModule;
  auth: AuthModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const NUXT_BASE_URL_PROXY_SERVER : string = config.public.NUXT_BASE_URL_PROXY_SERVER;


  const apiFetcher = $fetch.create({
    baseURL: NUXT_BASE_URL_PROXY_SERVER,
    onRequest({ request, response }) {},
  });
  const postModule = new PostModule(apiFetcher);
  const authModule = new AuthModule(apiFetcher);

  const modules: IApiInstance = {
    post: postModule,
    auth: authModule,
  };
  /*
  * ! This code below is example for the case you want to authenticate user and set token to headers.
  * Why call api in process.client?
  * => Cookie only exist on client.
  *  */
  if (process.client) {
    modules.auth
    .authenticate()
    .then((data) => {
      if(data.accessToken){
        postModule.setAccessToken(data.accessToken);
      }
    })
    .catch((err: any) => {
      console.error("Error occur:" + err)

    });
  }

  return {
    provide: {
      api: modules,
    },
  };
});
