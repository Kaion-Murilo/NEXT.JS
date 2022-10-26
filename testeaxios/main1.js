const url = "http://backendtalentos.herokuapp.com/listuser"

function getUsers() {
  axios.get(url)
    .then(response => {
      const data = response.data

      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
getUsers()
// addNewUser({
//   name: "Olivia Zars",
//   avatar: "http://lorempixel.com/400/200",
//   city: "Rio do Sul"
// })
// updateUser({
//   name: "Marcelo Calvis",
//   avatar: "http://lorempixel.com/400/200",
//   city: "Recife"
// }, 3)
// deleteUser(2)