<template >
    <div class="background font">
        <div class="result-container">
            <h3>Results</h3>
        </div>
        <div>
            <p class="results-container" v-for="answer in $store.getters.answers" :key="answer" :value="answer">{{answer}}

            </p>
        </div>
        <div class="flex-container">
            <p><router-link to="/"><button class="button" @click="startOver()">Start over</button></router-link></p>
            <p><router-link to="/questions"><button class="button" @click="newQuestions()">Replay with new questions</button></router-link></p>
            <p class="score-container">Your total score: {{$store.getters.points}}</p>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
    export default({
        name: "Results",
        methods: {
            startOver() {
                this.$store.state.points = 0
                this.$store.state.url = '',
                this.$store.state.answers = []
            },
            newQuestions() {
                this.$store.state.points = 0
                this.$store.state.answers = []
            }
        }
    })
</script>



<style>

  .result-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: white;
      border-radius: 6px;
      margin: 30px;
  }
  .results-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 650px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: white;
      border-radius: 6px;
      margin: 30px;
  }
  .score-container{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid cornflowerblue;
      background-color: white;
      color: rgb(49, 97, 185);
      height: 60px;
      width: 140px;
      border-radius: 6px;
      margin: 10px;
      font-size: 14px;
      text-align: center;
  }
</style>