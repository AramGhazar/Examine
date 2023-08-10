import {API} from "../utils";
import {useEffect, useState} from 'react';
import "./style.css";

const url = `${API}`;

const Main = () => {
    const [inputValue, setinputValue] = useState('');
    const [countries, setCountries] = useState([]);

    const getCountries = async() => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getCountries();
    }, []);
    
    const filtereddata = countries.filter(item => {
        return item.name.official.includes(inputValue) 
 })


return (
    <>
    <input type='text' value={inputValue} onChange={(inputValue) => setinputValue(inputValue.target.value)} /> 
    <button>Search</button>
      <div className="container">
        {filtereddata.map((item) => 
            <div key={countries.idd}>
                <div className='cont1'>
                <div className="image">
                <img src={item.flags.svg} alt="flag"  className='flag'/>
                </div>
            <div>
                <p>{item.name.official}</p>
                <p>{item.timezones}</p>
               
            </div>
            </div>
            </div>
        )}
      </div>
    </>
  
  )
}

export default Main;