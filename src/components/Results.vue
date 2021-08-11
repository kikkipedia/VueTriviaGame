<template>
    <div>
        <h3>Results</h3>
        <p>Your total score: {{$store.getters.points}}</p>
        
        <div v-for="answer in $store.state.answers" :key="answer">
            <div>
                <p>Question: {{ answer[0] }}</p>
                <p>Correct answer: {{ answer[1] }}</p>
                <p>Your answer: {{ answer[2] }}</p>
                <hr/>
            </div>           
        </div>

        <p><router-link to="/"><button @click="startOver()">Start over</button></router-link></p>
        <p><router-link to="/questions"><button @click="newQuestions()">Replay with new questions</button></router-link></p>
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



<style></style>