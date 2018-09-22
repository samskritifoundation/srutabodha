export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'छन्दःशास्त्रः - भूमिका',
      title_eng: 'Introduction to Sanskrit Prosody',
      id: 1,
      definition_sans: 'यत् अक्षरपरिमाणं तत् छन्दः, मात्राक्षर-संख्यानियता वाक् छन्दः',
      definition_eng: '<p>Sanskrit prosody or Chandas refers to one of the six Vedangas, or limbs of Vedic studies. It is the study of poetic metres and verse in Sanskrit.</p><p>Almost all Sanskrit poetry is based on following a certain meter, or arrangement of syllables. The Chandas or the metre is an essential element of versified poetry. Rigorous description of the form of the poems helps to preserve their shape over time. This description evolved into the formal study of meter. Both meter and the study of meter are called chandas.</p><p>A poetical stanza or verse in Sanskrit is called <em>padya</em>. Generally a <em>padya</em> or verse contains four <em>pādas</em> or quarters or metrical lines. Sanskrit verses are classified into groups and sub-groups according to: <ol type="a"><li>the number of syllables or syllabic instants they contain in each quarter and </li><li>the position or placement of short or long syllables within the verse</li></ol></p><p>Such groups and sub-groups are called <em>chandas</em></p>',
      example_sans: ''
    },
    {
      title_sans: 'गुरुलक्षणम्',
      title_eng: 'Identifying a Guru',
      id: 2,
      definition_sans: '<ul><li>अनुस्वारेण सहितो वर्णः – अं, कं, खं, गं…</li><li>विसर्गान्तः – अः, कः,..</li><li>दीर्घः – आ, ई, ऊ,…</li><li>संयुक्तपदः – ष्ण, क्त, ...</li><li>पद्यस्य चरणान्ते स्थितो लघुः</li></ul>',
      definition_eng: '<ul><li>Vowel or consonant followed by anusvāra - aṃ, kaṃ, khaṃ, gaṃ, etc  </li><li>Vowel or consonant followed by Visarga - aḥ, kaḥ, etc </li><li>The vowels ā, ī, ū, etc… are long. Whenever any of these is used in a verse separately or with one or more consonants, it will be considered as long. Eg: kā, kī, etc are long syllables </li><li>A conjunct consonant – ṣṇa, kta, etc</li><li>At the end of a quarter a short syllable can be considered as long.</li></ul>',
      example_sans: ''
    },
    {
      title_sans: 'लघुलक्षणम्',
      title_eng: 'Identifying a Laghu',
      id: 3,
      definition_sans: '<ul><li>एकमात्रिकः</li><li>ह्रस्वः – अ, इ, उ,..</li></ul>',
      definition_eng: '<ul><li>Laghu consists of a single syllabic instant (1 mātrā).</li><li>The  vowels a, i, u, ṛ, lṛ are short. Whenever any of these is used in a verse separately or with one or more consonants it will be considered as a short syllable. Eg: ka, ki, etc.</li></ul>',
      example_sans: ''
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
