// UPDATE THIS WITH YOU API KEY
const authorization = "Bearer sk_YOUR_API_KEY";
// YOU CAN GET IT HERE:
// https://dashboard.clearbit.com/api



































// PSEUDOCODE

// type an email in the input
// submit the input
// see the data in the DOM

// 1st select the element
const form = document.getElementById('clearbitForm');

// 2nd add event listener
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // get the value of the input (email)
  const input = document.getElementById('clearbitEmail');
  const email = input.value;
  // interpolate that to the url
  const url = `https://person.clearbit.com/v2/people/find?email=${email}`;

  const options = {
    headers: {
      Authorization: authorization
    }
  }
  // fetch the url

  // HOMEWORK
  // const emailPattern = /abc/
  // if (email matches that pattern) {
    fetch(url, options)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        // dig the relevant info inside
        const name     = data.name.fullName;
        const email    = data.email;
        const bio      = data.bio;
        const location = data.location;
        // console.log(name)
        // console.log(email)
        // console.log(bio)
        // console.log(location)
        document.getElementById("name").innerText     = name;
        document.getElementById("email").innerText    = email;
        document.getElementById("bio").innerText      = bio;
        document.getElementById("location").innerText = location;
    })
  // }
  
});
// name, email, bio, location
// display them in the DOM
