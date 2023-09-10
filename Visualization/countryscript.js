fetch("https://restcountries.com/v3/all").then(response => response.json())
.then(data =>{
    const dataArray = Object.values(data);

    const sortedData = dataArray.sort((a,b)=> b.population - a.population).slice(0,10);
    const countriesList = document.getElementById('top-countries');
    sortedData.forEach(country =>{
        const listItem = document.createElement('li');
        listItem.textContent=`${country.name.common}`;
        countriesList.appendChild(listItem);
    })
});


fetch('https://restcountries.com/v3/all')
.then(response => response.json())
  .then(data => {
    // API'den gelen veriyi bir diziye çıkarma
    const countriesArray = Object.values(data);

    // Tüm dilleri toplama
    const allLanguages = [];
    countriesArray.forEach(country => {
      if (country.languages) {
        const countryLanguages = Object.keys(country.languages);
        allLanguages.push(...countryLanguages);
      }
    });
    const languageCountys ={};
    allLanguages.forEach(language=>{
        if(languageCountys[language]){
            languageCountys[language]++;
        }
        else {
            languageCountys[language]=1;
        }
    });
    const sortedLanguages = Object.keys(languageCountys).sort((a,b)=> languageCountys[b] - languageCountys[a]).slice(0,15);
    const languagesList = document.getElementById('top-languages');
    sortedLanguages.forEach(language=>{
        const listItem = document.createElement('li');
        listItem.textContent= `${languageCountys[language]}`;
        languagesList.appendChild(listItem);
    })
})