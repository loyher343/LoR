<template>
      <div>
        <h1>UwU</h1>
        <div class="cardSet">
          <div class="card" v-for="(card, index) in $store.state.cards" v-bind:key="card.cardCode">
            <div>
              <h2>{{ card.name }}  index: {{ index }}</h2>
              <div class="card-image">

                 <img @click.prevent="cardClick(card.cardCode)"  :src="'/cards/'+card.cardCode+'.png'" >
                
              </div>
            </div>
          </div>
        </div>
        {{ $store.state.cards[0].name }}
      </div>
</template>

<script>
import axios from 'axios'

const cardData = `https://pokeapi.co/api/v2/pokemon/ditto/`
export default {
  data() {console.log("!!!!!!!!!",this.$store.state)
    return{
      cardCode: this.$route.params.cardCode,
      cards: {},
      card: { },
      cardCode: '',
    }
  },

  middleware: 'cardData',


  methods: {
    cardClick(cardCode) {
      console.log(this.$store.state,'state')
      this.$router.push(`card/${cardCode}`)
    }
  }


 
}
</script>

<style>
 .cardSet {
   display: flex;
   flex-wrap: wrap;
   width: 100%;
 }
 .card {
   margin: auto;
   padding-bottom: 40px;
   width: 300px;
 }
.card-image {
  
}
</style>