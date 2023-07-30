const dropDown= document.querySelector('.dropdownmenu');
const dropOptions = document.querySelector('.drop-options');
const toggle = document.querySelector('.toggle');
const options = document.querySelector('.show-options');
const countries = document.querySelector('.countries');
const search = document.querySelector('.search');
const regions = document.querySelector('.regions');




toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    dropDown.classList.toggle('dark-mode');
    
})

dropDown.addEventListener('click', () => {
    dropOptions.classList.toggle('show-options')
})


async function getCountries(){
    const URL = await fetch("https://restcountries.com/v2/all");
    const res = await URL.json();
    console.log(res);
    res.forEach(api => {
        showCountry(api);
    });
}

getCountries();

function showCountry(data) {
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = `
    <div class = "country-img">
         <img src=${data.flag} alt="">
    </div>

    <div class="country-details">
                <h4 class="countryName">${data.name}</h4>
                <p><strong>population:</strong>${data.population}</p>
                <p class="regionName"><strong>Region:</strong>${data.region}</p>
                <p><strong>Capital</strong>${data.capital}</p>
    </div>
    `

    countries.appendChild(country)
}

const countryName = document.getElementsByClassName('countryName');

search.addEventListener('input', () => {
    Array.from(countryName).forEach(country => {
        if (country.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            country.parentElement.parentElement.style.display ='grid';
        } else {
            country.parentElement.parentElement.style.display ='none';
        }
    })
})

const regionName = document.getElementsByClassName('regionName');

regions.forEach(region => {
    region.addEventListener('click', e => {
        Array.from(regionName).forEach(element => {
            if(element.innerText.includes(region.innerText) || region.innerText ===
            "All") {
                element.parentElement.parentElement.style.display ='grid';
          } else {
            element.parentElement.parentElement.style.display ='none';
          }
        })
    })
})