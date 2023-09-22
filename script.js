console.log("loaded");

let rootElement = document.querySelector("#root")
//console.log(rootElement)

//let htmlContent = "<h2>Hello world</h2>"

//rootElement.insertAdjacentHTML("beforeend",htmlContent)

/* let counter = 0;

while (counter < 10) {
    rootElement.insertAdjacentHTML("beforeend",htmlContent);
    counter++;
} */

/* for (let counter = 0; counter <= 10; counter++) {
    rootElement.insertAdjacentHTML("beforeend",htmlContent);
} */

//let array = ["alma", 'korte', 'szilva'];

/* for (let counter = 0; counter <= 10; counter++) {
    rootElement.insertAdjacentHTML("beforeend",`<h2> ${array[0]} </h2>`);
} */

/* for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML("beforeend",`<h2> ${array[index]} </h2>`);
} */

fetch('https://restcountries.com/v3.1/all')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        for (let index = 0; index < data.length; index++) {
            let countryName = data[index].name.common;
            let countryPopulation = data[index].population;
            let countryArea = data[index].area;

            rootElement.insertAdjacentHTML("beforeend", `
                <div class="country"> 
                 <h2> ${countryName} </h2>
                 <p> population: ${countryPopulation} </p>
                 <p> area: ${countryArea} km2 </p>
                </div>
            `);
        }
    });
