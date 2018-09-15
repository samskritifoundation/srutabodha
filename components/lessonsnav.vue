<template>
  <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout justify-center>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      class="primary"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
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

      <div v-for="item in items" :key="item.title">

        <v-list-group v-if="item.group" value="true">

          <v-list-tile slot="activator">
            <v-list-tile-action>{{ item.sl_num }}.</v-list-tile-action>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>

          <div v-for="subitem in item.subitems" :key="subitem.title">

          <v-list-group v-if="subitem.subgroup" sub-group>

            <v-list-tile slot="activator" @click="">
              <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
            </v-list-tile>

            <div v-for="div in subitem.divs" :key="div.title" @click="">

              <v-list-group v-if="div.types" sub-group>

                <v-list-tile slot="activator" @click="">
                  <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
                  <v-list-tile-title>{{div.title}}</v-list-tile-title>
                </v-list-tile>

                <v-list-tile v-for="vritta in div.vrittas" :key="vritta.title" @click="">
              <v-list-tile-action>{{vritta.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{vritta.title}}</v-list-tile-title>
            </v-list-tile>

              </v-list-group>

            <v-list-tile v-else @click="">
              <v-list-tile-action>{{div.sl_num}}</v-list-tile-action>
              <v-list-tile-title>{{div.title}}</v-list-tile-title>
            </v-list-tile>

            </div>

          </v-list-group>

          <v-list-tile v-else @click="">
            <v-list-tile-action>{{subitem.sl_num}}</v-list-tile-action>
            <v-list-tile-title>{{subitem.title}}</v-list-tile-title>
          </v-list-tile>

          </div>

        </v-list-group>

        <v-list-tile v-else @click="">
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
            title: 'Introduction',
            sl_num: '1',
            group: false
          },
          {
            title: 'Identifying a Guru',
            sl_num: '2',
            group: false
          },
          {
            title: 'Identifying a Laghu',
            sl_num: '3',
            group: false
          },
          {
            title: 'Classification of Chandas',
            sl_num: '4',
            group: true,
            subitems: [
              {
                title: 'Varna Chandas',
                sl_num: '4.1',
                subgroup: true,
                divs: [
                  {
                    title: 'Samam',
                    sl_num: 'i',
                    types: 'true',
                    vrittas: [
                      {
                        title: 'Ukta',
                        sl_num: 'I'
                      },
                      {
                        title: 'Atyukta',
                        sl_num: 'II'
                      },
                      {
                        title: 'Madhya',
                        sl_num: 'III'
                      },
                      {
                        title: 'Pratishta',
                        sl_num: 'IV'
                      },
                      {
                        title: 'Supratishta',
                        sl_num: 'V'
                      },
                      {
                        title: 'Gayatri',
                        sl_num: 'VI'
                      },
                      {
                        title: 'Ushnik',
                        sl_num: 'VII'
                      },
                      {
                        title: 'Anushtup',
                        sl_num: 'VIII'
                      },
                      {
                        title: 'Bruhati',
                        sl_num: 'IX'
                      },
                      {
                        title: 'Pankti',
                        sl_num: 'X'
                      },
                      {
                        title: 'Trishtup',
                        sl_num: 'XI'
                      },
                      {
                        title: 'Jagati',
                        sl_num: 'XII'
                      },
                      {
                        title: 'Atijagati',
                        sl_num: 'XIII'
                      },
                      {
                        title: 'Shakvari',
                        sl_num: 'XIV'
                      },
                      {
                        title: 'Atishakvari',
                        sl_num: 'XV'
                      },
                      {
                        title: 'AshtiH',
                        sl_num: 'XVI'
                      },
                      {
                        title: 'AtyashtiH',
                        sl_num: 'XVII'
                      },
                      {
                        title: 'DhrutiH',
                        sl_num: 'XVIII'
                      },
                      {
                        title: 'AtidhrutiH',
                        sl_num: 'XIX'
                      },
                      {
                        title: 'KrutiH',
                        sl_num: 'XX'
                      },
                      {
                        title: 'PrarutiH',
                        sl_num: 'XXI'
                      },
                      {
                        title: 'AkrutiH',
                        sl_num: 'XXII'
                      },
                      {
                        title: 'VikrutiH',
                        sl_num: 'XXIII'
                      },
                      {
                        title: 'SankrutiH',
                        sl_num: 'XXIV'
                      },
                      {
                        title: 'AtikrutiH',
                        sl_num: 'XXV'
                      },
                      {
                        title: 'UtkrutiH',
                        sl_num: 'XXVI'
                      },
                      {
                        title: 'Dandakam',
                        sl_num: 'XXVII'
                      }
                    ]
                  },
                  {
                    title: 'Ardhasamam',
                    sl_num: 'ii'
                  },
                  {
                    title: 'Vishamam',
                    sl_num: 'iii'
                  },
                  {
                    title: 'Gatha',
                    sl_num: 'iv'
                  }
                ]
              },
              {
                title: 'Matra Chandas',
                sl_num: '4.2',
                subgroup: true,
                divs: [
                  {
                    title: 'Arya',
                    sl_num: 'i',
                    types: true,
                    vrittas: [
                      {
                        title: 'Pathya',
                        sl_num: 'I'
                      },
                      {
                        title: 'Vipula',
                        sl_num: 'II'
                      },
                      {
                        title: 'Chapala',
                        sl_num: 'III'
                      }
                    ]
                  },
                  {
                    title: 'Giti',
                    sl_num: 'ii',
                    types: true,
                    vrittas: [
                      {
                        title: 'Upagiti',
                        sl_num: 'I'
                      },
                      {
                        title: 'Udgiti',
                        sl_num: 'II'
                      },
                      {
                        title: 'Aryagiti',
                        sl_num: 'III'
                      }
                    ]
                  },
                  {
                    title: 'Vaitaliya',
                    sl_num: 'iii',
                    types: true,
                    vrittas: [
                      {
                        title: 'Aupacchandasikam',
                        sl_num: 'I'
                      },
                      {
                        title: 'Apatalika',
                        sl_num: 'II'
                      },
                      {
                        title: 'Dakshinantika',
                        sl_num: 'III'
                      },
                      {
                        title: 'Udicyavritti',
                        sl_num: 'IV'
                      },
                      {
                        title: 'Prachyavritti',
                        sl_num: 'V'
                      },
                      {
                        title: 'Pravrittakam',
                        sl_num: 'VI'
                      },
                      {
                        title: 'Aparantika',
                        sl_num: 'VII'
                      },
                      {
                        title: 'Charuhasini',
                        sl_num: 'VIII'
                      }
                    ]
                  },
                  {
                    title: 'Vaktram',
                    sl_num: 'iv',
                    types: true,
                    vrittas: [
                      {
                        title: 'Pathyavaktram',
                        sl_num: 'I'
                      },
                      {
                        title: 'Viparītapathyāvaktram',
                        sl_num: 'II'
                      },
                      {
                        title: 'capalāvaktram',
                        sl_num: 'III'
                      },
                      {
                        title: 'yugmavipulā',
                        sl_num: 'IV'
                      },
                      {
                        title: 'bhavipulā',
                        sl_num: 'V'
                      },
                      {
                        title: 'ravipulā',
                        sl_num: 'VI'
                      },
                      {
                        title: 'navipulā',
                        sl_num: 'VII'
                      },
                      {
                        title: 'tavipulā',
                        sl_num: 'VIII'
                      }
                    ]
                  },
                  {
                    title: 'mātrāsamavṛtta',
                    sl_num: 'v',
                    types: true,
                    vrittas: [
                      {
                        title: 'acaladhṛtivṛttam',
                        sl_num: 'I'
                      },
                      {
                        title: 'mātrāsamakam',
                        sl_num: 'II'
                      },
                      {
                        title: 'viślokavṛttam',
                        sl_num: 'III'
                      },
                      {
                        title: 'vānavāsikāvṛttam',
                        sl_num: 'IV'
                      },
                      {
                        title: 'citrāvṛttam',
                        sl_num: 'V'
                      },
                      {
                        title: 'upacitrāvṛttam',
                        sl_num: 'VI'
                      },
                      {
                        title: 'pādākulakavṛttam',
                        sl_num: 'VII'
                      }
                    ]
                  },
                  {
                    title: 'śikhāvṛttam',
                    sl_num: 'vi'
                  },
                  {
                    title: 'khañjāvṛttam',
                    sl_num: 'vii'
                  },
                  {
                    title: 'anaṅgakrīḍāvṛttam',
                    sl_num: 'viii'
                  },
                  {
                    title: 'rucirāvṛttam',
                    sl_num: 'ix'
                  }
                ]
              }
            ]
          }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>