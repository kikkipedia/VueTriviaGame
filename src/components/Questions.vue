<template>
<body class="background">
    <div class="background font" >

        <div class="question-container">
            <p >{{question}}</p> 
        </div>
        <div class="answers-container">
            <p v-for="answer in displayAnswers" :key="answer">

            <button class="button" type="submit" :value="answer" @click="submitAnswer(answer);">{{answer}}</button></p>  


        </div>
 
    </div>
</body>

</template>

<script>

    export default({
        name: "Questions",
        data(){
            return{
                questions:[],
                nextQuestion:'',
                question:'',
                correctAnswer:{},
                incorrectAnswers:[],
                displayAnswers:[]            
            }
        },
        methods: {
            async fetchQuestions() {
                const url = this.$store.state.url
                try {
                    let response = await fetch(url)
                    .then(response => response.json())
                    this.questions = response.results
                }
                catch(err){
                    console.log("Something happened: " + err)
                }
                this.showNextQuestion()
                
            },
            getDisplayAnswers(){    
                //push all answers to an randomised
                for (let index = 0; index < this.incorrectAnswers.length; index++) {
                    this.displayAnswers.push(this.decode64(this.incorrectAnswers[index]))
                }
                this.displayAnswers.push(this.correctAnswer)
                this.displayAnswers.sort(()=>Math.random()-0.5)

            },
            showNextQuestion(){
                this.displayAnswers = []
                if(this.questions.length < 1) {
                    //No questions remain, progress to next screen
                    this.$router.push('/results')
                } else {
                    //random question from questions-array
                    this.nextQuestion = this.questions[Math.floor(Math.random()*this.questions.length)]
                    this.question = this.decode64(this.nextQuestion.question)
                    this.incorrectAnswers = this.nextQuestion.incorrect_answers
                    this.correctAnswer = this.decode64(this.nextQuestion.correct_answer)
                    this.getDisplayAnswers()
                    //remove selected question from local array so it will not show again
                    const index = this.questions.indexOf(this.nextQuestion)
                    this.questions.splice(index, 1)
                }
                
            },
            submitAnswer(x){                
                if (this.decode64(this.nextQuestion.correct_answer) === x ) {
                    this.$store.state.points += 10 
                    this.submitToResults(x)
                    this.showNextQuestion()   
                }
                else {
                    this.submitToResults(x)
                    this.showNextQuestion()
                }
            },
            //saves questions and answers as an object in vuex store array
            submitToResults(x) {
                const answerArray = [this.question, this.correctAnswer, x]
                this.$store.commit('addAnswers', answerArray);
            },
            //decodes text from API
            decode64(text) {
                let buff = new Buffer.from(text, 'base64')
                let encodedText = buff.toString('ascii')
                return encodedText
            }
        },
        mounted(){
            this.fetchQuestions()
        } 
    })
    
</script>

<style >

.question-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      border-width: 10px;
      border: 2px solid cornflowerblue; 
      background-color: white;
      border-radius: 6px;
      margin: 30px;
  }
  .answers-container{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
  }
  


</style>
