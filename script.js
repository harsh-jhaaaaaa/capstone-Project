function loadCars() {
  fetch("http://localhost:5000/cars")
    .then(res => res.json())
    .then(data => {
      const carsDiv = document.getElementById("cars");
      carsDiv.innerHTML = "";

      data.forEach(car => {
        carsDiv.innerHTML += `
          <div class="card">
            <h3>${car.brand} ${car.model}</h3>
            <p>₹${car.price_per_day}/day</p>
            <button onclick="rentCar(${car.id})">Rent Now</button>
          </div>
        `;
      });
    })
    .catch(err => console.log(err));
}

function rentCar(id) {
  fetch("http://localhost:5000/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Harsh",
      car_id: id
    })
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => console.log(err));
}
