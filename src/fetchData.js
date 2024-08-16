import { useState} from 'react';
import axios from 'axios';

const useFetchData = (startDate, endDate) => {
const url  = `http://localhost:8089/api/v1/coindesk/value?startdate=${startDate}&enddate=${endDate}`;

const [data,setData] = useState()
const [isloading,setLoading] = useState(true)

      const fetchNow = async () => {
      try {
        const {data: response} = await axios.get(url); 
        const {conversionrate: responsedetails} = await axios.get('https://v6.exchangerate-api.com/v6/10bdcd7446f42655f8d21b71/latest/USD'); 
        console.log(data);
        console.log(conversionrate);
        setData(response);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      };
    };


return {
  data, isloading, conversionrate
};

};

export default useFetchData;