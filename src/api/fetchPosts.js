import {postsUrl} from "../js/constants";

const posts = await fetch(postsUrl)
  .then(res => res.json())
  .catch(err => {
    console.log(err.message)
  })

export {
  posts
}
