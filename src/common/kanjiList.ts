const Kanjis: Record<string, {}> = {
    'n5': {
        '一': {
            meanings: 'one, 1',
            on_readings: ['いち', 'いつ'],
            kun_readings: ['ひと-', 'ひと(つ)']
        },
        '二': {
            meanings: 'two, 2',
            on_readings: ['じ', 'に'],
            kun_readings: ['ふた', 'ふた(つ)', 'ふたたび']
        },
        '三': {
            meanings: 'three, 3',
            on_readings: ['さん', 'ぞう'],
            kun_readings: ['み', 'み(つ)', 'みっ(つ)']
        },
        '四': {
            meanings: 'four, 4',
            on_readings: ['し'], 
            kun_readings: ['よ', 'よ(つ)', 'よっ(つ)', 'よん']
        },
        '五': {
            meanings: 'five, 5', 
            on_readings: ['ご'],
            kun_readings: ['いつ', 'いつ(つ)']
        },
        '六': {
            meanings: 'six, 6',
            on_readings: ['りく', 'ろく'],
            kun_readings: ['む', 'む(つ)', 'むい', 'むっ(つ)']
        },
        '七': {
            meanings: 'seven, 7',
            on_readings: ['しち'],
            kun_readings: ['なな', 'なな(つ)', 'なの']
        },
        '八': {
            meanings: 'eight, 8',
            on_readings: ['はち', 'はつ'],
            kun_readings: ['や', 'や(つ)', 'やっ(つ)', 'よう']
        },
        '九': {
            meanings: 'nine',
            on_readings: ['きゅう', 'く'],
            kun_readings: ['ここの', 'ここの(つ)']
        },
        '十': {
            meanings: 'ten',
            on_readings: ['じっ', 'じゅう', 'じゅっ'],
            kun_readings: ['そ', 'と', 'とお']
        },
        '上': {
            meanings: 'above, up',
            on_readings: ['しゃん', 'しょう', 'じょう'],
            kun_readings: ['あ(がり)', '-あ(がる)', '-あ(げる)', '-うえ', 'あ(がり)', 'あ(がる)', 'あ(げる)', 'うえ', 'うわ-', 'かみ', 'たてまつ(る)', 'のぼ(す)', 'のぼ(せる)', 'のぼ(り)', 'のぼ(る)']
        },
        '下': {
            meanings: 'below, descend, down, give, inferior, low',
            on_readings: ['か', 'げ'],
            kun_readings: ['-くだ(す)', 'お(りる)', 'お(ろす)', 'くだ(さる)', 'くだ(す)', 'くだ(り)', 'くだ(る)', 'さ(がる)', 'さ(げる)', 'した', 'しも', 'もと']
        },
        '中': {
            meanings: 'center, in, inside, mean, middle',
            on_readings: ['ちゅう'],
            kun_readings: ['あた(る)', 'うち', 'なか']
        },
        '人': {
            meanings: 'person',
            on_readings: ['じん', 'にん'],
            kun_readings: ['-と', '-り', 'ひと']
        },
        '休': {
            meanings: 'day off, rest, retire, sleep',
            on_readings: ['きゅう'],
            kun_readings: ['やす(まる)', 'やす(む)', 'やす(める)']
        },
        '先': {
            meanings: 'ahead, before, future, precedence, previous',
            on_readings: ['せん'],
            kun_readings: ['さき', 'ま(ず)']
        },
        '入': {
            meanings: 'enter, insert',
            on_readings: ['じゅ', 'にゅう'],
            kun_readings: ['-い(り)', '-い(る)', '-い(れ)', 'い(る)', 'い(れる)', 'はい(る)']
        },
        '円': {
            meanings: 'circle, round, yen',
            on_readings: ['えん'],
            kun_readings: ['まど', 'まど(か)', 'まる', 'まる(い)', 'まろ(やか)']
        },
        '出': {
            meanings: 'come out, exit, go out, leave, protrude, put out',
            on_readings: ['しゅつ', 'すい'],
            kun_readings: ['-だ(す)', '-で', 'い(だす)', 'い(でる)', 'だ(す)', 'で(る)']
        },
        '力': {
            meanings: 'bear up, exert, power, strain, strength, strong',
            on_readings: ['りい', 'りき', 'りょく'],
            kun_readings: ['ちから']
        },
        '千': {
            meanings: 'thousand',
            on_readings: ['せん'],
            kun_readings: ['ち']
        },
        '口': {
            meanings: 'mouth',
            on_readings: ['く', 'こう'],
            kun_readings: ['くち']
        },
        '右': {
            meanings: 'right',
            on_readings: ['う', 'ゆう'],
            kun_readings: ['みぎ']
        },
        '名': {
            meanings: 'distinguished, name, noted, reputation',
            on_readings: ['みょう', 'めい'],
            kun_readings: ['-な', 'な']
        },
        '土': {
            meanings: 'Turkey, earth, ground, soil',
            on_readings: ['と', 'ど'],
            kun_readings: ['つち']
        },
        '夕': {
            meanings: 'evening',
            on_readings: ['せき'],
            kun_readings: ['ゆう']
        },
        '大': {
            meanings: 'big, large',
            on_readings: ['たい', 'だい'],
            kun_readings: ['-おお(いに)', 'おお-', 'おお(きい)']
        },
        '天': {
            meanings: 'heavens, imperial, sky',
            on_readings: ['てん'],
            kun_readings: ['あま-', 'あまつ', 'あめ']
        },
        '女': {
            meanings: 'female, woman',
            on_readings: ['じょ', 'にょ', 'にょう'],
            kun_readings: ['おんな', 'め']
        },
        '子': {
            meanings: 'child, first sign of Chinese zodiac, sign of the rat, 11PM-1AM',
            on_readings: ['し', 'す', 'つ'],
            kun_readings: ['-こ', 'こ', 'ね']
        },
        '字': {
            meanings: 'character, letter, section of village, word',
            on_readings: ['じ'],
            kun_readings: ['-な', 'あざ', 'あざな']
        },
        '学': {
            meanings: 'learning, science, study',
            on_readings: ['がく'],
            kun_readings: ['まな(ぶ)']
        },
        '小': {
            meanings: 'little, small',
            on_readings: ['しょう'],
            kun_readings: ['お-', 'こ-', 'さ-', 'ちい(さい)']
        },
        '山': {
            meanings: 'mountain',
            on_readings: ['さん', 'せん'],
            kun_readings: ['やま']
        },
        '川': {
            meanings: 'river, stream',
            on_readings: ['せん'],
            kun_readings: ['かわ']
        },
        '左': {
            meanings: 'left',
            on_readings: ['さ', 'しゃ'],
            kun_readings: ['ひだり']
        },
        '年': {
            meanings: 'counter for years, year',
            on_readings: ['ねん'],
            kun_readings: ['とし']
        },
        '手': {
            meanings: 'hand',
            on_readings: ['しゅ', 'ず'],
            kun_readings: ['-て', 'た-', 'て', 'て-']
        },
        '文': {
            meanings: 'art, decoration, figures, literature, plan, sentence, style',
            on_readings: ['ぶん', 'もん'],
            kun_readings: ['あや', 'ふみ']
        },
        '日': {
            meanings: 'Japan, counter for days, day, sun',
            on_readings: ['じつ', 'にち'],
            kun_readings: ['-か', '-び', 'ひ']
        },
        '早': {
            meanings: 'early, fast',
            on_readings: ['さ', 'そう'],
            kun_readings: ['さ-', 'はや', 'はや-', 'はや(い)', 'はや(まる)', 'はや(める)']
        },
        '月': {
            meanings: 'month, moon',
            on_readings: ['がつ', 'げつ'],
            kun_readings: ['つき']
        },
        '木': {
            meanings: 'tree, wood',
            on_readings: ['ぼく', 'もく'],
            kun_readings: ['き', 'こ-']
        },
        '本': {
            meanings: 'book, counter for long cylindrical things, main, origin, present, real, true',
            on_readings: ['ほん'],
            kun_readings: ['もと']
        },
        '村': {
            meanings: 'town, village',
            on_readings: ['そん'],
            kun_readings: ['むら']
        },
        '林': {
            meanings: 'forest, grove',
            on_readings: ['りん'],
            kun_readings: ['はやし']
        },
        '校': {
            meanings: 'correction, exam, printing, proof, school',
            on_readings: ['きょう', 'こう'],
            kun_readings: null
        },
        '森': {
            meanings: 'forest, woods',
            on_readings: ['しん'],
            kun_readings: ['もり']
        },
        '正': {
            meanings: 'correct, justice, righteous',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['ただ(しい)', 'ただ(す)', 'まさ', 'まさ(に)']
        },
        '気': {
            meanings: 'air, atmosphere, mind, mood, spirit',
            on_readings: ['き', 'け'],
            kun_readings: ['き']
        },
        '水': {
            meanings: 'water',
            on_readings: ['すい'],
            kun_readings: ['みず', 'みず-']
        },
        '火': {
            meanings: 'fire',
            on_readings: ['か'],
            kun_readings: ['-び', 'ひ', 'ほ-']
        },
        '犬': {
            meanings: 'dog',
            on_readings: ['けん'],
            kun_readings: ['いぬ', 'いぬ-']
        },
        '玉': {
            meanings: 'ball, jewel',
            on_readings: ['ぎょく'],
            kun_readings: ['-だま', 'たま', 'たま-']
        },
        '王': {
            meanings: 'king, magnate, rule',
            on_readings: ['のう', 'おう'],
            kun_readings: null
        },
        '生': {
            meanings: 'birth, genuine, life',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['-う', 'い(かす)', 'い(きる)', 'い(ける)', 'う(まれ)', 'う(まれる)', 'う(む)', 'うま(れる)', 'うまれ', 'お(う)', 'き', 'な(す)', 'な(る)', 'なま', 'なま-', 'は(える)', 'は(やす)', 'む(す)']
        },
        '田': {
            meanings: 'rice field, rice paddy',
            on_readings: ['でん'],
            kun_readings: ['た']
        },
        '男': {
            meanings: 'male',
            on_readings: ['だん', 'なん'],
            kun_readings: ['お', 'おとこ']
        },
        '町': {
            meanings: 'block, street, town, village',
            on_readings: ['ちょう'],
            kun_readings: ['まち']
        },
        '白': {
            meanings: 'white',
            on_readings: ['はく', 'びゃく'],
            kun_readings: ['しら-', 'しろ', 'しろ(い)']
        },
        '百': {
            meanings: 'hundred',
            on_readings: ['ひゃく', 'びゃく'],
            kun_readings: ['もも']
        },
        '目': {
            meanings: 'care, class, experience, eye, favor, insight, look',
            on_readings: ['ぼく', 'もく'],
            kun_readings: ['-め', 'ま-', 'め']
        },
        '石': {
            meanings: 'stone',
            on_readings: ['こく', 'しゃく', 'せき'],
            kun_readings: ['いし']
        },
        '空': {
            meanings: 'empty, sky, vacant, vacuum, void',
            on_readings: ['くう'],
            kun_readings: ['あ(き)', 'あ(く)', 'あ(ける)', 'から', 'す(かす)', 'す(く)', 'そら', 'むな(しい)']
        },
        '立': {
            meanings: 'erect, rise, set up, stand up',
            on_readings: ['りとる', 'りつ', 'りゅう'],
            kun_readings: ['-た(つ)', '-た(て)', '-た(てる)', '-だ(て)', '-だ(てる)', 'た(ち-)', 'た(つ)', 'た(て-)', 'た(てる)', 'たて-']
        },
        '竹': {
            meanings: 'bamboo',
            on_readings: ['ちく'],
            kun_readings: ['たけ']
        },
        '糸': {
            meanings: 'thread',
            on_readings: ['し'],
            kun_readings: ['いと']
        },
        '耳': {
            meanings: 'ear',
            on_readings: ['じ'],
            kun_readings: ['みみ']
        },
        '花': {
            meanings: 'flower',
            on_readings: ['か', 'け'],
            kun_readings: ['はな']
        },
        '草': {
            meanings: 'draft, grass, herbs, pasture, weeds, write',
            on_readings: ['そう'],
            kun_readings: ['-ぐさ', 'くさ', 'くさ-']
        },
        '虫': {
            meanings: 'bug, insect, temper',
            on_readings: ['き', 'ちゅう'],
            kun_readings: ['むし']
        },
        '見': {
            meanings: 'chances, hopes, idea, look at, opinion, see, visible',
            on_readings: ['けん'],
            kun_readings: ['み(える)', 'み(せる)', 'み(る)']
        },
        '貝': {
            meanings: 'shellfish',
            on_readings: ['ばい'],
            kun_readings: ['かい']
        },
        '赤': {
            meanings: 'red',
            on_readings: ['しゃく', 'せき'],
            kun_readings: ['あか', 'あか-', 'あか(い)', 'あか(らむ)', 'あか(らめる)']
        },
        '足': {
            meanings: 'be sufficient, counter for pairs of footwear, foot, leg',
            on_readings: ['そく'],
            kun_readings: ['あし', 'た(す)', 'た(りる)', 'た(る)']
        },
        '車': {
            meanings: 'car',
            on_readings: ['しゃ'],
            kun_readings: ['くるま']
        },
        '金': {
            meanings: 'gold',
            on_readings: ['きん', 'こん', 'ごん'],
            kun_readings: ['-がね', 'かな-', 'かね']
        },
        '雨': {
            meanings: 'rain',
            on_readings: ['う'],
            kun_readings: ['-さめ', 'あま-', 'あめ']
        },
        '青': {
            meanings: 'blue, green',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['あお', 'あお-', 'あお(い)']
        },
        '音': {
            meanings: 'noise, sound',
            on_readings: ['のん', 'いん', 'おん'],
            kun_readings: ['おと', 'ね']
        }
    },
    'n4': {
        '万': {
            meanings: '10,000, ten thousand',
            on_readings: ['ばん', 'まん'],
            kun_readings: ['よろず']
        },
        '楽': {
            meanings: 'comfort, ease, music',
            on_readings: ["ガク", "ゴウ", "ラク"],
            kun_readings: ["この(む)", "たの(しい)", "たの(しむ)"]
        },
        '丸': {
            meanings: 'ship, curl up, explain away, full (month), make round, perfection, pills, roll up, round, seduce',
            on_readings: ['がん'],
            kun_readings: ['まる', 'まる(い)', 'まる(める)']
        },
        '交': {
            meanings: 'association, coming & going, mingle, mixing',
            on_readings: ['こう'],
            kun_readings: ['-か(う)', 'か(わす)', 'かわ(す)', 'こもごも', 'ま(ざる)', 'ま(じる)', 'ま(ぜる)', 'まじ(える)', 'まじ(る)', 'まじ(わる)']
        },
        '京': {
            meanings: 'capital',
            on_readings: ['きょう', 'きん', 'けい'],
            kun_readings: ['みやこ']
        },
        '今': {
            meanings: 'now',
            on_readings: ['きん', 'こん'],
            kun_readings: ['いま']
        },
        '会': {
            meanings: 'association, interview, join, meet, meeting, party',
            on_readings: ['え', 'かい'],
            kun_readings: ['あ(う)', 'あ(わせる)', 'あつ(まる)']
        },
        '体': {
            meanings: 'body, counter for images, object, reality, substance',
            on_readings: ['たい', 'てい'],
            kun_readings: ['かたち', 'からだ']
        },
        '何': {
            meanings: 'what',
            on_readings: ['か'],
            kun_readings: ['なに', 'なに-', 'なん', 'なん-']
        },
        '作': {
            meanings: 'build, make, prepare, production',
            on_readings: ['さ', 'さく'],
            kun_readings: ['-づく(り)', 'つく(り)', 'つく(る)']
        },
        '元': {
            meanings: 'beginning, former time, origin',
            on_readings: ['がん', 'げん'],
            kun_readings: ['もと']
        },
        '兄': {
            meanings: 'big brother, elder brother',
            on_readings: ['きょう', 'けい'],
            kun_readings: ['あに']
        },
        '光': {
            meanings: 'light, ray',
            on_readings: ['こう'],
            kun_readings: ['ひか(る)', 'ひかり']
        },
        '公': {
            meanings: 'governmental, official, prince, public',
            on_readings: ['く', 'こう'],
            kun_readings: ['おおやけ']
        },
        '内': {
            meanings: 'among, between, home, house, inside, within',
            on_readings: ['だい', 'ない'],
            kun_readings: ['うち']
        },
        '冬': {
            meanings: 'winter',
            on_readings: ['とう'],
            kun_readings: ['ふゆ']
        },
        '刀': {
            meanings: 'knife, saber, sword',
            on_readings: ['とう'],
            kun_readings: ['かたな', 'そり']
        },
        '分': {
            meanings: 'chances, minute of time, parts, understand',
            on_readings: ['ふん', 'ぶ', 'ぶん'],
            kun_readings: ['わ(かつ)', 'わ(かる)', 'わ(かれる)', 'わ(け)', 'わ(ける)']
        },
        '切': {
            meanings: 'be sharp, cut, cutoff',
            on_readings: ['さい', 'せつ'],
            kun_readings: ['-き(り)', '-き(る)', '-き(れ)', '-き(れる)', '-ぎ(り)', '-ぎ(れ)', 'き(り)', 'き(る)', 'き(れ)', 'き(れる)']
        },
        '前': {
            meanings: 'before, in front',
            on_readings: ['ぜん'],
            kun_readings: ['-まえ', 'まえ']
        },
        '北': {
            meanings: 'north',
            on_readings: ['ほく'],
            kun_readings: ['きた']
        },
        '午': {
            meanings: 'noon',
            on_readings: ['ご'],
            kun_readings: ['うま']
        },
        '半': {
            meanings: 'half, middle, odd number, part-, semi-',
            on_readings: ['はん'],
            kun_readings: ['なか(ば)']
        },
        '南': {
            meanings: 'south',
            on_readings: ['な', 'なん'],
            kun_readings: ['みなみ']
        },
        '原': {
            meanings: 'field, meadow, original, plain, prairie, primitive, tundra, wilderness',
            on_readings: ['げん'],
            kun_readings: ['はら']
        },
        '友': {
            meanings: 'friend',
            on_readings: ['ゆう'],
            kun_readings: ['とも']
        },
        '古': {
            meanings: 'old',
            on_readings: ['こ'],
            kun_readings: ['-ふる(す)', 'ふる-', 'ふる(い)']
        },
        '台': {
            meanings: 'a stand, counter for machines and vehicles, pedestal',
            on_readings: ['たい', 'だい'],
            kun_readings: ['うてな', 'つかさ', 'われ']
        },
        '合': {
            meanings: '0.1, fit, join, suit',
            on_readings: ['か', 'が', 'ごう'],
            kun_readings: ['-あ(い)', '-あ(う)', '-あ(わせる)', '-あい', 'あ(い)', 'あ(う)', 'あ(わす)', 'あ(わせる)', 'あい-']
        },
        '同': {
            meanings: 'agree, equal, same',
            on_readings: ['どう'],
            kun_readings: ['おな(じ)']
        },
        '回': {
            meanings: 'times, counter for occurrences, game, revolve, round',
            on_readings: ['え', 'かい'],
            kun_readings: ['-まわ(し)', '-まわ(す)', '-まわ(り)', '-まわ(る)', 'か(える)', 'まわ(し-)', 'まわ(す)', 'まわ(る)', 'もとお(る)']
        },
        '図': {
            meanings: 'audacious, drawing, extraordinary, map, plan',
            on_readings: ['ず', 'と'],
            kun_readings: ['え', 'はか(る)']
        },
        '国': {
            meanings: 'country',
            on_readings: ['こく'],
            kun_readings: ['くに']
        },
        '園': {
            meanings: 'farm, garden, park, yard',
            on_readings: ['えん'],
            kun_readings: ['その']
        },
        '地': {
            meanings: 'earth, ground',
            on_readings: ['じ', 'ち'],
            kun_readings: null
        },
        '場': {
            meanings: 'location, place',
            on_readings: ['じょう', 'ちょう'],
            kun_readings: ['ば']
        },
        '声': {
            meanings: 'voice',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['こえ', 'こわ-']
        },
        '売': {
            meanings: 'sell',
            on_readings: ['ばい'],
            kun_readings: ['う(る)', 'う(れる)']
        },
        '夏': {
            meanings: 'summer',
            on_readings: ['か', 'が', 'げ'],
            kun_readings: ['なつ']
        },
        '外': {
            meanings: 'outside',
            on_readings: ['がい', 'げ'],
            kun_readings: ['そと', 'と-', 'はず(す)', 'はず(れる)', 'ほか']
        },
        '多': {
            meanings: 'many, much, frequent',
            on_readings: ['た'],
            kun_readings: ['おお(い)', 'まさ(に)', 'まさ(る)']
        },
        '夜': {
            meanings: 'evening, night',
            on_readings: ['や'],
            kun_readings: ['よ', 'よる']
        },
        '太': {
            meanings: 'big around, plump, thick',
            on_readings: ['た', 'たい'],
            kun_readings: ['ふと(い)', 'ふと(る)']
        },
        '妹': {
            meanings: 'younger sister',
            on_readings: ['まい'],
            kun_readings: ['いもうと']
        },
        '姉': {
            meanings: 'elder sister',
            on_readings: ['し'],
            kun_readings: ['あね', 'はは']
        },
        '室': {
            meanings: 'apartment, cellar, chamber, greenhouse, room',
            on_readings: ['しつ'],
            kun_readings: ['むろ']
        },
        '家': {
            meanings: 'expert, family, home, house, performer, professional',
            on_readings: ['か', 'け'],
            kun_readings: ['いえ', 'うち', 'や']
        },
        '寺': {
            meanings: 'Buddhist temple',
            on_readings: ['じ'],
            kun_readings: ['てら']
        },
        '少': {
            meanings: 'few, little',
            on_readings: ['しょう'],
            kun_readings: ['すく(ない)', 'すこ(し)']
        },
        '岩': {
            meanings: 'boulder, cliff, rock',
            on_readings: ['がん'],
            kun_readings: ['いわ']
        },
        '工': {
            meanings: 'construction, craft,',
            on_readings: ['く', 'ぐ', 'こう'],
            kun_readings: null
        },
        '市': {
            meanings: 'city, market, town',
            on_readings: ['し'],
            kun_readings: ['いち']
        },
        '帰': {
            meanings: 'arrive at, homecoming, lead to, result in',
            on_readings: ['き'],
            kun_readings: ['おく(る)', 'かえ(す)', 'かえ(る)', 'とつ(ぐ)']
        },
        '広': {
            meanings: 'broad, spacious, wide',
            on_readings: ['こう'],
            kun_readings: ['ひろ(い)', 'ひろ(がる)', 'ひろ(げる)', 'ひろ(まる)', 'ひろ(める)']
        },
        '店': {
            meanings: 'shop, store',
            on_readings: ['てん'],
            kun_readings: ['たな', 'みせ']
        },
        '弟': {
            meanings: 'faithful service to elders, younger brother',
            on_readings: ['だい', 'てい', 'で'],
            kun_readings: ['おとうと']
        },
        '弱': {
            meanings: 'frail, weak',
            on_readings: ['じゃく'],
            kun_readings: ['よわ(い)', 'よわ(まる)', 'よわ(める)', 'よわ(る)']
        },
        '強': {
            meanings: 'strong',
            on_readings: ['きょう', 'ごう'],
            kun_readings: ['こわ(い)', 'し(いる)', 'つよ(い)', 'つよ(まる)', 'つよ(める)']
        },
        '当': {
            meanings: 'appropriate, himself, hit, right',
            on_readings: ['とう'],
            kun_readings: ['あ(たり)', 'あ(たる)', 'あ(て)', 'あ(てる)', 'まさ(に)', 'まさ(にべし)']
        },
        '形': {
            meanings: 'form, shape, style',
            on_readings: ['ぎょう', 'けい'],
            kun_readings: ['-がた', 'かた', 'かたち', 'なり']
        },
        '後': {
            meanings: 'back, behind, later',
            on_readings: ['こう', 'ご'],
            kun_readings: ['あと', 'うし(ろ)', 'うしろ', 'おく(れる)', 'のち']
        },
        '心': {
            meanings: 'heart, heart radical (no. 61), mind, spirit',
            on_readings: ['しん'],
            kun_readings: ['-ごころ', 'こころ']
        },
        '才': {
            meanings: 'cubic shaku, genius, years old',
            on_readings: ['さい'],
            kun_readings: null
        },
        '教': {
            meanings: 'doctrine, faith, teach',
            on_readings: ['きょう'],
            kun_readings: ['おし(える)', 'おそ(わる)']
        },
        '数': {
            meanings: 'fate, figures, law, number, strength',
            on_readings: ['さく', 'しゅ', 'す', 'すう', 'そく'],
            kun_readings: ['かず', 'かぞ(える)', 'しばしば', 'せ(める)', 'わずらわ(しい)']
        },
        '新': {
            meanings: 'new',
            on_readings: ['しん'],
            kun_readings: ['あたら(しい)', 'あら-', 'あら(た)', 'にい-']
        },
        '方': {
            meanings: 'alternative, direction, person',
            on_readings: ['ほう'],
            kun_readings: ['-かた', '-がた', 'かた']
        },
        '明': {
            meanings: 'bright, light',
            on_readings: ['みょう', 'みん', 'めい'],
            kun_readings: ['-あ(け)', 'あ(かす)', 'あ(かり)', 'あ(く)', 'あ(くる)', 'あ(ける)', 'あか(らむ)', 'あか(るい)', 'あか(るむ)', 'あき(らか)']
        },
        '星': {
            meanings: 'dot, mark, spot, star',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['-ぼし', 'ほし']
        },
        '時': {
            meanings: 'hour, time',
            on_readings: ['じ'],
            kun_readings: ['-どき', 'とき']
        },
        '晴': {
            meanings: 'clear up',
            on_readings: ['せい'],
            kun_readings: ['-ば(れ)', 'は(らす)', 'は(れ)', 'は(れ-)', 'は(れる)']
        },
        '曜': {
            meanings: 'weekday',
            on_readings: ['よう'],
            kun_readings: null
        },
        '書': {
            meanings: 'write',
            on_readings: ['しょ'],
            kun_readings: ['-が(き)', '-がき', 'か(く)']
        },
        '朝': {
            meanings: '(North) Korea, dynasty, epoch, morning, period, regime',
            on_readings: ['ちょう'],
            kun_readings: ['あさ']
        },
        '来': {
            meanings: 'become, cause, come, due, next',
            on_readings: ['たい', 'らい'],
            kun_readings: ['き', 'き(たす)', 'き(たる)', 'きた(す)', 'きた(る)', 'く(る)', 'こ']
        },
        '東': {
            meanings: 'east',
            on_readings: ['とう'],
            kun_readings: ['ひがし']
        },
        '止': {
            meanings: 'halt, stop',
            on_readings: ['し'],
            kun_readings: ['-さ(し)', '-さ(す)', '-と(める)', '-ど(まり)', '-ど(め)', '-や(む)', 'と(まる)', 'と(める)', 'とど(まる)', 'とど(め)', 'とど(める)', 'や(む)', 'や(める)', 'よ(す)']
        },
        '歩': {
            meanings: 'counter for steps, walk',
            on_readings: ['ふ', 'ぶ', 'ほ'],
            kun_readings: ['あゆ(む)', 'ある(く)']
        },
        '母': {
            meanings: 'mother',
            on_readings: ['ぼ'],
            kun_readings: ['はは', 'も']
        },
        '毎': {
            meanings: 'every',
            on_readings: ['まい'],
            kun_readings: ['-ごと(に)', 'ごと']
        },
        '毛': {
            meanings: 'down, feather, fur, hair',
            on_readings: ['もう'],
            kun_readings: ['け']
        },
        '池': {
            meanings: 'cistern, pond, pool, reservoir',
            on_readings: ['ち'],
            kun_readings: ['いけ']
        },
        '汽': {
            meanings: 'steam, vapor',
            on_readings: ['き'],
            kun_readings: null
        },
        '点': {
            meanings: 'decimal point, mark, point, speck, spot',
            on_readings: ['てん'],
            kun_readings: ['さ(す)', 'た(てる)', 'つ(く)', 'つ(ける)', 'とぼ(す)', 'とも(す)', 'ぼち']
        },
        '父': {
            meanings: 'father',
            on_readings: ['ふ'],
            kun_readings: ['ちち']
        },
        '牛': {
            meanings: 'cow',
            on_readings: ['ぎゅう'],
            kun_readings: ['うし']
        },
        '理': {
            meanings: 'arrangement, justice, logic, reason, truth',
            on_readings: ['り'],
            kun_readings: ['ことわり']
        },
        '用': {
            meanings: 'business, employ, service, use, utilize',
            on_readings: ['よう'],
            kun_readings: ['もち(いる)']
        },
        '画': {
            meanings: 'brush-stroke, picture',
            on_readings: ['え', 'かい', 'かく', 'が'],
            kun_readings: ['えが(く)', 'かぎ(る)', 'かく(する)', 'はか(る)', 'はかりごと']
        },
        '番': {
            meanings: 'number in a series, turn',
            on_readings: ['ばん'],
            kun_readings: ['つが(い)']
        },
        '知': {
            meanings: 'know, wisdom',
            on_readings: ['ち'],
            kun_readings: ['し(らせる)', 'し(る)']
        },
        '社': {
            meanings: 'association, company, firm, office, shrine',
            on_readings: ['しゃ'],
            kun_readings: ['やしろ']
        },
        '秋': {
            meanings: 'autumn',
            on_readings: ['しゅう'],
            kun_readings: ['あき', 'とき']
        },
        '科': {
            meanings: 'course, department, section',
            on_readings: ['か'],
            kun_readings: null
        },
        '答': {
            meanings: 'answer, solution',
            on_readings: ['とう'],
            kun_readings: ['こた(え)', 'こた(える)']
        },
        '算': {
            meanings: 'abacus, calculate, divining, number, probability',
            on_readings: ['さん'],
            kun_readings: ['そろ']
        },
        '米': {
            meanings: 'USA, metre, rice',
            on_readings: ['べい', 'まい', 'めえとる'],
            kun_readings: ['こめ', 'よね']
        },
        '組': {
            meanings: 'assemble, association, braid, construct, cooperate, grapple, plait, unite',
            on_readings: ['そ'],
            kun_readings: ['-ぐみ', 'く(む)', 'くみ']
        },
        '絵': {
            meanings: 'drawing, painting, picture, sketch',
            on_readings: ['え', 'かい'],
            kun_readings: null
        },
        '線': {
            meanings: 'line, track',
            on_readings: ['せん'],
            kun_readings: ['すじ']
        },
        '羽': {
            meanings: 'counter for birds, rabbits, feathers',
            on_readings: ['う'],
            kun_readings: ['は', 'はね', 'わ']
        },
        '考': {
            meanings: 'consider, think over',
            on_readings: ['こう'],
            kun_readings: ['かんが(え)', 'かんが(える)']
        },
        '聞': {
            meanings: 'ask, hear, listen',
            on_readings: ['ぶん', 'もん'],
            kun_readings: ['き(く)', 'き(こえる)']
        },
        '肉': {
            meanings: 'meat',
            on_readings: ['にく'],
            kun_readings: ['しし']
        },
        '色': {
            meanings: 'color',
            on_readings: ['しき', 'しょく'],
            kun_readings: ['いろ']
        },
        '茶': {
            meanings: 'tea',
            on_readings: ['さ', 'ちゃ'],
            kun_readings: null
        },
        '行': {
            meanings: 'act, bank, carry out, conduct, going, journey, line, row',
            on_readings: ['あん', 'ぎょう', 'こう'],
            kun_readings: ['-い(き)', '-いき', '-ゆ(き)', '-ゆき', 'い(く)', 'おこ(なう)', 'おこな(う)', 'ゆ(く)']
        },
        '西': {
            meanings: 'Spain, west',
            on_readings: ['さい', 'す', 'せい'],
            kun_readings: ['にし']
        },
        '親': {
            meanings: 'dealer (cards), familiarity, intimacy, parent, relative',
            on_readings: ['しん'],
            kun_readings: ['おや', 'おや-', 'した(しい)', 'した(しむ)']
        },
        '角': {
            meanings: 'angle, antlers, corner, horn, square',
            on_readings: ['かく'],
            kun_readings: ['かど', 'つの']
        },
        '言': {
            meanings: 'say, word',
            on_readings: ['げん', 'ごん'],
            kun_readings: ['い(う)', 'こと']
        },
        '読': {
            meanings: 'read',
            on_readings: ['とう', 'とく', 'どく'],
            kun_readings: ['-よ(み)', 'よ(む)']
        },
        '谷': {
            meanings: 'valley',
            on_readings: ['こく'],
            kun_readings: ['きわ(まる)', 'たに']
        },
        '買': {
            meanings: 'buy',
            on_readings: ['ばい'],
            kun_readings: ['か(う)']
        },
        '走': {
            meanings: 'run',
            on_readings: ['そう'],
            kun_readings: ['はし(る)']
        },
        '近': {
            meanings: 'akin, early, near, tantamount',
            on_readings: ['きん', 'こん'],
            kun_readings: ['ちか(い)']
        },
        '通': {
            meanings: 'avenue, commute, counter for letters, notes, documents, etc., pass through, traffic',
            on_readings: ['つ', 'つう'],
            kun_readings: ['-とお(り)', '-どお(し)', '-どお(り)', 'かよ(う)', 'とお(し)', 'とお(す)', 'とお(り)', 'とお(る)']
        },
        '週': {
            meanings: 'week',
            on_readings: ['しゅう'],
            kun_readings: null
        },
        '道': {
            meanings: 'course, district, journey, moral, road-way, street, teachings',
            on_readings: ['とう', 'どう'],
            kun_readings: ['いう', 'みち']
        },
        '遠': {
            meanings: 'distant, far',
            on_readings: ['えん', 'おん'],
            kun_readings: ['とお(い)']
        },
        '里': {
            meanings: 'league, village',
            on_readings: ['り'],
            kun_readings: ['さと']
        },
        '雪': {
            meanings: 'snow',
            on_readings: ['せつ'],
            kun_readings: ['ゆき']
        },
        '雲': {
            meanings: 'cloud',
            on_readings: ['うん'],
            kun_readings: ['-ぐも', 'くも']
        },
        '電': {
            meanings: 'electricity',
            on_readings: ['でん'],
            kun_readings: null
        },
        '頭': {
            meanings: 'counter for large animals, head',
            on_readings: ['ず', 'と', 'とう'],
            kun_readings: ['-がしら', 'あたま', 'かしら', 'かぶり']
        },
        '顔': {
            meanings: 'expression, face',
            on_readings: ['がん'],
            kun_readings: ['かお']
        },
        '風': {
            meanings: 'air, manner, style, wind',
            on_readings: ['ふ', 'ふう'],
            kun_readings: ['かざ-', 'かぜ']
        },
        '食': {
            meanings: 'eat, food',
            on_readings: ['しょく', 'じき'],
            kun_readings: ['く(う)', 'く(らう)', 'た(べる)', 'は(む)']
        },
        '首': {
            meanings: 'counter for songs and poems, neck',
            on_readings: ['しゅ'],
            kun_readings: ['くび']
        },
        '馬': {
            meanings: 'horse',
            on_readings: ['ば'],
            kun_readings: ['うま', 'うま-', 'ま']
        },
        '高': {
            meanings: 'expensive, high, tall',
            on_readings: ['こう'],
            kun_readings: ['-だか', 'たか', 'たか(い)', 'たか(まる)', 'たか(める)']
        },
        '黄': {
            meanings: 'yellow',
            on_readings: ['おう', 'こう'],
            kun_readings: ['き', 'こ-']
        },
        '黒': {
            meanings: 'black',
            on_readings: ['こく'],
            kun_readings: ['くろ', 'くろ(い)', 'くろ(ずむ)']
        },
        '語': {
            meanings: 'language, speech, word',
            on_readings: ['ご'],
            kun_readings: ['かた(らう)', 'かた(る)']
        },
        '間': {
            meanings: 'interval, space',
            on_readings: ['かん', 'けん'],
            kun_readings: ['あい', 'あいだ', 'ま']
        },
        '麦': {
            meanings: 'barley, wheat',
            on_readings: ['ばく'],
            kun_readings: ['むぎ']
        },
        '話': {
            meanings: 'tale, talk',
            on_readings: ['わ'],
            kun_readings: ['はな(す)', 'はなし']
        },
        '門': {
            meanings: 'counter for cannons, gate',
            on_readings: ['もん'],
            kun_readings: ['かど', 'と']
        },
        '鳴': {
            meanings: 'bark, chirp, cry, echo, honk, ring, sound',
            on_readings: ['めい'],
            kun_readings: ['な(く)', 'な(らす)', 'な(る)']
        },
        '記': {
            meanings: 'account, narrative, scribe',
            on_readings: ['き'],
            kun_readings: ['しる(す)']
        },
        '長': {
            meanings: 'leader, long, senior, superior',
            on_readings: ['ちょう'],
            kun_readings: ['おさ', 'なが(い)']
        },
        '鳥': {
            meanings: 'bird, chicken',
            on_readings: ['ちょう'],
            kun_readings: ['とり']
        },
        '計': {
            meanings: 'measure, plan, plot, scheme',
            on_readings: ['けい'],
            kun_readings: ['はか(らう)', 'はか(る)']
        },
        '野': {
            meanings: 'civilian life, field, plains, rustic',
            on_readings: ['しょ', 'や'],
            kun_readings: ['の', 'の-']
        },
        '魚': {
            meanings: 'fish',
            on_readings: ['ぎょ'],
            kun_readings: ['-ざかな', 'うお', 'さかな']
        },
    },
    'n3': {
        '丁': {
            meanings: '4th calendar sign, counter for guns, tools, leaves or cakes of something, even number, street, town, ward',
            on_readings: ['ち', 'ちょう', 'ちん', 'てい', 'とう'],
            kun_readings: ['ひのと']
        },
        '世': {
            meanings: 'generation, public, society, world',
            on_readings: ['せ', 'せい', 'そう'],
            kun_readings: ['よ']
        },
        '両': {
            meanings: 'both, counter for carriages (e.g., in a train), old Japanese coin, two',
            on_readings: ['りょう'],
            kun_readings: ['てる', 'ふたつ']
        },
        '主': {
            meanings: 'chief, lord, main thing, master, principal',
            on_readings: ['しゅ', 'しゅう', 'す'],
            kun_readings: ['あるじ', 'おも', 'ぬし']
        },
        '乗': {
            meanings: 'board, counter for vehicles, join, mount, multiplication, power, record, ride',
            on_readings: ['しょう', 'じょう'],
            kun_readings: ['-の(り)', 'の(せる)', 'の(る)']
        },
        '予': {
            meanings: 'I, beforehand, myself, previous',
            on_readings: ['しゃ', 'よ'],
            kun_readings: ['あらかじ(め)']
        },
        '事': {
            meanings: 'business, fact, matter, possibly, reason, thing',
            on_readings: ['じ', 'ず'],
            kun_readings: ['こと', 'つか(う)', 'つか(える)']
        },
        '仕': {
            meanings: 'attend, doing, official, serve',
            on_readings: ['し', 'じ'],
            kun_readings: ['つか(える)']
        },
        '他': {
            meanings: 'another, other, the others',
            on_readings: ['た'],
            kun_readings: ['ほか']
        },
        '代': {
            meanings: 'age, change, charge, convert, counter for decades of ages, eras, etc., fee, generation, period, rate, replace, substitute',
            on_readings: ['たい', 'だい'],
            kun_readings: ['-が(わり)', '-がわ(り)', 'か(える)', 'か(わり)', 'か(わる)', 'かわ(り)', 'かわ(る)', 'しろ', 'よ']
        },
        '住': {
            meanings: 'dwell, inhabit, live, reside',
            on_readings: ['じゅう', 'ちゅう', 'ぢゅう'],
            kun_readings: ['-ず(まい)', 'す(まう)', 'す(む)']
        },
        '使': {
            meanings: 'ambassador, cause, envoy, messenger, order, send on a mission, use',
            on_readings: ['し'],
            kun_readings: ['-つか(い)', '-づか(い)', 'つか(い)', 'つか(う)']
        },
        '係': {
            meanings: 'concern oneself, connection, duty, person in charge',
            on_readings: ['けい'],
            kun_readings: ['-がかり', 'かか(る)', 'かか(わる)', 'かかり']
        },
        '倍': {
            meanings: 'double, fold, times, twice',
            on_readings: ['ばい'],
            kun_readings: null
        },
        '全': {
            meanings: 'all, complete, entire, fulfill, whole',
            on_readings: ['ぜん'],
            kun_readings: ['すべ(て)', 'まった(く)']
        },
        '具': {
            meanings: 'counter for armor, suits, sets of furniture, ingredients, means, possess, tool, utensil',
            on_readings: ['ぐ'],
            kun_readings: ['そな(える)', 'つぶさ(に)']
        },
        '写': {
            meanings: 'be photographed, copy, describe',
            on_readings: ['しゃ', 'じゃ'],
            kun_readings: ['うつ-', 'うつ(し)', 'うつ(す)', 'うつ(る)']
        },
        '列': {
            meanings: 'column, file, rank, row, tier',
            on_readings: ['れ', 'れつ'],
            kun_readings: null
        },
        '助': {
            meanings: 'assist, help, rescue',
            on_readings: ['じょ'],
            kun_readings: ['す(ける)', 'すけ', 'たす(かる)', 'たす(ける)']
        },
        '勉': {
            meanings: 'diligent, encourage, endeavour, exertion, make effort, strive',
            on_readings: ['べん'],
            kun_readings: ['つと(める)']
        },
        '動': {
            meanings: 'change, confusion, motion, move, shake, shift',
            on_readings: ['どう'],
            kun_readings: ['うご(かす)', 'うご(く)']
        },
        '勝': {
            meanings: 'excel, prevail, victory, win',
            on_readings: ['しょう'],
            kun_readings: ['-が(ち)', 'か(つ)', 'かつ', 'すぐ(れる)', 'まさ(る)']
        },
        '化': {
            meanings: '-ization, change, delude, enchant, influence, take the form of',
            on_readings: ['か', 'け'],
            kun_readings: ['け(する)', 'ば(かす)', 'ば(ける)', 'ふ(ける)']
        },
        '区': {
            meanings: 'district, ward',
            on_readings: ['おう', 'く', 'こう'],
            kun_readings: null
        },
        '医': {
            meanings: 'doctor, medicine',
            on_readings: ['い'],
            kun_readings: ['い(する)', 'い(やす)', 'くすし']
        },
        '去': {
            meanings: 'divorce, elapse, eliminate, gone, leave, past, quit',
            on_readings: ['きょ', 'こ'],
            kun_readings: ['-さ(る)', 'さ(る)']
        },
        '反': {
            meanings: 'anti-',
            on_readings: ['たん', 'はん', 'ほ', 'ほん'],
            kun_readings: ['-かえ(る)', 'かえ(す)', 'かえ(る)', 'そ(らす)', 'そ(る)']
        },
        '取': {
            meanings: 'fetch, take, take up',
            on_readings: ['しゅ'],
            kun_readings: ['-ど(り)', 'と(り)', 'と(り-)', 'と(る)', 'とり']
        },
        '受': {
            meanings: 'accept, answer (phone), catch, get, receive, take, undergo',
            on_readings: ['じゅ'],
            kun_readings: ['-う(け)', 'う(かる)', 'う(ける)']
        },
        '号': {
            meanings: 'call, item, name, nickname, number, pseudonym, title',
            on_readings: ['ごう'],
            kun_readings: ['さけ(ぶ)', 'よびな']
        },
        '向': {
            meanings: 'approach, beyond, confront, defy, facing, tend toward, yonder',
            on_readings: ['こう'],
            kun_readings: ['-む(き)', '-む(け)', 'む(い)', 'む(かい)', 'む(かう)', 'む(く)', 'む(ける)', 'む(こう)', 'む(こう-)', 'むか(い)', 'むこ']
        },
        '君': {
            meanings: 'male name suffix, mister, ruler, you',
            on_readings: ['くん'],
            kun_readings: ['-ぎみ', 'きみ']
        },
        '味': {
            meanings: 'flavor, taste',
            on_readings: ['み'],
            kun_readings: ['あじ', 'あじ(わう)']
        },
        '命': {
            meanings: 'appoint, command, decree, destiny, fate, life',
            on_readings: ['みょう', 'めい'],
            kun_readings: ['いのち']
        },
        '和': {
            meanings: 'Japan, Japanese style, harmony, peace, soften',
            on_readings: ['お', 'か', 'わ'],
            kun_readings: ['あ(える)', 'なご(む)', 'なご(やか)', 'やわ(らぐ)', 'やわ(らげる)']
        },
        '品': {
            meanings: 'article, counter for meal courses, dignity, goods, refinement',
            on_readings: ['ひん', 'ほん'],
            kun_readings: ['しな']
        },
        '員': {
            meanings: 'employee, member, number, the one in charge',
            on_readings: ['いん'],
            kun_readings: null
        },
        '商': {
            meanings: 'dealing in, make a deal, merchant, selling',
            on_readings: ['しょう'],
            kun_readings: ['あきな(う)']
        },
        '問': {
            meanings: 'ask, problem, question',
            on_readings: ['もん'],
            kun_readings: ['と(い)', 'と(う)', 'とん']
        },
        '坂': {
            meanings: 'hill, incline, slope',
            on_readings: ['はん'],
            kun_readings: ['さか']
        },
        '央': {
            meanings: 'center, middle',
            on_readings: ['おう'],
            kun_readings: null
        },
        '始': {
            meanings: 'begin, commence',
            on_readings: ['し'],
            kun_readings: ['-はじ(める)', 'はじ(まる)', 'はじ(める)']
        },
        '委': {
            meanings: 'committee, devote, discard, entrust to, leave to',
            on_readings: ['い'],
            kun_readings: ['ゆだ(ねる)']
        },
        '守': {
            meanings: 'defend, guard, obey, protect',
            on_readings: ['しゅ', 'す'],
            kun_readings: ['-もり', 'かみ', 'まも(り)', 'まも(る)', 'もり']
        },
        '安': {
            meanings: 'cheap, contented, low, peaceful, quiet, relax, rested',
            on_readings: ['あん'],
            kun_readings: ['やす', 'やす(い)', 'やす(まる)', 'やす(らか)']
        },
        '定': {
            meanings: 'decide, determine, establish, fix',
            on_readings: ['じょう', 'てい'],
            kun_readings: ['さだ(か)', 'さだ(まる)', 'さだ(める)']
        },
        '実': {
            meanings: 'fruit, nut, reality, seed, truth',
            on_readings: ['しつ', 'じつ'],
            kun_readings: ['まこと', 'み', 'みち(る)', 'みの', 'みの(る)']
        },
        '客': {
            meanings: 'client, customer, guest, visitor',
            on_readings: ['かく', 'きゃく'],
            kun_readings: null
        },
        '宮': {
            meanings: 'Shinto shrine, constellations, palace, princess',
            on_readings: ['きゅう', 'く', 'くう', 'ぐう'],
            kun_readings: ['みや']
        },
        '宿': {
            meanings: 'be pregnant, dwell, dwelling, home, inn, lodge, lodging, relay station',
            on_readings: ['しゅく'],
            kun_readings: ['やど', 'やど(す)', 'やど(る)']
        },
        '寒': {
            meanings: 'cold',
            on_readings: ['かん'],
            kun_readings: ['さむ(い)']
        },
        '対': {
            meanings: 'anti-, compare, equal, even, opposite, versus, vis-a-vis',
            on_readings: ['たい', 'つい'],
            kun_readings: ['あいて', 'こた(える)', 'そろ(い)', 'つれあ(い)', 'なら(ぶ)', 'むか(う)']
        },
        '局': {
            meanings: 'affair, board, bureau, conclusion, court lady, her apartment, lady-in-waiting, office',
            on_readings: ['きょく'],
            kun_readings: ['つぼね']
        },
        '屋': {
            meanings: 'dealer, house, roof, seller, shop',
            on_readings: ['おく'],
            kun_readings: ['や']
        },
        '岸': {
            meanings: 'beach',
            on_readings: ['がん'],
            kun_readings: ['きし']
        },
        '島': {
            meanings: 'island',
            on_readings: ['とう'],
            kun_readings: ['しま']
        },
        '州': {
            meanings: 'province, state',
            on_readings: ['しゅう', 'す'],
            kun_readings: ['す']
        },
        '帳': {
            meanings: 'account book, album, curtain, net, notebook, tent, veil',
            on_readings: ['ちょう'],
            kun_readings: ['とばり']
        },
        '平': {
            meanings: 'even, flat, peace',
            on_readings: ['ひょう', 'びょう', 'へい'],
            kun_readings: ['たい(ら)', 'たい(らげる)', 'ひら']
        },
        '幸': {
            meanings: 'blessing, fortune, happiness',
            on_readings: ['こう'],
            kun_readings: ['さいわ(い)', 'さち', 'しあわ(せ)']
        },
        '度': {
            meanings: 'attitude, consider, counter for occurrences, degrees, occurrence, time',
            on_readings: ['たく', 'と', 'ど'],
            kun_readings: ['-た(い)', 'たび']
        },
        '庫': {
            meanings: 'storehouse, warehouse',
            on_readings: ['く', 'こ'],
            kun_readings: ['くら']
        },
        '庭': {
            meanings: 'courtyard, garden, yard',
            on_readings: ['てい'],
            kun_readings: ['にわ']
        },
        '式': {
            meanings: 'ceremony, expression, form, function, method, rite, style, system',
            on_readings: ['しき'],
            kun_readings: null
        },
        '役': {
            meanings: 'campaign, drafted labor, duty, office, role, service, war',
            on_readings: ['えき', 'やく'],
            kun_readings: null
        },
        '待': {
            meanings: 'depend on, wait',
            on_readings: ['たい'],
            kun_readings: ['-ま(ち)', 'ま(つ)']
        },
        '急': {
            meanings: 'emergency, hurry, steep, sudden',
            on_readings: ['きゅう'],
            kun_readings: ['いそ(ぎ)', 'いそ(ぐ)', 'せ(く)']
        },
        '息': {
            meanings: 'breath, coming to an end, interest (on money), nuture, respiration, rest, son',
            on_readings: ['そく'],
            kun_readings: ['いき']
        },
        '悪': {
            meanings: 'bad, evil, false, rascal, vice, wrong',
            on_readings: ['あく', 'お'],
            kun_readings: ['-にく(い)', 'あ(し)', 'ああ', 'いずくに', 'いずくんぞ', 'にく(い)', 'にく(む)', 'わる-', 'わる(い)']
        },
        '悲': {
            meanings: 'deplore, grieve, regret, sad',
            on_readings: ['ひ'],
            kun_readings: ['かな(しい)', 'かな(しむ)']
        },
        '想': {
            meanings: 'concept, idea, think, thought',
            on_readings: ['そ', 'そう'],
            kun_readings: ['おも(う)']
        },
        '意': {
            meanings: 'care, desire, heart, idea, liking, mind, taste, thought',
            on_readings: ['い'],
            kun_readings: null
        },
        '感': {
            meanings: 'emotion, feeling, sensation',
            on_readings: ['かん'],
            kun_readings: null
        },
        '所': {
            meanings: 'extent, place',
            on_readings: ['しょ'],
            kun_readings: ['-ところ', 'とこ', 'ところ', 'どころ']
        },
        '打': {
            meanings: 'dozen, hit, knock, pound, strike',
            on_readings: ['だ', 'だす'],
            kun_readings: ['う(ち-)', 'う(つ)', 'ぶ(つ)']
        },
        '投': {
            meanings: 'abandon, discard, give up, hurl, invest in, join, launch into, sell at a loss, throw',
            on_readings: ['とう'],
            kun_readings: ['-な(げ)', 'な(げる)']
        },
        '拾': {
            meanings: 'find, gather, go on foot, pick up, ten',
            on_readings: ['しゅう', 'じゅう'],
            kun_readings: ['ひろ(う)']
        },
        '持': {
            meanings: 'have, hold',
            on_readings: ['じ'],
            kun_readings: ['-も(ち)', 'も(つ)', 'も(てる)']
        },
        '指': {
            meanings: 'finger, indicate, measure (ruler), play (chess), point to, put into',
            on_readings: ['し'],
            kun_readings: ['-さ(し)', 'さ(す)', 'ゆび']
        },
        '放': {
            meanings: 'banish, emit, fire, liberate, release, set free, shoot',
            on_readings: ['ほう'],
            kun_readings: ['-っぱな(し)', 'こ(く)', 'はな(す)', 'はな(つ)', 'はな(れる)', 'ほう(る)']
        },
        '整': {
            meanings: 'arranging, key (music), meter, organize, tone, tune',
            on_readings: ['せい'],
            kun_readings: ['ととの(う)', 'ととの(える)']
        },
        '旅': {
            meanings: 'travel, trip',
            on_readings: ['りょ'],
            kun_readings: ['たび']
        },
        '族': {
            meanings: 'family, tribe',
            on_readings: ['ぞく'],
            kun_readings: null
        },
        '昔': {
            meanings: 'antiquity, old times, once upon a time',
            on_readings: ['しゃく', 'せき'],
            kun_readings: ['むかし']
        },
        '昭': {
            meanings: 'bright, shining',
            on_readings: ['しょう'],
            kun_readings: null
        },
        '暑': {
            meanings: 'hot, sultry, summer heat',
            on_readings: ['しょ'],
            kun_readings: ['あつ(い)']
        },
        '暗': {
            meanings: 'be blinded, darkness, disappear, grow dark, informal, shade',
            on_readings: ['あん'],
            kun_readings: ['くら(い)', 'くら(む)', 'くれ(る)']
        },
        '曲': {
            meanings: 'bend, composition, crooked, curve, fault, injustice, lean, melody, music, perverse, pleasure',
            on_readings: ['きょく'],
            kun_readings: ['くま', 'ま(がる)', 'ま(げる)']
        },
        '有': {
            meanings: 'approx, exist, happen, have, occur, possess',
            on_readings: ['う', 'ゆう'],
            kun_readings: ['あ(る)']
        },
        '服': {
            meanings: 'admit, clothing, discharge, obey',
            on_readings: ['ふく'],
            kun_readings: null
        },
        '期': {
            meanings: 'date, period, term, time',
            on_readings: ['き', 'ご'],
            kun_readings: null
        },
        '板': {
            meanings: 'board, plank, plate, stage',
            on_readings: ['はん', 'ばん'],
            kun_readings: ['いた']
        },
        '柱': {
            meanings: 'cylinder, pillar, post, support',
            on_readings: ['ちゅう'],
            kun_readings: ['はしら']
        },
        '根': {
            meanings: 'head (pimple), radical, root',
            on_readings: ['こん'],
            kun_readings: ['-ね', 'ね']
        },
        '植': {
            meanings: 'plant',
            on_readings: ['しょく'],
            kun_readings: ['う(える)', 'う(わる)']
        },
        '業': {
            meanings: 'arts, business, performance, vocation',
            on_readings: ['ぎょう', 'ごう'],
            kun_readings: ['わざ']
        },
        '様': {
            meanings: 'Esq., manner, polite suffix, situation, way',
            on_readings: ['しょう', 'よう'],
            kun_readings: ['さま', 'さん']
        },
        '横': {
            meanings: 'horizontal, perverse, side, sideways, unreasonable, width, woof',
            on_readings: ['おう'],
            kun_readings: ['よこ']
        },
        '橋': {
            meanings: 'bridge',
            on_readings: ['きょう'],
            kun_readings: ['はし']
        },
        '次': {
            meanings: 'next, order, sequence',
            on_readings: ['し', 'じ'],
            kun_readings: ['つ(ぐ)', 'つぎ']
        },
        '歯': {
            meanings: 'cog, tooth',
            on_readings: ['し'],
            kun_readings: ['は', 'よわ(い)', 'よわい', 'よわい(する)']
        },
        '死': {
            meanings: 'death, die',
            on_readings: ['し'],
            kun_readings: ['し(に-)', 'し(ぬ)']
        },
        '氷': {
            meanings: 'congeal, freeze, hail, ice, icicle',
            on_readings: ['ひょう'],
            kun_readings: ['こお(る)', 'こおり', 'ひ']
        },
        '決': {
            meanings: 'agree upon, appoint, decide, fix',
            on_readings: ['けつ'],
            kun_readings: ['-ぎ(め)', 'き(まる)', 'き(める)', 'さ(く)']
        },
        '油': {
            meanings: 'fat, oil',
            on_readings: ['ゆ', 'ゆう'],
            kun_readings: ['あぶら']
        },
        '波': {
            meanings: 'Poland, billows, waves',
            on_readings: ['は'],
            kun_readings: ['なみ']
        },
        '注': {
            meanings: 'annotate, comment, concentrate on, flow into, irrigate, notes, pour, shed (tears)',
            on_readings: ['ちゅう'],
            kun_readings: ['さ(す)', 'そそ(ぐ)', 'つ(ぐ)']
        },
        '泳': {
            meanings: 'swim',
            on_readings: ['えい'],
            kun_readings: ['およ(ぐ)']
        },
        '洋': {
            meanings: 'Western style, foreign, ocean, sea',
            on_readings: ['よう'],
            kun_readings: null
        },
        '流': {
            meanings: 'a sink, current, flow, forfeit',
            on_readings: ['りゅう', 'る'],
            kun_readings: ['-なが(す)', 'なが(す)', 'なが(れ)', 'なが(れる)']
        },
        '消': {
            meanings: 'blow out, cancel, extinguish, neutralize, turn off',
            on_readings: ['しょう'],
            kun_readings: ['き(える)', 'け(す)']
        },
        '深': {
            meanings: 'deep, heighten, intensify, strengthen',
            on_readings: ['しん'],
            kun_readings: ['-ぶか(い)', 'ふか(い)', 'ふか(まる)', 'ふか(める)', 'み-']
        },
        '温': {
            meanings: 'warm',
            on_readings: ['おん'],
            kun_readings: ['あたた(か)', 'あたた(かい)', 'あたた(まる)', 'あたた(める)', 'ぬく']
        },
        '港': {
            meanings: 'harbor',
            on_readings: ['こう'],
            kun_readings: ['みなと']
        },
        '湖': {
            meanings: 'lake',
            on_readings: ['こ'],
            kun_readings: ['みずうみ']
        },
        '湯': {
            meanings: 'bath, hot spring, hot water',
            on_readings: ['とう'],
            kun_readings: ['ゆ']
        },
        '漢': {
            meanings: 'China, Sino-',
            on_readings: ['かん'],
            kun_readings: null
        },
        '炭': {
            meanings: 'charcoal, coal',
            on_readings: ['たん'],
            kun_readings: ['すみ']
        },
        '物': {
            meanings: 'matter, object, thing',
            on_readings: ['ぶつ', 'もつ'],
            kun_readings: ['もの', 'もの-']
        },
        '球': {
            meanings: 'ball, sphere',
            on_readings: ['きゅう'],
            kun_readings: ['たま']
        },
        '由': {
            meanings: 'a reason, wherefore',
            on_readings: ['ゆ', 'ゆい', 'ゆう'],
            kun_readings: ['よ(る)', 'よし']
        },
        '申': {
            meanings: '3-5PM, have the honor to, ninth sign of Chinese zodiac, sign of the monkey',
            on_readings: ['しん'],
            kun_readings: ['さる', 'もう(し-)', 'もう(す)']
        },
        '界': {
            meanings: 'boundary, world',
            on_readings: ['かい'],
            kun_readings: null
        },
        '畑': {
            meanings: "(kokuji), farm, field, garden, one's specialty",
            on_readings: null,
            kun_readings: ['-ばたけ', 'はた', 'はたけ']
        },
        '病': {
            meanings: 'ill, sick',
            on_readings: ['びょう', 'へい'],
            kun_readings: ['-や(み)', 'や(む)', 'やまい']
        },
        '発': {
            meanings: 'counter for gunshots, departure, discharge, disclose, emit, publish, start from',
            on_readings: ['はつ', 'ほつ'],
            kun_readings: ['あば(く)', 'おこ(る)', 'た(つ)', 'つか(わす)', 'はな(つ)']
        },
        '登': {
            meanings: 'ascend, climb up',
            on_readings: ['しょう', 'ちょう', 'と', 'とう', 'どう'],
            kun_readings: ['あ(がる)', 'のぼ(る)']
        },
        '皮': {
            meanings: 'hide, leather, pelt, skin, skin radical (no. 107)',
            on_readings: ['ひ'],
            kun_readings: ['かわ']
        },
        '皿': {
            meanings: 'a helping, dish, plate',
            on_readings: ['べい'],
            kun_readings: ['さら']
        },
        '相': {
            meanings: 'aspect, councillor, each other, inter-, minister of state, mutual, phase, physiognomy, together',
            on_readings: ['しょう', 'そう'],
            kun_readings: ['あい-']
        },
        '県': {
            meanings: 'prefecture',
            on_readings: ['けん'],
            kun_readings: ['か(ける)']
        },
        '真': {
            meanings: 'Buddhist sect, reality, true',
            on_readings: ['しん'],
            kun_readings: ['ま', 'ま-', 'まこと']
        },
        '着': {
            meanings: 'arrive, counter for suits of clothing, don, wear',
            on_readings: ['じゃく', 'ちゃく'],
            kun_readings: ['き(せる)', 'き(る)', 'つ(く)', 'つ(ける)']
        },
        '短': {
            meanings: 'brevity, defect, fault, short, weak point',
            on_readings: ['たん'],
            kun_readings: ['みじか(い)']
        },
        '研': {
            meanings: 'polish, sharpen, study of',
            on_readings: ['けん'],
            kun_readings: ['と(ぐ)']
        },
        '礼': {
            meanings: 'bow, ceremony, remuneration, salute, thanks',
            on_readings: ['らい', 'れい'],
            kun_readings: null
        },
        '神': {
            meanings: 'gods, mind, soul',
            on_readings: ['しん', 'じん'],
            kun_readings: ['かみ', 'かん-', 'こう-']
        },
        '祭': {
            meanings: 'celebrate, deify, enshrine, offer prayers, ritual, worship',
            on_readings: ['さい'],
            kun_readings: ['まつ(り)', 'まつ(る)', 'まつり']
        },
        '福': {
            meanings: 'blessing, fortune, luck, wealth',
            on_readings: ['ふく'],
            kun_readings: null
        },
        '秒': {
            meanings: 'second (1/60 minute)',
            on_readings: ['びょう'],
            kun_readings: null
        },
        '究': {
            meanings: 'research, study',
            on_readings: ['きゅう', 'く'],
            kun_readings: ['きわ(める)']
        },
        '章': {
            meanings: 'badge, chapter, composition, design, poem',
            on_readings: ['しょう'],
            kun_readings: null
        },
        '童': {
            meanings: 'child, juvenile',
            on_readings: ['どう'],
            kun_readings: ['わらべ']
        },
        '笛': {
            meanings: 'bagpipe, clarinet, flute, piccolo, pipe, whistle',
            on_readings: ['てき'],
            kun_readings: ['ふえ']
        },
        '第': {
            meanings: 'No., residence',
            on_readings: ['だい', 'てい'],
            kun_readings: null
        },
        '筆': {
            meanings: 'handwriting, painting brush, writing, writing brush',
            on_readings: ['ひつ'],
            kun_readings: ['ふで']
        },
        '等': {
            meanings: 'and so forth, class (first), equal, etc., quality, similar',
            on_readings: ['とう'],
            kun_readings: ['-ら', 'など', 'ひと(しい)']
        },
        '箱': {
            meanings: 'bin, box, case, chest, railway car',
            on_readings: ['そう'],
            kun_readings: ['はこ']
        },
        '級': {
            meanings: 'class, grade, rank',
            on_readings: ['きゅう'],
            kun_readings: null
        },
        '終': {
            meanings: 'end, finish',
            on_readings: ['しゅう'],
            kun_readings: ['-お(わる)', 'お(える)', 'お(わる)', 'おわ(る)', 'つい', 'つい(に)']
        },
        '緑': {
            meanings: 'green',
            on_readings: ['りょく', 'ろく'],
            kun_readings: ['みどり']
        },
        '練': {
            meanings: 'drill, gloss, polish, practice, refine, train',
            on_readings: ['れん'],
            kun_readings: ['ね(り)', 'ね(る)']
        },
        '羊': {
            meanings: 'sheep',
            on_readings: ['よう'],
            kun_readings: ['ひつじ']
        },
        '美': {
            meanings: 'beautiful, beauty',
            on_readings: ['び', 'み'],
            kun_readings: ['うつく(しい)']
        },
        '習': {
            meanings: 'learn',
            on_readings: ['しゅう', 'じゅ'],
            kun_readings: ['なら(い)', 'なら(う)']
        },
        '者': {
            meanings: 'person, someone',
            on_readings: ['しゃ'],
            kun_readings: ['もの']
        },
        '育': {
            meanings: 'bring up, grow up, raise, rear',
            on_readings: ['いく'],
            kun_readings: ['そだ(ち)', 'そだ(つ)', 'そだ(てる)', 'はぐく(む)']
        },
        '苦': {
            meanings: 'feel bitter, hardship, scowl, suffering, trial, worry',
            on_readings: ['く'],
            kun_readings: ['-ぐる(しい)', 'くる(しい)', 'くる(しむ)', 'くる(しめる)', 'にが(い)', 'にが(る)']
        },
        '荷': {
            meanings: 'baggage, bear (a burden), cargo, freight, load, shoulder (a gun), shoulder-pole load',
            on_readings: ['か'],
            kun_readings: ['に']
        },
        '落': {
            meanings: 'come down, drop, fall, hamlet, village',
            on_readings: ['らく'],
            kun_readings: ['お(ち)', 'お(ちる)', 'お(とす)']
        },
        '葉': {
            meanings: 'blade, counter for flat things, fragment, leaf, lobe, needle, piece, plane, spear',
            on_readings: ['よう'],
            kun_readings: ['は']
        },
        '薬': {
            meanings: 'benefit, chemical, enamel, gunpowder, medicine',
            on_readings: ['やく'],
            kun_readings: ['くすり']
        },
        '血': {
            meanings: 'blood',
            on_readings: ['けつ'],
            kun_readings: ['ち']
        },
        '表': {
            meanings: 'chart, diagram, surface, table',
            on_readings: ['ひょう'],
            kun_readings: ['-おもて', 'あら(わす)', 'あらわ(す)', 'あらわ(れる)', 'おもて']
        },
        '詩': {
            meanings: 'poem, poetry',
            on_readings: ['し'],
            kun_readings: ['うた']
        },
        '調': {
            meanings: 'exorcise, harmonize, investigate, key (music), mediate, meter, prepare, tone, tune, writing style',
            on_readings: ['ちょう'],
            kun_readings: ['しら(べ)', 'しら(べる)', 'ととの(う)', 'ととの(える)']
        },
        '談': {
            meanings: 'discuss, talk',
            on_readings: ['だん'],
            kun_readings: null
        },
        '豆': {
            meanings: 'beans, midget, pea',
            on_readings: ['ず', 'とう'],
            kun_readings: ['まめ', 'まめ-']
        },
        '負': {
            meanings: '-, assume a responsibility, bear, defeat, minus, negative, owe',
            on_readings: ['ふ'],
            kun_readings: ['お(う)', 'ま(かす)', 'ま(ける)']
        },
        '起': {
            meanings: 'get up, rouse, wake up',
            on_readings: ['き'],
            kun_readings: ['お(きる)', 'お(こす)', 'お(こる)', 'おこ(す)', 'た(つ)']
        },
        '路': {
            meanings: 'distance, path, road, route',
            on_readings: ['る', 'ろ'],
            kun_readings: ['-じ', 'みち']
        },
        '身': {
            meanings: "one's station in life, person, somebody",
            on_readings: ['しん'],
            kun_readings: ['み']
        },
        '転': {
            meanings: 'change, revolve, turn around',
            on_readings: ['てん'],
            kun_readings: ['うたた', 'うつ(る)', 'くる(めく)', 'ころ(がす)', 'ころ(がる)', 'ころ(げる)', 'ころ(ぶ)', 'まろ(ぶ)']
        },
        '軽': {
            meanings: 'lightly, trifling, unimportant',
            on_readings: ['きょう', 'きん', 'けい'],
            kun_readings: ['かる(い)', 'かろ(やか)', 'かろ(んじる)']
        },
        '農': {
            meanings: 'agriculture, farmers',
            on_readings: ['のう'],
            kun_readings: null
        },
        '返': {
            meanings: 'answer, fade, repay, return',
            on_readings: ['へん'],
            kun_readings: ['-かえ(す)', '-かえ(る)', 'かえ(す)', 'かえ(る)']
        },
        '追': {
            meanings: 'chase, drive away, follow, meanwhile, pursue',
            on_readings: ['つい'],
            kun_readings: ['お(う)']
        },
        '送': {
            meanings: 'escort, send',
            on_readings: ['そう'],
            kun_readings: ['おく(る)']
        },
        '速': {
            meanings: 'fast, quick',
            on_readings: ['そく'],
            kun_readings: ['すみ(やか)', 'はや-', 'はや(い)', 'はや(める)']
        },
        '進': {
            meanings: 'advance, proceed, progress, promote',
            on_readings: ['しん'],
            kun_readings: ['すす(む)', 'すす(める)']
        },
        '遊': {
            meanings: 'play',
            on_readings: ['ゆ', 'ゆう'],
            kun_readings: ['あそ(ばす)', 'あそ(ぶ)']
        },
        '運': {
            meanings: 'advance, carry, destiny, fate, lot, luck, progress, transport',
            on_readings: ['うん'],
            kun_readings: ['はこ(ぶ)']
        },
        '部': {
            meanings: 'bureau, class, copy, counter for copies of a newspaper or magazine, dept, part, portion, section',
            on_readings: ['ぶ'],
            kun_readings: ['-べ']
        },
        '都': {
            meanings: 'all, capital, everything, metropolis',
            on_readings: ['つ', 'と'],
            kun_readings: ['みやこ']
        },
        '配': {
            meanings: 'distribute, exile, rationing, spouse',
            on_readings: ['はい'],
            kun_readings: ['くば(る)']
        },
        '酒': {
            meanings: 'alcohol, sake',
            on_readings: ['しゅ'],
            kun_readings: ['さか-', 'さけ']
        },
        '重': {
            meanings: '-fold, esteem, heap up, heavy, important, nest of boxes, pile up, respect',
            on_readings: ['じゅう', 'ちょう'],
            kun_readings: ['え', 'おも', 'おも(い)', 'おも(なう)', 'おも(り)', 'かさ(なる)', 'かさ(ねる)']
        },
        '鉄': {
            meanings: 'iron',
            on_readings: ['てつ'],
            kun_readings: ['くろがね']
        },
        '銀': {
            meanings: 'silver',
            on_readings: ['ぎん'],
            kun_readings: ['しろがね']
        },
        '開': {
            meanings: 'open, unfold, unseal',
            on_readings: ['かい'],
            kun_readings: ['-びら(き)', 'あ(く)', 'あ(ける)', 'ひら(き)', 'ひら(く)', 'ひら(ける)']
        },
        '院': {
            meanings: 'Inst., institution, mansion, school, temple',
            on_readings: ['いん'],
            kun_readings: null
        },
        '陽': {
            meanings: 'daytime, heaven, male, positive, sunshine, yang principle',
            on_readings: ['よう'],
            kun_readings: ['ひ']
        },
        '階': {
            meanings: 'counter for storeys of a building, stair, storey',
            on_readings: ['かい'],
            kun_readings: ['きざはし']
        },
        '集': {
            meanings: 'congregate, flock, gather, meet, swarm',
            on_readings: ['しゅう'],
            kun_readings: ['あつ(まる)', 'あつ(める)', 'つど(う)']
        },
        '面': {
            meanings: 'face, features, mask, surface',
            on_readings: ['べん', 'めん'],
            kun_readings: ['おも', 'おもて', 'つら']
        },
        '題': {
            meanings: 'subject, topic',
            on_readings: ['だい'],
            kun_readings: null
        },
        '飲': {
            meanings: 'drink, smoke, take',
            on_readings: ['いん', 'おん'],
            kun_readings: ['-の(み)', 'の(む)']
        },
        '館': {
            meanings: 'building, large building, mansion, palace',
            on_readings: ['かん'],
            kun_readings: ['たて', 'やかた']
        },
        '駅': {
            meanings: 'station',
            on_readings: ['えき'],
            kun_readings: null
        },
        '鼻': {
            meanings: 'nose, snout',
            on_readings: ['び'],
            kun_readings: ['はな']
        },
    },
    'n2': {
        '不': {
            meanings: 'bad, clumsy, negative, non-, ugly',
            on_readings: ['ふ', 'ぶ'],
            kun_readings: null
        },
        '争': {
            meanings: 'argue, contend, dispute',
            on_readings: ['そう'],
            kun_readings: ['あらそ(う)', 'いか(でか)']
        },
        '付': {
            meanings: 'adhere, append, attach, refer to',
            on_readings: ['ふ'],
            kun_readings: ['-つ(き)', '-つ(け)', '-つ(ける)', '-つき', '-づ(き)', '-づ(く)', '-づ(け)', '-づ(ける)', '-づき', '-づけ', 'つ(き)', 'つ(く)', 'つ(け)', 'つ(け-)', 'つ(ける)']
        },
        '令': {
            meanings: 'command, decree, good, laws, orders',
            on_readings: ['れい'],
            kun_readings: null
        },
        '以': {
            meanings: 'because, by means of, compared with, in view of',
            on_readings: ['い'],
            kun_readings: ['もっ(て)']
        },
        '仲': {
            meanings: 'go-between, relationship',
            on_readings: ['ちゅう'],
            kun_readings: ['なか']
        },
        '伝': {
            meanings: 'communicate, follow, go along, legend, report, tradition, transmit, walk along',
            on_readings: ['てん', 'でん'],
            kun_readings: ['-づた(い)', 'つた(う)', 'つた(える)', 'つた(わる)', 'つだ(う)', 'つて']
        },
        '位': {
            meanings: 'about, crown, grade, rank, some, throne',
            on_readings: ['い'],
            kun_readings: ['くらい', 'ぐらい']
        },
        '低': {
            meanings: 'humble, lower, short',
            on_readings: ['てい'],
            kun_readings: ['ひく(い)', 'ひく(まる)', 'ひく(める)']
        },
        '例': {
            meanings: 'custom, example, precedent, usage',
            on_readings: ['れい'],
            kun_readings: ['たと(える)']
        },
        '便': {
            meanings: 'chance, convenience, excrement, facility, feces, letter',
            on_readings: ['びん', 'べん'],
            kun_readings: ['たよ(り)']
        },
        '信': {
            meanings: 'faith, fidelity, trust, truth',
            on_readings: ['しん'],
            kun_readings: null
        },
        '倉': {
            meanings: 'cellar, godown, storehouse, treasury, warehouse',
            on_readings: ['そう'],
            kun_readings: ['くら']
        },
        '候': {
            meanings: 'climate, expect, season, wait for, weather',
            on_readings: ['こう'],
            kun_readings: ['そうろう']
        },
        '借': {
            meanings: 'borrow, rent',
            on_readings: ['しゃく'],
            kun_readings: ['か(りる)']
        },
        '停': {
            meanings: 'halt, stopping',
            on_readings: ['てい'],
            kun_readings: ['と(まる)', 'と(める)']
        },
        '健': {
            meanings: 'health, healthy, persistence, strength',
            on_readings: ['けん'],
            kun_readings: ['すこ(やか)']
        },
        '側': {
            meanings: 'lean, oppose, regret, side',
            on_readings: ['そく'],
            kun_readings: ['かわ', 'がわ', 'そば']
        },
        '働': {
            meanings: '(kokuji), work',
            on_readings: ['どう'],
            kun_readings: ['はたら(く)']
        },
        '億': {
            meanings: '10**8, hundred million',
            on_readings: ['おく'],
            kun_readings: null
        },
        '兆': {
            meanings: '10**12, omen, portent, sign, symptoms, trillion',
            on_readings: ['ちょう'],
            kun_readings: ['きざ(し)', 'きざ(す)']
        },
        '児': {
            meanings: 'child, newborn babe, young of animals',
            on_readings: ['げい', 'じ', 'に'],
            kun_readings: ['-こ', '-っこ', 'こ']
        },
        '共': {
            meanings: 'alike, all, and, both, neither, together, with',
            on_readings: ['きょう'],
            kun_readings: ['-ども', 'とも', 'とも(に)']
        },
        '兵': {
            meanings: 'army, private, soldier, strategy, tactics, troops, warfare',
            on_readings: ['ひょう', 'へい'],
            kun_readings: ['つわもの']
        },
        '典': {
            meanings: 'ceremony, code, law, rule',
            on_readings: ['てん', 'でん'],
            kun_readings: ['のり', 'ふみ']
        },
        '冷': {
            meanings: 'chill, cold (beer, person), cool',
            on_readings: ['れい'],
            kun_readings: ['さ(ます)', 'さ(める)', 'つめ(たい)', 'ひ(える)', 'ひ(や)', 'ひ(やかす)', 'ひ(やす)', 'ひ(ややか)']
        },
        '初': {
            meanings: 'beginning, first time',
            on_readings: ['しょ'],
            kun_readings: ['-そ(める)', '-ぞ(め)', 'うい-', 'はじ(め)', 'はじ(めて)', 'はつ', 'はつ-']
        },
        '別': {
            meanings: 'another, branch off, diverge, extra, fork, separate, specially',
            on_readings: ['べつ'],
            kun_readings: ['わ(ける)', 'わか(れる)']
        },
        '利': {
            meanings: 'advantage, benefit, profit',
            on_readings: ['り'],
            kun_readings: ['き(く)']
        },
        '刷': {
            meanings: 'brush, print, printing',
            on_readings: ['さつ'],
            kun_readings: ['-ず(り)', '-ずり', 'す(る)', 'は(く)']
        },
        '副': {
            meanings: 'aide, assistant, copy, duplicate, vice-',
            on_readings: ['ふく'],
            kun_readings: null
        },
        '功': {
            meanings: 'achievement, credit, honor, merits, success',
            on_readings: ['く', 'こう'],
            kun_readings: ['いさお']
        },
        '加': {
            meanings: 'Canada, add, addition, include, increase, join',
            on_readings: ['か'],
            kun_readings: ['くわ(える)', 'くわ(わる)']
        },
        '努': {
            meanings: 'as much as possible, diligent, toil',
            on_readings: ['ど'],
            kun_readings: ['つと(める)']
        },
        '労': {
            meanings: 'labor, reward for, thank for, toil, trouble',
            on_readings: ['ろう'],
            kun_readings: ['いた(ずき)', 'いたわ(る)', 'つか(れる)', 'ねぎら', 'ねぎら(う)', 'ろう(する)']
        },
        '勇': {
            meanings: 'be in high spirits, bravery, cheer up, courage, heroism',
            on_readings: ['ゆう'],
            kun_readings: ['いさ(む)']
        },
        '包': {
            meanings: 'conceal, cover, pack up, wrap',
            on_readings: ['ほう'],
            kun_readings: ['くる(む)', 'つつ(む)']
        },
        '卒': {
            meanings: 'die, graduate, private, soldier',
            on_readings: ['しゅつ', 'そつ'],
            kun_readings: ['お(える)', 'お(わる)', 'そっ(する)', 'ついに', 'にわか']
        },
        '協': {
            meanings: 'co-, cooperation',
            on_readings: ['きょう'],
            kun_readings: null
        },
        '単': {
            meanings: 'merely, one, simple, single',
            on_readings: ['たん'],
            kun_readings: ['ひとえ']
        },
        '博': {
            meanings: 'Dr., Ph.D., command, esteem, exposition, fair, win acclaim',
            on_readings: ['はく', 'ばく'],
            kun_readings: null
        },
        '印': {
            meanings: 'India, emblem, evidence, imprint, mark, seal, souvenir, stamp, symbol, trademark',
            on_readings: ['いん'],
            kun_readings: ['-じるし', 'しる(す)', 'しるし']
        },
        '参': {
            meanings: 'be defeated, be madly in love, coming, die, going, nonplussed, participate, take part in, three (in documents), visit, visiting',
            on_readings: ['さん', 'しん'],
            kun_readings: ['まい-', 'まい(る)', 'まじわる', 'みつ']
        },
        '史': {
            meanings: 'chronicle, history',
            on_readings: ['し'],
            kun_readings: null
        },
        '司': {
            meanings: 'administer, director, govt office, official, rule',
            on_readings: ['し'],
            kun_readings: ['つかさど(る)']
        },
        '各': {
            meanings: 'each, either, every',
            on_readings: ['かく'],
            kun_readings: ['おのおの']
        },
        '告': {
            meanings: 'announce, inform, revelation, tell',
            on_readings: ['こく'],
            kun_readings: ['つ(げる)']
        },
        '周': {
            meanings: 'circuit, circumference, lap',
            on_readings: ['しゅう'],
            kun_readings: ['まわ(り)']
        },
        '唱': {
            meanings: 'call upon, chant, recite, yell',
            on_readings: ['しょう'],
            kun_readings: ['とな(える)']
        },
        '喜': {
            meanings: 'rejoice, take pleasure in',
            on_readings: ['き'],
            kun_readings: ['よろこ(ばす)', 'よろこ(ぶ)']
        },
        '器': {
            meanings: 'ability, container, implement, instrument, receptacle, set, tool, utensil, vessel',
            on_readings: ['き'],
            kun_readings: ['うつわ']
        },
        '囲': {
            meanings: 'besiege, encircle, enclosure, keep, paling, preserve, store, surround',
            on_readings: ['い'],
            kun_readings: ['かこ(い)', 'かこ(う)', 'かこ(む)']
        },
        '固': {
            meanings: 'clot, curdle, harden, set',
            on_readings: ['こ'],
            kun_readings: ['かた(い)', 'かた(まり)', 'かた(まる)', 'かた(める)']
        },
        '型': {
            meanings: 'model, mould, type',
            on_readings: ['けい'],
            kun_readings: ['-がた', 'かた']
        },
        '堂': {
            meanings: 'hall, public chamber',
            on_readings: ['どう'],
            kun_readings: null
        },
        '塩': {
            meanings: 'salt',
            on_readings: ['えん'],
            kun_readings: ['しお']
        },
        '士': {
            meanings: 'gentleman, samurai, samurai radical (no. 33), scholar',
            on_readings: ['し'],
            kun_readings: ['さむらい']
        },
        '変': {
            meanings: 'change, strange, unusual',
            on_readings: ['へん'],
            kun_readings: ['か(える)', 'か(わり)', 'か(わる)']
        },
        '夫': {
            meanings: 'husband, man',
            on_readings: ['ふ', 'ふう', 'ぶ'],
            kun_readings: ['おっと', 'それ']
        },
        '失': {
            meanings: 'disadvantage, error, fault, lose, loss',
            on_readings: ['しつ'],
            kun_readings: ['う(せる)', 'うしな(う)']
        },
        '好': {
            meanings: 'fond, like something, pleasing',
            on_readings: ['こう'],
            kun_readings: ['い(い)', 'この(む)', 'す(く)', 'よ(い)']
        },
        '季': {
            meanings: 'seasons',
            on_readings: ['き'],
            kun_readings: null
        },
        '孫': {
            meanings: 'descendants, grandchild',
            on_readings: ['そん'],
            kun_readings: ['まご']
        },
        '完': {
            meanings: 'completion, end, perfect',
            on_readings: ['かん'],
            kun_readings: null
        },
        '官': {
            meanings: 'bureaucrat, organ, the government',
            on_readings: ['かん'],
            kun_readings: null
        },
        '害': {
            meanings: 'harm, injury',
            on_readings: ['がい'],
            kun_readings: null
        },
        '察': {
            meanings: 'guess, judge, presume, surmise, understand',
            on_readings: ['さつ'],
            kun_readings: null
        },
        '巣': {
            meanings: 'cobweb, den, hive, nest, rookery',
            on_readings: ['そう'],
            kun_readings: ['す', 'す(くう)']
        },
        '差': {
            meanings: 'balance, difference, discrepancy, distinction, margin, variation',
            on_readings: ['さ'],
            kun_readings: ['さ(し)', 'さ(す)']
        },
        '希': {
            meanings: 'Greece, beg, beseech, dilute (acid), few, hope, phenomenal, pray, rare, request',
            on_readings: ['き', 'け'],
            kun_readings: ['こいねが(う)', 'まれ']
        },
        '席': {
            meanings: 'mat, occasion, place, seat',
            on_readings: ['せき'],
            kun_readings: ['むしろ']
        },
        '帯': {
            meanings: 'belt, obi, region, sash, zone',
            on_readings: ['たい'],
            kun_readings: ['お(びる)', 'おび']
        },
        '底': {
            meanings: 'base, bottom, bottom price, depth, kind, sole, sort',
            on_readings: ['てい'],
            kun_readings: ['そこ']
        },
        '府': {
            meanings: 'borough, govt office, representative body, storehouse, urban prefecture',
            on_readings: ['ふ'],
            kun_readings: null
        },
        '康': {
            meanings: 'ease, peace',
            on_readings: ['こう'],
            kun_readings: null
        },
        '建': {
            meanings: 'build',
            on_readings: ['けん', 'こん'],
            kun_readings: ['-だ(て)', 'た(つ)', 'た(て)', 'た(てる)']
        },
        '径': {
            meanings: 'diameter, method, path',
            on_readings: ['けい'],
            kun_readings: ['こみち', 'さしわたし', 'ただちに', 'みち']
        },
        '徒': {
            meanings: 'emptiness, ephemeral thing, futility, gang, junior, on foot, party, people, set, uselessness, vanity',
            on_readings: ['と'],
            kun_readings: ['あだ', 'いたずら']
        },
        '得': {
            meanings: 'able to, acquire, advantage, benefit, can, earn, find, gain, get, may, profit',
            on_readings: ['とく'],
            kun_readings: ['う(る)', 'え(る)']
        },
        '必': {
            meanings: 'certain, inevitable, invariably',
            on_readings: ['ひつ'],
            kun_readings: ['かなら(ず)']
        },
        '念': {
            meanings: 'attention, desire, feeling, idea, sense, thought, wish',
            on_readings: ['ねん'],
            kun_readings: null
        },
        '愛': {
            meanings: 'affection, favourite, love',
            on_readings: ['あい'],
            kun_readings: ['いと(しい)', 'お(しむ)', 'かな(しい)', 'まな', 'め(でる)']
        },
        '成': {
            meanings: 'become, elapse, get, grow, reach, turn into',
            on_readings: ['じょう', 'せい'],
            kun_readings: ['-な(す)', 'な(す)', 'な(る)']
        },
        '戦': {
            meanings: 'battle, match, war',
            on_readings: ['せん'],
            kun_readings: ['いくさ', 'おのの(く)', 'そよ(ぐ)', 'たたか(う)', 'わなな(く)']
        },
        '折': {
            meanings: 'bend, break, fold, fracture, submit, yield',
            on_readings: ['しゃく', 'せつ'],
            kun_readings: ['-お(り)', 'お(り)', 'お(る)', 'お(れる)', 'おり']
        },
        '挙': {
            meanings: 'actions, behavior, plan, project, raise',
            on_readings: ['きょ'],
            kun_readings: ['あ(がる)', 'あ(げる)', 'こぞ(る)']
        },
        '改': {
            meanings: 'change, examine, inspect, mend, modify, reformation, renew, search',
            on_readings: ['かい'],
            kun_readings: ['あらた(まる)', 'あらた(める)']
        },
        '救': {
            meanings: 'help, reclaim, rescue, salvation, save',
            on_readings: ['きゅう'],
            kun_readings: ['すく(う)']
        },
        '敗': {
            meanings: 'defeat, failure, reversal',
            on_readings: ['はい'],
            kun_readings: ['やぶ(れる)']
        },
        '散': {
            meanings: 'disperse, scatter, spend, squander',
            on_readings: ['さん'],
            kun_readings: ['-ち(らす)', 'ち(らかす)', 'ち(らかる)', 'ち(らす)', 'ち(らばる)', 'ち(る)', 'ばら', 'ばら(ける)']
        },
        '料': {
            meanings: 'fee, materials',
            on_readings: ['りょう'],
            kun_readings: null
        },
        '旗': {
            meanings: 'banner, national flag, standard',
            on_readings: ['き'],
            kun_readings: ['はた']
        },
        '昨': {
            meanings: 'previous, yesterday',
            on_readings: ['さく'],
            kun_readings: null
        },
        '景': {
            meanings: 'scenery, view',
            on_readings: ['けい'],
            kun_readings: null
        },
        '最': {
            meanings: 'extreme, most, utmost',
            on_readings: ['さい', 'しゅ'],
            kun_readings: ['つま', 'もっと(も)']
        },
        '望': {
            meanings: 'ambition, aspire to, desire, expect, full moon, hope',
            on_readings: ['ぼう', 'もう'],
            kun_readings: ['のぞ(む)', 'もち']
        },
        '未': {
            meanings: '1-3PM, eighth sign of Chinese zodiac, even now, hitherto, not yet, sign of the ram, still, un-',
            on_readings: ['び', 'み'],
            kun_readings: ['いま(だ)', 'ひつじ', 'ま(だ)']
        },
        '末': {
            meanings: 'close, end, posterity, powder, tip',
            on_readings: ['ばつ', 'まつ'],
            kun_readings: ['うら', 'うれ', 'すえ']
        },
        '札': {
            meanings: 'bid, counter for bonds, paper money, placard, tag',
            on_readings: ['さつ'],
            kun_readings: ['ふだ']
        },
        '材': {
            meanings: 'ingredients, log, lumber, materials, talent, timber, wood',
            on_readings: ['ざい'],
            kun_readings: null
        },
        '束': {
            meanings: 'bundle, control, govern, manage, ream, sheaf, tie in bundles',
            on_readings: ['そく'],
            kun_readings: ['たば', 'たば(ねる)', 'つか', 'つか(ねる)']
        },
        '松': {
            meanings: 'pine tree',
            on_readings: ['しょう'],
            kun_readings: ['まつ']
        },
        '果': {
            meanings: 'achieve, carry out, complete, end, finish, fruit, reward, succeed',
            on_readings: ['か'],
            kun_readings: ['-は(たす)', '-は(てる)', 'は(たす)', 'は(て)', 'は(てる)', 'はた(す)']
        },
        '栄': {
            meanings: 'flourish, glory, honor, prosperity, splendor',
            on_readings: ['えい', 'よう'],
            kun_readings: ['-ば(え)', 'え', 'さか(える)', 'は(え)', 'は(える)']
        },
        '案': {
            meanings: 'bench, draft, expectation, fear, idea, plan, ponder, proposition, suggestion, table, worry',
            on_readings: ['あん'],
            kun_readings: ['つくえ']
        },
        '梅': {
            meanings: 'plum',
            on_readings: ['ばい'],
            kun_readings: ['うめ']
        },
        '械': {
            meanings: 'contraption, fetter, instrument, machine',
            on_readings: ['かい'],
            kun_readings: ['かせ']
        },
        '極': {
            meanings: '10**48, conclusion, electric poles, end, extremely, highest rank, highly, most, poles, settlement, very',
            on_readings: ['きょく', 'ごく'],
            kun_readings: ['-ぎ(め)', 'き(まる)', 'き(める)', 'きわ(まり)', 'きわ(まる)', 'きわ(み)', 'きわ(める)']
        },
        '標': {
            meanings: 'emblem, evidence, imprint, mark, seal, signpost, souvenir, stamp, symbol, target, trademark',
            on_readings: ['ひょう'],
            kun_readings: ['しるし', 'しるべ']
        },
        '機': {
            meanings: 'airplane, efficacy, loom, machine, mechanism, occasion, opportunity, potency',
            on_readings: ['き'],
            kun_readings: ['はた']
        },
        '欠': {
            meanings: 'fail, gap, lack, yawning radical (no. 76)',
            on_readings: ['けつ', 'けん'],
            kun_readings: ['か(く)', 'か(ける)']
        },
        '歴': {
            meanings: 'continuation, curriculum, passage of time',
            on_readings: ['れき', 'れき'],
            kun_readings: null
        },
        '残': {
            meanings: 'balance, leftover, remainder',
            on_readings: ['さん', 'ざん'],
            kun_readings: ['そこな(う)', 'のこ(す)', 'のこ(り)', 'のこ(る)']
        },
        '殺': {
            meanings: 'butcher, diminish, kill, murder, reduce, slice off, split, spoil',
            on_readings: ['さい', 'さつ', 'せつ'],
            kun_readings: ['-ごろ(し)', 'あや(める)', 'ころ(す)', 'そ(ぐ)']
        },
        '毒': {
            meanings: 'germ, harm, injury, poison, spite, venom, virus',
            on_readings: ['どく'],
            kun_readings: null
        },
        '氏': {
            meanings: 'clan, family name, surname',
            on_readings: ['し'],
            kun_readings: ['-うじ', 'うじ']
        },
        '民': {
            meanings: 'nation, people, subjects',
            on_readings: ['みん'],
            kun_readings: ['たみ']
        },
        '求': {
            meanings: 'demand, request, require, want, wish for',
            on_readings: ['きゅう', 'ぐ'],
            kun_readings: ['もと(める)']
        },
        '治': {
            meanings: 'be at peace, calm down, conserve, cure, govt, heal, quell, reign, rule, subdue',
            on_readings: ['じ', 'ち'],
            kun_readings: ['おさ(まる)', 'おさ(める)', 'なお(す)', 'なお(る)']
        },
        '法': {
            meanings: 'law, method, model, principle, rule, system',
            on_readings: ['は', 'ふらん', 'ほう', 'ほ'],
            kun_readings: ['のり']
        },
        '泣': {
            meanings: 'cry, moan, weep',
            on_readings: ['きゅう'],
            kun_readings: ['な(く)']
        },
        '浅': {
            meanings: 'frivolous, shallow, shameful, superficial, wretched',
            on_readings: ['せん'],
            kun_readings: ['あさ(い)']
        },
        '浴': {
            meanings: 'bask in, bathe, be favored with',
            on_readings: ['よく'],
            kun_readings: ['あ(びせる)', 'あ(びる)']
        },
        '清': {
            meanings: 'Manchu dynasty, cleanse, exorcise, pure, purify',
            on_readings: ['しょう', 'しん', 'せい'],
            kun_readings: ['きよ(い)', 'きよ(まる)', 'きよ(める)']
        },
        '満': {
            meanings: 'enough, full, fullness, satisfy',
            on_readings: ['ばん', 'まん'],
            kun_readings: ['み(たす)', 'み(ちる)', 'み(つ)']
        },
        '漁': {
            meanings: 'fishery, fishing',
            on_readings: ['ぎょ', 'りょう'],
            kun_readings: ['あさ(る)']
        },
        '灯': {
            meanings: 'a light, counter for lights, lamp, light',
            on_readings: ['とう'],
            kun_readings: ['あかり', 'とも(す)', 'ともしび', 'ひ', 'ほ-']
        },
        '無': {
            meanings: 'nil, none, not, nothing, nothingness',
            on_readings: ['ぶ', 'む'],
            kun_readings: ['な(い)']
        },
        '然': {
            meanings: 'if so, in that case, so, sort of thing, well',
            on_readings: ['ぜん', 'ねん'],
            kun_readings: ['さ', 'しか', 'しか(し)', 'しか(り)']
        },
        '焼': {
            meanings: 'bake, burning',
            on_readings: ['しょう'],
            kun_readings: ['-や(き)', 'や(き)', 'や(き-)', 'や(く)', 'や(ける)']
        },
        '照': {
            meanings: 'bashful, compare, illuminate, shine',
            on_readings: ['しょう'],
            kun_readings: ['て(らす)', 'て(る)', 'て(れる)']
        },
        '熱': {
            meanings: 'fever, heat, mania, passion, temperature',
            on_readings: ['ねつ'],
            kun_readings: ['あつ(い)']
        },
        '牧': {
            meanings: 'breed, care for, feed, pasture, shepherd',
            on_readings: ['ぼく'],
            kun_readings: ['まき']
        },
        '特': {
            meanings: 'special',
            on_readings: ['とく'],
            kun_readings: null
        },
        '産': {
            meanings: 'bear, childbirth, give birth, native, products, property, yield',
            on_readings: ['さん'],
            kun_readings: ['う(まれる)', 'う(む)', 'うぶ-', 'む(す)']
        },
        '的': {
            meanings: 'adjective ending, mark, object, target',
            on_readings: ['てき'],
            kun_readings: ['まと']
        },
        '省': {
            meanings: 'conserve, government ministry, omit',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['かえり(みる)', 'はぶ(く)']
        },
        '祝': {
            meanings: 'celebrate, congratulate',
            on_readings: ['しゅう', 'しゅく'],
            kun_readings: ['いわ(う)']
        },
        '票': {
            meanings: 'ballot, label, sign, ticket',
            on_readings: ['ひょう'],
            kun_readings: null
        },
        '種': {
            meanings: 'class, kind, seed, species, variety',
            on_readings: ['しゅ'],
            kun_readings: ['-ぐさ', 'たね']
        },
        '積': {
            meanings: 'acreage, amass, contents, load, pile up, product (x*y), stack, volume',
            on_readings: ['せき'],
            kun_readings: ['-づ(み)', 'つ(む)', 'つ(もり)', 'つ(もる)']
        },
        '競': {
            meanings: 'bid, bout, compete with, contest, emulate, race, sell at auction',
            on_readings: ['きょう', 'けい'],
            kun_readings: ['きそ(う)', 'くら(べる)', 'せ(る)']
        },
        '笑': {
            meanings: 'laugh',
            on_readings: ['しょう'],
            kun_readings: ['え(む)', 'わら(う)']
        },
        '管': {
            meanings: 'control, drunken talk, jurisdiction, pipe, tube, wind instrument',
            on_readings: ['かん'],
            kun_readings: ['くだ']
        },
        '節': {
            meanings: 'clause, honor, joint, knob, knot, knuckle, melody, node, occasion, period, season, stanza, tune, verse',
            on_readings: ['せち', 'せつ'],
            kun_readings: ['-ぶし', 'のっと', 'ふし']
        },
        '粉': {
            meanings: 'dust, flour, powder',
            on_readings: ['ふん'],
            kun_readings: ['こ', 'こな', 'デシメートル']
        },
        '紀': {
            meanings: 'account, annals, chronicle, geologic period, history, narrative',
            on_readings: ['き'],
            kun_readings: null
        },
        '約': {
            meanings: 'approximately, promise, shrink',
            on_readings: ['やく'],
            kun_readings: ['つづ(まる)', 'つづ(める)', 'つづま(やか)']
        },
        '結': {
            meanings: 'bind, contract, do up hair, fasten, join, organize, tie',
            on_readings: ['けち', 'けつ'],
            kun_readings: ['むす(ぶ)', 'ゆ(う)', 'ゆ(わえる)']
        },
        '給': {
            meanings: 'allow, bestow on, gift, grant, salary, wage',
            on_readings: ['きゅう'],
            kun_readings: ['-たま(え)', 'たま(う)', 'たも(う)']
        },
        '続': {
            meanings: 'continue, sequel, series',
            on_readings: ['きょう', 'こう', 'しょく', 'ぞく'],
            kun_readings: ['つぐ(ない)', 'つづ(く)', 'つづ(ける)']
        },
        '置': {
            meanings: 'deposit, employ, keep, leave behind, pawn, placement, put, set',
            on_readings: ['ち'],
            kun_readings: ['-お(き)', 'お(く)']
        },
        '老': {
            meanings: 'grow old, old age, old man',
            on_readings: ['ろう'],
            kun_readings: ['お(いる)', 'ふ(ける)']
        },
        '胃': {
            meanings: 'craw, crop, paunch, stomach',
            on_readings: ['い'],
            kun_readings: null
        },
        '脈': {
            meanings: 'hope, pulse, vein',
            on_readings: ['みゃく'],
            kun_readings: ['すじ']
        },
        '腸': {
            meanings: 'bowels, guts, intestines, viscera',
            on_readings: ['ちょう'],
            kun_readings: ['はらわた', 'わた']
        },
        '臣': {
            meanings: 'retainer, subject',
            on_readings: ['しん', 'じん'],
            kun_readings: null
        },
        '航': {
            meanings: 'cruise, fly, navigate, sail',
            on_readings: ['こう'],
            kun_readings: null
        },
        '良': {
            meanings: 'good, pleasing, skilled',
            on_readings: ['りょう'],
            kun_readings: ['-い(い)', '-よ(い)', 'い(い)', 'よ(い)']
        },
        '芸': {
            meanings: 'acting, art, craft, performance, stunt, technique, trick',
            on_readings: ['うん', 'げい'],
            kun_readings: ['う(える)', 'のり', 'わざ']
        },
        '芽': {
            meanings: 'bud, germ, spear, sprout',
            on_readings: ['が'],
            kun_readings: ['め']
        },
        '英': {
            meanings: 'England, English, calyx, hero, outstanding',
            on_readings: ['えい'],
            kun_readings: ['はなぶさ']
        },
        '菜': {
            meanings: 'greens, side dish, vegetable',
            on_readings: ['さい'],
            kun_readings: ['な']
        },
        '街': {
            meanings: 'boulevard, street, town',
            on_readings: ['かい', 'がい'],
            kun_readings: ['まち']
        },
        '衣': {
            meanings: 'clothes, dressing, garment',
            on_readings: ['い', 'え'],
            kun_readings: ['-ぎ', 'きぬ', 'ころも']
        },
        '要': {
            meanings: 'essence, key to, main point, need, pivot',
            on_readings: ['よう'],
            kun_readings: ['い(る)', 'かなめ']
        },
        '覚': {
            meanings: 'awake, learn, memorize, remember, sober up',
            on_readings: ['かく'],
            kun_readings: ['おぼ(える)', 'さ(ます)', 'さ(める)', 'さと(る)']
        },
        '観': {
            meanings: 'appearance, condition, look, outlook, view',
            on_readings: ['かん'],
            kun_readings: ['しめ(す)', 'み(る)']
        },
        '訓': {
            meanings: 'Japanese character reading, explanation, instruction, read',
            on_readings: ['きん', 'くん'],
            kun_readings: ['おし(える)', 'くん(ずる)', 'よ(む)']
        },
        '試': {
            meanings: 'attempt, experiment, ordeal, test, try',
            on_readings: ['し'],
            kun_readings: ['こころ(みる)', 'ため(す)']
        },
        '説': {
            meanings: 'explanation, opinion, rumor, theory',
            on_readings: ['せつ', 'ぜい'],
            kun_readings: ['と(く)']
        },
        '課': {
            meanings: 'chapter, counter for chapters (of a book), department, division, lesson, section',
            on_readings: ['か'],
            kun_readings: null
        },
        '議': {
            meanings: 'consideration, consultation, debate, deliberation',
            on_readings: ['ぎ'],
            kun_readings: null
        },
        '象': {
            meanings: 'elephant, image, imitate, pattern after, shape, sign (of the times)',
            on_readings: ['しょう', 'ぞう'],
            kun_readings: ['かたど(る)']
        },
        '貨': {
            meanings: 'freight, goods, property',
            on_readings: ['か'],
            kun_readings: ['たから']
        },
        '貯': {
            meanings: 'keep, lay in, savings, store, wear mustache',
            on_readings: ['ちょ'],
            kun_readings: ['た(める)', 'たくわ(える)']
        },
        '費': {
            meanings: 'consume, cost, expense, spend, waste',
            on_readings: ['ひ'],
            kun_readings: ['つい(える)', 'つい(やす)']
        },
        '賞': {
            meanings: 'praise, prize, reward',
            on_readings: ['しょう'],
            kun_readings: ['ほ(める)']
        },
        '軍': {
            meanings: 'army, battle, force, troops, war',
            on_readings: ['ぐん'],
            kun_readings: ['いくさ']
        },
        '輪': {
            meanings: 'circle, counter for wheels and flowers, link, loop, ring, wheel',
            on_readings: ['りん'],
            kun_readings: ['わ']
        },
        '辞': {
            meanings: 'expression, resign, term, word',
            on_readings: ['じ'],
            kun_readings: ['いな(む)', 'や(める)']
        },
        '辺': {
            meanings: 'border, boundary, environs, vicinity',
            on_readings: ['へん'],
            kun_readings: ['-べ', 'あた(り)', 'ほと(り)']
        },
        '連': {
            meanings: 'clique, connect, gang, join, lead, party, take along',
            on_readings: ['れん'],
            kun_readings: ['-づ(れ)', 'つ(れる)', 'つら(なる)', 'つら(ねる)']
        },
        '達': {
            meanings: 'accomplished, arrive, attain, reach',
            on_readings: ['たつ', 'だ'],
            kun_readings: ['-たち']
        },
        '選': {
            meanings: 'choose, elect, prefer, select',
            on_readings: ['せん'],
            kun_readings: ['え(る)', 'えら(ぶ)', 'よ(る)']
        },
        '郡': {
            meanings: 'county, district',
            on_readings: ['ぐん'],
            kun_readings: ['こおり']
        },
        '量': {
            meanings: 'amount, consider, estimate, measure, quantity, surmise, weight',
            on_readings: ['りょう'],
            kun_readings: ['はか(る)']
        },
        '録': {
            meanings: 'record',
            on_readings: ['ろく'],
            kun_readings: ['しる(す)', 'と(る)']
        },
        '鏡': {
            meanings: 'barrel-head, mirror, round rice-cake offering, speculum',
            on_readings: ['きょう', 'けい'],
            kun_readings: ['かがみ']
        },
        '関': {
            meanings: 'barrier, concerning, connection, gateway, involve',
            on_readings: ['かん'],
            kun_readings: ['-ぜき', 'かか(わる)', 'からくり', 'かんぬき', 'せき']
        },
        '陸': {
            meanings: 'land, six',
            on_readings: ['りく', 'ろく'],
            kun_readings: ['おか']
        },
        '隊': {
            meanings: 'company, party, regiment, squad',
            on_readings: ['たい'],
            kun_readings: null
        },
        '静': {
            meanings: 'quiet',
            on_readings: ['じょう', 'せい'],
            kun_readings: ['しず-', 'しず(か)', 'しず(まる)', 'しず(める)']
        },
        '順': {
            meanings: 'docility, obey, occasion, order, right, turn',
            on_readings: ['じゅん'],
            kun_readings: null
        },
        '願': {
            meanings: 'hope, petition, request, vow, wish',
            on_readings: ['がん'],
            kun_readings: ['-ねがい', 'ねが(う)']
        },
        '類': {
            meanings: 'class, genus, kind, sort, variety',
            on_readings: ['るい'],
            kun_readings: ['たぐ(い)']
        },
        '飛': {
            meanings: 'fly, scatter, skip (pages)',
            on_readings: ['ひ'],
            kun_readings: ['-と(ばす)', 'と(ばす)', 'と(ぶ)']
        },
        '飯': {
            meanings: 'boiled rice, meal',
            on_readings: ['はん'],
            kun_readings: ['めし']
        },
        '養': {
            meanings: 'bring up, develop, foster, nurture, rear',
            on_readings: ['よう', 'りょう'],
            kun_readings: ['やしな(う)']
        },
        '験': {
            meanings: 'effect, testing, verification',
            on_readings: ['けん', 'げん'],
            kun_readings: ['あ  かし', 'しるし', 'ため(す)', 'ためし']
        },
    },
    'n1': {
        '久': {
            meanings: 'long time, old story',
            on_readings: ['きゅう', 'く'],
            kun_readings: ['ひさ(しい)']
        },
        '仏': {
            meanings: 'Buddha, France, the dead',
            on_readings: ['ふつ', 'ぶつ'],
            kun_readings: ['ほとけ']
        },
        '仮': {
            meanings: 'assumed (name), informal, interim, sham, temporary',
            on_readings: ['か', 'け'],
            kun_readings: ['かり', 'かり-']
        },
        '件': {
            meanings: 'affair, case, item, matter',
            on_readings: ['けん'],
            kun_readings: ['くだん']
        },
        '任': {
            meanings: 'appoint, duty, entrust to, responsibility, term',
            on_readings: ['にん'],
            kun_readings: ['まか(す)', 'まか(せる)']
        },
        '似': {
            meanings: 'becoming, counterfeit, imitate, resemble, suitable',
            on_readings: ['じ'],
            kun_readings: ['に(る)', 'ひ(る)']
        },
        '余': {
            meanings: 'myself, other, remainder, surplus, too much',
            on_readings: ['よ'],
            kun_readings: ['あま(す)', 'あま(り)', 'あま(る)', 'あんま(り)']
        },
        '価': {
            meanings: 'price, value',
            on_readings: ['か', 'け'],
            kun_readings: ['あたい']
        },
        '保': {
            meanings: 'guarantee, keep, preserve, protect, support, sustain',
            on_readings: ['ほ', 'ほう'],
            kun_readings: ['たも(つ)']
        },
        '修': {
            meanings: 'conduct oneself well, discipline, master, study',
            on_readings: ['しゅ', 'しゅう'],
            kun_readings: ['おさ(まる)', 'おさ(める)']
        },
        '俵': {
            meanings: 'bag, bale, counter for bags, sack',
            on_readings: ['ひょう'],
            kun_readings: ['たわら']
        },
        '個': {
            meanings: 'counter for articles, individual',
            on_readings: ['か', 'こ'],
            kun_readings: null
        },
        '備': {
            meanings: 'equip, preparation, provision',
            on_readings: ['び'],
            kun_readings: ['そな(える)', 'そな(わる)', 'つぶさ(に)']
        },
        '像': {
            meanings: 'figure, image, picture, portrait, statue',
            on_readings: ['ぞう'],
            kun_readings: null
        },
        '再': {
            meanings: 'again, second time, twice',
            on_readings: ['さ', 'さい'],
            kun_readings: ['ふたた(び)']
        },
        '刊': {
            meanings: 'carve, engrave, publish',
            on_readings: ['かん'],
            kun_readings: null
        },
        '判': {
            meanings: 'judgement, judgment, seal, signature, stamp',
            on_readings: ['はん', 'ばん'],
            kun_readings: ['わか(る)']
        },
        '制': {
            meanings: 'law, rule, system',
            on_readings: ['せい'],
            kun_readings: null
        },
        '券': {
            meanings: 'ticket',
            on_readings: ['けん'],
            kun_readings: null
        },
        '則': {
            meanings: 'based on, follow, law, model after, rule',
            on_readings: ['そく'],
            kun_readings: ['すなわち', 'のっと(る)', 'のり']
        },
        '効': {
            meanings: 'benefit, efficacy, efficiency, merit',
            on_readings: ['こう'],
            kun_readings: ['き(く)', 'ききめ', 'なら(う)']
        },
        '務': {
            meanings: 'duties, task',
            on_readings: ['む'],
            kun_readings: ['つと(める)']
        },
        '勢': {
            meanings: 'energy, forces, military strength',
            on_readings: ['せい', 'ぜい'],
            kun_readings: ['いきお(い)', 'はずみ']
        },
        '厚': {
            meanings: 'brazen, cordial, heavy, kind, rich, shameless, thick',
            on_readings: ['こう'],
            kun_readings: ['あか', 'あつ(い)']
        },
        '句': {
            meanings: 'clause, counter for haiku, paragraph, passage, phrase, sentence',
            on_readings: ['く'],
            kun_readings: null
        },
        '可': {
            meanings: 'can, do not, must not, passable, should not',
            on_readings: ['か', 'こく'],
            kun_readings: ['-べ(き)', '-べ(し)']
        },
        '営': {
            meanings: 'build, camp, conduct (business), perform',
            on_readings: ['えい'],
            kun_readings: ['いとな(み)', 'いとな(む)']
        },
        '因': {
            meanings: 'be associated with, be limited to, cause, depend on, factor',
            on_readings: ['いん'],
            kun_readings: ['ちな(む)', 'よ(る)']
        },
        '団': {
            meanings: 'association, group',
            on_readings: ['だん', 'とん'],
            kun_readings: ['かたまり', 'まる(い)']
        },
        '圧': {
            meanings: 'dominate, oppress, overwhelm, pressure, push',
            on_readings: ['あつ', 'えん', 'おう'],
            kun_readings: ['お(さえる)', 'お(す)', 'おさ(える)', 'へ(す)']
        },
        '在': {
            meanings: 'exist, located in, outskirts, suburbs',
            on_readings: ['ざい'],
            kun_readings: ['あ(る)']
        },
        '均': {
            meanings: 'average, level',
            on_readings: ['きん'],
            kun_readings: ['なら(す)']
        },
        '基': {
            meanings: 'counter for machines, foundation, fundamentals, radical (chem)',
            on_readings: ['き'],
            kun_readings: ['もと', 'もとい']
        },
        '報': {
            meanings: 'news, report, retribution, reward',
            on_readings: ['ほう'],
            kun_readings: ['むく(いる)']
        },
        '境': {
            meanings: 'border, boundary, region',
            on_readings: ['きょう', 'けい'],
            kun_readings: ['さかい']
        },
        '墓': {
            meanings: 'grave, tomb',
            on_readings: ['ぼ'],
            kun_readings: ['はか']
        },
        '増': {
            meanings: 'add, augment, gain, increase, promote',
            on_readings: ['ぞう'],
            kun_readings: ['ふ(える)', 'ふ(やす)', 'ま(し)', 'ま(す)']
        },
        '夢': {
            meanings: 'dream, illusion, vision',
            on_readings: ['ぼう', 'む'],
            kun_readings: ['くら(い)', 'ゆめ', 'ゆめ(みる)']
        },
        '妻': {
            meanings: 'spouse, wife',
            on_readings: ['さい'],
            kun_readings: ['つま']
        },
        '婦': {
            meanings: 'bride, lady, wife, woman',
            on_readings: ['ふ'],
            kun_readings: ['よめ']
        },
        '容': {
            meanings: 'contain, form, looks',
            on_readings: ['よう'],
            kun_readings: ['い(れる)']
        },
        '寄': {
            meanings: 'bring near, collect, draw near, forward, gather, send, stop in',
            on_readings: ['き'],
            kun_readings: ['-よ(り)', 'よ(せる)', 'よ(る)']
        },
        '富': {
            meanings: 'abundant, enrich, wealth',
            on_readings: ['ふ', 'ふう'],
            kun_readings: ['と(む)', 'とみ']
        },
        '導': {
            meanings: 'conduct, guidance, leading, usher',
            on_readings: ['どう'],
            kun_readings: ['みちび(く)']
        },
        '居': {
            meanings: 'exist, live with, reside, to be',
            on_readings: ['きょ', 'こ'],
            kun_readings: ['-い', 'い(る)', 'お(る)']
        },
        '属': {
            meanings: 'affiliated, belong, genus, subordinate official',
            on_readings: ['しょく', 'ぞく'],
            kun_readings: ['さかん', 'つく', 'やから']
        },
        '布': {
            meanings: 'cloth, distribute, linen, spread',
            on_readings: ['ふ', 'ほ'],
            kun_readings: ['きれ', 'し(く)', 'ぬの']
        },
        '師': {
            meanings: 'army (incl. counter), exemplar, expert, master, model, teacher, war',
            on_readings: ['し'],
            kun_readings: ['いくさ']
        },
        '常': {
            meanings: 'always, common, continually, long-lasting, normal, ordinary, regular, usual',
            on_readings: ['じょう'],
            kun_readings: ['つね', 'とこ-']
        },
        '幹': {
            meanings: 'capability, main part, talent, tree trunk',
            on_readings: ['かん'],
            kun_readings: ['みき']
        },
        '序': {
            meanings: 'beginning, chance, incidentally, occasion, order, precedence, preface',
            on_readings: ['じょ'],
            kun_readings: ['つい(で)', 'ついで']
        },
        '弁': {
            meanings: 'braid, conical cap, dialect, discrimination, dispose of, distinguish, petal, speech, valve',
            on_readings: ['へん', 'べん'],
            kun_readings: ['あらそ(う)', 'かんむり', 'はなびら', 'わ(ける)', 'わきま(える)']
        },
        '張': {
            meanings: 'counter for bows & stringed instruments, put up (tent), spread, stretch',
            on_readings: ['ちょう'],
            kun_readings: ['-は(り)', '-ば(り)', 'は(る)']
        },
        '往': {
            meanings: 'before, chase away, formerly, going, journey, let go, travel',
            on_readings: ['おう'],
            kun_readings: ['い(く)', 'いにしえ', 'さき(に)', 'ゆ(く)']
        },
        '復': {
            meanings: 'restore, resume, return to, revert',
            on_readings: ['ふく'],
            kun_readings: ['また']
        },
        '徳': {
            meanings: 'benevolence, commanding respect, goodness, virtue',
            on_readings: ['とく'],
            kun_readings: null
        },
        '志': {
            meanings: 'aspire, hopes, intention, motive, plan, resolve, shilling',
            on_readings: ['し'],
            kun_readings: ['こころざ(す)', 'こころざし', 'シリング']
        },
        '応': {
            meanings: 'OK, accept, answer, apply, reply, yes',
            on_readings: ['のう', 'おう', 'よう'],
            kun_readings: ['あた(る)', 'こた(える)', 'まさに']
        },
        '快': {
            meanings: 'agreeable, cheerful, comfortable, pleasant',
            on_readings: ['かい'],
            kun_readings: ['こころよ(い)']
        },
        '性': {
            meanings: 'gender, nature, sex',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['さが']
        },
        '恩': {
            meanings: 'benefit, blessing, favor, goodness, grace, kindness, mercy',
            on_readings: ['おん'],
            kun_readings: null
        },
        '情': {
            meanings: 'circumstances, emotion, facts, feelings, passion, sympathy',
            on_readings: ['じょう', 'せい'],
            kun_readings: ['なさ(け)']
        },
        '態': {
            meanings: 'appearance, attitude, condition, figure, voice (of verbs)',
            on_readings: ['たい'],
            kun_readings: ['わざ(と)']
        },
        '慣': {
            meanings: 'accustomed, become experienced, get used to',
            on_readings: ['かん'],
            kun_readings: ['な(らす)', 'な(れる)']
        },
        '承': {
            meanings: 'acquiesce, be informed, hear, listen to, receive',
            on_readings: ['しょう', 'じょう'],
            kun_readings: ['う(ける)', 'うけたまわ(る)']
        },
        '技': {
            meanings: 'ability, art, arts, craft, feat, performance, skill, vocation',
            on_readings: ['ぎ'],
            kun_readings: ['わざ']
        },
        '招': {
            meanings: 'beckon, engage, invite, summon',
            on_readings: ['しょう'],
            kun_readings: ['まね(く)']
        },
        '授': {
            meanings: 'confer, grant, impart, instruct',
            on_readings: ['じゅ'],
            kun_readings: ['さず(かる)', 'さず(ける)']
        },
        '採': {
            meanings: 'fetch, pick, take, take up',
            on_readings: ['さい'],
            kun_readings: ['と(る)']
        },
        '接': {
            meanings: 'adjoin, contact, piece together, touch',
            on_readings: ['しょう', 'せつ'],
            kun_readings: ['つ(ぐ)']
        },
        '提': {
            meanings: 'carry in hand, propose, take along',
            on_readings: ['だい', 'ちょう', 'てい'],
            kun_readings: ['さ(げる)']
        },
        '損': {
            meanings: 'damage, disadvantage, hurt, injure, loss',
            on_readings: ['そん'],
            kun_readings: ['-そこ(なう)', '-そこ(ねる)', 'そこ(なう)', 'そこ(ねる)', 'そこな(う)']
        },
        '支': {
            meanings: 'branch, branch radical (no. 65), support, sustain',
            on_readings: ['し'],
            kun_readings: ['か(う)', 'ささ(える)', 'つか(える)']
        },
        '政': {
            meanings: 'government, politics',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['まつりごと', 'まん']
        },
        '故': {
            meanings: 'cause, circumstances, consequently, especially, happenstance, intentionally, reason, the late, therefore',
            on_readings: ['こ'],
            kun_readings: ['ふる(い)', 'もと', 'ゆえ']
        },
        '敵': {
            meanings: 'enemy, foe, opponent',
            on_readings: ['てき'],
            kun_readings: ['あだ', 'かたき', 'かな(う)']
        },
        '断': {
            meanings: 'apologize, cutting, decision, decline, dismiss, judgement, prohibit, refuse, severance, warn',
            on_readings: ['だん'],
            kun_readings: ['ことわ(る)', 'さだ(める)', 'た(つ)']
        },
        '旧': {
            meanings: 'ex-, former, old friend, old things, old times',
            on_readings: ['きゅう'],
            kun_readings: ['ふる(い)', 'もと']
        },
        '易': {
            meanings: 'divination, easy, fortune-telling, ready to, simple',
            on_readings: ['い', 'えき'],
            kun_readings: ['やさ(しい)', 'やす(い)']
        },
        '暴': {
            meanings: 'cruelty, force, fret, outburst, outrage, rave, violence',
            on_readings: ['ばく', 'ぼう'],
            kun_readings: ['あば(く)', 'あば(れる)']
        },
        '条': {
            meanings: 'article, clause, counter for articles, clauses, paragraphs, etc., item, streak, stripe, twig',
            on_readings: ['じょう', 'ちょう', 'でき'],
            kun_readings: ['えだ', 'すじ']
        },
        '枝': {
            meanings: 'bough, branch, counter for branches, limb, twig',
            on_readings: ['し'],
            kun_readings: ['えだ']
        },
        '査': {
            meanings: 'investigate',
            on_readings: ['さ'],
            kun_readings: null
        },
        '格': {
            meanings: 'capacity, case (law, grammar), character, rank, status',
            on_readings: ['かく', 'きゃく', 'こう', 'ごう'],
            kun_readings: null
        },
        '桜': {
            meanings: 'cherry',
            on_readings: ['おう', 'よう'],
            kun_readings: ['さくら']
        },
        '検': {
            meanings: 'examination, investigate',
            on_readings: ['けん'],
            kun_readings: ['しら(べる)']
        },
        '構': {
            meanings: 'appearance, build, posture, set up, stance',
            on_readings: ['こう'],
            kun_readings: ['かま(う)', 'かま(える)']
        },
        '武': {
            meanings: 'arms, chivalry, military, warrior',
            on_readings: ['ぶ', 'む'],
            kun_readings: ['たけ', 'たけ(し)']
        },
        '比': {
            meanings: 'Philippines, compare, race, ratio',
            on_readings: ['ひ'],
            kun_readings: ['くら(べる)']
        },
        '永': {
            meanings: 'eternity, lengthy, long',
            on_readings: ['えい'],
            kun_readings: ['なが(い)']
        },
        '河': {
            meanings: 'river',
            on_readings: ['か'],
            kun_readings: ['かわ']
        },
        '液': {
            meanings: 'fluid, juice, liquid, sap, secretion',
            on_readings: ['えき'],
            kun_readings: null
        },
        '混': {
            meanings: 'blend, confuse, mix',
            on_readings: ['こん'],
            kun_readings: ['-ま(じり)', 'こ(む)', 'ま(ざる)', 'ま(じる)', 'ま(ぜる)']
        },
        '減': {
            meanings: 'curtail, decline, decrease, dwindle, get hungry, reduce',
            on_readings: ['げん'],
            kun_readings: ['へ(らす)', 'へ(る)']
        },
        '測': {
            meanings: 'fathom, measure, plan, scheme',
            on_readings: ['そく'],
            kun_readings: ['はか(る)']
        },
        '準': {
            meanings: 'conform, correspond to, imitate, proportionate to, semi-',
            on_readings: ['じゅん'],
            kun_readings: ['じゅん(じる)', 'じゅん(ずる)', 'なぞら(える)', 'のり', 'ひと(しい)', 'みずもり']
        },
        '演': {
            meanings: 'act, performance, play, render, stage',
            on_readings: ['えん'],
            kun_readings: null
        },
        '潔': {
            meanings: 'clean, gallant, pure, righteous, undefiled',
            on_readings: ['けつ'],
            kun_readings: ['いさぎよ(い)']
        },
        '災': {
            meanings: 'calamity, curse, disaster, evil, woe',
            on_readings: ['さい'],
            kun_readings: ['わざわ(い)']
        },
        '燃': {
            meanings: 'blaze, burn, glow',
            on_readings: ['ねん'],
            kun_readings: ['も(える)', 'も(す)', 'も(やす)']
        },
        '版': {
            meanings: 'edition, impression, label, printing block, printing plate',
            on_readings: ['はん'],
            kun_readings: null
        },
        '犯': {
            meanings: 'crime, offense, sin',
            on_readings: ['はん', 'ぼん'],
            kun_readings: ['おか(す)']
        },
        '状': {
            meanings: 'appearance, circumstances, conditions, form, status quo',
            on_readings: ['じょう'],
            kun_readings: null
        },
        '独': {
            meanings: 'Germany, alone, single, spontaneously',
            on_readings: ['とく', 'どく'],
            kun_readings: ['ひと(り)']
        },
        '率': {
            meanings: '%, command, factor, lead, proportion, rate, ratio, spearhead',
            on_readings: ['しゅつ', 'そつ', 'りつ'],
            kun_readings: ['ひき(いる)']
        },
        '現': {
            meanings: 'actual, existing, present',
            on_readings: ['げん'],
            kun_readings: ['あらわ(す)', 'あらわ(れる)', 'うつ(つ)', 'うつつ']
        },
        '留': {
            meanings: 'detain, fasten, halt, stop',
            on_readings: ['りゅう', 'る'],
            kun_readings: ['と(まる)', 'と(める)', 'とど(まる)', 'とど(める)', 'るうぶる']
        },
        '略': {
            meanings: 'abbreviation, capture, omission, outline, plunder, shorten',
            on_readings: ['りゃく'],
            kun_readings: ['おか(す)', 'おさ(める)', 'はか(る)', 'はかりごと', 'はぶ(く)', 'ほぼ']
        },
        '益': {
            meanings: 'advantage, benefit, gain, profit',
            on_readings: ['えき', 'やく'],
            kun_readings: ['ま(す)']
        },
        '眼': {
            meanings: 'eyeball',
            on_readings: ['がん', 'げん'],
            kun_readings: ['まなこ', 'め']
        },
        '破': {
            meanings: 'break, defeat, destroy, frustrate, rend, rip, tear',
            on_readings: ['は'],
            kun_readings: ['やぶ(る)', 'やぶ(れる)', 'わ(れる)']
        },
        '確': {
            meanings: 'assurance, clear, confirm, evident, firm, hard, solid, tight',
            on_readings: ['かく', 'こう'],
            kun_readings: ['たし(か)', 'たし(かめる)']
        },
        '示': {
            meanings: 'display, express, indicate, point out, show',
            on_readings: ['し', 'じ'],
            kun_readings: ['しめ(す)']
        },
        '祖': {
            meanings: 'ancestor, founder, pioneer',
            on_readings: ['そ'],
            kun_readings: null
        },
        '禁': {
            meanings: 'ban, forbid, prohibition',
            on_readings: ['きん'],
            kun_readings: null
        },
        '移': {
            meanings: 'catch (cold, fire), change, drift, move, pass into, shift',
            on_readings: ['い'],
            kun_readings: ['うつ(す)', 'うつ(る)']
        },
        '程': {
            meanings: 'amount, degree, distance, extent, formula, law, limits',
            on_readings: ['てい'],
            kun_readings: ['-ほど', 'ほど']
        },
        '税': {
            meanings: 'duty, tax',
            on_readings: ['ぜい'],
            kun_readings: null
        },
        '築': {
            meanings: 'build, construct, fabricate',
            on_readings: ['ちく'],
            kun_readings: ['きず(く)']
        },
        '精': {
            meanings: 'energy, excellence, fairy, ghost, purity, refined, semen, skill, vitality',
            on_readings: ['しょう', 'せい'],
            kun_readings: ['くわ(しい)', 'しら(げる)']
        },
        '素': {
            meanings: 'elementary, naked, principle, uncovered',
            on_readings: ['す', 'そ'],
            kun_readings: ['もと']
        },
        '経': {
            meanings: 'expire, longitude, pass thru, sutra, warp',
            on_readings: ['きょう', 'きん', 'けい'],
            kun_readings: ['た(つ)', 'たていと', 'のり', 'はか(る)', 'へ(る)']
        },
        '統': {
            meanings: 'governing, overall, relationship, ruling',
            on_readings: ['とう'],
            kun_readings: ['す(べる)', 'ほび(る)']
        },
        '絶': {
            meanings: 'abstain, be beyond, cut off, discontinue, interrupt, peerless, sever, suppress, unparalleled, without match',
            on_readings: ['ぜつ'],
            kun_readings: ['た(える)', 'た(つ)', 'た(やす)']
        },
        '綿': {
            meanings: 'cotton',
            on_readings: ['めん'],
            kun_readings: ['わた']
        },
        '総': {
            meanings: 'all, full, general, total, whole',
            on_readings: ['そう'],
            kun_readings: ['す(べて)', 'すべ(て)', 'ふさ']
        },
        '編': {
            meanings: 'braid, compilation, completed poem, editing, knit, part of a book, plait, twist',
            on_readings: ['へん'],
            kun_readings: ['-あ(み)', 'あ(む)']
        },
        '績': {
            meanings: 'achievements, exploits, unreeling cocoons',
            on_readings: ['せき'],
            kun_readings: null
        },
        '織': {
            meanings: 'fabric, weave',
            on_readings: ['しき', 'しょく'],
            kun_readings: ['-お(り)', '-おり', 'お(り)', 'お(る)', 'おり']
        },
        '罪': {
            meanings: 'blame, crime, fault, guilt, offense, sin',
            on_readings: ['ざい'],
            kun_readings: ['つみ']
        },
        '群': {
            meanings: 'cluster, crowd, flock, group, herd, swarm',
            on_readings: ['ぐん'],
            kun_readings: ['む(れ)', 'む(れる)', 'むら', 'むら(がる)']
        },
        '義': {
            meanings: 'honor, justice, loyalty, meanings, morality, righteousness',
            on_readings: ['ぎ'],
            kun_readings: null
        },
        '耕': {
            meanings: 'cultivate, plow, till',
            on_readings: ['こう'],
            kun_readings: ['たがや(す)']
        },
        '職': {
            meanings: 'employment, post, work',
            on_readings: ['しょく', 'そく'],
            kun_readings: null
        },
        '肥': {
            meanings: 'fertile, fertilizer, get fat, manure, pamper',
            on_readings: ['ひ'],
            kun_readings: ['こ(える)', 'こ(やし)', 'こ(やす)', 'こえ', 'ふと(る)']
        },
        '能': {
            meanings: 'ability, capacity, skill, talent',
            on_readings: ['のう'],
            kun_readings: ['あた(う)', 'よ(く)']
        },
        '興': {
            meanings: 'entertain, interest, pleasure, retrieve, revive',
            on_readings: ['きょう', 'こう'],
            kun_readings: ['おこ(す)', 'おこ(る)']
        },
        '舌': {
            meanings: 'clapper, reed, tongue',
            on_readings: ['ぜつ'],
            kun_readings: ['した']
        },
        '舎': {
            meanings: 'cottage, house, hut, inn, mansion',
            on_readings: ['しゃ', 'せき'],
            kun_readings: ['やど(る)']
        },
        '術': {
            meanings: 'art, magic, means, resources, skill, technique, trick',
            on_readings: ['じゅつ'],
            kun_readings: ['すべ']
        },
        '衛': {
            meanings: 'defense, protection',
            on_readings: ['え', 'えい'],
            kun_readings: null
        },
        '製': {
            meanings: 'made in..., manufacture',
            on_readings: ['せい'],
            kun_readings: null
        },
        '複': {
            meanings: 'compound, double, duplicate, multiple',
            on_readings: ['ふく'],
            kun_readings: null
        },
        '規': {
            meanings: 'measure, standard',
            on_readings: ['き'],
            kun_readings: null
        },
        '解': {
            meanings: 'absolve, answer, cancel, explain, explanation, key, minute, notes, solve, understanding, undo, unravel, untie',
            on_readings: ['かい', 'げ'],
            kun_readings: ['さと(る)', 'と(かす)', 'と(く)', 'と(ける)', 'ほど(く)', 'ほど(ける)', 'わか(る)']
        },
        '設': {
            meanings: 'establishment, prepare, provision',
            on_readings: ['せつ'],
            kun_readings: ['もう(ける)']
        },
        '許': {
            meanings: 'approve, permit',
            on_readings: ['きょ'],
            kun_readings: ['もと', 'ゆる(す)']
        },
        '証': {
            meanings: 'certificate, evidence, proof',
            on_readings: ['しょう'],
            kun_readings: ['あかし']
        },
        '評': {
            meanings: 'comment, criticism, evaluate',
            on_readings: ['ひょう'],
            kun_readings: null
        },
        '講': {
            meanings: 'association, club, lecture',
            on_readings: ['こう'],
            kun_readings: null
        },
        '謝': {
            meanings: 'apologize, refuse, thank',
            on_readings: ['しゃ'],
            kun_readings: ['あやま(る)']
        },
        '識': {
            meanings: 'discriminating, know, write',
            on_readings: ['しき'],
            kun_readings: ['し(る)', 'しる(す)']
        },
        '護': {
            meanings: 'protect, safeguard',
            on_readings: ['ご'],
            kun_readings: ['まも(る)']
        },
        '豊': {
            meanings: 'bountiful, excellent, rich',
            on_readings: ['ぶ', 'ほう'],
            kun_readings: ['とよ', 'ゆた(か)']
        },
        '財': {
            meanings: 'assets, money, property, wealth',
            on_readings: ['さい', 'ざい', 'ぞく'],
            kun_readings: ['たから']
        },
        '貧': {
            meanings: 'poor, poverty',
            on_readings: ['ひん', 'びん'],
            kun_readings: ['まず(しい)']
        },
        '責': {
            meanings: 'blame, censure, condemn',
            on_readings: ['せき'],
            kun_readings: ['せ(める)']
        },
        '貸': {
            meanings: 'lend',
            on_readings: ['たい'],
            kun_readings: ['か(し-)', 'か(す)', 'かし-']
        },
        '貿': {
            meanings: 'exchange, trade',
            on_readings: ['ぼう'],
            kun_readings: null
        },
        '賀': {
            meanings: 'congratulations, joy',
            on_readings: ['が'],
            kun_readings: null
        },
        '資': {
            meanings: 'assets, be conducive to, capital, contribute to, data, funds, resources',
            on_readings: ['し'],
            kun_readings: null
        },
        '賛': {
            meanings: 'agree with, approve, assist, praise, title or inscription on picture',
            on_readings: ['さん'],
            kun_readings: ['たす(ける)', 'たた(える)']
        },
        '質': {
            meanings: 'matter, quality, substance, temperament',
            on_readings: ['しち', 'しつ', 'ち'],
            kun_readings: ['ただ(す)', 'たち', 'もと', 'わりふ']
        },
        '輸': {
            meanings: 'be inferior, send, transport',
            on_readings: ['しゅ', 'ゆ'],
            kun_readings: null
        },
        '述': {
            meanings: 'mention, relate, speak, state',
            on_readings: ['じゅつ'],
            kun_readings: ['の(べる)']
        },
        '迷': {
            meanings: 'astray, be perplexed, err, illusion, in doubt, lost',
            on_readings: ['めい'],
            kun_readings: ['まよ(う)']
        },
        '退': {
            meanings: 'expel, reject, repel, resign, retire, retreat, withdraw',
            on_readings: ['たい'],
            kun_readings: ['しりぞ(く)', 'しりぞ(ける)', 'ど(く)', 'の(く)', 'の(ける)', 'ひ(く)']
        },
        '逆': {
            meanings: 'inverted, opposite, reverse, wicked',
            on_readings: ['ぎゃく', 'げき'],
            kun_readings: ['さか', 'さか(さ)', 'さか(らう)']
        },
        '造': {
            meanings: 'create, make, physique, structure',
            on_readings: ['ぞう'],
            kun_readings: ['-づく(り)', 'つく(り)', 'つく(る)']
        },
        '過': {
            meanings: 'error, exceed, go beyond, overdo',
            on_readings: ['か'],
            kun_readings: ['あやま(ち)', 'あやま(つ)', 'す(ぎる)', 'す(ごす)', 'よ(ぎる)', 'よぎ(る)']
        },
        '適': {
            meanings: 'capable, occasional, qualified, rare, suitable',
            on_readings: ['てき'],
            kun_readings: ['かな(う)']
        },
        '酸': {
            meanings: 'acid, bitterness, sour, tart',
            on_readings: ['さん'],
            kun_readings: ['す(い)']
        },
        '鉱': {
            meanings: 'mineral, ore',
            on_readings: ['こう'],
            kun_readings: ['あらがね']
        },
        '銅': {
            meanings: 'copper',
            on_readings: ['どう'],
            kun_readings: ['あかがね']
        },
        '銭': {
            meanings: '.01 yen, coin, money',
            on_readings: ['せん', 'ぜん'],
            kun_readings: ['すき', 'ぜに']
        },
        '防': {
            meanings: 'defend, protect, resist, ward off',
            on_readings: ['ぼう'],
            kun_readings: ['ふせ(ぐ)']
        },
        '限': {
            meanings: 'limit, restrict, to best of ability',
            on_readings: ['げん'],
            kun_readings: ['-かぎ(り)', 'かぎ(り)', 'かぎ(る)']
        },
        '険': {
            meanings: 'impregnable position, inaccessible place, precipitous, sharp eyes, steep place',
            on_readings: ['けん'],
            kun_readings: ['けわ(しい)']
        },
        '際': {
            meanings: 'adventurous, dangerous, edge, indecent, occasion, side, time, verge, when',
            on_readings: ['さい'],
            kun_readings: ['-ぎわ', 'きわ']
        },
        '雑': {
            meanings: 'miscellaneous',
            on_readings: ['ざつ', 'ぞう'],
            kun_readings: ['まじ(える)', 'まじ(る)']
        },
        '非': {
            meanings: 'injustice, mistake, negative, non-, un-',
            on_readings: ['ひ'],
            kun_readings: ['あら(ず)']
        },
        '預': {
            meanings: 'custody, deposit, entrust to, leave with',
            on_readings: ['よ'],
            kun_readings: ['あず(かる)', 'あず(ける)']
        },
        '領': {
            meanings: 'dominion, fief, jurisdiction, reign, territory',
            on_readings: ['りょう'],
            kun_readings: ['えり']
        },
        '額': {
            meanings: 'amount, forehead, framed picture, plaque, sum, tablet, volume',
            on_readings: ['がく'],
            kun_readings: ['ひたい']
        },
        '飼': {
            meanings: 'domesticate, feed, keep, raise',
            on_readings: ['し'],
            kun_readings: ['か(う)']
        },
    }
}

export default Kanjis