

const button = document.getElementById('btn')
console.log(button)
button.addEventListener('click',() => {
     
     alert('More to Come')

     fetchData ('https:/jsonplaceholder.typicode.com/user');


});


let numbers = []

numbers.push(9)

async function fetchData(url) {
      //fetch the data
      const data= await fetch(url)
      //await the promise to get your response
      const response =await data.json()

      console.log(response)

      console.log(response[1])


      

 response.map(
      (user) => {
      console.log(user.id)
      console.log(user.name)
      console.log(user.email)
      console.log(user.username)
      console.log(user.company)
      console.log(user.address.geo.lat)
      console.log(user.zipcode)
      console.log(user.catchPhrase)
      console.log(user.city)
      console.log(user.phone)
      console.log(user.street)
      console.log(user.website)
      console.log(user.suite)
      
 }
)
 
}

// // fetch('https://jsonplaceholder.typicode.com/users')
// //       .then(response => response.json())
// //       .then(json => console.log(json))

//       // console.log(json)


