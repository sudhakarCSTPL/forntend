import { useState} from 'react';
import axios from 'axios';

const useFetchData = (startDate, endDate) => {
const url  = `http://localhost:8089/api/v1/coindesk/value?startdate=${startDate}&enddate=${endDate}`;

const [data,setData] = useState()
const [isloading,setLoading] = useState(true)

      const fetchNow = async () => {
      try {
        const {data: response} = await axios.get(url);
        console.log(data)
        setData(response);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      };
    };


return {
  data, isloading
};

};

export default useFetchData;