<template>
  <v-card dark color="secondary" class="bordered papyrus">
    <v-card-title>Hello</v-card-title>
  </v-card>
</template>

<script>
export default {
  layout: 'lessons'
}
</script>

<style scoped>
.bordered {
      border: 10px solid transparent;
-webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
    -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
    border-image: url('~/assets/img/border.png') 30 round;
    border-radius: 15px;
    margin:0;
    padding: 2%;
}
</style>
