<template >
    <div class="card-container">
        <div>
            
            <h1 class='container'>{{ card.name }}</h1>
            <div class="card-image">
            
            <img :src="'/cards/'+card.cardCode+'.png'" >
                
            </div>
            <div class="card-image-fullq">

            <img :src="'/cards/'+card.cardCode+'-full.png'" >
                
            </div>
            <div >
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
        {{assCards}}{{otherCardsData}}
            {{log}}

            
    </div>
</template>


<script>
export default {
   
    data() {
        console.log(this.$route.params.cardCode)
        return {
            cards: this.$store.state.cards,
            cardCode: this.$route.params.cardCode,
            associatedCardRefs: []
        }
    },
     middleware: 'cardData',
   
    computed: {
        card () {
            console.log(this.cards.find(({cardCode}) => cardCode === this.cardCode ))
            return this.cards.find(({cardCode}) => cardCode === this.cardCode)
            
        },
        assCards () {
              this.associatedCardRefs = this.card.associatedCardRefs
        },
        otherCardsData () {
           return this.associatedCardRefs.forEach((card) => {
    
               this.cards.find(({cardCode}) => cardCode === card)
           })
        },
        log () {
            console.log(this.associatedCardRefs)
        }
    }
}
</script>


<style lang = "scss">
.container{
    
}
.card-container {

}

</style>