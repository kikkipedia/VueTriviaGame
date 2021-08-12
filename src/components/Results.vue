
<template>
    <div>
        <div>       
          
    </div>
    <div class="background font">
        <h3 class="result-container">Results</h3>
        
        <div  v-for="answer in $store.state.answers" :key="answer">
            <div >
                <p class="results-container">Question: <br>{{ answer[0] }}</p>
                
                    <div class="flex-container" v-if="answer[1] === answer[2]">
                        <p class="answer-container">Correct answer: <br>{{ answer[1] }}</p>
                         <p class="answerCorrect-container">Your answer: <br>{{ answer[2] }}</p>
                    </div>
                    <div class="flex-container" v-else>
                        <p class="answer-container">Correct answer: <br>{{ answer[1] }}</p>
                         <p class="answerIncorrect-container">Your answer: <br>{{ answer[2] }}</p>
                    </div>
                                
                <hr/>
            </div>           
        </div>
        <div class="flex-container">
        <p><router-link to="/"><button class="button" @click="startOver()">Start over</button></router-link></p>
        <p><router-link to="/questions"><button class="button" @click="newQuestions()">Replay with new questions</button></router-link></p>
        <p class="score-container">Your total score: {{$store.getters.points}}</p>
        </div>

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
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: white;
      border-radius: 6px;
      margin: 30px;
      text-align: center;
  }
  .score-container{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid cornflowerblue;
      background-color: white;
      color: rgb(49, 97, 185);
      height: 60px;
      width: 150px;
      border-radius: 6px;
      margin: 10px;
      font-size: 14px;
      text-align: center;
  }

  .answer-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 300px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: white;
      border-radius: 6px;
      margin: 30px;
      text-align: center;
  }
  .answerCorrect-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 300px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: rgb(194, 255, 170);
      border-radius: 6px;
      margin: 30px;
      text-align: center;
  }
  .answerIncorrect-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 300px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: rgb(247, 194, 194);
      border-radius: 6px;
      margin: 30px;
      text-align: center;
  }

</style>