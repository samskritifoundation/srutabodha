export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'छन्दःशास्त्रः',
      title_eng: 'Introduction',
      id: 1,
      definition_sans: '',
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
    },
    {
      title_sans: 'छन्दविभागाः',
      title_eng: 'Classification of Chandas',
      id: 4,
      definition_sans: '',
      definition_eng: '',
      common: 'Varna<br>Matra'
    },
    {
      title_sans: 'वर्णछन्दः',
      title_eng: 'Varna Chandas or Metres regulated by syllables',
      id: '4.1',
      definition_sans: '<p>त्रयाणां वर्णानां समूहो गणशब्देन व्यपदिष्यते ।</p><p>अष्टगणाः - यमताराजभानसलगौ</p>अष्टगणानां लक्षणम् - <p>आदिमध्यावसानेषु भजसा यान्ति गौरवम् ।<br> यरता लाघवं यान्ति मनौ तु गुरुलाघवम् ।</p>',
      definition_eng: '<h3>Gana in Varna Chandas:</h3><p>Group of three syllables is called Gana or syllabic feet. 8 Ganas are used by Sanskrit prosodians.</p>',
      common: '<table  style="width: 100%; text-align: center"  border="2"><tbody><tr><td>Sl. No.</td><td>गणनाम<br>Name of Gana&nbsp;</td><td>Symbol</td><td >Example</td></tr><tr ><td>1</td><td>मगण</td><td>ऽऽऽ</td><td>धी श्री स्त्री dhī śrī strī</td></tr><tr><td  style="width: 63.25px;">2</td><td>यगण</td><td>।ऽऽ</td><td>व रा सा va rā sā</td></tr><tr><td>3</td><td>रगण</td><td>ऽ।ऽ</td><td>का गु हा kā gu hā<br></td></tr><tr><td>4</td><td>सगण</td><td>॥ऽ</td><td>&nbsp;व सु धा va su dhā<br></td></tr><tr><td>5</td><td>तगण</td><td>ऽऽ।</td><td>सा ते क्व sā te kva<br></td></tr><tr><td>6</td><td>जगण</td><td>।ऽ।</td><td>क दा स ka dā sa<br></td></tr><tr><td>7</td><td>भगण</td><td>ऽ॥</td><td>किं व द kiṃ va da<br></td></tr><tr><td>8</td><td>नगण</td><td>॥।</td><td>न ह स na ha sa<br></td></tr><tr><td>9</td><td>ल</td><td>।</td><td>गृ gṛ<br></td></tr><tr><td>10</td><td>ग</td><td>ऽ</td><td>घ gha</td></tr></tbody></table>'
    },
    {
      title_sans: '',
      title_eng: 'Samam',
      id: '4.1.i',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Ukta',
      id: '4.1.i.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Atyukta',
      id: '4.1.i.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Madhya',
      id: '4.1.i.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Pratishta',
      id: '4.1.i.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Supratishta',
      id: '4.1.i.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Gayatri',
      id: '4.1.i.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Ushnik',
      id: '4.1.i.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Anushtup',
      id: '4.1.i.VIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Bruhati',
      id: '4.1.i.IX',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Pankti',
      id: '4.1.i.X',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Trishtup',
      id: '4.1.i.XI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Jagati',
      id: '4.1.i.XII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Atijagati',
      id: '4.1.i.XIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Shakvari',
      id: '4.1.i.XIV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Atishakvari',
      id: '4.1.i.XV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'AshtiH',
      id: '4.1.i.XVI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'AtyashtiH',
      id: '4.1.i.XVII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'DhrutiH',
      id: '4.1.i.XVIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'AtidhrutiH',
      id: '4.1.i.XIX',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'KrutiH',
      id: '4.1.i.XX',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'PrarutiH',
      id: '4.1.i.XXI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'AkrutiH',
      id: '4.1.i.XXII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'VikrutiH',
      id: '4.1.i.XXIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'SankrutiH',
      id: '4.1.i.XXIV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'AtikrutiH',
      id: '4.1.i.XXV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'UtkrutiH',
      id: '4.1.i.XXVI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Dandakam',
      id: '4.1.i.XXVII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Ardhasamam',
      id: '4.1.ii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'upacitram',
      id: '4.1.ii.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'drutamadhyā',
      id: '4.1.ii.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'vegavatī',
      id: '4.1.ii.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'bhadravirāṭ',
      id: '4.1.ii.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'ketumatī',
      id: '4.1.ii.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'ākhyānakī',
      id: '4.1.ii.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'viparītākhyānakī',
      id: '4.1.ii.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'hariṇaplutā',
      id: '4.1.ii.VIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'aparavaktram',
      id: '4.1.ii.IX',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'puṣpitāgrā',
      id: '4.1.ii.X',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'yavamatī',
      id: '4.1.ii.XI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'viyoginī',
      id: '4.1.ii.XII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Vishamam',
      id: '4.1.iii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'padacaturūrdhvam',
      id: '4.1.iii.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'āpīḍam',
      id: '4.1.iii.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'kalikā',
      id: '4.1.iii.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'lavalī',
      id: '4.1.iii.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'amṛtadhārā',
      id: '4.1.iii.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'udgatā',
      id: '4.1.iii.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'saurabhakam',
      id: '4.1.iii.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title: 'lalitam',
      id: '4.1.iii.VIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'upasthitapracupitam',
      id: '4.1.iii.IX',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'vardhamānam',
      id: '4.1.iii.X',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'śuddhavirāḍārṣabham',
      id: '4.1.iii.XI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Gatha',
      id: '4.1.iv',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Matra Chandas or Metres of Syllabic Instants',
      id: '4.2',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Arya',
      id: '4.2.i',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Pathya',
      id: '4.2.i.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Vipula',
      id: '4.2.i.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Chapala',
      id: '4.2.i.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Giti',
      id: '4.2.ii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Upagiti',
      id: '4.2.ii.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Udgiti',
      id: '4.2.ii.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Aryagiti',
      id: '4.2.ii.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Vaitaliya',
      id: '4.2.iii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Aupacchandasikam',
      id: '4.2.iii.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Apatalika',
      id: '4.2.iii.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Dakshinantika',
      id: '4.2.iii.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Udicyavritti',
      id: '4.2.iii.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Prachyavritti',
      id: '4.2.iii.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Pravrittakam',
      id: '4.2.iii.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Aparantika',
      id: '4.2.iii.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Charuhasini',
      id: '4.2.iii.VIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Vaktram',
      id: '4.2.iv',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Pathyavaktram',
      id: '4.2.iv.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'Viparītapathyāvaktram',
      id: '4.2.iv.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'capalāvaktram',
      id: '4.2.iv.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'yugmavipulā',
      id: '4.2.iv.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'bhavipulā',
      id: '4.2.iv.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'ravipulā',
      id: '4.2.iv.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'navipulā',
      id: '4.2.iv.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'tavipulā',
      id: '4.2.iv.VIII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'mātrāsamavṛtta',
      id: '4.2.v',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'acaladhṛtivṛttam',
      id: '4.2.v.I',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'mātrāsamakam',
      id: '4.2.v.II',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'viślokavṛttam',
      id: '4.2.v.III',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'vānavāsikāvṛttam',
      id: '4.2.v.IV',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'citrāvṛttam',
      id: '4.2.v.V',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'upacitrāvṛttam',
      id: '4.2.v.VI',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'pādākulakavṛttam',
      id: '4.2.v.VII',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'śikhāvṛttam',
      id: '4.2.vi',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'khañjāvṛttam',
      id: '4.2.vii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'anaṅgakrīḍāvṛttam',
      id: '4.2.viii',
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: '',
      title_eng: 'rucirāvṛttam',
      id: '4.2.ix',
      definition_sans: '',
      definition_eng: ''
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
