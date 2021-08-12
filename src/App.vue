<template>
<body class="background">
  <div id="app">
    <router-view />
    </div>
</body>
  
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.background{
  min-height: 100%;
  min-width: 100%;
  fill: #FFEFEF;
  background: #FFEFEF;
}
.font{
  color: rgb(49, 97, 185);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.button{
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid cornflowerblue;
      background-color: white;
      height: 60px;
      width: 120px;
      border-radius: 6px;
      margin: 10px;
      font-size: 12px;
      color: rgb(49, 97, 185);
      box-shadow: 0 6px #999;
      text-align: center;
      
  }
.button:hover {
  background-color: rgb(49, 97, 185);
  color: white;
}

.button:active {
  background-color: rgb(60, 122, 236);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  color: white;
}
.flex-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: 60px;
  }

</style>
