/*
* Prefix /api for api server
*/
const prefix : string = '/api';

/*
* Prefix /api/another for another server
* */
const anotherPrefix : string = '/api/another'

const Routes = {
  Post:{
    FetchAll:()  => `${prefix}/posts`,
    FetchDetail : (id: number) => `${prefix}/posts/${id}`,
    CreatePost :()  => `${prefix}/posts`
  },
  User:{
    Authenticate:()  => `${anotherPrefix}/users`
  }
}

export default Routes