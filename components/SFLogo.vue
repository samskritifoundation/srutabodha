<template>
    <v-card color="transparent" flat>
              <v-layout xs12 row>
                <v-flex xs3>
                  <img src="../assets/img/sflogo.jpg" class = "logo-img">
                </v-flex>
                <v-flex xs9>
                  <v-card-title primary-title>
                    <div>
                      <div class="myheader">{{title}}</div>
                      <div class="myheader">{{subtitle1}}</div>
                      <h3>{{subtitle2}}</h3>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
</template>

<script>
export default {
  name: 'sflogo',
  props: ['title', 'subtitle1', 'subtitle2']
}
</script>

<style scoped>
.logo-img {
  border-radius: 50%;
}
</style>
