<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex xs12 sm8 md8>
      <div class="text-xs-center">
<sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" subtitle2="presents" />
      </div>
      <v-card class = "bordered text-xs-center" color="primary" dark>
        <v-card-title class="myheader2 devanagari text-xs-center">श्रुतबोध-शिक्षकः - परस्परव्यवहारपूर्वकशिक्षणम्</v-card-title>
        <v-card-title class="myheader2 papyrus text-xs-center">Interactive tutorial for Shrutabodha</v-card-title>
        <v-card-text>
          <p>Interactive self learning software for learning Sanskrit prosody, various types of meters used in poetry.</p>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" href="https://drive.google.com/file/d/1KEl36DLes6_J_BKrOo1dLlcPF26u3Qkr/view?usp=sharing" large>Download Word format of this website</v-btn>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" href="https://drive.google.com/file/d/14eJc5yqNl44R2aySh-f3XmUNMPRC6phO/view?usp=sharing" large>Download PDF of this website</v-btn>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" scrollable>
          <v-btn slot="activator" round color="accent" class="text-capitalize font-weight-bold" large :ripple="{ class: 'error--text' }"> About <br> Shrutabodha</v-btn>
          <v-card color="info" class="papyrus bg1" light>
            <v-card-title class="myheader papyrus">Shrutabodha</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="subheading papyrus font-weight-bold">This minor work, having just 44 sloka-s is a small masterpiece that teaches the basics of the Sanskrit Chandas and Vritta-s to students in the simplest possible manner. Ascribed to one of the greatest poets Kalidasa, it enables the student to grasp the definitions of the various meters used in Sanskrit literature. Until now, this work has not been published with a good English translation and illustrative examples. As part of this project, it is proposed to fill this void and help students of Sanskrit gain good knowledge of the theories associated with the meters of Sanskrit words.</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="secondary" @click.native="dialog = false" ripple>Close</v-btn>
            </v-card-actions>
          </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" nuxt to="/lessons" large>अध्यायाः<br>Learn</v-btn>
           <v-spacer></v-spacer>
          <v-btn round color="accent" class="font-weight-bold text-capitalize" nuxt to="/exercises" large>अभ्यासाः <br> Exercises</v-btn>
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
-webkit-border-image: url('~/assets/img/border.png') 30 round; /* Safari 3.1-5 */
    -o-border-image: url('~/assets/img/border.png') 30 round; /* Opera 11-12.1 */
    border-image: url('~/assets/img/border.png') 30 round;
    border-radius: 15px;
    margin:0;
    padding: 2%;
}

.bg1 {
  background:linear-gradient(0deg,rgba(241, 241, 171, 0.5),rgba(255, 255, 255, 0.2)),url(~/assets/img/bg3.jpg) no-repeat;
  background-size: cover;
  color: darkred;
}
</style>
