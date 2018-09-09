<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="../assets/img/sflogo.jpg" alt="Samskrti Foundation logo" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">Interactive tutorial for Vrittaratnakara</v-card-title>
        <v-card-text>
          <p>Interactive self learning software for learning Sanskrit prosody, various types of meters used in poetry.</p>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" scrollable>
          <v-btn slot="activator" round color="secondary"> About Vrittaratnakara</v-btn>
          <v-card color="info">
            <v-card-title><span class="headline">Vrittaratnakara</span></v-card-title>
            <v-divider></v-divider>
            <v-card-text>Vritta Ratnakara of Kedara Bhatta (14th Century CE) is one of
the most popular texts on Sanskrit prosody. Though there are many books on Sanskrit prosody by eminent authors like Kalidasa, Kshemendra, etc, Vritta Ratankara continues to be an essential text for Sanskrit students. A speciality of this work is that the definition and illustration of a meter is given in one and the same verse. The verse defining a particular metre is composed in that particular meter itself. This is very helpful for a student of Sanskrit prosody. Another specialty of this work is that it is very brief – there are merely 136 verses. The author has covered all the prominent metres of Sanskrit literature in these verses.</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-btn round color="secondary" nuxt to="/lessons">Learn</v-btn>
           <v-spacer></v-spacer>
          <v-btn round color="secondary" nuxt to="/exercises">Exercises</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false
    }
  }
}
</script>


