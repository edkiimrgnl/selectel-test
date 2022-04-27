import {usersUrl} from "../js/constants";

const users = (async function() {
  return await fetch(usersUrl)
    .then(res => res.json())
    .catch(err => {
      console.log(err.message)
    })
})()

export {
  users
}
