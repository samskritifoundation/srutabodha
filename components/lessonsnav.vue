<template>
  <v-layout
    wrap
    style="height: 200px;"
  >

        <v-btn
          color="secondary"
          dark 
          round
          @click.stop="drawer = !drawer"
          class="ma-4 font-weight-bold text-capitalize"
        >
          All Lessons
        </v-btn>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      class="primary"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile dark v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-icon>library_books</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Lessons</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

      <div v-for="item in items" :key="item.title" active-class="yellow--text">

        <v-list-group active-class="yellow--text" v-if="item.group" value="true">

          <v-list-tile active-class="yellow--text" dark slot="activator" router :to="item.to">
            <v-list-tile-action>{{ item.sl_num }}.</v-list-tile-action>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="subitem in item.subitems" :key="subitem.title">

          <v-list-group active-class="yellow--text" v-if="subitem.subgroup" sub-group>

            <v-list-tile active-class="yellow--text" slot="activator" class="link" router :to="subitem.to">
              <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
            </v-list-tile>

            <div v-for="div in subitem.divs" :key="div.title">

              <v-list-group active-class="yellow--text" v-if="div.types" sub-group>

                <v-list-tile active-class="yellow--text" slot="activator" class="link" router :to="div.to">
                  <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
                  <v-list-tile-title>{{div.title}}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile active-class="yellow--text" v-for="vritta in div.vrittas" :key="vritta.title" class="link" router :to="vritta.to">
              <v-list-tile-action>{{vritta.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{vritta.title}}</v-list-tile-title>
            </v-list-tile>

              </v-list-group>

            <v-list-tile active-class="yellow--text" v-else class="link" router :to="div.to">
              <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{div.title}}</v-list-tile-title>
            </v-list-tile>

            </div>

          </v-list-group>

          <v-list-tile active-class="yellow--text" class="link" v-else router :to="subitem.to">
            <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
            <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
          </v-list-tile>

          </div>

        </v-list-group>

        <v-list-tile active-class="yellow--text" class="link" v-else router :to="item.to">
           <v-list-tile-action>{{ item.sl_num }}. </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        </div>

         
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {
            title: 'Introduction to Shrutabodha',
            sl_num: '1',
            group: false,
            to: '/lessons/1'
          },
          {
            title: 'Identifying a Guru and a Laghu',
            sl_num: '2',
            group: false,
            to: '/lessons/2'
          },
          {
            title: 'Characteristics of Eight Gaṇas',
            sl_num: '3',
            group: false,
            to: '/lessons/3'
          },
          {
            title: 'āryā Chandas',
            sl_num: '4',
            group: false,
            to: '/lessons/4'
          },
          {
            title: 'Gīti',
            sl_num: '5',
            group: false,
            to: '/lessons/5'
          },
          {
            title: 'Gīti',
            sl_num: '6',
            group: false,
            to: '/lessons/6'
          },
          {
            title: 'Gīti',
            sl_num: '7',
            group: false,
            to: '/lessons/7'
          },
          {
            title: 'Gīti',
            sl_num: '8',
            group: false,
            to: '/lessons/8'
          },
          {
            title: 'Gīti',
            sl_num: '9',
            group: false,
            to: '/lessons/9'
          },
          {
            title: 'Gīti',
            sl_num: '10',
            group: false,
            to: '/lessons/10'
          },
          {
            title: 'Gīti',
            sl_num: '11',
            group: false,
            to: '/lessons/11'
          },
          {
            title: 'Gīti',
            sl_num: '12',
            group: false,
            to: '/lessons/12'
          },
          {
            title: 'Gīti',
            sl_num: '13',
            group: false,
            to: '/lessons/13'
          },
          {
            title: 'Gīti',
            sl_num: '14',
            group: false,
            to: '/lessons/14'
          },
          {
            title: 'Gīti',
            sl_num: '15',
            group: false,
            to: '/lessons/15'
          },
          {
            title: 'Gīti',
            sl_num: '16',
            group: false,
            to: '/lessons/16'
          },
          {
            title: 'Gīti',
            sl_num: '17',
            group: false,
            to: '/lessons/17'
          },
          {
            title: 'Gīti',
            sl_num: '18',
            group: false,
            to: '/lessons/18'
          },
          {
            title: 'Gīti',
            sl_num: '19',
            group: false,
            to: '/lessons/19'
          },
          {
            title: 'Gīti',
            sl_num: '20',
            group: false,
            to: '/lessons/20'
          },
          {
            title: 'Gīti',
            sl_num: '21',
            group: false,
            to: '/lessons/21'
          },
          {
            title: 'Gīti',
            sl_num: '22',
            group: false,
            to: '/lessons/22'
          },
          {
            title: 'Gīti',
            sl_num: '23',
            group: false,
            to: '/lessons/23'
          },
          {
            title: 'Gīti',
            sl_num: '24',
            group: false,
            to: '/lessons/24'
          },
          {
            title: 'Gīti',
            sl_num: '25',
            group: false,
            to: '/lessons/25'
          },
          {
            title: 'Gīti',
            sl_num: '26',
            group: false,
            to: '/lessons/26'
          },
          {
            title: 'Gīti',
            sl_num: '27',
            group: false,
            to: '/lessons/27'
          },
          {
            title: 'Gīti',
            sl_num: '28',
            group: false,
            to: '/lessons/28'
          },
          {
            title: 'Gīti',
            sl_num: '29',
            group: false,
            to: '/lessons/29'
          },
          {
            title: 'Gīti',
            sl_num: '30',
            group: false,
            to: '/lessons/30'
          },
          {
            title: 'Gīti',
            sl_num: '31',
            group: false,
            to: '/lessons/31'
          },
          {
            title: 'Gīti',
            sl_num: '32',
            group: false,
            to: '/lessons/32'
          },
          {
            title: 'Gīti',
            sl_num: '33',
            group: false,
            to: '/lessons/33'
          },
          {
            title: 'Gīti',
            sl_num: '34',
            group: false,
            to: '/lessons/34'
          },
          {
            title: 'Gīti',
            sl_num: '35',
            group: false,
            to: '/lessons/35'
          },
          {
            title: 'Gīti',
            sl_num: '36',
            group: false,
            to: '/lessons/36'
          },
          {
            title: 'Gīti',
            sl_num: '37',
            group: false,
            to: '/lessons/37'
          },
          {
            title: 'Gīti',
            sl_num: '38',
            group: false,
            to: '/lessons/38'
          },
          {
            title: 'Gīti',
            sl_num: '39',
            group: false,
            to: '/lessons/39'
          },
          {
            title: 'Gīti',
            sl_num: '40',
            group: false,
            to: '/lessons/40'
          },
          {
            title: 'Gīti',
            sl_num: '41',
            group: false,
            to: '/lessons/41'
          },
          {
            title: 'Gīti',
            sl_num: '42',
            group: false,
            to: '/lessons/42'
          },
          {
            title: 'Gīti',
            sl_num: '43',
            group: false,
            to: '/lessons/43'
          },
          {
            title: 'Gīti',
            sl_num: '44',
            group: false,
            to: '/'
          }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>