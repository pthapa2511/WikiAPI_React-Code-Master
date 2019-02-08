
// Calling Api Using Axios
import {LIST_URL} from '../constants/api';

  // Calling Api 
export function cityList(){
    const request = fetch(LIST_URL, { method: 'GET'})
                  .then(response => response.json());
    return{
        type: 'CITY_LIST',
        payload:request
    }
}

export function cityDetails(city) {
  console.log("calling detail action", city)
  const request = fetch(`${LIST_URL}/details/${city}`, { method: 'GET'})
                  .then(response => response.json());
  return{
    type: 'CITY_DETAIL',
    payload:request
}
}



