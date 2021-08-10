<template>
    <div>
        <p>Difficulty</p>
        <select id="difficulty">
            <option v-for="(option, index) in difficulties" v-bind:key="index">
                {{ option }}
            </option>
        </select>
        <p>Categories</p>
        <select id="categories">
            <option v-for="category in categories" v-bind:key="category.id">
                {{category.name}}
            </option>
        </select>
        <p># of questions</p>
        <input id="numQuestions" type="number">
        <p><button id="start" v-on:click="generateUrl()">Start</button></p>
    </div>
</template>

<script>
    export default ({
        name: "Start",
        data() {
            return {
                difficulties: ['Easy', 'Medium', 'Hard'],
                categories: [],
                amount: 0,
                categoryId: ''
            }
        },
        methods: {
            async fetchCategory() {
                let response = await fetch("https://opentdb.com/api_category.php")
                .then(response => response.json())
                this.categories = response.trivia_categories
            },
            generateUrl() {
                console.log("generate url for fetching questions")
            }
        },
        created() {
            this.fetchCategory()
        }
    })
</script>

<style></style>
