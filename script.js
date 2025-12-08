function getUser() {



  fetch("https://randomuser.me/api/?results=3")

    .then((raw) => raw.json())
    .then((data) => {
      // console.log(data.results);
      document.querySelector('main').innerHTML = "";
      data.results.forEach(function (user) {


        const card = document.createElement("div");
        card.classList.add("card");


        const img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = "";


        const info = document.createElement("div");
        info.classList.add("info");


        const h1 = document.createElement("h1");
        h1.textContent = user.name.first + "" + user.name.first;


        const p = document.createElement("p");
        p.textContent = user.email;


        info.appendChild(h1);
        info.appendChild(p);

        card.appendChild(img);
        card.appendChild(info);


        document.querySelector('main').append(card)


      })

    })
}

getUser();

