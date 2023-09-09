fetch('https://restcountries.com/v3/all')
.then(response => response.json())
.then(data =>{
    const dataArray = Object.values(data);

    const sortedData = dataArray.sort((a,b)=> b.population - a.population).slice(0,15)
    const countriesList = document.getElementById("top-countries");
    sortedData.forEach(country=>{
        const listItem = document.createElement("li");
        listItem.textContent=`${country.name.common} - nüfus: ${country.population}`;
        countriesList.appendChild(listItem);
    });

}).catch(error=>{
    console.error("başarısız",error);
});