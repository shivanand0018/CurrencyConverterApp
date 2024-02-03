import { useEffect, useState } from 'react';
import './App.css';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import NavBar from './components/NavBarComponent/NavBar';
import ConversionTable from './components/ConversionTable/ConversionTable';
import Footer from './components/Footer/Footer';

function App() {

  const [data, setData] = useState(null);
  const [dataFetched, setIsDataFetched] = useState(false);

  const url = 'https://currency-exchange.p.rapidapi.com/listquotes';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6b87215243msh1936e22457ea2bep19eac2jsnde3b9286a904',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetchApi();
  }, [])

  const fetchApi = async () => {
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setIsDataFetched(true);
    console.log(data);
  }

  console.log(data)


  return (
    <div className="App">
      <NavBar />
      {dataFetched && <CurrencyConverter Country={data}/>}
      <Footer/>
    </div>
  );
}

export default App;
