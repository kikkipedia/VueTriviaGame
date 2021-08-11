<template >
    <div class="border-box" style="background-color: #FFEFEF">
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
    <div class="flex-container" v-if="categoriesChoice && difficultyChoice && amountChoice">
            <p><router-link :to="{ name: 'Questions' }"><button class="startButton" id="start" v-on:click="changed">Start</button></router-link></p>
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
                amount: 0,
                categoryId: {},
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
.flex-container {
      display: flex;
      height: 200px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      
  }
.startButton{
    display:flex;
    align-items: center;
    justify-content:center;  
    border: 2px solid blue;
    background-color: white;
    border-radius: 6px;
    width: 100px;
    height: 40px;
    font-size: 20px;
       
}
.borderBox{
  background-color: #FFEFEF; 
  color: coral; 
  box-sizing: border-box;
}
.selector{
    display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  border-color: blue;
  border-width: 2px;
  border-radius: 6px;
    
}
.inputNumber{
      display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: flex-start;
  align-items: flex-start;
  border-color: blue;
  border-width: 2px;
  border-radius: 6px;
}

</style>
