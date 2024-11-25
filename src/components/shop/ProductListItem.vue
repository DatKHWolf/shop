<template>

  <div class="card">
    <img src="https://picsum.photos/200">
    <div class="card-body">{{ product.title }}</div>
    <p class="card-text">{{ shortenedDescription }}</p>
    <div class="text-center mt-3">
        <div class="lead">
            <strong class="text-vue">{{ product.price }}€</strong>
        </div>
    </div>
  </div>

</template>

<script>
export default {
    name:"ProductListItem",
    props:{
      product:Object,
    },
    computed:{
      //Problem, bekomme keine Daten durch die Props
      shortenedDescription(){
        if(this.product.description.length<80){
          return this.product.description
        }
        return this.product.description.slice(0,80)+" ..."
      }
    }

}
</script>

<style scoped>

</style>