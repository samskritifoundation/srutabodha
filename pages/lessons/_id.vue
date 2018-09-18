<template>
<v-container @click="getLessons">
<v-card color="secondary" dark class="papyrus">
    <div class = "bordered">
    <v-card-title primary-title>
        <h3 class="papyrus myheader">{{lesson.title}}</h3>
        </v-card-title>
        <v-card-text>
            <div class="devanagari">{{lesson.definition_sans}}</div>
            <div>{{lesson.definition_eng}}</div>
        </v-card-text>
    </div>
  </v-card>
</v-container>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      lesson: {
        title: 'Introduction',
        definition_sans: 'lorem ipsum',
        definition_eng: 'lorem ipsum'
      }
    }
  },
  layout: 'lessons',
  methods: {
    getLessons () {
      // console.log($route.name)
      console.log(axios.get('api'))
    }
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
