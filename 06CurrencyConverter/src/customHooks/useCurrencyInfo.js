/*import { useEffect, useState } from "react";


//=====Custom Hook Design
function useCurrencyInfo(currency){
const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`
            https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>{res.json()})
            .then((res)=> setData(res[currency]))
            .catch((err) => {
                console.error("Error fetching currency data:", err);
                setError(err); // Optional: handle the error
              });
            console.log(data);
            
    }, [currency ])
    console.log(data);
    return data
}


export default useCurrencyInfo;
*/

/*import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency, toCurrency) {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch currency data');
        }
        return res.json();
      })
      .then((data) => {
        if (data && data[fromCurrency][toCurrency]) {
          setRate(data[fromCurrency][toCurrency]); // Get the conversion rate
        } else {
          throw new Error('Currency pair not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [fromCurrency, toCurrency]);

  return { rate, error, loading };
}

export default useCurrencyInfo;*/

import { useEffect, useState } from "react";

function useCurrencyInfo(fromCurrency) {
  const [data, setData] = useState({});
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch currency data");
        }
        const data = await response.json();
        
        setData(data[fromCurrency]); // Set the rates for the fromCurrency
        setAvailableCurrencies(Object.keys(data[fromCurrency])); // Set available currencies
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [fromCurrency]);

  return { data, availableCurrencies, loading, error };
}

export default useCurrencyInfo;

