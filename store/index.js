export const state = () => ({
  sidebar: false,
  lessons: [
    {
      title_sans: 'छन्दःशास्त्रः - भूमिका',
      title_eng: 'Introduction to Sanskrit Prosody',
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
      title_sans: 'छन्दोविभागाः',
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
      title_sans: 'समवृत्तम्',
      title_eng: 'Samam',
      id: '4.1.i',
      definition_sans: '<p>यस्य पद्यस्य चत्वारः अङ्घ्रयः पादाः तुल्येन समानेन लक्षणेन लक्षिता युक्ताः सन्ति तद् वृत्तं समं ।</p><p>यथा – उपेन्द्रव्रज्रा – सर्वेऽपि पादाः एकादशवर्णात्मकाः समानलक्षणभाजश्च भवन्ति | </p><h3>समवृत्तभेदाः -</h3><p>एकाक्षरात् पादात् आरभ्य एकाक्षरवर्धितैः एकेन-एकेन अक्षरेण वर्धितैः पादैः यावत् षड्विंशति संख्याकं प्रति गतं गमनं भवति, तावत् पृथक् भिन्नं छन्दो भवेत् ।',
      definition_eng: ''
    },
    {
      title_sans: 'उक्ता',
      title_eng: 'Ukta',
      id: '4.1.i.I',
      definition_sans: '<h3>श्री</h3>गुः श्रीः - एकाक्षरपादायाम् उक्तायां गुर्वेकश्चेत्पादः तदा श्री नाम वृत्तं भवति |',
      definition_eng: '<h3>śrīḥ</h3> When each quarter of a verse contains only one long syllable then the metre is called śrīḥ.',
      common: '<h3>उदाहरणम् Example: </h3><table  style="width: 40%"><tbody><tr><td>गु </td><td>गु </td><td>गु </td><td>गु </td></tr><tr><td>ऽ </td><td>ऽ </td><td>ऽ </td><td>ऽ </td></tr><tr><td>वि </td><td>ष्णुं </td><td>व </td><td>न्दे </td></tr></tbody></table>'
    },
    {
      title_sans: 'अत्युक्ता',
      title_eng: 'Atyukta',
      id: '4.1.i.II',
      definition_sans: '<h3>स्त्री</h3><p>गौ स्त्री = द्वौ गुरौ यदि पादे भवतः तदा स्त्री नाम वृत्तं भवति</p>',
      definition_eng: '<h3>Strī</h3> When each quarter of a verse contains two long syllables then the metre is called Strī.',
      common: '<h3>उदाहरणम् Example: &nbsp; </h3><p><table><tbody><tr><td>गु&nbsp; गु</td><td>&nbsp;गु&nbsp;&nbsp;&nbsp; गु </td><td>&nbsp;&nbsp;गु&nbsp;&nbsp; गु </td><td>&nbsp;गु गु </td></tr><tr><td>ऽ&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp;&nbsp;&nbsp; ऽ </td><td>&nbsp;&nbsp;ऽ&nbsp;&nbsp; ऽ </td><td>&nbsp;ऽ ऽ </td></tr><tr><td>गोप&nbsp; &nbsp; </td><td>स्त्रीभिः</td><td>&nbsp;&nbsp;कृष्णो</td><td>&nbsp;&nbsp;रेमे</td></tr></tbody></table></p>'
    },
    {
      title_sans: 'मध्या',
      title_eng: 'Madhya',
      id: '4.1.i.III',
      types: 2,
      type: [
        {
          text_sans: '<h3>i. नारी Narī</h3><p>मो नारी – यदि पादे मगणश्चेत् तदा नारी नाम वृत्तं भवति</p><p>When each quarter of a verse contains three long syllables then the metre is called Narī.</p><table><tbody><tr><td>&nbsp;&nbsp; म</td><td>&nbsp;&nbsp;&nbsp;&nbsp; म</td><td  style="width: 100.417px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;म</td><td  style="width: 94.0833px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; म</td></tr><tr><td>ऽ&nbsp; ऽ ऽ</td><td>&nbsp;ऽ ऽ ऽ </td><td>&nbsp; ऽ&nbsp;&nbsp; ऽ&nbsp;&nbsp; ऽ</td><td>&nbsp;ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपानां&nbsp; </td><td>नारीभिः।</td><td> श्लिष्टोऽव्यात्</td><td> कृष्णो वः ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>ii. मृगी Mrgī</h3><p>रो मृगी - यदि पादे रगणश्चेत् तदा मगी नाम वृत्तं भवति </p><p>When three syllables of one <em>ra</em> group form each quarter then the metre is called mrgi.</p><p> In each quarter the first and third syllables are long and the second is short.</p><table><tr><td>र</td><td>र</td><td>र</td><td>र</td></tr><tr><td>ऽ   | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td><td> ऽ | ऽ </td></tr><tr><td>सा मृगी</td><td>लोचना | </td><td> राधिका</td><td>श्रीपतेः ||</td></tr></table>'
        }
      ],
      definition_sans: '',
      definition_eng: ''
    },
    {
      title_sans: 'प्रतिष्ठा',
      title_eng: 'Pratishta',
      id: '4.1.i.IV',
      definition_sans: '<h3>कन्या</h3><p>कन्या - पादश्चतुर्गुरुः चेत् कन्या नाम वृत्तं भवति ।</p>',
      definition_eng: '<h3>Kanya</h3><p>When four long syllables arranged as one <em>ga</em> syllable and one <em>ma</em> group form each pada, then the metre is called <em>Kanya</em>.</p>',
      common: 'उदाहरणम् Example: <table><tr><td>&nbsp; &nbsp; &nbsp; &nbsp;  म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; गु</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म &nbsp; &nbsp; &nbsp; गु</td></tr><tr><td>&nbsp; ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp;  ऽ&nbsp; </td><td>&nbsp; ऽ ऽ &nbsp;  ऽ ऽ</td><td>ऽ&nbsp; ऽ&nbsp; &nbsp; &nbsp;  ऽ ऽ</td><td>&nbsp; ऽ&nbsp;  ऽ &nbsp; ऽ &nbsp; ऽ</td></tr><tr><td>भास्वत्कन्या </td><td> सैका धन्या | </td><td> यस्याः &nbsp; कूले &nbsp; </td><td> कृष्णो अखेलत् ॥</td></table>'
    },
    {
      title_sans: 'सुप्रतिष्ठा',
      title_eng: 'Supratishta',
      id: '4.1.i.V',
      definition_sans: '<h3>पङ्क्तिः</h3><p>म्गौ गिति पङ्क्तिः – यदि पादे भगण गुरू पुनर्गुरुश्चेत्तर्हि पङ्क्तिः नाम वृत्तं भवति |</p>',
      definition_eng: '<h3>Pankti</h3><p>This metre has five syllables of one <em>bha</em> group and two <em>ga</em> groups in each quarter.</p><p>So, here, the 1st, 4th and 5th syllables of each quarter are long and 2nd and 3rd are short.</p>',
      common: '<table><tr><td>ऽ &nbsp; ।  । &nbsp; ऽ ऽ &nbsp; ऽ &nbsp; ।  । &nbsp; ऽ ऽ</td><td> &nbsp; &nbsp; ऽ । ।  ऽ ऽ  &nbsp; ऽ ।  &nbsp; ।  ऽ ऽ </td></tr><tr><td>कृष्णसनाथा &nbsp; तर्णकपंक्तिः ।</td><td> &nbsp; यामुनकच्छे चारु चचार ॥</td></tr></table>'
    },
    {
      title_sans: 'गायत्री',
      title_eng: 'Gayatri',
      id: '4.1.i.VI',
      types: 4,
      type: [
        {
          text_sans: '<h3>i. तनुमध्या Tanumadhya</h3><p>त्यौ स्तस्तनुमध्या - तगण-यगणौ यदि पादे भवतस्तदा तनुमध्या नाम वृत्तं भवति ।</p><p>This metre contains six syllables of one <em>ta</em> group and one <em>ya</em> group in each quarter.</p><p>So, here the 1st, 2nd, 5th and 6th syllables of each quarter are long and the 3rd and the 4th short.</p><table><tr><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td><td> &nbsp; &nbsp; त &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  य &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  त &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  य</td></tr><tr><td>ऽ ऽ । । ऽ ऽ &nbsp; ऽ ऽ  &nbsp; । । ऽ  &nbsp; ऽ</td><td> ऽ ऽ । । ऽ ऽ  &nbsp; ऽ ऽ  । । ऽ ऽ</td></tr><tr><td>तेन प्रविभक्ता कामं वयसा सा । </td><td> येन प्रविलासं धत्ते तनुमध्या ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>ii. शशिवदना Shashivadana</h3><p>यदि पादे नगण-यगणौ भवतस्तदा शशिवदना नाम वृत्तं भवति ।</p><table><tr><td> &nbsp; &nbsp; न  &nbsp; &nbsp;  &nbsp;  &nbsp; य &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; न   &nbsp;  &nbsp;  &nbsp; य</td></tr><tr><td> &nbsp; | &nbsp; |  | | ऽ ऽ &nbsp; | | | | ऽ ऽ</td></tr><tr><td>शशिवदनानां व्रजतरुणीनाम् ।</td></tr><tr><td>अधरसुधोमिं मधुरिपुरैच्छत् ॥</td></tr></table>'
        },
        {
          text_sans: '<h3>iii. विद्युल्लेखा Vidyullekha</h3><p>यदि पादे मगणौ स्तस्तदा विद्युल्लेखा नाम वृत्तं भवति । </p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td><td>&nbsp; &nbsp; &nbsp; &nbsp; म&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; म</td></tr><tr><td>&nbsp; ऽ ऽ ऽ&nbsp; ऽ&nbsp; &nbsp; ऽ ऽ</td><td  style="width: 383.333px;">&nbsp; ऽ ऽ&nbsp; &nbsp; ऽ&nbsp; ऽ&nbsp; ऽ&nbsp; ऽ</td></tr><tr><td>गोपस्त्रीणां मुख्या । </td><td>विद्युल्लेखा रूपा ॥</td></tr><tr><td>कालिन्दी तीरे सा ।</td><td> रेमे श्रीकृष्णेन ॥</td></tr></tbody></table>'
        },
        {
          text_sans: '<h3>iv. वसुमती Vasumati</h3><p>तगण-सगणौ चेत् पादः तदा वसुमती नाम वृत्तम् ।</p><table><tbody><tr><td>&nbsp; &nbsp; &nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td><td>&nbsp; &nbsp; त&nbsp; &nbsp; &nbsp; स</td></tr><tr><td  style="width: 117.867px;">&nbsp; ऽ ऽ ।। । ऽ</td><td  style="width: 614.333px;">&nbsp; ऽऽ ।। । ऽ</td></tr><tr><td>राजीवनयना, </td><td>नूनं वसुमती ।</td></tr><tr><td>रामा भवति </td><td> सा नूनं वसुमती ॥</td></tr></tbody></table>'
        }
      ],
      definition_sans: '<p>सर्वेषु पादेषु पादान्ते यतिः ।</p>',
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
