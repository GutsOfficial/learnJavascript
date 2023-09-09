// API'den ülke verilerini çekme ve dünya nüfusuna göre sıralama
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

// API'den dil verilerini çekme ve en çok konuşulan dillere göre sıralama
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

    // Dilleri sayma ve en çok konuşulanları bulma
    const languageCounts = {};
    allLanguages.forEach(language => {
      if (languageCounts[language]) {
        languageCounts[language]++;
      } else {
        languageCounts[language] = 1;
      }
    });

    // Dil sayılarını sıralama
    const sortedLanguages = Object.keys(languageCounts).sort((a, b) => languageCounts[b] - languageCounts[a]).slice(0, 10);

    // HTML ile görselleştirme
    const languagesList = document.getElementById('top-languages');
    sortedLanguages.forEach(language => {
      const listItem = document.createElement('li');
      listItem.textContent = `Dil: ${language} - Ülke Sayısı: ${languageCounts[language]}`;
      languagesList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('API isteği başarısız:', error);
  });
