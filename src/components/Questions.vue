<template>
    <div >
        <p >{{nextQuestion.question}}  <button @click="showNextQuestion()" >Next Question</button>
        <button @click="getDisplayAnswers()">Answers</button></p>
        <p>{{nextQuestion.correct_answer}}</p>
        <p>{{displayAnswers}}</p>

        
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
                displayAnswers:[]
                
            }
        },
        methods: {
            async fetchQuestions() {
                let response = await fetch("https://opentdb.com/api.php?amount=6&category=18&difficulty=medium")
               // let response = await fetch("https://opentdb.com/api.php?amount=" + this.amountChoice + "&category=" + this.categoriesChoice+ "&difficulty="+this.difficultyChoice)
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
