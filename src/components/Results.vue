<template>
    <div>
        <h3>Results</h3>
        <p>Your total score: {{$store.getters.points}}</p>
        <p>Show question and user/right answers</p>
        <p>FUNKAR EJ</p>
        <p><router-link to="/"><button @click="backToStart()">Start over</button></router-link></p>
        <p><router-link to="/questions"><button @click="newQuestions()">Replay with new questions</button></router-link></p>
    </div>
</template>

<script>
    export default({
        name: "Results",
        /* data() {
            return
        }, */
        methods: {
            startOver() {
                this.$store.state.points = 0
                this.$store.state.url = ''
            },
            newQuestions() {
                this.$store.state.points = 0
            }
        }
    })
</script>



<style></style>