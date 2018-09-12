<template>
  <v-layout column justify-center align-center class="papyrus">
    <v-flex md6>
      <div class="text-xs-center">
    <sflogo title="संस्कृति-प्रतिष्ठानम्" subtitle1="Samskriti Foundation" subtitle2="An organisation engaged in the preservation, revival and propagation of the Indian Knowledge Systems and Cultural and Scientific Heritage of India" />
    </div>
    <v-card color="warning" xs6>
      <v-card-text class="subheading font-weight-black text-xs-center">
      <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="30"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-textarea
          name="input-7-1"
          label="Your message"
          value=""
          hint="Feedback/comments"
        ></v-textarea>
    <v-btn color="primary"
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
  </v-form>
    </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sflogo from '../components/SFLogo.vue'
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 30 || 'Name must be less than 30 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  components: {
    sflogo
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        /*
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
        */
        alert('hello')
      }
    }
  }
}
</script>