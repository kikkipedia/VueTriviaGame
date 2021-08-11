<template>
    <div >
        <p >{{nextQuestion.question}}  <button @click="showNextQuestion()" >Next Question</button>
        
        <p v-for="answer in displayAnswers" :key="answer">
            <button type="submit" :value="answer" @click="showNextQuestion(); submitAnswer(answer);">{{answer}}</button></p>  

            <p>{{score}}</p>
        
    </div>
</template>

<script>

    export default({
        name: "Questions",
        data(){
            return{
                questions:[],
                nextQuestion:'',
                question:'',
                type:{},
                correctAnswer:{},
                incorrectAnswers:[],
                displayAnswers:[],
                score:0,
                selectedAnswer:''
                
            }
        },
        methods: {
            async fetchQuestions() {
                let response = await fetch(this.$store.url)
                .then(response => response.json())
                this.questions = response.results
                
            },
            getDisplayAnswers(){
                for (let index = 0; index < this.incorrectAnswers.length; index++) {
                    this.displayAnswers.push(this.incorrectAnswers[index])
                }
                this.displayAnswers.push(this.correctAnswer)
                this.displayAnswers.sort(()=>Math.random()-0.5)

            },
            showNextQuestion(){
                 this.displayAnswers = []
                if(this.questions.length < 1) {
                    //No questions remain, progress to next screen
                    console.log("No questions remaining")
                }else{
                    this.nextQuestion = this.questions[Math.floor(Math.random()*this.questions.length)]
                    this.incorrectAnswers = this.nextQuestion.incorrect_answers
                    this.correctAnswer = this.nextQuestion.correct_answer
                    this.questions.pop(this.nextQuestion)
                    console.log(this.nextQuestion) 
                      this.getDisplayAnswers()

                }
                
            },
            submitAnswer(x){
                
                console.log(this.nextQuestion.correct_answer)
                console.log(x)
                if (this.nextQuestion.correct_answer === x ) {
                                        
                    this.score +=10
                    }
            }
        },
        created(){
            this.fetchQuestions()
           // this.showNextQuestion()
        }

    })
</script>

<style scoped>


</style>
