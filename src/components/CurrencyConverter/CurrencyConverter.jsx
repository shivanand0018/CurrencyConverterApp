import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import './CurrencyConverter.css';
import TextField from '@mui/material/TextField';
import { Button, MenuItem } from '@mui/material';
import ConversionTable from '../ConversionTable/ConversionTable';

const CurrencyConverter = (props) => {
    const [currency, setCurrency] = useState(false)
    const [fromCountry, setFromCountry] = useState('USD')
    const handleFromCountry = (event) => {
        setFromCountry(event.target.value);
        convertAmount();
    }
    const [toCountry, setToCountry] = useState('INR')
    const handleToCountry = (event) => {
        setToCountry(event.target.value)
        convertAmount();
    }
    const [amount, setAmount] = useState('1');
    const handleAmount = (event) => {
        setAmount(event.target.value)
    }
    useEffect(() => {
        convertAmount();
    })
    const convertAmount = async () => {
        const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCountry}&to=${toCountry}&q=${amount}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6b87215243msh1936e22457ea2bep19eac2jsnde3b9286a904',
                'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
            }
        };
        const data = await fetch(url, options);
        const res = await data.json();
        setConversionRate(res);
        setCurrency(true);
    }
    const [conversionRate, setConversionRate] = useState(0);

    return (
        <div>
            <Card id='box'>
                <h1 id='title1'>Convert Your Currency Here...!</h1>
                <div id='card'>
                    <TextField className='input' onChange={handleAmount} value={amount} label="Amount" type='number' variant="outlined" />
                    <TextField select className='input' value={fromCountry} onChange={handleFromCountry} variant="outlined" label='From'>{props.Country.map((country) => <MenuItem value={country}>{country}</MenuItem>)} </TextField>
                    <TextField select className='input' value={toCountry} onChange={handleToCountry} variant="outlined" label='To'>{props.Country.map((country) => <MenuItem value={country}> {country}</MenuItem>)}/</TextField>
                    <Button id='button' variant="contained" onClick={convertAmount}>Convert</Button>{''}
                </div>
                <div id='div2'>
                    {currency && <div>
                        <h4>{amount}{fromCountry}=</h4><h1>{amount * conversionRate}{toCountry}</h1>
                        <p>1{fromCountry}={conversionRate}{toCountry}</p>
                        <p>1{toCountry}={1 / conversionRate}{fromCountry}</p>
                    </div>}
                </div>

            </Card>
            <ConversionTable from={fromCountry} to={toCountry} rate={conversionRate} />
        </div >
    )
}

export default CurrencyConverter