<template>
    <div >
        <p>{{nextQuestion.question}}</p>       
        <p v-for="answer in displayAnswers" :key="answer">
            <button type="submit" :value="answer" @click=" submitAnswer(answer)">{{answer}}</button></p>         
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
                selectedAnswer:'',
                isCorrect: false              
            }
        },
        methods: {
            async fetchQuestions() {
                const url = this.$store.state.url
                console.log(url)
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
                //randomises answers order on screen
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
                    this.$router.push('/results')
                } else {
                    this.nextQuestion = this.questions[Math.floor(Math.random()*this.questions.length)]
                    this.incorrectAnswers = this.nextQuestion.incorrect_answers
                    this.correctAnswer = this.nextQuestion.correct_answer
                    this.getDisplayAnswers()
                    //remove selected question from local array so it will not show again
                    const index = this.questions.indexOf(this.nextQuestion)
                    this.questions.splice(index, 1)
                }
                
            },
            submitAnswer(x){                
                if (this.nextQuestion.correct_answer === x ) {
                    console.log("That is correct!")
                    this.isCorrect = true
                    this.$store.state.points += 10 
                    this.submitToResults()
                    this.showNextQuestion()   
                }
                else {
                    console.log("Wrong answer!")
                    this.isCorrect = false
                    this.submitToResults()
                    this.showNextQuestion()
                }
            },
            submitToResults() {
                let answerArray = [this.nextQuestion.question, this.correctAnswer, this.isCorrect]
                this.$store.commit('addAnswers', answerArray);
            }
        },
        mounted(){
            this.fetchQuestions()
        } 
    })
    
</script>

<style scoped>


</style>
