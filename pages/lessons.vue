<template>
  <v-layout column justify-center align-center class="papyrus">
    <navleft />
    <navright />
  </v-layout>
</template>

<script>
import navleft from '../components/lessonsnav.vue'
import navright from '../components/rightnav.vue'

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
    navleft,
    navright
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