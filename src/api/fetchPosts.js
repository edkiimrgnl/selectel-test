import {postsUrl} from "../js/constants";

const posts = (async function() {
  return await fetch(postsUrl)
    .then(res => res.json())
    .catch(err => {
      console.log(err.message)
    })
})()

export {
  posts
}
