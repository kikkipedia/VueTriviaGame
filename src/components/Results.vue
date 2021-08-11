
<template>
    <div class="background font">
        <h3>Results</h3>
        <p>Your total score: {{$store.getters.points}}</p>
        
        <div class="results-container v-for="answer in $store.state.answers" :key="answer">
            <div>
                <p>Question: {{ answer[0] }}</p>
                <p>Correct answer: {{ answer[1] }}</p>
                <p>Your answer: {{ answer[2] }}</p>
                <hr/>
            </div>           
        </div>
        <div class="flex-container">
        <p><router-link to="/"><button class="button" @click="startOver()">Start over</button></router-link></p>
        <p><router-link to="/questions"><button class="button" @click="newQuestions()">Replay with new questions</button></router-link></p>
        </div>

    </div>
</template>

<script>
    export default({
        name: "Results",
        methods: {
            //resets state
            startOver() {
                this.$store.state.points = 0
                this.$store.state.url = '',
                this.$store.state.answers = []
            },
            //keeps url state
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