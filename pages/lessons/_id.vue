<template>
<v-container class="mt-0 pt-0">
<v-card color="accent lighten-4" class="mt-0 pt-0 bordered">
    <v-card-title primary-title>
        <h3 class="papyrus myheader">{{lesson.id}}. <span class="devanagari">{{lesson.title_sans}}</span> <br>{{lesson.title_eng}}</h3>
        </v-card-title>
        <v-card-text class="myheader3">
          <v-layout row>
            <v-flex xs6>
            <div class="devanagari" v-html=lesson.definition_sans></div>
            </v-flex>
            <v-flex xs6>
            <div class="font-weight-bold" v-html=lesson.definition_eng></div>
            </v-flex>
          </v-layout>
        </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      id: String(this.$route.params.id),
      lesson: ''
    }
  },
  layout: 'lessons',
  created () {
    // console.log(this.$store.state.lessons.find(lesson => lesson.id === '4.1'))
    // console.log(this.id)
    this.lesson = this.$store.state.lessons.find(lesson => String(lesson.id) === this.id)
    // console.log(this.$store.state.lessons)
    // console.log(this.$axios.$get('/lessons/' + this.$route.params.id))
  }
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
