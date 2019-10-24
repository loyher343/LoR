import axios from 'axios';


export default function ( {store} ) {
    return axios.get('/set1-en_us.json').then((response) => {
        console.log(response.data,'middle')
        store.commit('add', response.data);
    })
}
