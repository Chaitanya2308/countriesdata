
import { useState, useEffect } from 'react'

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getAllCountries();

  }, [])

  const getAllCountries = async () => {
    var res = await fetch('http://localhost:8000/countries')
    var resData = await res.json()
    console.log(resData)
    setCountries(resData)

  }


  return (
    <div className="container" >
      <h1 className="text-center text-primary m-5">Fetching Countires Api data Using Node</h1>
         <div className="row ">
      {countries.map(ele =>
      (
     
        <div class="card col-4 " >
          <img src={ele.flag} class="card-img-top img-thumbnail" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{ele.name}</h5>
            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Capital: {ele.capital}</li>
            <li class="list-group-item">Population: {ele.population}</li>
          </ul>
        </div>
  
      )
      )}
            </div>

    </div>
  );
}

export default App;
