<template>
    <div class="card-container">
        
        yo
        {{card}}

    </div>
</template>


<script>
export default {
    data() {
        return {
            cardCode: this.$route.params.cardCode
        }
    },
    // asyncData ({ params }) {
    //     const card = this.cards.find(card => String(card.cardCode) === params.cardCode)
    //     return card
    // }
    computed: {
        card () {
            console.log(this.$route)
        }
    }
}
</script>



<style lang="stylus" scoped>

</style>