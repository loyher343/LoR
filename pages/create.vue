<template>
      <div>
        <h1>UwU</h1>
        <div class="cardSet">
          <div class="card" v-for="(card, index) in response.data" :key="index">
            <div>
              <div class="card-image">
                <img :src="'/cards/'+card.cardCode+'.png'" >
              </div>
              <div >
                <div>name: {{ card.name }}</div>
                <div>cardCode: {{ card.cardCode }}</div>
                <div>cost: {{ card.cost }}</div>
                <div>type: {{ card.type }}</div>
                <div>region: {{ card.region }}</div>
                <div v-if="card.flavorText">flavorText: {{ card.flavorText }}</div>
                <div v-if="card.health">health: {{ card.health }}</div>
                <div v-if="card.description">description: {{ card.descriptionRaw }} </div>
                <div>rarity: {{ card.rarity }}</div>
              </div>
            </div>
          </div>
        </div>
        {{ response.data[0].name }}
      </div>
</template>

<script>
import axios from 'axios'
const cardData = `https://pokeapi.co/api/v2/pokemon/ditto/`
export default {



  // async asyncData({}) {
  //   console.log('Start!!!!!!!!!!!!!!!!!!!!')
  //  return axios.get(`https://pokeapi.co/api/v2/pokemon/ditto/`).then(function(response) {
  //    console.log(response,"yyoooooooo")
  //    return{response}
     
  //  })
   
  //   console.log( response )
  //   return response
  // }


  async asyncData({}) {
    //console.log('Start!!!!!!!!!!!!!!!!!!!!')
   return axios.get('/set1-en_us.json').then(function(response) {
     console.log(response.data[0],"yyoooooooo")
     return{response}
     
   })
   
    //console.log( response )
    return response
  }
 
}
</script>

<style>
 .cardSet {
   display: flex;
   flex-wrap: wrap;
   width: 80%;
 }
 .card {
   margin: auto;
   padding-bottom: 40px;
   width: 300px;
 }
.card-image {
  
}
</style>