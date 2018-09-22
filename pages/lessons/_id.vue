<template>
<v-container class="mt-0 pt-0">
<v-card color="accent lighten-4" class="papyrus mt-0 pt-0 bordered">
    <v-card-title primary-title>
        <h3 class="papyrus myheader">{{lesson.id}}. {{lesson.title}}</h3>
        </v-card-title>
        <v-card-text>
            <div class="devanagari">{{lesson.definition_sans}}</div>
            <div class="myheader3" v-html=lesson.definition_eng></div>
        </v-card-text>
  </v-card>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      lesson: {
        title: 'Introduction',
        id: this.$route.params.id,
        definition_sans: 'lorem ipsum',
        definition_eng: '<p>Sanskrit prosody or Chandas refers to one of the six Vedangas, or limbs of Vedic studies. It is the study of poetic metres and verse in Sanskrit.</p><p>Almost all Sanskrit poetry is based on following a certain meter, or arrangement of syllables. The Chandas or the metre is an essential element of versified poetry. Rigorous description of the form of the poems helps to preserve their shape over time. This description evolved into the formal study of meter. Both meter and the study of meter are called chandas.</p>',
        example_sans: ''
      }
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

</style>
