<template>
    <div >
        <p >{{nextQuestion.question}}  <button @click="showNextQuestion()">Next Question</button></p>

        
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
                incorrectAnswers:[]
            }
        },
        methods: {
            async fetchQuestions() {
                let response = await fetch("https://opentdb.com/api.php?amount=6&category=18&difficulty=medium")
               // let response = await fetch("https://opentdb.com/api.php?amount=" + this.amountChoice + "&category=" + this.categoriesChoice+ "&difficulty="+this.difficultyChoice)
                .then(response => response.json())
                this.questions = response.results
            },
            showNextQuestion(){
                if(this.questions.length < 1) {
                    //No questions remain
                    console.log("No questions remaining")
                }else{
                    this.nextQuestion = this.questions[Math.floor(Math.random()*this.questions.length)]
                    this.questions.pop(this.nextQuestion)
                    console.log(this.nextQuestion) 
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
