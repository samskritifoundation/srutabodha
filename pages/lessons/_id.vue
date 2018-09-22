<template>
<v-container class="mt-0 pt-0">
  <v-layout row class="neg_margin">
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }"  :to=previous><b>Previous</b></v-btn>
  <v-spacer></v-spacer>
  <v-btn color="accent darken-2" :ripple="{ class: 'error--text' }" :to=next><b>Next</b></v-btn>
  </v-layout>
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
      lesson: this.$store.state.lessons[this.$route.params.id - 1],
      previous: this.$route.params.id <= 1 ? '#' : '/lessons/' + (this.$route.params.id - 1),
      next: this.$route.params.id < 3 ? '/lessons/' + (Number(this.$route.params.id) + 1) : '#'
    }
  },
  layout: 'lessons',
  created () {
    // console.log(this.$route.params.id)
    console.log(this.$axios.$get('/lessons/' + this.$route.params.id))
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

.neg_margin {
  margin-top: -10%;
}
</style>
