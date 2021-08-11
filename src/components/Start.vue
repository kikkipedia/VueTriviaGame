<template>
    <div>
        <p>Difficulty</p>
        <select v-model="difficultyChoice">
            <option v-for="(option, index) in difficulties" v-bind:key="index">
                {{ option }}
            </option>
        </select>
        <p>Categories</p>
        <select v-model="categoriesChoice">
            <option v-for="category in categories" v-bind:key="category.id" :value="category.id">
                {{category.name}}
            </option>
        </select>
        <p># of questions</p>
        <input v-model="amountChoice" type="number" min="1">
        <div v-if="categoriesChoice && difficultyChoice && amountChoice">
            <p><button  id="start" v-on:click="changed">Start</button></p>
        </div>
        
    </div>
</template>

<script>
    export default ({
        name: "Start",
        data() {
            return {
                difficulties: ['easy', 'medium', 'hard'],
                categories: [],
                amount: 0,
                categoryId: {},
                categoriesChoice: {},
                difficultyChoice: {},
                amountChoice: {}
            }
        },
        methods: {
            async fetchCategory() {
                let response = await fetch("https://opentdb.com/api_category.php")
                .then(response => response.json())
                this.categories = response.trivia_categories
            },
            changed: function() {
                const quizUrl = "https://opentdb.com/api.php?amount=" + this.amountChoice + "&category=" + this.categoriesChoice + "&difficulty=" + this.difficultyChoice
                this.$store.commit('setUrl', quizUrl)
            }
        },
        created() {
            this.fetchCategory()
        }
    })
</script>

<style></style>
