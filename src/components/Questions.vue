<template>
    <div >
        <p>{{nextQuestion.question}}</p>       
        <p v-for="answer in displayAnswers" :key="answer">
            <button type="submit" :value="answer" @click=" submitAnswer(answer)">{{answer}}</button></p>  

            <p>Score: {{$store.getters.points}}</p>
        
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
                selectedAnswer:''               
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
                    console.log("No questions remaining")
                    this.$router.push('/results')
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
                if (this.nextQuestion.correct_answer === x ) {
                    console.log("That is correct!")
                    this.$store.state.points += 10 
                    this.showNextQuestion()   
                }
                else {
                    console.log("wrong answer!")
                    this.showNextQuestion()
                }
            }
        },
        mounted(){
            this.fetchQuestions()
            console.log("mounted")
        } 
    })
    
</script>

<style scoped>


</style>
