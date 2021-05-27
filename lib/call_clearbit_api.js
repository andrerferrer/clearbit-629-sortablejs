// when refactoring, we want only functions in the other files
const fetchApi = (email) => {
  const authorization = "Bearer sk_232fc2745f40d265541099b35e9968e9";
  const url = `https://person.clearbit.com/v2/people/find?email=${email}`;
  const options = {
    headers: {
      Authorization: authorization
    }
  }
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      const name     = data.name.fullName;
      const email    = data.email;
      const bio      = data.bio;
      const location = data.location;
      document.getElementById("name").innerText     = name;
      document.getElementById("email").innerText    = email;
      document.getElementById("bio").innerText      = bio;
      document.getElementById("location").innerText = location;
  })  
}

const callClearbitAPI = (event) => {

  event.preventDefault();
  const input = document.getElementById('clearbitEmail');
  const email = input.value;
  fetchApi(email)
}

export { callClearbitAPI, fetchApi };