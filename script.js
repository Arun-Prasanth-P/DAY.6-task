var request =  new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all");
request.send()
request.onload = function(){
     var res = JSON.parse(request.response)
     console.log(res);

    //  Get all the countries from asia continent / region using filter method
    var  data = res.filter((ele)=>ele.region =="Asia");
    console.log(data);

    // Get all the countries with a population of less than 2 lakhs using filter method
      var pop = res.filter((ele)=>ele.population > 200000);
      console.log(pop);

    //   Print the following details name, capital, flag using the forEach method
     data.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags}`);
      });

    //   Print the total population of countries using the reduce method
    var casia = res.filter((ele)=>ele.region == "Asia");
    var cpop = casia.reduce((acc,cv)=>acc+cv.population,0);
    console.log(cpop);

    // Print the country that uses US dollars as currency
    var usdCountries = data.filter(country => {
        return country.currencies && Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
      });
      console.log(usdCountries);
}