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
            <option v-for="category in categories" v-bind:key="category.id">
                {{category.name}}
            </option>
        </select>
        <p># of questions</p>
        <input v-model="amountChoice" type="number" min="1">
        <div v-if="categoriesChoice && difficultyChoice && amountChoice">
            <p><button  id="start" v-on:click="generateUrl()">Start</button></p>
        </div>
        
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
                categoryId: '',
                categoriesChoice: undefined,
                difficultyChoice: undefined,
                amountChoice: undefined
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
