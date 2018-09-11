<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
<sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" subtitle2="presents" />
      </div>
      <v-card class = "bordered" color="primary" dark>
        <v-card-title class="myheader papyrus">Interactive tutorial for Vrittaratnakara</v-card-title>
        <v-card-text>
          <p>Interactive self learning software for learning Sanskrit prosody, various types of meters used in poetry.</p>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" scrollable>
          <v-btn slot="activator" round color="accent"> About Vrittaratnakara</v-btn>
          <v-card color="info" class="papyrus" light>
            <v-card-title class="myheader papyrus">Vrittaratnakara</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="subheading papyrus font-weight-bold">Vritta Ratnakara of Kedara Bhatta (14th Century CE) is one of
the most popular texts on Sanskrit prosody. Though there are many books on Sanskrit prosody by eminent authors like Kalidasa, Kshemendra, etc, Vritta Ratankara continues to be an essential text for Sanskrit students. A speciality of this work is that the definition and illustration of a meter is given in one and the same verse. The verse defining a particular metre is composed in that particular meter itself. This is very helpful for a student of Sanskrit prosody. Another specialty of this work is that it is very brief – there are merely 136 verses. The author has covered all the prominent metres of Sanskrit literature in these verses.</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-btn round color="accent" nuxt to="/lessons">Learn</v-btn>
           <v-spacer></v-spacer>
          <v-btn round color="accent" nuxt to="/exercises">Exercises</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sflogo from '../components/SFLogo.vue'
export default {
  data: () => {
    return {
      dialog: false
    }
  },
  components: {
    sflogo
  }
}
</script>

<style scoped>
.bordered {
      border: 10px solid transparent;
-webkit-border-image: url('../assets/img/border.png') 30 round; /* Safari 3.1-5 */
    -o-border-image: url('../assets/img/border.png') 30 round; /* Opera 11-12.1 */
    border-image: url('../assets/img/border.png') 30 round;
    border-radius: 15px;
    margin:0;
    padding: 2%;
}
</style>
