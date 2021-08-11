<template>
    <div>
        <h2>Your total score: {{$store.getters.points}}</h2>
        
        <table>
            <tr>
                <th>Question</th>
                <th>Correct answer</th>
                <th>Your answer</th>
                <th></th>
            </tr>
            <tr v-for="answer in $store.state.answers" :key="answer.index">
                <td>{{ answer[0] }}</td>
                <td>{{ answer[1] }}</td>
                <td>{{ answer[2] }}</td>
                <td v-if="answer[1]===answer[2]">right</td>
            </tr>
        </table>    

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



<style scoped>
    table, td, th {
        text-align: left;
        border: 0px solid black;
        margin: 5px;
        padding: 5px;
    }
    .correct {
        background-color: lightgreen;
    }
    .wrong{
        background-color: lightcoral;
    }
</style>