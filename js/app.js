const fetchCountries = async () => {
  const url = path => `https://restcountries.com/v2/${path}`
  
  const countriesArray = []
  countriesArray.push(await fetch(url("all")).then(res => res.json()))
  
  let countriesLi = ''

  if (countriesLi.length === 0) {
    countriesArray[0].forEach(country => {
      console.log(country.region)
      const eachCountry = `
        <li class="countryCard ${country.region}">
          <div class="countryCard__inner">
            <div class="countryCard__innerFront">
              <img class="countryCard__flag" src="${country.flags.svg}" alt="Country of ${country.name}" />
            </div>
            <div class="countryCard__innerBack">
              <h3>${country.name}</h3>
              <p>Oficial name: ${country.name}</p>
              <p>Capital: ${country.capital}</p>
              <p>Region: ${country.region}</p>
              <p>Subregion: ${country.subregion}</p>
            </div>
          </div>
        </li>
      `
      countriesLi += eachCountry
    })
  }

  const countryUl =  document.getElementById('countryList__list')
  countryUl.innerHTML = countriesLi
}
  
fetchCountries();