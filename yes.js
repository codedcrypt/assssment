const image = document.getElementById("img")
const phonenumber = document.getElementById("phonenumber")
const fullname = document.getElementById('fullname')
const email = document.getElementById("email")
const address = document.getElementById("address")
const url = "https://randomuser.me/api/"

const CardData = () => {
    fetch (url).then(response => {
        return response.json();
    }).then(data => {

        // console.log(data);
        let cardImage = data.results[0].picture.large
        image.src = cardImage

        let title = data.results[0].name.title
        let firstname = data.results[0].name.first
        let lastname = data.results[0].name.last
        fullname.textContent = `${title} ${firstname} ${lastname}`


        const emailAdress = data.results[0].email
        email.textContent = emailAdress

        const phoneNumber = data.results[0].phonenumber
        phonenumber.textContent = phoneNumber

        const streetAdd = data.result[0].location[0].street.number.city.state.country
        console.log(streetAdd);
        address.textContent = streetAdd

    })
}
CardData()

