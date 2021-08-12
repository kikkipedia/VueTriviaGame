<template >
    <div class="background font" >
        <div class="flex-container" >
        <p>Difficulty</p>
        <select class="selector" v-model="difficultyChoice" >
                <option v-for="(option, index) in difficulties" v-bind:key="index" selected>
                {{ option }}
            </option>
        </select>
        <p>Categories</p>
        <select class="selector" v-model="categoriesChoice">
            <option v-for="category in categories" v-bind:key="category.id" :value="category.id">
                {{category.name}}
            </option>
        </select>
        <p># of questions</p>
        <input class="inputNumber"   v-model="amountChoice" type="number" min="1">
        
        
    </div >
    <div class="flex-container" v-if="categoriesChoice && difficultyChoice && (amountChoice > 0)">
            <p><router-link :to="{ name: 'Questions' }"><button class="button" id="start" v-on:click="changed">Start</button></router-link></p>
        </div>
    </div>

    
</template>

<script>
    export default ({
        name: "Start",
        data() {
            return {
                difficulties: ['easy', 'medium', 'hard'],
                categories: [],
                categoriesChoice: {},
                difficultyChoice: {},
                amountChoice: {}
            }
        },
        methods: {
            async fetchCategory() {
                let response = await fetch("https://opentdb.com/api_category.php")
                    .then(response => response.json())
                    this.categories = response.trivia_categories
            },
            //gets the api url for the questions
            changed: function() {
                const quizUrl = "https://opentdb.com/api.php?amount=" + this.amountChoice + "&category=" + this.categoriesChoice + "&difficulty=" + this.difficultyChoice + "&encode=base64"
                this.$store.commit('setUrl', quizUrl)
            }
        },
        created() {
            this.fetchCategory()
        }
    })
</script>

<style>

.selector{
    display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  border-color: cornflowerblue;
  border-width: 2px;
  border-radius: 6px; 
}
.inputNumber{
      display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  border-color: cornflowerblue;
  border-width: 2px;
  border-radius: 6px;
}

</style>
