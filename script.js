const DATA = {"hiraganaData":{"main":[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"],["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"],["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"],["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"],["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"],["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"],["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"],["や","ya"],["ゆ","yu"],["よ","yo"],["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"],["わ","wa"],["を","wo"],["ん","n"]],"dakuten":[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"],["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"],["だ","da"],["ぢ","di"],["づ","du"],["で","de"],["ど","do"],["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"],["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]],"combo":[["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"],["しゃ","sha"],["しゅ","shu"],["しょ","sho"],["ちゃ","cha"],["ちゅ","chu"],["ちょ","cho"],["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"],["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"],["みゃ","mya"],["みゅ","myu"],["みょ","myo"],["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"],["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"],["じゃ","ja"],["じゅ","ju"],["じょ","jo"],["びゃ","bya"],["びゅ","byu"],["びょ","byo"],["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"]]},"katakanaData":{"main":[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"],["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"],["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"],["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"],["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"],["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"],["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"],["ヤ","ya"],["ユ","yu"],["ヨ","yo"],["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"],["ワ","wa"],["ヲ","wo"],["ン","n"]],"dakuten":[["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"],["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"],["ダ","da"],["ヂ","di"],["ヅ","du"],["デ","de"],["ド","do"],["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"],["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]],"combo":[["キャ","kya"],["キュ","kyu"],["キョ","kyo"],["シャ","sha"],["シュ","shu"],["ショ","sho"],["チャ","cha"],["チュ","chu"],["チョ","cho"],["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"],["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"],["ミャ","mya"],["ミュ","myu"],["ミョ","myo"],["リャ","rya"],["リュ","ryu"],["リョ","ryo"],["ギャ","gya"],["ギュ","gyu"],["ギョ","gyo"],["ジャ","ja"],["ジュ","ju"],["ジョ","jo"],["ビャ","bya"],["ビュ","byu"],["ビョ","byo"],["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"],["ファ","fa"],["フィ","fi"],["フェ","fe"],["フォ","fo"],["ティ","ti"],["ディ","di"],["ウィ","wi"],["ウェ","we"]]},"jlptData":{"N5":{"title":"N5","subtitle":"Fondasi — Aksara & Kata Pertama","color":"#3B6B8A","kanjiCount":80,"kanji":[["一","ICHI/ひと","satu","一つ (hitotsu)"],["二","NI/ふた","dua","二人 (futari)"],["三","SAN/みっ","tiga","三日 (mikka)"],["四","SHI/よん","empat","四月 (shigatsu)"],["五","GO/いつ","lima","五人 (gonin)"],["六","ROKU/むっ","enam","六時 (rokuji)"],["七","SHICHI/なな","tujuh","七月 (shichigatsu)"],["八","HACHI/やっ","delapan","八日 (youka)"],["九","KYU/ここの","sembilan","九時 (kuji)"],["十","JU/とお","sepuluh","十分 (juppun)"],["百","HYAKU","seratus","百円 (hyaku-en)"],["千","SEN/ち","seribu","千円 (sen-en)"],["万","MAN","sepuluh ribu","一万円 (ichiman-en)"],["円","EN/まる","yen; lingkaran","百円 (hyaku-en)"],["日","NICHI/ひ","hari; matahari","今日 (kyou)"],["月","GETSU/つき","bulan","月曜日 (getsuyoubi)"],["火","KA/ひ","api","火曜日 (kayoubi)"],["水","SUI/みず","air","水曜日 (suiyoubi)"],["木","MOKU/き","pohon","木曜日 (mokuyoubi)"],["金","KIN/かね","emas; uang","金曜日 (kinyoubi)"],["土","DO/つち","tanah","土曜日 (doyoubi)"],["山","SAN/やま","gunung","富士山 (Fujisan)"],["川","SEN/かわ","sungai","川 (kawa)"],["田","DEN/た","sawah","田中 (Tanaka)"],["花","KA/はな","bunga","花見 (hanami)"],["雨","U/あめ","hujan","雨 (ame)"],["人","JIN/ひと","orang","日本人 (nihonjin)"],["女","JO/おんな","wanita","女性 (josei)"],["男","DAN/おとこ","pria","男性 (dansei)"],["子","SHI/こ","anak","子供 (kodomo)"],["父","FU/ちち","ayah","父 (chichi)"],["母","BO/はは","ibu","母 (haha)"],["友","YU/とも","teman","友達 (tomodachi)"],["先","SEN/さき","sebelumnya","先生 (sensei)"],["生","SEI/い","hidup; lahir","学生 (gakusei)"],["本","HON/もと","buku; asal","日本 (nihon)"],["学","GAKU/まな","belajar","学校 (gakkou)"],["校","KOU","sekolah","高校 (koukou)"],["年","NEN/とし","tahun","今年 (kotoshi)"],["時","JI/とき","jam; waktu","時間 (jikan)"],["間","KAN/ま","antara","時間 (jikan)"],["国","KOKU/くに","negara","外国 (gaikoku)"],["中","CHUU/なか","dalam; tengah","中国 (chuugoku)"],["大","DAI/おお","besar","大学 (daigaku)"],["小","SHOU/ちい","kecil","小さい (chiisai)"],["上","JOU/うえ","atas","上手 (jouzu)"],["下","KA/した","bawah","下手 (heta)"],["右","YU/みぎ","kanan","右 (migi)"],["左","SA/ひだり","kiri","左 (hidari)"],["前","ZEN/まえ","depan","前 (mae)"],["後","GO/うしろ","belakang; setelah","後で (ato de)"],["東","TOU/ひがし","timur","東京 (Tokyo)"],["西","SEI/にし","barat","関西 (Kansai)"],["南","NAN/みなみ","selatan","南 (minami)"],["北","HOKU/きた","utara","北 (kita)"],["見","KEN/み","melihat","見る (miru)"],["聞","BUN/き","mendengar","聞く (kiku)"],["食","SHOKU/た","makan","食べる (taberu)"],["飲","IN/の","minum","飲む (nomu)"],["行","KOU/い","pergi","行く (iku)"],["来","RAI/く","datang","来る (kuru)"],["書","SHO/か","menulis","書く (kaku)"],["読","DOKU/よ","membaca","読む (yomu)"],["買","BAI/か","membeli","買う (kau)"],["話","WA/はな","berbicara","話す (hanasu)"],["立","RITSU/た","berdiri","立つ (tatsu)"],["出","SHUTSU/で","keluar","出る (deru)"],["入","NYU/はい","masuk","入る (hairu)"],["休","KYU/やす","istirahat","休む (yasumu)"],["高","KOU/たか","tinggi; mahal","高い (takai)"],["安","AN/やす","murah; aman","安い (yasui)"],["長","CHOU/なが","panjang","長い (nagai)"],["白","HAKU/しろ","putih","白い (shiroi)"],["黒","KOKU/くろ","hitam","黒い (kuroi)"],["赤","SEKI/あか","merah","赤い (akai)"],["青","SEI/あお","biru; hijau","青い (aoi)"],["新","SHIN/あたら(しい)","baru","新しい (atarashii)"],["古","KO/ふる","lama; tua","古い (furui)"],["目","MOKU/め","mata","目 (me)"],["口","KOU/くち","mulut","口 (kuchi)"],["手","SHU/て","tangan","手 (te)"],["足","SOKU/あし","kaki","足 (ashi)"]],"vocab":[["わたし","私","saya","watashi"],["あなた","貴方","kamu","anata"],["これ","これ","ini (dekat penutur)","kore"],["それ","それ","itu (dekat lawan bicara)","sore"],["あれ","あれ","itu (jauh)","are"],["どれ","どれ","yang mana","dore"],["ここ","ここ","di sini","koko"],["そこ","そこ","di situ","soko"],["あそこ","あそこ","di sana","asoko"],["いくら","いくら","berapa harganya","ikura"],["なんじ","何時","jam berapa","nanji"],["なんにち","何日","tanggal berapa","nannichi"],["いま","今","sekarang","ima"],["きょう","今日","hari ini","kyou"],["あした","明日","besok","ashita"],["きのう","昨日","kemarin","kinou"],["まいにち","毎日","setiap hari","mainichi"],["まいあさ","毎朝","setiap pagi","maiasa"],["とけい","時計","jam (benda)","tokei"],["でんわ","電話","telepon","denwa"],["えき","駅","stasiun","eki"],["でんしゃ","電車","kereta","densha"],["バス","バス","bus","basu"],["くるま","車","mobil","kuruma"],["いえ","家","rumah","ie"],["がっこう","学校","sekolah","gakkou"],["びょういん","病院","rumah sakit","byouin"],["ほんや","本屋","toko buku","hon-ya"],["みず","水","air","mizu"],["ごはん","ご飯","nasi; makanan","gohan"],["おちゃ","お茶","teh","ocha"],["パン","パン","roti","pan"],["ねこ","猫","kucing","neko"],["いぬ","犬","anjing","inu"],["おおきい","大きい","besar","ookii"],["ちいさい","小さい","kecil","chiisai"],["たかい","高い","tinggi/mahal","takai"],["やすい","安い","murah","yasui"],["あたらしい","新しい","baru","atarashii"],["ふるい","古い","lama/tua","furui"]],"grammar":[{"pattern":"〜は〜です","meaning":"Pola dasar: は menandai topik (kopula)","example":"わたしは がくせい です。","translation":"Saya adalah pelajar.","note":"は dibaca 'wa'. Untuk menyangkal: じゃありません."},{"pattern":"〜を〜ます","meaning":"Objek + kata kerja bentuk sopan","example":"みずを のみます。","translation":"Saya minum air.","note":"を menandai objek langsung."},{"pattern":"〜に いきます","meaning":"Pergi ke (tujuan tempat/tujuan aksi)","example":"スーパーに かいものに いきます。","translation":"Saya pergi ke supermarket untuk belanja.","note":"Dua に bisa muncul: tempat + tujuan aksi."},{"pattern":"〜が あります / います","meaning":"Menyatakan keberadaan","example":"つくえの うえに ほんが あります。","translation":"Ada buku di atas meja.","note":"あります untuk benda mati/tumbuhan, います untuk makhluk hidup."},{"pattern":"〜たい です","meaning":"Ingin melakukan","example":"にほんに いきたいです。","translation":"Saya ingin pergi ke Jepang.","note":"Bentuk -masu (tanpa masu) + たい."},{"pattern":"〜てください","meaning":"Tolong lakukan","example":"ここに すわってください。","translation":"Tolong duduk di sini.","note":"Bentuk -te + ください."},{"pattern":"〜ないでください","meaning":"Tolong jangan lakukan","example":"しゃしんを とらないでください。","translation":"Tolong jangan memotret.","note":"Bentuk -nai + でください."},{"pattern":"〜から〜まで","meaning":"Dari ... sampai ...","example":"くじから ごじまで はたらきます。","translation":"Bekerja dari jam 9 sampai 5.","note":"Untuk waktu maupun tempat."},{"pattern":"〜ましょう","meaning":"Ayo lakukan bersama (ajakan)","example":"たべましょう！","translation":"Ayo makan!","note":"Lebih sopan: 〜ませんか (ajakan halus)."},{"pattern":"どんな〜 / どの〜","meaning":"Seperti apa / yang mana","example":"どんな たべものが すきですか。","translation":"Makanan seperti apa yang kamu suka?","note":"どんな + noun (kualitas), どの + noun (pilihan spesifik)."}]},"N4":{"title":"N4","subtitle":"Pemula Atas — Tata Bahasa Berkembang","color":"#4A6B8A","kanjiCount":170,"kanji":[["動","DOU/うご","bergerak","運動 (undou)"],["働","DOU/はたら","bekerja","働く (hataraku)"],["使","SHI/つか","menggunakan","使う (tsukau)"],["始","SHI/はじ","memulai","始める (hajimeru)"],["終","SHUU/お","mengakhiri","終わる (owaru)"],["開","KAI/ひら","membuka","開く (hiraku)"],["閉","HEI/し","menutup","閉める (shimeru)"],["乗","JOU/の","naik (kendaraan)","乗る (noru)"],["降","KOU/お","turun; hujan","降りる (oriru)"],["持","JI/も","membawa; memegang","持つ (motsu)"],["返","HEN/かえ","mengembalikan","返す (kaesu)"],["渡","TO/わた","menyeberang; memberikan","渡す (watasu)"],["送","SOU/おく","mengirim","送る (okuru)"],["受","JU/う","menerima","受ける (ukeru)"],["教","KYOU/おし","mengajar","教える (oshieru)"],["習","SHUU/なら","belajar kebiasaan","練習 (renshuu)"],["練","REN","melatih","練習 (renshuu)"],["考","KOU/かんが","berpikir","考える (kangaeru)"],["決","KETSU/き","memutuskan","決める (kimeru)"],["集","SHUU/あつ","mengumpulkan","集める (atsumeru)"],["族","ZOKU","keluarga; suku","家族 (kazoku)"],["達","TATSU/たち","jamak orang","友達 (tomodachi)"],["若","JAKU/わか","muda","若い (wakai)"],["老","ROU/お","tua","老人 (roujin)"],["夫","FU/おっと","suami","夫婦 (fuufu)"],["妻","SAI/つま","istri","妻 (tsuma)"],["兄","KEI/あに","kakak laki-laki","お兄さん (oniisan)"],["弟","TEI/おとうと","adik laki-laki","弟 (otouto)"],["姉","SHI/あね","kakak perempuan","お姉さん (oneesan)"],["妹","MAI/いもうと","adik perempuan","妹 (imouto)"],["店","TEN/みせ","toko","お店 (omise)"],["屋","OKU/や","toko; atap","本屋 (hon-ya)"],["館","KAN","gedung; aula","図書館 (toshokan)"],["所","SHO/ところ","tempat","場所 (basho)"],["場","JOU/ば","tempat; lapangan","駐車場 (chuushajou)"],["室","SHITSU","ruangan","教室 (kyoushitsu)"],["道","DOU/みち","jalan","道路 (douro)"],["橋","KYOU/はし","jembatan","橋 (hashi)"],["週","SHUU","minggu","来週 (raishuu)"],["去","KYO/さ","lalu; pergi","去年 (kyonen)"],["来","RAI/く","mendatang","来年 (rainen)"],["毎","MAI","setiap","毎日 (mainichi)"],["今","KON/いま","sekarang","今年 (kotoshi)"],["朝","CHOU/あさ","pagi","今朝 (kesa)"],["昼","CHUU/ひる","siang","昼ご飯 (hirugohan)"],["晩","BAN","malam","今晩 (konban)"],["夜","YA/よる","malam","夜 (yoru)"],["昨","SAKU","kemarin","昨日 (kinou)"],["体","TAI/からだ","tubuh","体育 (taiiku)"],["頭","TOU/あたま","kepala","頭 (atama)"],["顔","GAN/かお","wajah","顔 (kao)"],["首","SHUU/くび","leher","首 (kubi)"],["腹","FUKU/はら","perut","お腹 (onaka)"],["背","SEI/せ","punggung; tinggi badan","背が高い (se ga takai)"],["痛","TSUU/いた","sakit","頭痛 (zutsuu)"],["病","BYOU/やま","sakit; penyakit","病気 (byouki)"],["薬","YAKU/くすり","obat","薬 (kusuri)"],["医","I","medis; dokter","医者 (isha)"],["肉","NIKU","daging","牛肉 (gyuuniku)"],["魚","GYO/さかな","ikan","魚 (sakana)"],["野","YA/の","liar; ladang","野菜 (yasai)"],["菜","SAI/な","sayuran","野菜 (yasai)"],["果","KA/は","buah; hasil","果物 (kudamono)"],["物","BUTSU/もの","benda; hal","食べ物 (tabemono)"],["料","RYOU","bahan; biaya","料理 (ryouri)"],["理","RI/こと","alasan; prinsip","料理 (ryouri)"],["暑","SHO/あつ","panas (cuaca)","暑い (atsui)"],["寒","KAN/さむ","dingin (cuaca)","寒い (samui)"],["暖","DAN/あたた","hangat","暖かい (atatakai)"],["涼","RYO/すず","sejuk","涼しい (suzushii)"],["明","MEI/MYOU/あ(かるい), あ(ける), あき(らか)","terang; jelas","明るい (akarui)"],["暗","AN/くら","gelap","暗い (kurai)"],["広","KOU/ひろ","luas","広い (hiroi)"],["狭","KYOU/せま","sempit","狭い (semai)"],["重","JUU/おも","berat","重い (omoi)"],["軽","KEI/かる","ringan","軽い (karui)"],["速","SOKU/はや","cepat","速い (hayai)"],["遅","CHI/おそ","lambat","遅い (osoi)"]],"vocab":[["けいけん","経験","pengalaman","keiken"],["きかい","機会","kesempatan","kikai"],["やくそく","約束","janji","yakusoku"],["しっぱい","失敗","kegagalan","shippai"],["せいこう","成功","keberhasilan","seikou"],["きもち","気持ち","perasaan","kimochi"],["あんしん","安心","lega/tenang","anshin"],["しんぱい","心配","khawatir","shinpai"],["べんり","便利","praktis","benri"],["ふべん","不便","tidak praktis","fuben"],["あんぜん","安全","aman","anzen"],["きけん","危険","bahaya","kiken"],["れんしゅう","練習","latihan","renshuu"],["どりょく","努力","usaha keras","doryoku"],["かんけい","関係","hubungan","kankei"],["もんだい","問題","masalah","mondai"],["こたえ","答え","jawaban","kotae"],["しつもん","質問","pertanyaan","shitsumon"],["せつめい","説明","penjelasan","setsumei"],["りゆう","理由","alasan","riyuu"],["けっか","結果","hasil","kekka"],["もくひょう","目標","tujuan","mokuhyou"],["けいかく","計画","rencana","keikaku"],["じかん","時間","waktu","jikan"],["ようじ","用事","keperluan","youji"],["きせつ","季節","musim","kisetsu"],["てんき","天気","cuaca","tenki"],["かぜ","風","angin; flu","kaze"],["でかける","出かける","keluar/pergi","dekakeru"],["かえる","帰る","pulang","kaeru"],["もらう","もらう","menerima (dari orang lain)","morau"],["あげる","あげる","memberi (ke orang lain)","ageru"],["くれる","くれる","memberi (ke saya)","kureru"],["おしえる","教える","mengajar; memberi tahu","oshieru"],["わかる","分かる","mengerti","wakaru"],["しる","知る","mengetahui","shiru"],["なれる","慣れる","terbiasa","nareru"],["きめる","決める","memutuskan","kimeru"],["つづける","続ける","melanjutkan","tsuzukeru"],["やめる","やめる","berhenti; berhenti melakukan","yameru"]],"grammar":[{"pattern":"〜たことがある","meaning":"Pernah melakukan (pengalaman masa lalu)","example":"ふじさんに のぼったことがあります。","translation":"Saya pernah mendaki Gunung Fuji.","note":"Kata kerja bentuk -ta + ことがある."},{"pattern":"〜ながら","meaning":"Sambil melakukan dua aksi sekaligus","example":"おんがくを ききながら べんきょうします。","translation":"Belajar sambil mendengarkan musik.","note":"Subjek kedua aksi harus sama."},{"pattern":"〜たら / 〜ば","meaning":"Pengandaian: jika/kalau","example":"あめが ふったら、いえに います。","translation":"Kalau hujan, saya di rumah.","note":"たら lebih alami di percakapan sehari-hari."},{"pattern":"〜なければならない","meaning":"Harus melakukan","example":"くすりを のまなければなりません。","translation":"Saya harus minum obat.","note":"Singkat: 〜なきゃ (percakapan kasual)."},{"pattern":"〜てもいい / 〜てはいけない","meaning":"Boleh / Tidak boleh","example":"ここで たべてもいいですか？ —いいえ、たべてはいけません。","translation":"Bolehkah makan di sini? —Tidak boleh.","note":"Pasangan pola izin dan larangan."},{"pattern":"〜そうです (様態)","meaning":"Kelihatannya... (dari penglihatan langsung)","example":"そのケーキは おいしそうです。","translation":"Kue itu kelihatannya enak.","note":"Berbeda dengan 〜そうです (伝聞) = 'katanya'."},{"pattern":"〜という","meaning":"Yang disebut; dikatakan bahwa","example":"「もったいない」という かんがえかたが あります。","translation":"Ada konsep yang disebut 'mottainai'.","note":"Mengutip nama atau konsep."},{"pattern":"〜やすい / 〜にくい","meaning":"Mudah / susah untuk dilakukan","example":"このペンは かきやすいです。","translation":"Pena ini mudah untuk menulis.","note":"Kata kerja -masu (tanpa masu) + やすい/にくい."},{"pattern":"〜のに (逆接)","meaning":"Padahal; meskipun (kontras/kecewa)","example":"がんばったのに しっぱいしました。","translation":"Padahal sudah berusaha, tapi gagal.","note":"Ekspresikan kekecewaan atau keheranan."},{"pattern":"〜つもり","meaning":"Berniat / bermaksud melakukan","example":"らいねん にほんご の しけんを うけるつもりです。","translation":"Saya berniat ikut ujian bahasa Jepang tahun depan.","note":"Kata kerja kamus + つもり."}]},"N3":{"title":"N3","subtitle":"Menengah — Jembatan ke Kemampuan Praktis","color":"#5C7A5C","kanjiCount":370,"kanji":[["環","KAN/わ","lingkungan; sekitar","環境 (kankyou)"],["境","KYOU/さかい","batas; lingkungan","環境 (kankyou)"],["済","ZAI/す","menyelesaikan; ekonomi","経済 (keizai)"],["経","KEI/へ","melewati; ekonomi","経験 (keiken)"],["政","SEI/まつりごと","pemerintahan; politik","政治 (seiji)"],["治","JI/おさ","mengatur; menyembuhkan","政治 (seiji)"],["策","SAKU","strategi; kebijakan","政策 (seisaku)"],["法","HOU/のり","hukum; metode","方法 (houhou)"],["規","KI","aturan; standar","規則 (kisoku)"],["則","SOKU/のり","aturan","規則 (kisoku)"],["率","RITSU/りつ","tingkat; perbandingan","効率 (kouritsu)"],["効","KOU","efek; manfaat","効果 (kouka)"],["改","KAI/あらた","memperbaiki","改善 (kaizen)"],["善","ZEN/よ","baik","改善 (kaizen)"],["技","GI/わざ","teknik; keahlian","技術 (gijutsu)"],["術","JUTSU","seni; teknik","技術 (gijutsu)"],["影","EI/かげ","bayangan","影響 (eikyou)"],["響","KYOU/ひび","bergaung","影響 (eikyou)"],["状","JOU","keadaan","状況 (joukyou)"],["況","KYOU","kondisi","状況 (joukyou)"],["態","TAI","kondisi; sikap","態度 (taido)"],["度","DO/たび","derajat; kali","態度 (taido)"],["傾","KEI/かたむ","cenderung; miring","傾向 (keikou)"],["向","KOU/む","arah","方向 (houkou)"],["積","SEKI/つ","menumpuk","積極的 (sekkyokuteki)"],["極","KYOKU/きわ","ekstrem; kutub","積極的 (sekkyokuteki)"],["複","FUKU","ganda; rangkap","複雑 (fukuzatsu)"],["雑","ZATSU","campur; kasar","複雑 (fukuzatsu)"],["単","TAN","tunggal; sederhana","単純 (tanjun)"],["純","JUN","murni","単純 (tanjun)"],["許","KYO/ゆる","mengizinkan","許可 (kyoka)"],["禁","KIN","melarang","禁止 (kinshi)"],["止","SHI/と","menghentikan","禁止 (kinshi)"],["義","GI","makna; kewajiban","義務 (gimu)"],["務","MU/つと","tugas; bekerja","義務 (gimu)"],["権","KEN","hak; kekuasaan","権利 (kenri)"],["利","RI/き","manfaat; keuntungan","権利 (kenri)"],["均","KIN/なら","rata; seimbang","平均 (heikin)"],["均 平","HEI/たい","datar; damai","平均 (heikin)"],["割","KATSU/わり","membagi","割合 (wariai)"],["合","GOU/あ","cocok; bergabung","割合 (wariai)"],["因","IN/よ","sebab; asal","原因 (gen'in)"],["原","GEN/はら","asli; padang luas","原因 (gen'in)"],["担","TAN/にな","memikul","負担 (futan)"],["負","FU/ま","kalah; beban","負担 (futan)"],["反","HAN/そ","melawan; kebalikan","反対 (hantai)"],["対","TAI/つい","terhadap; pasangan","反対 (hantai)"],["映","EI/うつ","memantulkan","映画 (eiga)"],["資","SHI","modal; sumber daya","資源 (shigen)"],["源","GEN/みなもと","sumber; asal","資源 (shigen)"]],"vocab":[["かんきょう","環境","lingkungan","kankyou"],["しげん","資源","sumber daya","shigen"],["せいさく","政策","kebijakan","seisaku"],["けいざい","経済","ekonomi","keizai"],["しじょう","市場","pasar","shijou"],["ぎじゅつ","技術","teknologi","gijutsu"],["かいぜん","改善","perbaikan","kaizen"],["こうじょう","向上","peningkatan","koujou"],["こうりつ","効率","efisiensi","kouritsu"],["きそ","基礎","fondasi","kiso"],["げんいん","原因","penyebab","gen'in"],["えいきょう","影響","pengaruh","eikyou"],["たいおう","対応","penanganan","taiou"],["たいさく","対策","langkah/solusi","taisaku"],["とくちょう","特徴","ciri khas","tokuchou"],["けいこう","傾向","tren","keikou"],["じょうきょう","状況","situasi","joukyou"],["きょか","許可","izin","kyoka"],["きんし","禁止","larangan","kinshi"],["ぎむ","義務","kewajiban","gimu"],["けんり","権利","hak","kenri"],["へいきん","平均","rata-rata","heikin"],["ふくざつ","複雑","kompleks","fukuzatsu"],["たんじゅん","単純","sederhana","tanjun"],["ふたん","負担","beban","futan"],["わりあい","割合","proporsi","wariai"],["はんだん","判断","penilaian","handan"],["ろんり","論理","logika","ronri"],["こんきょ","根拠","dasar/landasan","konkyo"],["ぜんたい","全体","keseluruhan","zentai"],["かんしゃ","感謝","rasa syukur","kansha"],["かんどう","感動","terharu","kandou"],["きょうみ","興味","ketertarikan","kyoumi"],["しんらい","信頼","kepercayaan","shinrai"],["せきにん","責任","tanggung jawab","sekinin"],["かのう","可能","memungkinkan","kanou"],["にんしき","認識","kesadaran/pemahaman","ninshiki"],["はっけん","発見","penemuan","hakken"],["かいはつ","開発","pengembangan","kaihatsu"],["じっし","実施","pelaksanaan","jisshi"]],"grammar":[{"pattern":"〜によると","meaning":"Menurut (sumber informasi)","example":"てんきよほうによると あした あめです。","translation":"Menurut ramalan cuaca, besok hujan.","note":"Untuk menyebutkan sumber berita."},{"pattern":"〜ば〜ほど","meaning":"Semakin... semakin...","example":"れんしゅうすればするほど うまくなります。","translation":"Semakin berlatih, semakin mahir.","note":"Dua kata kerja sama dengan bentuk -ba dan biasa."},{"pattern":"〜たびに","meaning":"Setiap kali","example":"にほんに いくたびに おみやげを かいます。","translation":"Setiap kali ke Jepang, beli oleh-oleh.","note":"Kata kerja kamus / kata benda + たびに."},{"pattern":"〜おかげで / 〜せいで","meaning":"Berkat (positif) / Karena (negatif)","example":"せんせいの おかげで ごうかくしました。","translation":"Berkat guru, saya lulus.","note":"おかげで = sebab positif; せいで = sebab negatif."},{"pattern":"〜ことになる / 〜ことにする","meaning":"Diputuskan (luar) / Memutuskan (sendiri)","example":"てんきんすることになりました。","translation":"Sudah diputuskan saya akan dipindah tugas.","note":"ことになる: keputusan dari luar. ことにする: keputusan sendiri."},{"pattern":"〜わけではない","meaning":"Bukan berarti...","example":"たかいから いつも おいしいわけではない。","translation":"Mahal tidak berarti selalu enak.","note":"Menyangkal kesimpulan umum."},{"pattern":"〜際に","meaning":"Pada saat / ketika (formal)","example":"ごりようの さいには ちゅういください。","translation":"Harap perhatikan saat menggunakan.","note":"Lebih formal dari とき."},{"pattern":"〜にとって","meaning":"Bagi / menurut sudut pandang","example":"わたしにとって かぞくが いちばんです。","translation":"Bagi saya, keluarga adalah yang utama.","note":"Menunjukkan perspektif/penilaian seseorang."},{"pattern":"〜ようにする","meaning":"Berusaha untuk melakukan","example":"まいにち にほんごを よむようにしています。","translation":"Saya berusaha membaca bahasa Jepang setiap hari.","note":"Menyatakan upaya membangun kebiasaan."},{"pattern":"〜にしては","meaning":"Untuk ukuran... (tidak sesuai ekspektasi)","example":"はじめてにしては じょうずです。","translation":"Untuk pertama kali, sudah bagus.","note":"Kontras antara kondisi dan hasilnya."}]},"N2":{"title":"N2","subtitle":"Menengah Atas — Bahasa Formal & Abstrak","color":"#6B4E7A","kanjiCount":380,"kanji":[["存","SON/zon","ada; eksis","存在 (sonzai)"],["在","ZAI/あ","berada","存在 (sonzai)"],["概","GAI/おおむ","garis besar","概念 (gainen)"],["念","NEN","pikiran mendalam","概念 (gainen)"],["普","FU","umum; luas","普通 (futsuu)"],["遍","HEN","menyebar","普遍 (fuhen)"],["範","HAN","model; ruang lingkup","範囲 (han'i)"],["囲","I/かこ","mengelilingi","範囲 (han'i)"],["拒","KYO/こば","menolak","拒否 (kyohi)"],["否","HI/いな","tidak; sangkalan","拒否 (kyohi)"],["承","SHOU","menerima; menyetujui","承認 (shounin)"],["認","NIN/みと","mengakui","承認 (shounin)"],["陥","KAN/おちい","jatuh; terjebak","陥る (ochiiru)"],["促","SOKU/うなが","mendorong","促進 (sokushin)"],["進","SHIN/すす","maju","促進 (sokushin)"],["導","DOU/みちび","membimbing","指導 (shidou)"],["指","SHI/ゆび","jari; menunjuk","指導 (shidou)"],["訪","HOU/おとず","mengunjungi","訪問 (houmon)"],["問","MON/と","pertanyaan; masalah","訪問 (houmon)"],["留","RYUU/と","tinggal; menahan","留学 (ryuugaku)"],["隔","KAKU/へだ","memisahkan","隔離 (kakuri)"],["離","RI/はな","berpisah","隔離 (kakuri)"],["刻","KOKU/きざ","mengukir; waktu","深刻 (shinkoku)"],["深","SHIN/ふか","dalam; mendalam","深刻 (shinkoku)"],["値","CHI/ね","nilai; harga","価値 (kachi)"],["価","KA","harga; nilai","価値 (kachi)"],["観","KAN","pandangan; perspektif","価値観 (kachikan)"],["逆","GYAKU/さか","kebalikan","逆に (gyaku ni)"],["偏","HEN/かたよ","berat sebelah","偏見 (henken)"],["見","KEN/み","melihat; pandangan","偏見 (henken)"],["阻","SO/はば","menghalangi","阻止 (soshi)"],["止","SHI/と","berhenti","阻止 (soshi)"],["伴","HAN/ともな","mendampingi","伴う (tomonau)"],["連","REN/つら","rangkaian","連携 (renkei)"],["携","KEI/たずさ","menggandeng","連携 (renkei)"],["維","I","memelihara","維持 (iji)"],["持","JI/も","memegang","維持 (iji)"],["統","TOU/す","menyatukan","統合 (tougou)"],["合","GOU/あ","bergabung","統合 (tougou)"],["構","KOU/かま","struktur","構造 (kouzou)"],["造","ZOU/つく","membuat","構造 (kouzou)"],["築","CHIKU/きず","membangun","構築 (kouchiku)"],["基","KI/もと","dasar","基盤 (kiban)"],["盤","BAN","alas; papan","基盤 (kiban)"],["賢","KEN/かしこ","bijaksana","賢い (kashikoi)"],["慎","SHIN/つつし","hati-hati","慎重 (shinchyou)"],["重","JYUU/おも","berat; penting","慎重 (shinchou)"],["丁","TEI/CHOU","sopan; nomor","丁寧 (teinei)"],["寧","NEI","tenang; sopan","丁寧 (teinei)"]],"vocab":[["そんざい","存在","keberadaan","sonzai"],["がいねん","概念","konsep","gainen"],["ふへん","普遍","universal","fuhen"],["きはん","規範","norma","kihan"],["どうこう","動向","tren; gerakan","doukou"],["きょうかん","共感","empati","kyoukan"],["ろんり","論理","logika","ronri"],["こんきょ","根拠","landasan","konkyo"],["ぜんてい","前提","premis; prasyarat","zentei"],["とくてい","特定","spesifik","tokutei"],["こてい","固定","tetap; fiksasi","kotei"],["へんどう","変動","fluktuasi","hendou"],["じぞく","持続","keberlanjutan","jizoku"],["とうごう","統合","integrasi","tougou"],["こうそう","構想","gagasan besar","kousou"],["きてい","規定","peraturan","kitei"],["ほんしつ","本質","esensi","honshitsu"],["きょくたん","極端","ekstrem","kyokutan"],["きょひ","拒否","penolakan","kyohi"],["しょうだく","承諾","persetujuan","shoudaku"],["みとめる","認める","mengakui","mitomeru"],["したがう","従う","mengikuti","shitagau"],["さからう","逆らう","menentang","sakaraū"],["おちいる","陥る","terjebak (situasi buruk)","ochiiru"],["ともなう","伴う","disertai","tomonau"],["かたよる","偏る","berat sebelah","katayoru"],["うながす","促す","mendorong","unagasu"],["みちびく","導く","membimbing","michibiku"],["とどまる","留まる","bertahan; tetap","todomaru"],["へだてる","隔てる","memisahkan","hedateru"],["こころみる","試みる","mencoba","kokoromiru"],["おとずれる","訪れる","mengunjungi","otozureru"],["はかる","図る","merencanakan; berupaya","hakaru"],["ゆだねる","委ねる","menyerahkan","yudaneru"],["きざむ","刻む","mengukir; mencacah","kizamu"],["こだわる","拘る","terpaku; teguh","kodawaru"],["みなす","見なす","menganggap sebagai","minasu"],["もとめる","求める","mencari; meminta","motomeru"],["たずねる","尋ねる","menanyakan; mengunjungi","tazuneru"],["ほのめかす","仄めかす","mengisyaratkan","honomekasu"]],"grammar":[{"pattern":"〜にもかかわらず","meaning":"Meskipun / walaupun (kontras kuat, formal)","example":"あめにもかかわらず しあいは おこなわれた。","translation":"Meskipun hujan, pertandingan tetap berlangsung.","note":"Lebih formal dari のに."},{"pattern":"〜を通じて / 〜を通して","meaning":"Melalui (media/periode waktu)","example":"ネットを つうじて せかいと つながれる。","translation":"Melalui internet bisa terhubung ke dunia.","note":"通じて: hubungan abstrak; 通して: fisik/proses."},{"pattern":"〜にしたがって","meaning":"Sesuai dengan; seiring dengan","example":"きせつが かわるにしたがって しぜんも かわる。","translation":"Seiring musim berganti, alam pun berubah.","note":"Juga berarti 'mengikuti aturan'."},{"pattern":"〜ものの","meaning":"Walaupun... (diikuti kenyataan kontras, formal)","example":"べんきょうしたものの ごうかくできなかった。","translation":"Meski sudah belajar, tetap tidak lulus.","note":"Mirip のに tapi lebih formal/tulisan."},{"pattern":"〜上で","meaning":"Dalam proses / dalam rangka melakukan","example":"けいかくを すすめる うえで よさんが ひつようだ。","translation":"Dalam melaksanakan rencana, anggaran diperlukan.","note":"Kata kerja kamus + 上で."},{"pattern":"〜だけでなく〜も","meaning":"Tidak hanya... tetapi juga...","example":"かれは えいごだけでなく フランスごも はなせる。","translation":"Dia bisa tidak hanya bahasa Inggris tapi juga Prancis.","note":"Penekanan penambahan."},{"pattern":"〜恐れがある","meaning":"Ada kemungkinan/kekhawatiran (hal buruk)","example":"このちいきは こうずいの おそれがある。","translation":"Daerah ini berpotensi banjir.","note":"Digunakan untuk prediksi negatif formal."},{"pattern":"〜を契機に","meaning":"Dengan peristiwa ini sebagai titik awal","example":"このじけんを けいきに せいさくが かわった。","translation":"Dengan kejadian ini, kebijakan berubah.","note":"Sering di berita/tulisan formal."},{"pattern":"〜を踏まえて","meaning":"Berdasarkan; dengan mempertimbangkan","example":"じょうきょうを ふまえて けってい します。","translation":"Berdasarkan situasi, kami akan memutuskan.","note":"Umum di konteks bisnis."},{"pattern":"〜上に","meaning":"Selain itu; ditambah lagi (searah)","example":"このアパートは やすい うえに ひろい。","translation":"Apartemen ini selain murah juga luas.","note":"Berbeda dari のに (kontras): 上に menambah hal sejenis."}]},"N1":{"title":"N1","subtitle":"Mahir — Penguasaan Penuh Nuansa","color":"#8B3A2B","kanjiCount":600,"kanji":[["懸","KEN/か","menggantung; khawatir","懸念 (kenen)"],["念","NEN","pikiran kuat","懸念 (kenen)"],["審","SHIN","memeriksa; menilai","審査 (shinsa)"],["査","SA","memeriksa","審査 (shinsa)"],["培","BAI/つちか","memupuk; membina","培う (tsuchikau)"],["醸","JOU/かも","memfermentasi","醸成 (jousei)"],["成","SEI/な","membentuk","醸成 (jousei)"],["講","KOU","kuliah; mengambil tindakan","講じる (koujiru)"],["覆","FUKU/くつがえ","membalik; menggugurkan","覆す (kutsugaesu)"],["帯","TAI/お","membawa sifat","帯びる (obiru)"],["乏","BOU/とぼ","kekurangan","欠乏 (ketsubou)"],["欠","KETSU/か","kekurangan; absen","欠如 (ketsujo)"],["甚","JIN/はなはだ","sangat; berlebihan","甚だしい (hanahadashii)"],["著","CHO/いちじる","mencolok; karya tulis","著しい (ichijirushii)"],["蔓","MAN/つる","tanaman merambat","蔓延 (man'en)"],["延","EN/の","memanjang; menunda","蔓延 (man'en)"],["疎","SO/うと","jarang; tidak akrab","疎い (utoi)"],["煩","HAN/わずら","merepotkan","煩わしい (wazurawashii)"],["巧","KOU/たく","terampil; cerdik","巧妙 (koumyou)"],["妙","MYOU/たえ","luar biasa; aneh","巧妙 (koumyou)"],["希","KI/まれ","langka; harapan","希望 (kibou)"],["薄","HAKU/うす","tipis; lemah","希薄 (kihaku)"],["鮮","SEN/あざ","segar; jelas","鮮明 (senmei)"],["明","MEI/あか","jelas; terang","鮮明 (senmei)"],["漠","BAKU","luas; kabur","漠然 (bakuzen)"],["然","ZEN","begitulah; alami","漠然 (bakuzen)"],["振","SHIN/ふ","gerakan; getar","不振 (fushin)"],["不","FU","tidak; buruk","不振 (fushin)"],["打","DA/う","memukul; melakukan","打開 (dakai)"],["開","KAI/ひら","membuka","打開 (dakai)"],["復","FUKU/また","kembali; pulih","復興 (fukkou)"],["興","KOU/おこ","kebangkitan","復興 (fukkou)"],["緩","KAN/ゆる","lambat; longgar","緩和 (kanwa)"],["擁","YOU","memeluk; mendukung","擁護 (yougo)"],["護","GO/まも","melindungi","擁護 (yougo)"],["与","YO/あた","memberi","関与 (kan'yo)"],["締","TEI/し","mengikat; menutup","締結 (teiketsu)"],["結","KETSU/むす","mengikat; menyimpulkan","締結 (teiketsu)"],["瞬","SHUN/またた","sekejap","瞬間 (shunkan)"],["駆","KU/か","berlari; mengoperasikan","駆使 (kushi)"],["使","SHI/つか","menggunakan","駆使 (kushi)"],["凡","BON/おおよ","biasa; umum","平凡 (heibon)"],["卓","TAKU","meja; unggul","卓越 (takuetsu)"],["越","ETSU/こ","melampaui","卓越 (takuetsu)"],["蓄","CHIKU/たくわ","menyimpan","蓄積 (chikuseki)"],["積","SEKI/つ","menumpuk","蓄積 (chikuseki)"],["緻","CHI","rapi; teliti","緻密 (chimitsu)"],["密","MITSU","rapat; rahasia","緻密 (chimitsu)"]],"vocab":[["けねん","懸念","kecemasan/kekhawatiran","kenen"],["ふしん","不審","kecurigaan","fushin"],["いとなむ","営む","menjalankan (usaha)","itonamu"],["つちかう","培う","memupuk/membina","tsuchikau"],["こうじる","講じる","mengambil (tindakan)","koujiru"],["はかる","図る","merencanakan","hakaru"],["くつがえす","覆す","membalikkan","kutsugaesu"],["おびる","帯びる","membawa (sifat)","obiru"],["きたす","来す","mengakibatkan","kitasu"],["とぼしい","乏しい","kekurangan","toboshii"],["はなはだしい","甚だしい","sangat (negatif)","hanahadashii"],["いちじるしい","著しい","mencolok","ichijirushii"],["はびこる","蔓延る","merajalela","habikoru"],["うとい","疎い","kurang familiar","utoi"],["わずらわしい","煩わしい","merepotkan","wazurawashii"],["こうみょう","巧妙","cerdik/licik","koumyou"],["やむをえない","やむを得ない","tak terhindarkan","yamu wo enai"],["きはく","希薄","tipis/lemah","kihaku"],["せんめい","鮮明","jelas/tajam","senmei"],["ばくぜん","漠然","kabur/tidak jelas","bakuzen"],["きょうこう","強行","memaksakan","kyoukou"],["だかい","打開","membuka jalan","dakai"],["ふっき","復帰","kembali ke posisi semula","fukki"],["ふっこう","復興","kebangkitan/rekonstruksi","fukkou"],["かんわ","緩和","pelonggaran","kanwa"],["きょうか","強化","penguatan","kyouka"],["ようご","擁護","perlindungan/pembelaan","yougo"],["かんよ","関与","keterlibatan","kan'yo"],["せいじゅく","成熟","kematangan","seijuku"],["よぎなく","余儀なく","terpaksa","yoginaku"],["あからさま","あからさま","terang-terangan","akarasama"],["ぞんざい","ぞんざい","sembarangan","zonzai"],["こだわり","拘り","keteguhan; obsesi","kodawari"],["ふしょうぶしょう","不承不承","terpaksa","fushobusho"],["ちみつ","緻密","teliti; rinci","chimitsu"],["しゅうれん","習練","pelatihan intensif","shuuren"],["たくえつ","卓越","keunggulan","takuetsu"],["ちくせき","蓄積","akumulasi","chikuseki"],["しゅんかん","瞬間","sekejap/momen","shunkan"],["くし","駆使","memanfaatkan sepenuhnya","kushi"]],"grammar":[{"pattern":"〜極まる / 〜極まりない","meaning":"Sangat ekstrem (penekanan kuat, sastra)","example":"かれの たいどは しつれい きわまりない。","translation":"Sikapnya sangat-sangat tidak sopan.","note":"Digunakan untuk penekanan kuat dalam bahasa sastra."},{"pattern":"〜を余儀なくされる","meaning":"Terpaksa melakukan (tanpa pilihan)","example":"こうじょうは へいさを よぎなくされた。","translation":"Pabrik terpaksa ditutup.","note":"Pasif formal, sering di berita."},{"pattern":"〜ないまでも","meaning":"Meski tidak sampai..., setidaknya...","example":"かんぺきとは いわないまでも まあまあだ。","translation":"Meski tak sempurna, cukup baik.","note":"Menunjukkan standar minimal yang tercapai."},{"pattern":"〜きらいがある","meaning":"Punya kecenderungan (negatif)","example":"かれは はなしを おおげさに する きらいがある。","translation":"Dia cenderung melebih-lebihkan cerita.","note":"Kritik halus terhadap kebiasaan seseorang."},{"pattern":"〜ずにはおかない","meaning":"Pasti menimbulkan reaksi (tak terhindarkan)","example":"えんぎが かんどうさせずにはおかない。","translation":"Aktingnya pasti akan menggugah perasaan.","note":"Menyatakan hasil tak terhindarkan."},{"pattern":"〜んばかりに","meaning":"Seolah-olah hampir melakukan","example":"なみだを こぼさんばかりに よろこんだ。","translation":"Bersukacita seolah hampir menangis.","note":"Bentuk archaik ん dari ない."},{"pattern":"〜ともなく","meaning":"Entah... (tanpa kepastian arah/objek)","example":"どこからともなく いいにおいが してきた。","translation":"Entah dari mana, datang bau harum.","note":"Sering dengan kata tanya: どこ, いつ, だれ."},{"pattern":"〜たる (者)","meaning":"Yang seharusnya; yang berpredikat sebagai","example":"リーダーたるもの せきにんを もつべきだ。","translation":"Sebagai seorang pemimpin, harus bertanggung jawab.","note":"Bahasa sastra; menunjukkan kualifikasi/peran."},{"pattern":"〜にあって","meaning":"Dalam keadaan / situasi (formal tinggi)","example":"こんなんな じょうきょうにあって かれは おちついていた。","translation":"Dalam situasi sulit itu, dia tetap tenang.","note":"Sangat formal, tulisan akademik/sastra."},{"pattern":"〜をもって","meaning":"Dengan ini; melalui (formal resmi)","example":"ほんじつをもって ほんてんは へいてんします。","translation":"Dengan ini/mulai hari ini, toko kami tutup.","note":"Sering di pengumuman resmi, dokumen formal."}]}},"jftData":{"overview":{"title":"JFT-Basic","fullName":"Japanese Foundation Test for Basic Communication Ability","desc":"Tes kemampuan bahasa Jepang dasar untuk pekerja Program Specified Skilled Worker (SSW/SSP) dan Tokutei Ginou. Diselenggarakan oleh Japan Foundation. Level setara CEFR A1–A2.","sections":["Moji (文字)","Goi (語彙)","Kaiwa-Bunpou (会話・文法)","Listening"],"passingNote":"Skor total maksimum: A2 (grade tertinggi). Tidak ada passing score tunggal — dinilai per seksi."},"categories":{"daily":{"title":"日常会話 — Percakapan Harian","icon":"🗣️","items":[{"jp":"おはようございます。","romaji":"Ohayou gozaimasu.","id":"Selamat pagi.","ctx":"Sapaan pagi hari, formal."},{"jp":"ありがとうございました。","romaji":"Arigatou gozaimashita.","id":"Terima kasih (sudah dilakukan).","ctx":"Sopan, setelah menerima bantuan."},{"jp":"すみません、〜はどこですか。","romaji":"Sumimasen, ~ wa doko desu ka.","id":"Permisi, di mana ~?","ctx":"Menanyakan lokasi."},{"jp":"トイレはどこですか。","romaji":"Toire wa doko desu ka.","id":"Di mana kamar mandi?","ctx":"Paling sering di tempat kerja/umum."},{"jp":"わかりません。もう一度言ってください。","romaji":"Wakarimasen. Mou ichido itte kudasai.","id":"Saya tidak mengerti. Tolong ucapkan lagi.","ctx":"Meminta pengulangan."},{"jp":"日本語が少しわかります。","romaji":"Nihongo ga sukoshi wakarimasu.","id":"Saya sedikit mengerti bahasa Jepang.","ctx":"Menjelaskan kemampuan diri."},{"jp":"〜をください。","romaji":"~ o kudasai.","id":"Tolong berikan ~.","ctx":"Meminta sesuatu."},{"jp":"これはいくらですか。","romaji":"Kore wa ikura desu ka.","id":"Ini berapa harganya?","ctx":"Di toko/kasir."},{"jp":"〜まで行ってください。","romaji":"~ made itte kudasai.","id":"Tolong antar sampai ~.","ctx":"Di taksi/angkutan."},{"jp":"ちょっと待ってください。","romaji":"Chotto matte kudasai.","id":"Tolong tunggu sebentar.","ctx":"Umum di semua situasi."}]},"work":{"title":"職場 — Di Tempat Kerja","icon":"🏭","items":[{"jp":"はい、わかりました。","romaji":"Hai, wakarimashita.","id":"Ya, saya mengerti.","ctx":"Konfirmasi instruksi dari atasan."},{"jp":"〜はどうやりますか。","romaji":"~ wa dou yarimasu ka.","id":"Bagaimana cara melakukan ~?","ctx":"Bertanya cara kerja."},{"jp":"これで合っていますか。","romaji":"Kore de atte imasu ka.","id":"Apakah ini sudah benar?","ctx":"Meminta konfirmasi pekerjaan."},{"jp":"少し手伝ってもらえますか。","romaji":"Sukoshi tetsudatte moraemasu ka.","id":"Bisakah bantu saya sebentar?","ctx":"Meminta bantuan dengan sopan."},{"jp":"今日は何をしますか。","romaji":"Kyou wa nani o shimasu ka.","id":"Hari ini saya melakukan apa?","ctx":"Menanyakan tugas harian."},{"jp":"終わりました。次は何をしますか。","romaji":"Owarimashita. Tsugi wa nani o shimasu ka.","id":"Sudah selesai. Selanjutnya apa?","ctx":"Laporan selesai kerja."},{"jp":"体の調子が悪いです。","romaji":"Karada no choushi ga warui desu.","id":"Kondisi badan saya tidak baik.","ctx":"Memberitahu kondisi kesehatan."},{"jp":"休んでもいいですか。","romaji":"Yasunde mo ii desu ka.","id":"Bolehkah saya istirahat?","ctx":"Meminta izin."},{"jp":"給料はいつですか。","romaji":"Kyuuryou wa itsu desu ka.","id":"Kapan gaji dibayarkan?","ctx":"Menanyakan jadwal gaji."},{"jp":"交通費は出ますか。","romaji":"Koutsuu-hi wa demasu ka.","id":"Apakah biaya transportasi diganti?","ctx":"Fasilitas kerja."}]},"life":{"title":"生活 — Kehidupan Sehari-hari","icon":"🏠","items":[{"jp":"ゴミはどこに出しますか。","romaji":"Gomi wa doko ni dashimasu ka.","id":"Di mana membuang sampah?","ctx":"Peraturan pemukiman Jepang."},{"jp":"燃えるゴミは何曜日ですか。","romaji":"Moeru gomi wa nan-youbi desu ka.","id":"Sampah organik hari apa?","ctx":"Jadwal pembuangan sampah."},{"jp":"この薬はどう飲みますか。","romaji":"Kono kusuri wa dou nomimasu ka.","id":"Bagaimana cara minum obat ini?","ctx":"Di apotek/klinik."},{"jp":"銀行口座を作りたいです。","romaji":"Ginkou kouza o tsukuritai desu.","id":"Saya ingin membuat rekening bank.","ctx":"Keperluan administratif."},{"jp":"住民票が必要です。","romaji":"Juuminhyou ga hitsuyou desu.","id":"Saya butuh surat keterangan domisili.","ctx":"Administrasi kependudukan."},{"jp":"〜行きのバスはどれですか。","romaji":"~ yuki no basu wa dore desu ka.","id":"Bus jurusan ~ yang mana?","ctx":"Naik bus/angkutan umum."},{"jp":"定期を買いたいです。","romaji":"Teiki o kaitai desu.","id":"Saya ingin beli tiket langganan.","ctx":"Commuter pass."},{"jp":"近くにスーパーはありますか。","romaji":"Chikaku ni suupaa wa arimasu ka.","id":"Apakah ada supermarket di dekat sini?","ctx":"Bertanya lokasi fasilitas."},{"jp":"部屋を探しています。","romaji":"Heya o sagashite imasu.","id":"Saya sedang mencari kamar.","ctx":"Mencari tempat tinggal."},{"jp":"契約書にサインしてください。","romaji":"Keiyakusho ni sain shite kudasai.","id":"Tolong tanda tangani kontraknya.","ctx":"Penandatanganan kontrak."}]},"emergency":{"title":"緊急 — Keadaan Darurat","icon":"🆘","items":[{"jp":"助けてください！","romaji":"Tasukete kudasai!","id":"Tolong bantu saya!","ctx":"Darurat umum."},{"jp":"救急車を呼んでください。","romaji":"Kyuukyuusha o yonde kudasai.","id":"Tolong panggil ambulans.","ctx":"Darurat medis. Nomor: 119."},{"jp":"警察を呼んでください。","romaji":"Keisatsu o yonde kudasai.","id":"Tolong panggil polisi.","ctx":"Darurat keamanan. Nomor: 110."},{"jp":"火事です！","romaji":"Kaji desu!","id":"Kebakaran!","ctx":"Darurat kebakaran. Nomor: 119."},{"jp":"ここが痛いです。","romaji":"Koko ga itai desu.","id":"Di sini sakit.","ctx":"Di klinik/RS."},{"jp":"アレルギーがあります。","romaji":"Arerugii ga arimasu.","id":"Saya punya alergi.","ctx":"Informasi medis penting."},{"jp":"保険証を持っています。","romaji":"Hokenshou o motte imasu.","id":"Saya punya kartu asuransi.","ctx":"Di klinik/RS."},{"jp":"財布をなくしました。","romaji":"Saifu o nakushimashita.","id":"Dompet saya hilang.","ctx":"Melaporkan kehilangan."},{"jp":"地震のとき、まず机の下に隠れてください。","romaji":"Jishin no toki, mazu tsukue no shita ni kakurete kudasai.","id":"Saat gempa, pertama sembunyi di bawah meja.","ctx":"Prosedur darurat gempa."},{"jp":"ここは禁煙です。","romaji":"Koko wa kin'en desu.","id":"Di sini dilarang merokok.","ctx":"Tanda larangan umum."}]}}},"listeningLevels":{"L7":{"title":"L7","subtitle":"Salam & Frasa Harian","color":"#3B6B8A","desc":"Memahami sapaan, perkenalan diri, dan ungkapan dasar dalam percakapan sangat lambat dan jelas.","points":["Pengenalan pola intonasi dasar bahasa Jepang","Membedakan bunyi vokal panjang dan pendek (おばさん vs おばあさん)","Mengenali nada formal (〜ます/〜です) vs informal"],"phrases":[["おはようございます","Selamat pagi","Ohayou gozaimasu","formal"],["こんにちは","Selamat siang","Konnichiwa","umum"],["こんばんは","Selamat malam","Konbanwa","umum"],["はじめまして","Senang berkenalan","Hajimemashite","perkenalan"],["どうぞよろしくおねがいします","Mohon bantuannya","Douzo yoroshiku onegaishimasu","formal"],["ありがとうございます","Terima kasih","Arigatou gozaimasu","formal"],["すみません","Maaf / Permisi","Sumimasen","umum"],["だいじょうぶです","Tidak apa-apa","Daijoubu desu","umum"],["おげんきですか","Apa kabar?","O-genki desu ka","sopan"],["さようなら","Selamat tinggal","Sayounara","perpisahan"],["おやすみなさい","Selamat tidur","Oyasumi nasai","malam"],["いただきます","Selamat makan (sebelum makan)","Itadakimasu","budaya"]]},"L6":{"title":"L6","subtitle":"Aktivitas & Rutinitas Harian","color":"#4A8A6B","desc":"Mendengarkan deskripsi kegiatan rutin: bangun tidur, sekolah/kerja, makan, transportasi dalam tempo lambat.","points":["Mengenali partikel waktu (に, から, まで) dalam ucapan","Memahami urutan kegiatan melalui te-form (〜て、〜て)","Latihan menangkap angka waktu dan nama hari"],"phrases":[["まいあさ ろくじに おきます","Setiap pagi bangun jam 6","Mai asa rokuji ni okimasu","rutinitas"],["でんしゃで かいしゃに いきます","Pergi ke kantor dengan kereta","Densha de kaisha ni ikimasu","transportasi"],["ひるごはんを たべます","Makan siang","Hirugohan o tabemasu","makanan"],["うちに かえって、しゅくだいを します","Pulang lalu mengerjakan tugas","Uchi ni kaette, shukudai o shimasu","kegiatan"],["よる じゅうじに ねます","Tidur jam 10 malam","Yoru juuji ni nemasu","rutinitas"],["きょうは あめが ふっています","Hari ini hujan","Kyou wa ame ga futte imasu","cuaca"],["バスが おくれています","Bus terlambat","Basu ga okurete imasu","transportasi"],["すこし てつだって もらえますか","Bisakah bantu saya sebentar?","Sukoshi tetsudatte moraemasu ka","permintaan"],["どようびは いつも うちに います","Sabtu selalu di rumah","Doyoubi wa itsumo uchi ni imasu","rutinitas"],["かいものに いきましょう","Ayo pergi belanja","Kaimono ni ikimashou","ajakan"],["じかんが ありません","Tidak ada waktu","Jikan ga arimasen","situasi"],["ごじに おわります","Selesai jam 5","Goji ni owarimasu","jadwal"]]},"L5":{"title":"L5","subtitle":"Transaksi & Tempat Umum","color":"#6B8A3B","desc":"Memahami dialog di toko, restoran, stasiun, klinik, dan kantor pos dalam tempo normal.","points":["Mengenali kosakata khas pelayanan (敬語 dasar: いらっしゃいませ)","Menangkap angka dan satuan mata uang dengan cepat","Memahami instruksi satu langkah dari petugas"],"phrases":[["いらっしゃいませ","Selamat datang (di toko)","Irasshaimase","pelayanan"],["これは いくらですか","Berapa harganya?","Kore wa ikura desu ka","belanja"],["カードで はらえますか","Bisakah bayar dengan kartu?","Kaado de haraemasu ka","pembayaran"],["レシートを ください","Tolong bon-nya","Reshiito o kudasai","belanja"],["この でんしゃは しんじゅくに とまりますか","Kereta ini berhenti di Shinjuku?","Kono densha wa Shinjuku ni tomarimasu ka","transportasi"],["つぎの えきで おりてください","Turun di stasiun berikutnya","Tsugi no eki de orite kudasai","transportasi"],["もうしわけありません、うりきれです","Maaf, sudah habis terjual","Moushiwake arimasen, urikire desu","toko"],["よやくを したいのですが","Saya ingin membuat reservasi","Yoyaku o shitai no desu ga","restoran/hotel"],["おまたせしました","Maaf sudah menunggu","Omatase shimashita","pelayanan"],["こちらへ どうぞ","Silakan ke sini","Kochira e douzo","pelayanan"],["ただいま まんせきです","Saat ini penuh","Tadaima manseki desu","restoran/parkir"],["しょうしょう おまちください","Mohon tunggu sebentar","Shoushou omachi kudasai","pelayanan"]]},"L4":{"title":"L4","subtitle":"Cerita & Pengalaman","color":"#8A6B3B","desc":"Mendengarkan narasi pengalaman pribadi, rencana masa depan, dan perbandingan dalam tempo natural.","points":["Memahami referensi waktu lampau (〜ました) dan mendatang (〜つもり/〜よてい)","Mengenali penanda alasan (から、ので) dalam kalimat panjang","Menangkap perbandingan (〜より、〜ほうが) dan preferensi"],"phrases":[["せんしゅう、にほんに いってきました","Minggu lalu pergi ke Jepang","Senshuu, Nihon ni itte kimashita","pengalaman"],["はじめて さしみを たべてみました","Mencoba sashimi untuk pertama kali","Hajimete sashimi o tabete mimashita","pengalaman"],["おもったより むずかしかったです","Lebih sulit dari yang saya kira","Omotta yori muzukashikatta desu","evaluasi"],["らいげつ、ひっこす よていです","Bulan depan berencana pindah rumah","Raigetsu, hikkosu yotei desu","rencana"],["もし じかんが あれば、いっしょに いきませんか","Kalau ada waktu, mau pergi bersama?","Moshi jikan ga areba, isshoni ikimasen ka","ajakan"],["まえより じょうずに なりました","Sudah lebih mahir dari sebelumnya","Mae yori jouzu ni narimashita","perbandingan"],["じつは、すこし しんぱいです","Sebenarnya, agak khawatir","Jitsu wa, sukoshi shinpai desu","perasaan"],["どうして やめたんですか","Kenapa kamu berhenti?","Doushite yametan desu ka","percakapan"],["〜が きっかけで はじめました","Karena ~ saya mulai melakukannya","~ ga kikkake de hajimemashita","alasan"],["けっか、うまくいきました","Hasilnya berjalan dengan baik","Kekka, umaku ikimashita","hasil"],["ちょっと むり かもしれません","Mungkin agak tidak bisa","Chotto muri kamo shiremasen","keraguan"],["またいつか あいましょう","Semoga bisa bertemu lagi suatu saat","Mata itsuka aimashou","perpisahan"]]},"L3":{"title":"L3","subtitle":"Diskusi & Pendapat","color":"#8A3B6B","desc":"Mendengarkan opini, argumentasi, dan diskusi topik sosial dengan tempo percakapan normal.","points":["Mengenali penanda opini (〜とおもう、〜とかんがえる、〜のではないか)","Memahami struktur argumen-balasan dalam diskusi dua pihak","Menangkap kata penghubung kompleks (それでも、けっきょく、一方で)"],"phrases":[["わたしは そうおもいません","Saya tidak berpikir begitu","Watashi wa sou omoimasen","pendapat"],["たしかに そうですが、でも〜","Memang benar, tapi...","Tashika ni sou desu ga, demo~","kontra"],["それには さんせいです","Saya setuju dengan itu","Sore ni wa sansei desu","setuju"],["はんたいの いけんも あると おもいます","Ada juga pendapat yang berlawanan","Hantai no iken mo aru to omoimasu","pertimbangan"],["ばあいに よって ちがいます","Berbeda-beda tergantung kasusnya","Baai ni yotte chigaimasu","relativitas"],["一方で、〜という みかたも あります","Di sisi lain, ada juga pandangan bahwa~","Ippou de, ~ to iu mikata mo arimasu","dua sisi"],["それは むずかしい もんだいですね","Itu memang masalah yang sulit","Sore wa muzukashii mondai desu ne","simpati"],["りゆうは いくつか あります","Ada beberapa alasan","Riyuu wa ikutsuka arimasu","struktur argumen"],["けつろんとして〜とおもいます","Sebagai kesimpulan, saya pikir~","Ketsuron to shite ~ to omoimasu","kesimpulan"],["もっと くわしく せつめいしてください","Tolong jelaskan lebih rinci","Motto kuwashiku setsumei shite kudasai","klarifikasi"],["なぜなら〜からです","Karena alasannya adalah~","Nazenara ~ kara desu","alasan formal"],["いずれにしても〜","Bagaimanapun juga~","Izure ni shite mo~","penutup argumen"]]},"L2":{"title":"L2","subtitle":"Berita & Bahasa Formal","color":"#6B3B8A","desc":"Mendengarkan siaran berita, pengumuman resmi, dan presentasi formal dengan kecepatan asli.","points":["Memahami bahasa pasif formal (〜されています、〜られています)","Menangkap struktur kalimat panjang bercabang dalam berita","Mengenali ungkapan kutipan tidak langsung (〜によりますと、〜とのことです)"],"phrases":[["きょうの ニュースを おしらせします","Berikut berita hari ini","Kyou no nyuusu o oshirase shimasu","pembuka berita"],["せいふは あらたな せいさくを はっぴょうしました","Pemerintah mengumumkan kebijakan baru","Seifu wa arata na seisaku o happyou shimashita","berita"],["かんけいしゃに よりますと","Menurut pihak terkait","Kankeisha ni yorimasu to","kutipan"],["こんごの どうこうに ちゅうもくが あつまっています","Tren ke depan menjadi sorotan","Kongo no doukou ni chuumoku ga atsumatte imasu","analisis"],["たいさくが きゅうむと されています","Penanganan dianggap mendesak","Taisaku ga kyuumu to sarete imasu","penilaian"],["ぎろんが つづいています","Diskusi masih terus berlanjut","Giron ga tsuzuite imasu","situasi"],["くわしくは ウェブサイトを ごらんください","Untuk info lengkap, lihat website","Kuwashiku wa uebusaito o goran kudasai","instruksi"],["いじょう、ほうこくを おわります","Sekian laporan ini","Ijou, houkoku o owarimasu","penutup"],["〜によって ひきおこされた","Disebabkan oleh~","~ ni yotte hikiokosareta","kausalitas pasif"],["〜にとって おおきな かだいとなっています","Menjadi tantangan besar bagi~","~ ni totte ooki na kadai to natte imasu","evaluasi"],["とうきょくは けいかいを よびかけています","Pihak berwenang mengimbau kewaspadaan","Toukyoku wa keikai o yobikakete imasu","peringatan"],["ひきつづき ちゅういが ひつようです","Kewaspadaan terus diperlukan","Hikitsuzuki chuui ga hitsuyou desu","himbauan"]]},"L1":{"title":"L1","subtitle":"Percakapan Natural & Idiomatis","color":"#8A3B3B","desc":"Memahami percakapan native cepat, idiom, sarkasme, nuansa emosional halus, dan variasi dialek.","points":["Memahami ellipsis dan singkatan kasual (じゃない→じゃん, 〜ている→〜てる)","Mengenali nuansa nada bicara: malu, sarkasme, keakraban, ironi","Menangkap idiom dan slang dalam percakapan native speed"],"phrases":[["それ、まじで？","Itu serius?","Sore, maji de?","slang"],["なんか、もやもやする","Entah kenapa perasaanku nggak enak","Nanka, moyamoya suru","idiom perasaan"],["まあ、しかたないか","Ya, mau gimana lagi","Maa, shikatanai ka","pasrah"],["びみょうだね","Agak ambigu/kurang pas ya","Bimyou da ne","nuansa"],["なんとかなるよ","Pasti ada jalan kok","Nantoka naru yo","optimisme"],["それは さすがに ないわ","Itu sih kelewatan","Sore wa sasugani nai wa","kritis"],["うける！","Lucu banget! / Haha!","Ukeru!","slang komedi"],["やっぱりね","Sudah kuduga","Yappari ne","konfirmasi intuisi"],["空気読めよ","Baca situasi dong!","Kuuki yome yo","idiom sosial"],["根回しが必要だよ","Perlu lobi dulu","Nemawashi ga hitsuyou da yo","idiom kerja"],["腹を割って話しましょう","Ayo bicara jujur (dari hati)","Hara o watte hanashimashou","ungkapan dewasa"],["気が置けない友達","Teman yang bisa dipercaya sepenuhnya","Ki ga okenai tomodachi","idiom persahabatan"]]}}};
const HIRAGANA = DATA.hiraganaData;
const KATAKANA = DATA.katakanaData;
const JLPT_DATA = DATA.jlptData;
const JFT_DATA = DATA.jftData;
const LISTENING_DATA = DATA.listeningLevels;

// ============================================================
// 稽古帖 Keikochou - App Logic v2
// ============================================================

const JLPT_ORDER = ["N5","N4","N3","N2","N1"];
const LISTENING_ORDER = ["L7","L6","L5","L4","L3","L2","L1"];
const JFT_ORDER = ["daily","work","life","emergency"];

const STORAGE_KEY = "keikochou_progress_v1";
const SERVER_TIME_API = "https://worldtimeapi.org/api/ip";
const DEFAULT_THEME = "light";
const DEFAULT_LANG = "id";
const MASTERY_MAX = 5;

const STRINGS = {
  id: {
    masteredLabel: "dikuasai",
    missionHeader: "Misi Harian",
    streakLabel: "Streak",
    currencyLabel: "Koin",
    reviewButton: "Review belum dikuasai",
    languageButton: "EN/ID",
    themeButton: "Tema",
    earnedXp: "XP diperoleh",
    level: "Level",
    autoMastered: "Progress mastery diperbarui lewat kuis",
    congratulations: "Selamat!",
    currentMission: "Misi saat ini",
    trackingDay: "Hari ini",
    noItemsToReview: "Tidak ada item review, semua sudah dikuasai!",
    buyFreeze: "Beli Freeze Streak (20 Koin)",
    freezeTokenLabel: "Token Freeze",
    freezeAvailable: "Freeze tersedia",
    shopTitle: "Shop",
    shopNote: "Freeze dibeli sebelum hari terlewat dan otomatis dipakai saat kamu melewatkan 1 hari.",
    settingsTitle: "Pengaturan",
    settingsProgressTitle: "Progres",
    settingsLanguageTitle: "Bahasa",
    settingsLanguageLabel: "Pilih Bahasa",
    settingsThemeTitle: "Tema",
    settingsActionTitle: "Aksi",
    missionDone: "Selesai",
    levelLabel: "Level",
    needFreezeCoins: "Butuh 20 Koin untuk beli Freeze Streak",
    freezeSaved: "Freeze dipakai, streak tetap aman.",
    streakBroken: "Streak hangus. Selesaikan quiz atau review untuk mulai lagi.",
    streakAdded: "Streak bertambah!",
    quizResultTitle: "Hasil Kuis",
    retryButton: "Coba Lagi",
    finishButton: "Selesai",
    perfectQuiz: "Sempurna! Kamu menguasai materi ini.",
    greatQuiz: "Bagus sekali! Hampir sempurna.",
    goodQuiz: "Cukup baik, terus berlatih ya!",
    retryQuizMessage: "Jangan menyerah, ulangi materinya lagi.",
    viewButton: "Lihat",
    masterButton: "Kuasai"
  },
  en: {
    masteredLabel: "mastered",
    missionHeader: "Daily Mission",
    streakLabel: "Streak",
    currencyLabel: "Coins",
    reviewButton: "Review unmastered items",
    languageButton: "EN/ID",
    themeButton: "Theme",
    earnedXp: "XP earned",
    level: "Level",
    autoMastered: "Mastery progress updated from quiz",
    congratulations: "Nice!",
    currentMission: "Current mission",
    trackingDay: "Today",
    noItemsToReview: "No items to review — all mastered!",
    buyFreeze: "Buy Freeze Streak (20 Coins)",
    freezeTokenLabel: "Freeze Tokens",
    freezeAvailable: "Freeze available",
    shopTitle: "Shop",
    shopNote: "Freeze must be bought before the missed day and is used automatically when you miss 1 day.",
    settingsTitle: "Settings",
    settingsProgressTitle: "Progress",
    settingsLanguageTitle: "Language",
    settingsLanguageLabel: "Choose Language",
    settingsThemeTitle: "Theme",
    settingsActionTitle: "Actions",
    missionDone: "Completed",
    levelLabel: "Level",
    needFreezeCoins: "You need 20 Coins to buy Freeze Streak",
    freezeSaved: "Freeze used, streak protected.",
    streakBroken: "Streak reset. Complete a quiz or review to start again.",
    streakAdded: "Streak increased!",
    quizResultTitle: "Quiz Result",
    retryButton: "Try Again",
    finishButton: "Finish",
    perfectQuiz: "Perfect! You mastered this material.",
    greatQuiz: "Great work! Almost perfect.",
    goodQuiz: "Pretty good, keep practicing!",
    retryQuizMessage: "Do not give up, review the material again.",
    viewButton: "View",
    masterButton: "Master"
  }
};

// ---------- Storage layer with graceful fallback ----------
const StorageLayer = (function(){
  let available = false;
  try{
    const testKey = "__keikochou_test__";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    available = true;
  }catch(e){
    available = false;
  }

  let memoryStore = null;

  function load(){
    if (available){
      try{
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      }catch(e){ /* fall through */ }
    }
    return memoryStore;
  }

  function save(data){
    if (available){
      try{
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return;
      }catch(e){ /* fall through to memory */ }
    }
    memoryStore = data;
  }

  return { isAvailable: () => available, load, save };
})();

// State
const state = {
  currentTrack: "kana",
  currentKanaType: null,     // 'hiragana' | 'katakana'
  currentJLPTLevel: null,
  currentJLPTSubtab: "vocab",
  currentJFTCategory: null,
  currentListeningLevel: null,
  view: "overview",
  speed: 0.85,
  shadowMode: false,
  masteredVocab: new Set(),
  masteredKanji: new Set(),
  masteredPhrases: new Set(),
  masteredKana: new Set(),
  masteryProgress: {},
  quiz: { track:null, level:null, questions:[], currentIndex:0, score:0, answered:false, completed:false },
  modalContext: null, // { kind: 'kanji'|'kana', key, level, idx }
  language: DEFAULT_LANG,
  theme: DEFAULT_THEME,
  streakCount: 0,
  lastActiveDay: null,
  lastStreakDay: null,
  missionDay: null,
  currency: 0,
  experience: 0,
  level: 1,
  freezeTokens: 0,
  freezeTokenDates: [],
  dailyMissions: [
    { id: "quiz", label: "Selesaikan 1 kuis", target: 1, progress: 0, reward: 15, done:false },
    { id: "review", label: "Review 3 item belum dikuasai", target: 3, progress: 0, reward: 20, done:false }
  ],
  reviewQueue: []
};

// ---------- Persistence ----------
function loadProgress(){
  const saved = StorageLayer.load();
  if (saved){
    if (Array.isArray(saved.masteredVocab)) state.masteredVocab = new Set(saved.masteredVocab);
    if (Array.isArray(saved.masteredKanji)) state.masteredKanji = new Set(saved.masteredKanji);
    if (Array.isArray(saved.masteredPhrases)) state.masteredPhrases = new Set(saved.masteredPhrases);
    if (Array.isArray(saved.masteredKana)) state.masteredKana = new Set(saved.masteredKana);
    if (saved.masteryProgress && typeof saved.masteryProgress === 'object') state.masteryProgress = saved.masteryProgress;
    if (saved.language) state.language = saved.language;
    if (saved.theme) state.theme = saved.theme;
    if (typeof saved.streakCount === 'number') state.streakCount = saved.streakCount;
    if (saved.lastActiveDay) state.lastActiveDay = saved.lastActiveDay;
    if (saved.lastStreakDay) state.lastStreakDay = saved.lastStreakDay;
    else if (saved.lastActiveDay) state.lastStreakDay = saved.lastActiveDay;
    if (saved.missionDay) state.missionDay = saved.missionDay;
    if (typeof saved.currency === 'number') state.currency = saved.currency;
    if (typeof saved.experience === 'number') state.experience = saved.experience;
    if (typeof saved.level === 'number') state.level = saved.level;
    if (typeof saved.freezeTokens === 'number') state.freezeTokens = saved.freezeTokens;
    if (Array.isArray(saved.freezeTokenDates)) state.freezeTokenDates = saved.freezeTokenDates;
    else if (state.freezeTokens > 0) state.freezeTokenDates = Array(state.freezeTokens).fill(null);
    state.freezeTokens = state.freezeTokenDates.length;
    if (Array.isArray(saved.dailyMissions)) state.dailyMissions = saved.dailyMissions;
  }
  migrateMasteredSetsToProgress();
}

function persistProgress(){
  StorageLayer.save({
    masteredVocab: [...state.masteredVocab],
    masteredKanji: [...state.masteredKanji],
    masteredPhrases: [...state.masteredPhrases],
    masteredKana: [...state.masteredKana],
    masteryProgress: state.masteryProgress,
    language: state.language,
    theme: state.theme,
    streakCount: state.streakCount,
    lastActiveDay: state.lastActiveDay,
    lastStreakDay: state.lastStreakDay,
    missionDay: state.missionDay,
    currency: state.currency,
    experience: state.experience,
    level: state.level,
    freezeTokens: state.freezeTokens,
    freezeTokenDates: state.freezeTokenDates,
    dailyMissions: state.dailyMissions
  });
}

// ---------- Helpers ----------
function vocabKey(level, idx){ return `${level}::vocab::${idx}`; }
function kanjiKey(level, idx){ return `${level}::kanji::${idx}`; }
function phraseKey(level, idx){ return `${level}::phrase::${idx}`; }
function kanaKey(type, group, idx){ return `${type}::${group}::${idx}`; }

function getMasteredSet(type){
  if (type === 'kana') return state.masteredKana;
  if (type === 'vocab') return state.masteredVocab;
  if (type === 'kanji') return state.masteredKanji;
  if (type === 'phrase') return state.masteredPhrases;
  return null;
}

function inferMasteryTypeFromKey(key){
  if (!key) return null;
  if (key.includes('::kana::') || key.startsWith('hiragana::') || key.startsWith('katakana::')) return 'kana';
  if (key.includes('::vocab::')) return 'vocab';
  if (key.includes('::kanji::')) return 'kanji';
  if (key.includes('::phrase::')) return 'phrase';
  return null;
}

function getMasteryStrength(key, type){
  if (!key) return 0;
  const saved = Number(state.masteryProgress[key]);
  if (Number.isFinite(saved)) return Math.max(0, Math.min(MASTERY_MAX, saved));
  const set = getMasteredSet(type || inferMasteryTypeFromKey(key));
  return set && set.has(key) ? MASTERY_MAX : 0;
}

function setMasteryStrength(key, type, value){
  if (!key) return { before:0, after:0, masteredNow:false, lostMastery:false };
  const itemType = type || inferMasteryTypeFromKey(key);
  const before = getMasteryStrength(key, itemType);
  const after = Math.max(0, Math.min(MASTERY_MAX, Number(value) || 0));
  state.masteryProgress[key] = after;
  const set = getMasteredSet(itemType);
  if (set){
    if (after >= MASTERY_MAX) set.add(key);
    else set.delete(key);
  }
  return {
    before,
    after,
    masteredNow: before < MASTERY_MAX && after >= MASTERY_MAX,
    lostMastery: before >= MASTERY_MAX && after < MASTERY_MAX
  };
}

function adjustMasteryStrength(key, type, delta){
  return setMasteryStrength(key, type, getMasteryStrength(key, type) + delta);
}

function isItemMastered(key, type){
  return getMasteryStrength(key, type) >= MASTERY_MAX;
}

function getMasteryText(key, type){
  return `${getMasteryStrength(key, type)}/${MASTERY_MAX}`;
}

function getMasteryPercent(keys, type){
  if (!keys.length) return 0;
  const totalStrength = keys.reduce((sum, key) => sum + getMasteryStrength(key, type), 0);
  return Math.round((totalStrength / (keys.length * MASTERY_MAX)) * 100);
}

function countMasteredKeys(keys, type){
  return keys.filter(key => isItemMastered(key, type)).length;
}

function migrateMasteredSetsToProgress(){
  [
    ['kana', state.masteredKana],
    ['vocab', state.masteredVocab],
    ['kanji', state.masteredKanji],
    ['phrase', state.masteredPhrases]
  ].forEach(([type, set]) => {
    set.forEach(key => {
      if (state.masteryProgress[key] === undefined) state.masteryProgress[key] = MASTERY_MAX;
      setMasteryStrength(key, type, state.masteryProgress[key]);
    });
  });
}

function totalMasteredCount(){
  return state.masteredVocab.size + state.masteredKanji.size + state.masteredPhrases.size + state.masteredKana.size;
}

function updateMasteredBadge(){
  const badge = document.getElementById("masteredCount");
  if (badge) badge.textContent = totalMasteredCount();
}

function showToast(msg){
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove("show"), 1800);
}

function showProgressToast(){
  const mode = state.language === 'en'
    ? (StorageLayer.isAvailable() ? "autosaved" : "this session only (local storage is off)")
    : (StorageLayer.isAvailable() ? "tersimpan otomatis" : "sesi ini saja (penyimpanan lokal nonaktif)");
  showToast(`${totalMasteredCount()} ${state.language === 'en' ? 'items mastered' : 'item dikuasai'} - ${mode}`);
}

function getString(key){
  return (STRINGS[state.language] && STRINGS[state.language][key]) || key;
}

const EN_TRANSLATIONS = {
  "dikuasai": "mastered",
  "frasa dikuasai": "phrases mastered",
  "kanji resmi": "official kanji",
  "Fondasi — Aksara & Kata Pertama": "Foundation - Scripts & First Words",
  "Pemula Atas — Tata Bahasa Berkembang": "Upper Beginner - Expanding Grammar",
  "Menengah — Jembatan ke Kemampuan Praktis": "Intermediate - Bridge to Practical Ability",
  "Menengah Atas — Nuansa & Keformalan": "Upper Intermediate - Nuance & Formality",
  "Mahir — Akademik, Bisnis, dan Nuansa Halus": "Advanced - Academic, Business, and Subtle Nuance",
  "日常会話 — Percakapan Harian": "日常会話 - Daily Conversation",
  "職場 — Di Tempat Kerja": "職場 - At Work",
  "生活 — Kehidupan Sehari-hari": "生活 - Daily Life",
  "緊急 — Keadaan Darurat": "緊急 - Emergency",
  "Tes kemampuan bahasa Jepang dasar untuk pekerja Program Specified Skilled Worker (SSW/SSP) dan Tokutei Ginou. Diselenggarakan oleh Japan Foundation. Level setara CEFR A1–A2.": "A basic Japanese communication test for Specified Skilled Worker (SSW/SSP) and Tokutei Ginou candidates. Organized by the Japan Foundation. Equivalent to CEFR A1-A2.",
  "Salam & Frasa Harian": "Greetings & Daily Phrases",
  "Aktivitas & Rutinitas Harian": "Activities & Daily Routines",
  "Transaksi & Tempat Umum": "Transactions & Public Places",
  "Cerita & Pengalaman": "Stories & Experiences",
  "Diskusi & Pendapat": "Discussions & Opinions",
  "Berita & Bahasa Formal": "News & Formal Language",
  "Percakapan Natural & Idiomatis": "Natural & Idiomatic Conversation",
  "Memahami sapaan, perkenalan diri, dan ungkapan dasar dalam percakapan sangat lambat dan jelas.": "Understand greetings, self-introductions, and basic expressions in very slow, clear conversation.",
  "Memahami dialog di toko, restoran, stasiun, klinik, dan kantor pos dalam tempo normal.": "Understand normal-speed dialogues in stores, restaurants, stations, clinics, and post offices.",
  "Mendengarkan deskripsi kegiatan rutin: bangun tidur, sekolah/kerja, makan, transportasi dalam tempo lambat.": "Listen to slow descriptions of routines: waking up, school/work, meals, and transportation.",
  "Mendengarkan narasi pengalaman pribadi, rencana masa depan, dan perbandingan dalam tempo natural.": "Listen to natural-speed narration about personal experiences, future plans, and comparisons.",
  "Mendengarkan opini, argumentasi, dan diskusi topik sosial dengan tempo percakapan normal.": "Listen to opinions, arguments, and social-topic discussions at normal conversational speed.",
  "Mendengarkan siaran berita, pengumuman resmi, dan presentasi formal dengan kecepatan asli.": "Listen to news broadcasts, official announcements, and formal presentations at native speed.",
  "Memahami percakapan native cepat, idiom, sarkasme, nuansa emosional halus, dan variasi dialek.": "Understand fast native conversation, idioms, sarcasm, subtle emotional nuance, and dialect variation.",
  "Pengenalan pola intonasi dasar bahasa Jepang": "Recognize basic Japanese intonation patterns",
  "Membedakan bunyi vokal panjang dan pendek (おばさん vs おばあさん)": "Distinguish long and short vowels (おばさん vs おばあさん)",
  "Mengenali nada formal (〜ます/〜です) vs informal": "Recognize formal (〜ます/〜です) vs informal tone",
  "Mengenali partikel waktu (に, から, まで) dalam ucapan": "Recognize time particles (に, から, まで) in speech",
  "Memahami urutan kegiatan melalui te-form (〜て、〜て)": "Understand activity sequences through the te-form (〜て、〜て)",
  "Latihan menangkap angka waktu dan nama hari": "Practice catching times and days of the week",
  "Mengenali kosakata khas pelayanan (敬語 dasar: いらっしゃいませ)": "Recognize service vocabulary (basic keigo: いらっしゃいませ)",
  "Menangkap angka dan satuan mata uang dengan cepat": "Quickly catch numbers and currency units",
  "Memahami instruksi satu langkah dari petugas": "Understand one-step instructions from staff",
  "Memahami referensi waktu lampau (〜ました) dan mendatang (〜つもり/〜よてい)": "Understand past (〜ました) and future (〜つもり/〜よてい) references",
  "Mengenali penanda alasan (から、ので) dalam kalimat panjang": "Recognize reason markers (から, ので) in long sentences",
  "Menangkap perbandingan (〜より、〜ほうが) dan preferensi": "Catch comparisons (〜より, 〜ほうが) and preferences",
  "Mengenali penanda opini (〜とおもう、〜とかんがえる、〜のではないか)": "Recognize opinion markers (〜とおもう, 〜とかんがえる, 〜のではないか)",
  "Memahami struktur argumen-balasan dalam diskusi dua pihak": "Understand argument-response structure in two-party discussions",
  "Menangkap kata penghubung kompleks (それでも、けっきょく、一方で)": "Catch complex connectors (それでも, けっきょく, 一方で)",
  "Memahami bahasa pasif formal (〜されています、〜られています)": "Understand formal passive language (〜されています, 〜られています)",
  "Menangkap struktur kalimat panjang bercabang dalam berita": "Catch branching long-sentence structures in news",
  "Mengenali ungkapan kutipan tidak langsung (〜によりますと、〜とのことです)": "Recognize indirect quotation phrases (〜によりますと, 〜とのことです)",
  "Memahami ellipsis dan singkatan kasual (じゃない→じゃん, 〜ている→〜てる)": "Understand ellipsis and casual contractions (じゃない→じゃん, 〜ている→〜てる)",
  "Mengenali nuansa nada bicara: malu, sarkasme, keakraban, ironi": "Recognize tone nuance: embarrassment, sarcasm, closeness, irony",
  "Menangkap idiom dan slang dalam percakapan native speed": "Catch idioms and slang in native-speed conversation",
  "satu": "one",
  "dua": "two",
  "tiga": "three",
  "empat": "four",
  "lima": "five",
  "enam": "six",
  "tujuh": "seven",
  "delapan": "eight",
  "sembilan": "nine",
  "sepuluh": "ten",
  "seratus": "hundred",
  "seribu": "thousand",
  "sepuluh ribu": "ten thousand",
  "hari ini": "today",
  "kemarin": "yesterday",
  "besok": "tomorrow",
  "setiap hari": "every day",
  "setiap pagi": "every morning",
  "jam berapa": "what time",
  "di sini": "here",
  "di situ": "there",
  "di sana": "over there",
  "yang mana": "which one",
  "berapa harganya": "how much is it",
  "saya": "I; me",
  "kamu": "you",
  "ini (dekat penutur)": "this (near the speaker)",
  "itu (dekat lawan bicara)": "that (near the listener)",
  "itu (jauh)": "that (far away)",
  "jam (benda)": "clock; watch",
  "telepon": "telephone",
  "stasiun": "station",
  "kereta": "train",
  "mobil": "car",
  "rumah": "house; home",
  "sekolah": "school",
  "rumah sakit": "hospital",
  "toko buku": "bookstore",
  "air": "water",
  "nasi; makanan": "rice; meal",
  "teh": "tea",
  "roti": "bread",
  "besar": "big",
  "kecil": "small",
  "tinggi/mahal": "tall; expensive",
  "murah": "cheap",
  "baru": "new",
  "lama/tua": "old",
  "orang": "person",
  "wanita": "woman",
  "pria": "man",
  "anak": "child",
  "ayah": "father",
  "ibu": "mother",
  "teman": "friend",
  "hari; matahari": "day; sun",
  "bulan": "month; moon",
  "api": "fire",
  "pohon": "tree",
  "emas; uang": "gold; money",
  "tanah": "soil; earth",
  "gunung": "mountain",
  "sungai": "river",
  "bunga": "flower",
  "hujan": "rain",
  "melihat": "to see",
  "mendengar": "to hear",
  "makan": "to eat",
  "minum": "to drink",
  "pergi": "to go",
  "datang": "to come",
  "menulis": "to write",
  "membaca": "to read",
  "membeli": "to buy",
  "berbicara": "to speak",
  "Selamat pagi": "Good morning",
  "Selamat siang": "Good afternoon",
  "Selamat malam": "Good evening",
  "Senang berkenalan": "Nice to meet you",
  "Mohon bantuannya": "Please treat me well",
  "Terima kasih": "Thank you",
  "Maaf / Permisi": "Sorry / Excuse me",
  "Tidak apa-apa": "It's okay",
  "Apa kabar?": "How are you?",
  "Selamat tinggal": "Goodbye",
  "Selamat tidur": "Good night",
  "Selamat makan (sebelum makan)": "Said before eating",
  "Setiap pagi bangun jam 6": "Wake up at 6 every morning",
  "Pergi ke kantor dengan kereta": "Go to the office by train",
  "Makan siang": "Eat lunch",
  "Pulang lalu mengerjakan tugas": "Go home, then do homework",
  "Tidur jam 10 malam": "Go to bed at 10 p.m.",
  "Hari ini hujan": "It is raining today",
  "Bus terlambat": "The bus is late",
  "Bisakah bantu saya sebentar?": "Could you help me for a moment?",
  "Sabtu selalu di rumah": "I am always at home on Saturdays",
  "Ayo pergi belanja": "Let's go shopping",
  "Tidak ada waktu": "There is no time",
  "Selesai jam 5": "Finish at 5",
  "Berapa harganya?": "How much is it?",
  "Bisakah bayar dengan kartu?": "Can I pay by card?",
  "Tolong bon-nya": "Please give me the receipt",
  "Kereta ini berhenti di Shinjuku?": "Does this train stop at Shinjuku?",
  "Turun di stasiun berikutnya": "Get off at the next station",
  "Maaf, sudah habis terjual": "Sorry, it is sold out",
  "Saya ingin membuat reservasi": "I would like to make a reservation",
  "Maaf sudah menunggu": "Sorry to keep you waiting",
  "Silakan ke sini": "This way, please",
  "Saat ini penuh": "It is full right now",
  "Mohon tunggu sebentar": "Please wait a moment",
  "Minggu lalu pergi ke Jepang": "Went to Japan last week",
  "Mencoba sashimi untuk pertama kali": "Tried sashimi for the first time",
  "Lebih sulit dari yang saya kira": "It was harder than I expected",
  "Bulan depan berencana pindah rumah": "Planning to move next month",
  "Kalau ada waktu, mau pergi bersama?": "If you have time, would you like to go together?",
  "Sudah lebih mahir dari sebelumnya": "I have improved compared with before",
  "Sebenarnya, agak khawatir": "Actually, I am a little worried",
  "Kenapa kamu berhenti?": "Why did you stop?",
  "Karena ~ saya mulai melakukannya": "~ is what made me start",
  "Hasilnya berjalan dengan baik": "It turned out well",
  "Mungkin agak tidak bisa": "I might not be able to",
  "Semoga bisa bertemu lagi suatu saat": "Let's meet again sometime",
  "Saya tidak berpikir begitu": "I do not think so",
  "Memang benar, tapi...": "That is true, but...",
  "Saya setuju dengan itu": "I agree with that",
  "Ada juga pendapat yang berlawanan": "There is also an opposing opinion",
  "Berbeda-beda tergantung kasusnya": "It differs depending on the case",
  "Di sisi lain, ada juga pandangan bahwa~": "On the other hand, there is also the view that ~",
  "Itu memang masalah yang sulit": "That is a difficult issue",
  "Ada beberapa alasan": "There are several reasons",
  "Sebagai kesimpulan, saya pikir~": "In conclusion, I think ~",
  "Tolong jelaskan lebih rinci": "Please explain in more detail",
  "Karena alasannya adalah~": "Because the reason is ~",
  "Bagaimanapun juga~": "In any case ~",
  "Berikut berita hari ini": "Here is today's news",
  "Pemerintah mengumumkan kebijakan baru": "The government announced a new policy",
  "Menurut pihak terkait": "According to related parties",
  "Tren ke depan menjadi sorotan": "Future trends are attracting attention",
  "Penanganan dianggap mendesak": "A response is considered urgent",
  "Diskusi masih terus berlanjut": "The discussion is still ongoing",
  "Untuk info lengkap, lihat website": "For details, see the website",
  "Sekian laporan ini": "That concludes the report",
  "Disebabkan oleh~": "Caused by ~",
  "Menjadi tantangan besar bagi~": "It has become a major challenge for ~",
  "Pihak berwenang mengimbau kewaspadaan": "Authorities are calling for caution",
  "Kewaspadaan terus diperlukan": "Continued caution is necessary",
  "Itu serius?": "Seriously?",
  "Entah kenapa perasaanku nggak enak": "For some reason, I feel uneasy",
  "Ya, mau gimana lagi": "Well, it can't be helped",
  "Agak ambigu/kurang pas ya": "It is kind of subtle / not quite right",
  "Pasti ada jalan kok": "It will work out somehow",
  "Itu sih kelewatan": "That is going too far",
  "Lucu banget! / Haha!": "That's hilarious! / Haha!",
  "Sudah kuduga": "I knew it",
  "Baca situasi dong!": "Read the room!",
  "Perlu lobi dulu": "We need to lay the groundwork first",
  "Ayo bicara jujur (dari hati)": "Let's speak honestly",
  "Teman yang bisa dipercaya sepenuhnya": "A friend you can fully trust",
  "Terima kasih (sudah dilakukan)": "Thank you (after something was done)",
  "Permisi, di mana ~?": "Excuse me, where is ~?",
  "Di mana kamar mandi?": "Where is the restroom?",
  "Saya tidak mengerti. Tolong ucapkan lagi.": "I do not understand. Please say it again.",
  "Saya sedikit mengerti bahasa Jepang.": "I understand a little Japanese.",
  "Tolong berikan ~.": "Please give me ~.",
  "Ini berapa harganya?": "How much is this?",
  "Tolong antar sampai ~.": "Please take me to ~.",
  "Tolong tunggu sebentar.": "Please wait a moment.",
  "Ya, saya mengerti.": "Yes, I understand.",
  "Bagaimana cara melakukan ~?": "How do I do ~?",
  "Apakah ini sudah benar?": "Is this correct?",
  "Hari ini saya melakukan apa?": "What should I do today?",
  "Sudah selesai. Selanjutnya apa?": "I am finished. What is next?",
  "Kondisi badan saya tidak baik.": "I am not feeling well.",
  "Bolehkah saya istirahat?": "May I take a break?",
  "Kapan gaji dibayarkan?": "When is salary paid?",
  "Apakah biaya transportasi diganti?": "Are transportation costs reimbursed?",
  "Di mana membuang sampah?": "Where should I take out the trash?",
  "Sampah organik hari apa?": "What day is burnable trash collected?",
  "Bagaimana cara minum obat ini?": "How should I take this medicine?",
  "Saya ingin membuat rekening bank.": "I want to open a bank account.",
  "Saya butuh surat keterangan domisili.": "I need a residence certificate.",
  "Bus jurusan ~ yang mana?": "Which bus goes to ~?",
  "Saya ingin beli tiket langganan.": "I want to buy a commuter pass.",
  "Apakah ada supermarket di dekat sini?": "Is there a supermarket nearby?",
  "Saya sedang mencari kamar.": "I am looking for a room.",
  "Tolong tanda tangani kontraknya.": "Please sign the contract.",
  "Tolong bantu saya!": "Please help me!",
  "Tolong panggil ambulans.": "Please call an ambulance.",
  "Tolong panggil polisi.": "Please call the police.",
  "Kebakaran!": "Fire!",
  "Di sini sakit.": "It hurts here.",
  "Saya punya alergi.": "I have an allergy.",
  "Saya punya kartu asuransi.": "I have an insurance card.",
  "Dompet saya hilang.": "I lost my wallet.",
  "Saat gempa, pertama sembunyi di bawah meja.": "During an earthquake, first hide under a desk.",
  "Di sini dilarang merokok.": "Smoking is prohibited here.",
  "Sapaan pagi hari, formal": "Formal morning greeting",
  "Sopan, setelah menerima bantuan": "Polite, after receiving help",
  "Menanyakan lokasi": "Asking for a location",
  "Paling sering di tempat kerja/umum": "Common at work or in public",
  "Meminta pengulangan": "Asking for repetition",
  "Menjelaskan kemampuan diri": "Explaining your ability",
  "Meminta sesuatu": "Asking for something",
  "Di toko/kasir": "At a store/cashier",
  "Di taksi/angkutan": "In a taxi/transportation",
  "Umum di semua situasi": "Common in all situations",
  "Konfirmasi instruksi dari atasan": "Confirming instructions from a supervisor",
  "Bertanya cara kerja": "Asking how to do work",
  "Meminta konfirmasi pekerjaan": "Asking for work confirmation",
  "Meminta bantuan dengan sopan": "Politely asking for help",
  "Menanyakan tugas harian": "Asking about daily tasks",
  "Laporan selesai kerja": "Reporting that work is finished",
  "Memberitahu kondisi kesehatan": "Explaining health condition",
  "Meminta izin": "Asking for permission",
  "Menanyakan jadwal gaji": "Asking about salary schedule",
  "Fasilitas kerja": "Work benefit",
  "Peraturan pemukiman Jepang": "Japanese housing rules",
  "Jadwal pembuangan sampah": "Trash collection schedule",
  "Di apotek/klinik": "At a pharmacy/clinic",
  "Keperluan administratif": "Administrative need",
  "Administrasi kependudukan": "Resident administration",
  "Naik bus/angkutan umum": "Taking a bus/public transportation",
  "Commuter pass": "Commuter pass",
  "Bertanya lokasi fasilitas": "Asking for a facility location",
  "Mencari tempat tinggal": "Looking for housing",
  "Penandatanganan kontrak": "Signing a contract",
  "Darurat umum": "General emergency",
  "Darurat medis. Nomor: 119": "Medical emergency. Number: 119",
  "Darurat keamanan. Nomor: 110": "Security emergency. Number: 110",
  "Darurat kebakaran. Nomor: 119": "Fire emergency. Number: 119",
  "Informasi medis penting": "Important medical information",
  "Melaporkan kehilangan": "Reporting a lost item",
  "Prosedur darurat gempa": "Earthquake emergency procedure",
  "Tanda larangan umum": "Common prohibition sign",
  "umum": "general",
  "perkenalan": "introduction",
  "formal": "formal",
  "sopan": "polite",
  "malam": "night",
  "budaya": "culture",
  "rutinitas": "routine",
  "transportasi": "transportation",
  "makanan": "food",
  "kegiatan": "activity",
  "cuaca": "weather",
  "permintaan": "request",
  "situasi": "situation",
  "jadwal": "schedule",
  "belanja": "shopping",
  "pembayaran": "payment",
  "toko": "store",
  "restoran/hotel": "restaurant/hotel",
  "restoran/parkir": "restaurant/parking",
  "pelayanan": "service",
  "pengalaman": "experience",
  "evaluasi": "evaluation",
  "rencana": "plan",
  "ajakan": "invitation",
  "perbandingan": "comparison",
  "perasaan": "feeling",
  "percakapan": "conversation",
  "alasan": "reason",
  "hasil": "result",
  "keraguan": "doubt",
  "perpisahan": "farewell",
  "pendapat": "opinion",
  "kontra": "counterpoint",
  "setuju": "agreement",
  "pertimbangan": "consideration",
  "relativitas": "relativity",
  "dua sisi": "two sides",
  "simpati": "sympathy",
  "struktur argumen": "argument structure",
  "kesimpulan": "conclusion",
  "klarifikasi": "clarification",
  "alasan formal": "formal reason",
  "penutup argumen": "closing argument",
  "pembuka berita": "news opening",
  "berita": "news",
  "kutipan": "quotation",
  "analisis": "analysis",
  "penilaian": "assessment",
  "instruksi": "instruction",
  "penutup": "closing",
  "kausalitas pasif": "passive causality",
  "peringatan": "warning",
  "himbauan": "advisory",
  "idiom perasaan": "feeling idiom",
  "pasrah": "resignation",
  "nuansa": "nuance",
  "optimisme": "optimism",
  "kritis": "criticism",
  "slang komedi": "comedy slang",
  "konfirmasi intuisi": "gut-feeling confirmation",
  "idiom sosial": "social idiom",
  "idiom kerja": "work idiom",
  "ungkapan dewasa": "adult expression",
  "idiom persahabatan": "friendship idiom"
};

function localizeMeaning(text){
  if (state.language !== 'en' || text === undefined || text === null) return text;
  const value = String(text);
  const normalized = value.replace(/[。.!?？]+$/u, "");
  const translated = EN_TRANSLATIONS[value] || EN_TRANSLATIONS[normalized];
  if (!translated) return text;
  const suffix = value.slice(normalized.length);
  return translated + suffix;
}

function getTodayDateString(date){
  const d = date || new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function parseDay(day){
  return new Date(`${day}T00:00:00`);
}

function dayDiff(fromDay, toDay){
  return Math.round((parseDay(toDay) - parseDay(fromDay)) / (1000*60*60*24));
}

function addDays(day, amount){
  const d = parseDay(day);
  d.setDate(d.getDate() + amount);
  return getTodayDateString(d);
}

function syncFreezeTokenCount(){
  state.freezeTokens = state.freezeTokenDates.length;
}

function consumeEligibleFreeze(today){
  const index = state.freezeTokenDates.findIndex(day => day === null || day < today);
  if (index === -1) return false;
  state.freezeTokenDates.splice(index, 1);
  syncFreezeTokenCount();
  return true;
}

function getServerTime(){
  return fetch(SERVER_TIME_API, {cache:'no-store'})
    .then(response => response.ok ? response.json() : Promise.reject())
    .then(data => new Date(data.utc_datetime))
    .catch(() => new Date());
}

function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.theme);
  const emoji = state.theme === 'dark' ? '🌙' : '☀️';
  document.getElementById('themeDisplay').textContent = emoji;
}

function cycleTheme(){
  const order = ['light', 'dark'];
  const next = order[(order.indexOf(state.theme) + 1) % order.length];
  setTheme(next);
}

function setTheme(themeName){
  state.theme = themeName;
  persistProgress();
  applyTheme();
  updateThemeButtons();
  const emoji = themeName === 'dark' ? '🌙' : '☀️';
  document.getElementById('themeDisplay').textContent = emoji;
  showToast(`Theme: ${themeName}`);
}

function updateThemeButtons(){
  document.querySelectorAll('.theme-buttons button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
  });
}

function openSettingsModal(){
  document.getElementById('settingsModal').classList.add('active');
  updateSettingsDisplay();
}

function closeSettingsModal(){
  document.getElementById('settingsModal').classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('settingsModal');
  if (modal){
    modal.addEventListener('click', function(e){
      if (e.target === modal) closeSettingsModal();
    });
  }
});

function updateSettingsDisplay(){
  const currentXP = state.experience % 100;
  document.getElementById('settingsLevel').textContent = state.level;
  document.getElementById('settingsXP').textContent = `${currentXP}/100`;
  const xpPercent = (currentXP / 100) * 100;
  const fill = document.querySelector('#settingsProgressFill');
  if (fill) fill.style.width = `${xpPercent}%`;
  document.getElementById('langDisplay').textContent = state.language.toUpperCase();
  updateThemeButtons();
}

function applyLanguage(){
  document.getElementById('buyFreezeButton').textContent = getString('buyFreeze');
  document.getElementById('streakLabel').textContent = getString('streakLabel');
  document.getElementById('freezeMiniLabel').textContent = getString('freezeAvailable');
  document.getElementById('currencyLabel').textContent = getString('currencyLabel');
  document.getElementById('shopTitle').textContent = getString('shopTitle');
  document.getElementById('freezeTokenLabel').textContent = getString('freezeTokenLabel');
  document.getElementById('shopNote').textContent = getString('shopNote');
  document.getElementById('settingsTitle').textContent = getString('settingsTitle');
  document.getElementById('settingsProgressTitle').textContent = getString('settingsProgressTitle');
  document.getElementById('settingsLevelLabel').textContent = getString('levelLabel');
  document.getElementById('settingsLanguageTitle').textContent = getString('settingsLanguageTitle');
  document.getElementById('settingsLanguageLabel').textContent = getString('settingsLanguageLabel');
  document.getElementById('settingsThemeTitle').textContent = getString('settingsThemeTitle');
  document.getElementById('settingsActionTitle').textContent = getString('settingsActionTitle');
  document.getElementById('settingsReviewButton').textContent = getString('reviewButton');
  document.getElementById('reviewPanelTitle').textContent = getString('reviewButton');
  document.getElementById('brandSubtitle').textContent = state.language === 'en' ? 'Learn Japanese' : 'Belajar Bahasa Jepang';
  document.getElementById('trackKana').innerHTML = `<span class="jp">文字</span> ${state.language === 'en' ? 'Script' : 'Aksara'}`;
  document.getElementById('trackJLPT').innerHTML = `<span class="jp">日能試</span> JLPT`;
  document.getElementById('trackJFT').innerHTML = `<span class="jp">基礎</span> JFT`;
  document.getElementById('trackListening').innerHTML = `<span class="jp">聴解</span> Listening`;
  document.getElementById('storageNoticeText').textContent = state.language === 'en'
    ? 'Local storage is not available on this device. Learning progress will not be saved after the page is closed or reloaded, but all features can still be used normally.'
    : 'Penyimpanan lokal (localStorage) tidak tersedia di device ini. Progres belajar tidak akan disimpan setelah halaman ditutup/dimuat ulang, tapi semua fitur tetap bisa dipakai normal.';
  document.getElementById('kanaSectionTitle').textContent = state.language === 'en' ? 'Choose Script' : 'Pilih Aksara';
  document.getElementById('jlptSectionTitle').textContent = state.language === 'en' ? 'Choose JLPT Level' : 'Pilih Level JLPT';
  document.getElementById('listeningOverviewTitle').textContent = state.language === 'en' ? 'Listening Path L7 -> L1' : 'Jalur Listening L7 → L1';
  document.getElementById('listeningOverviewHelpTitle').textContent = state.language === 'en' ? 'How to Use This Path' : 'Cara Memakai Jalur Ini';
  document.getElementById('listeningOverviewHelpText').textContent = state.language === 'en'
    ? 'L7 is the starting point (most basic), and L1 is the highest level, close to native-speaker ability. In each level: listen to each phrase with the play button (▶), repeat it aloud yourself (shadowing), then test yourself with a quiz. Adjust speech speed to match your ability.'
    : 'L7 adalah titik awal (paling dasar), L1 adalah level tertinggi setara native speaker. Di setiap level: dengarkan tiap frasa lewat tombol putar (▶), ulangi dengan suara sendiri (shadowing), lalu uji diri lewat kuis. Atur kecepatan bicara sesuai kemampuanmu.';
  document.getElementById('kanaQuizLaunchTitle').textContent = state.language === 'en' ? '確認テスト Memory Check' : '確認テスト Uji Hafalan';
  document.getElementById('kanaQuizLaunchDesc').textContent = state.language === 'en' ? 'Take a random quiz to test your script memory.' : 'Kerjakan kuis acak untuk menguji hafalan aksaramu.';
  document.getElementById('jlptQuizLaunchTitle').textContent = state.language === 'en' ? '準備はいい？ Ready to Test Yourself?' : '準備はいい？ Siap Uji Diri?';
  document.getElementById('jlptQuizLaunchDesc').textContent = state.language === 'en' ? 'Take a random quiz from this level’s vocab and kanji to test your understanding.' : 'Kerjakan kuis acak dari vocab & kanji level ini untuk menguji pemahamanmu.';
  document.getElementById('jftHeroSub').textContent = state.language === 'en' ? 'Essential phrases for work and daily communication' : 'Frasa esensial untuk komunikasi kerja & sehari-hari';
  document.getElementById('kanaQuizButton').textContent = state.language === 'en' ? 'Start Quiz' : 'Mulai Kuis';
  document.getElementById('jlptQuizButton').textContent = state.language === 'en' ? 'Start Quiz' : 'Mulai Kuis';
  document.getElementById('grammarSubtabButton').textContent = state.language === 'en' ? '文法 Grammar' : '文法 Tata Bahasa';
  document.getElementById('listeningFocusTitle').textContent = state.language === 'en' ? 'Practice Focus' : 'Fokus Latihan';
  document.getElementById('speedLabel').textContent = state.language === 'en' ? '🐢 Speed' : '🐢 Kecepatan';
  document.getElementById('speedSlowButton').textContent = state.language === 'en' ? 'Slow' : 'Lambat';
  document.getElementById('speedFastButton').textContent = state.language === 'en' ? 'Fast' : 'Cepat';
  document.getElementById('shadowTitle').textContent = state.language === 'en' ? '🎙️ Shadowing Mode' : '🎙️ Mode Shadowing';
  document.getElementById('shadowDesc').textContent = state.language === 'en' ? 'Play audio, then pause so you can imitate it' : 'Putar audio lalu beri jeda untukmu menirukan';
  document.getElementById('listeningQuizTitle').textContent = state.language === 'en' ? '聞き取りクイズ Listening Quiz' : '聞き取りクイズ Uji Pendengaran';
  document.getElementById('listeningQuizDesc').textContent = state.language === 'en' ? 'Listen to random audio and choose the correct meaning.' : 'Dengarkan audio acak dan pilih arti yang tepat.';
  document.getElementById('listeningQuizButton').textContent = state.language === 'en' ? 'Start Quiz' : 'Mulai Kuis';
  document.getElementById('phraseSectionTitle').textContent = state.language === 'en' ? 'Phrases & Practice' : 'Frasa & Latihan';
  document.getElementById('modalCloseBtn').textContent = state.language === 'en' ? 'Close' : 'Tutup';
  updateMissionSummary();
}

function toggleLanguage(){
  state.language = state.language === 'id' ? 'en' : 'id';
  state.dailyMissions.forEach(m => {
    if (m.id === 'quiz') m.label = state.language === 'id' ? 'Selesaikan 1 kuis' : 'Complete 1 quiz';
    if (m.id === 'review') m.label = state.language === 'id' ? 'Review 3 item belum dikuasai' : 'Review 3 unmastered items';
  });
  persistProgress();
  applyLanguage();
  updateSettingsDisplay();
  refreshCurrentView();
  showToast(`Language: ${state.language.toUpperCase()}`);
}

function updateMissionSummary(){
  const container = document.getElementById('missionSummary');
  container.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = getString('missionHeader');
  container.appendChild(title);
  state.dailyMissions.forEach(m => {
    const done = m.done || m.progress >= m.target;
    const card = document.createElement('div');
    card.className = 'mission-card';

    const label = document.createElement('div');
    label.className = 'mission-label';
    label.innerHTML = `<span>${escapeHtml(m.label)}</span><span>${m.progress}/${m.target}</span>`;

    const bar = document.createElement('div');
    bar.className = 'mission-bar';
    const fill = document.createElement('div');
    fill.className = 'mission-bar-fill';
    fill.style.width = `${Math.min(100, (m.progress / m.target) * 100)}%`;
    bar.appendChild(fill);

    const badge = document.createElement('div');
    badge.className = 'mission-badge';
    badge.textContent = done ? `${getString('missionDone')} ✓` : `${m.reward} ${getString('currencyLabel')}`;

    card.appendChild(label);
    card.appendChild(bar);
    card.appendChild(badge);
    container.appendChild(card);
  });
}

function updateProgressPanel(){
  syncFreezeTokenCount();
  document.getElementById('streakCount').textContent = state.streakCount;
  const currentXP = state.experience % 100;
  const nextLevelXP = 100;
  const xpPercent = (currentXP / nextLevelXP) * 100;
  const xpFill = document.querySelector('.level-progress-fill');
  if (xpFill) xpFill.style.width = `${xpPercent}%`;
  const xpText = document.querySelector('.level-progress-text');
  if (xpText) xpText.textContent = `${currentXP}/${nextLevelXP}`;
  document.getElementById('currencyCount').textContent = state.currency;
  document.getElementById('freezeTokenCount').textContent = state.freezeTokens;
  document.getElementById('shopFreezeCount').textContent = state.freezeTokens;
  updateMasteredBadge();
  updateMissionSummary();
}

function resetDailyMissions(){
  state.dailyMissions = [
    { id: 'quiz', label: state.language === 'id' ? 'Selesaikan 1 kuis' : 'Complete 1 quiz', target: 1, progress: 0, reward: 15, done:false },
    { id: 'review', label: state.language === 'id' ? 'Review 3 item belum dikuasai' : 'Review 3 unmastered items', target: 3, progress: 0, reward: 20, done:false }
  ];
}

function awardXp(amount){
  state.experience += amount;
  const nextLevel = Math.floor(state.experience / 100) + 1;
  if (nextLevel > state.level){
    state.level = nextLevel;
    showToast(`${getString('congratulations')}! ${getString('level')} ${state.level}`);
  }
}

function completeDailyMission(id, amount = 1){
  const mission = state.dailyMissions.find(m => m.id === id);
  if (!mission || mission.done) return;
  recordDailyStreakActivity();
  mission.progress = Math.min(mission.target, mission.progress + amount);
  if (mission.progress >= mission.target){
    mission.done = true;
    state.currency += mission.reward;
    awardXp(10);
    showToast(`+${mission.reward} ${getString('currencyLabel')}!`);
  }
  updateProgressPanel();
  persistProgress();
}

function buyFreezeToken(){
  const cost = 20;
  if (state.currency < cost){
    showToast(getString('needFreezeCoins'));
    return;
  }
  state.currency -= cost;
  state.freezeTokenDates.push(state.missionDay || getTodayDateString());
  syncFreezeTokenCount();
  persistProgress();
  updateProgressPanel();
  showToast(`+1 ${getString('freezeTokenLabel')}`);
}

function animateStreak(){
  const streak = document.querySelector('.streak-pill');
  if (!streak) return;
  streak.classList.remove('animate');
  void streak.offsetWidth;
  streak.classList.add('animate');
}

function recordDailyStreakActivity(date){
  const today = state.missionDay || getTodayDateString(date || new Date());
  if (state.lastStreakDay === today) return;
  if (!state.lastStreakDay || state.streakCount === 0){
    state.streakCount = 1;
  } else {
    const diff = dayDiff(state.lastStreakDay, today);
    state.streakCount = diff === 1 ? state.streakCount + 1 : 1;
  }
  state.lastStreakDay = today;
  state.lastActiveDay = today;
  persistProgress();
  animateStreak();
  showToast(getString('streakAdded'));
}

function updateDailyStreak(serverDate){
  const today = getTodayDateString(serverDate);
  if (state.missionDay !== today){
    resetDailyMissions();
    state.missionDay = today;
  }
  if (state.lastStreakDay){
    const diff = dayDiff(state.lastStreakDay, today);
    if (diff > 1){
      const missedDays = diff - 1;
      if (missedDays === 1 && consumeEligibleFreeze(today)){
        state.lastStreakDay = addDays(state.lastStreakDay, 1);
        showToast(getString('freezeSaved'));
      } else {
        state.streakCount = 0;
        state.lastStreakDay = null;
        showToast(getString('streakBroken'));
      }
    }
  }
  if (state.lastActiveDay !== today){
    state.lastActiveDay = today;
    persistProgress();
  }
}

function toggleReviewPanel(){
  const panel = document.getElementById('reviewPanel');
  const visible = panel.style.display === 'block';
  panel.style.display = visible ? 'none' : 'block';
  if (!visible) renderReviewItems();
}

function renderReviewItems(){
  const items = [];
  if (state.currentTrack === 'kana' && state.currentKanaType){
    const data = state.currentKanaType === 'hiragana' ? HIRAGANA : KATAKANA;
    ['main','dakuten','combo'].forEach(group => {
      data[group].forEach((item, idx) => {
        const key = kanaKey(state.currentKanaType, group, idx);
        if (!isItemMastered(key, 'kana')) items.push({ label:item[0], sub:item[1], type:'kana', key });
      });
    });
  } else if (state.currentTrack === 'jlpt' && state.currentJLPTLevel){
    const lvl = JLPT_DATA[state.currentJLPTLevel];
    lvl.vocab.forEach((item, idx) => {
      const key = vocabKey(state.currentJLPTLevel, idx);
      if (!isItemMastered(key, 'vocab')) items.push({ label:item[1] || item[0], sub:localizeMeaning(item[2]), type:'vocab', key });
    });
    lvl.kanji.forEach((item, idx) => {
      const key = kanjiKey(state.currentJLPTLevel, idx);
      if (!isItemMastered(key, 'kanji')) items.push({ label:item[0], sub:localizeMeaning(item[2]), type:'kanji', key });
    });
  } else if (state.currentTrack === 'jft' && state.currentJFTCategory){
    const cat = JFT_DATA.categories[state.currentJFTCategory];
    cat.items.forEach((item, idx) => {
      const key = phraseKey('jft_'+state.currentJFTCategory, idx);
      if (!isItemMastered(key, 'phrase')) items.push({ label:item.jp, sub:localizeMeaning(item.id), type:'phrase', key });
    });
  } else if (state.currentTrack === 'listening' && state.currentListeningLevel){
    const lvl = LISTENING_DATA[state.currentListeningLevel];
    lvl.phrases.forEach((item, idx) => {
      const key = phraseKey(state.currentListeningLevel, idx);
      if (!isItemMastered(key, 'phrase')) items.push({ label:item[0], sub:localizeMeaning(item[1]), type:'phrase', key });
    });
  } else {
    HIRAGANA.combo.forEach((item, idx) => {
      const key = kanaKey('hiragana','combo',idx);
      if (!isItemMastered(key, 'kana')) items.push({ label:item[0], sub:item[1], type:'kana', key });
    });
    KATAKANA.combo.forEach((item, idx) => {
      const key = kanaKey('katakana','combo',idx);
      if (!isItemMastered(key, 'kana')) items.push({ label:item[0], sub:item[1], type:'kana', key });
    });
  }
  const reviewContainer = document.getElementById('reviewItems');
  reviewContainer.innerHTML = '';
  if (items.length === 0){
    reviewContainer.textContent = getString('noItemsToReview');
    return;
  }
  items.slice(0, 8).forEach(item => {
    const div = document.createElement('div');
    div.className = 'review-item';
    const left = document.createElement('div');
    const strength = getMasteryStrength(item.key, item.type);
    const strengthPct = (strength / MASTERY_MAX) * 100;
    left.innerHTML = `
      <div class="item-label">${escapeHtml(item.label)}</div>
      <div class="item-sub">${escapeHtml(item.sub)}</div>
      <div class="mastery-meter" aria-label="Mastery ${strength}/${MASTERY_MAX}">
        <div style="width:${strengthPct}%"></div>
      </div>
      <div class="mastery-text">${getMasteryText(item.key, item.type)}</div>
    `;
    
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '8px';
    
    const viewButton = document.createElement('button');
    viewButton.className = 'view-button';
    viewButton.textContent = getString('viewButton');
    viewButton.addEventListener('click', () => focusReviewItem(item.label));
    
    const markButton = document.createElement('button');
    markButton.className = 'mark-button';
    markButton.textContent = `${getString('masterButton')} ✓`;
    markButton.addEventListener('click', () => markReviewItemMastered(item));
    
    div.appendChild(left);
    buttonContainer.appendChild(viewButton);
    buttonContainer.appendChild(markButton);
    div.appendChild(buttonContainer);
    reviewContainer.appendChild(div);
  });
}

function markReviewItemMastered(item){
  const result = adjustMasteryStrength(item.key, item.type, 1);
  persistProgress();
  updateMasteredBadge();
  state.reviewProgressAllowed = true;
  handleReviewProgress();
  state.reviewProgressAllowed = false;
  renderReviewItems();
  if (result.masteredNow){
    showToast(state.language === 'en' ? `${item.label} mastered!` : `${item.label} dikuasai!`);
  } else {
    showToast(state.language === 'en'
      ? `${item.label} progress ${result.after}/${MASTERY_MAX}`
      : `Progress ${item.label} ${result.after}/${MASTERY_MAX}`);
  }
}

function toggleManualMastery(key, type, container){
  const wasMastered = isItemMastered(key, type);
  setMasteryStrength(key, type, wasMastered ? 0 : MASTERY_MAX);
  if (container) container.classList.toggle("learned", !wasMastered);
  updateMasteredBadge();
  persistProgress();
  showToast(!wasMastered
    ? (state.language === 'en' ? "Marked as mastered ✓" : "Ditandai dikuasai ✓")
    : (state.language === 'en' ? "Mastery mark removed" : "Tanda dikuasai dihapus"));
}

function focusReviewItem(label){
  showToast(state.language === 'en'
    ? `${label} - press "Master ✓" to mark it as mastered`
    : `${label} - tekan "Kuasai ✓" untuk tandai sebagai dikuasai`);
}

function handleReviewProgress(){
  if (!state.reviewProgressAllowed) return;
  completeDailyMission('review', 1);
}

function handleQuizCompletion(){
  completeDailyMission('quiz', 1);
}

function addAutoMasterKey(key){
  setMasteryStrength(key, inferMasteryTypeFromKey(key), MASTERY_MAX);
}

function autoMasterQuizItem(item){
  if (item && item.masterKey){
    addAutoMasterKey(item.masterKey);
    updateMasteredBadge();
  }
}

function autoMasterQuizResults(){
  persistProgress();
  updateMasteredBadge();
}

function awardQuizRewards(){
  const threshold = Math.ceil(state.quiz.questions.length * 0.7);
  if (state.quiz.score >= threshold){
    state.currency += 10;
    awardXp(20);
    showToast(getString('autoMastered'));
  }
  handleQuizCompletion();
}

function getCurrentMissionSummary(){
  return state.dailyMissions.map(m => `${m.label} (${m.progress}/${m.target})`).join(' • ');
}

function refreshLocalization(){
  applyLanguage();
  document.querySelectorAll('.jp-eyebrow').forEach(el => {
    if (state.language === 'en' && el.textContent === '復習') el.textContent = 'Review';
  });
}

function refreshCurrentView(){
  if (state.view === "quiz") return;
  if (state.view === "overview"){
    renderKanaOverview();
    renderJLPTOverview();
    renderJFTOverview();
    renderListeningOverview();
    return;
  }
  if (state.currentTrack === "kana" && state.currentKanaType) {
    const isHira = state.currentKanaType === "hiragana";
    document.getElementById("kanaHeroSub").textContent = isHira
      ? (state.language === 'en' ? "Basic script for native Japanese words" : "Aksara dasar untuk kata-kata asli Jepang")
      : (state.language === 'en' ? "Script for loanwords and foreign names" : "Aksara untuk kata serapan dan nama asing");
    renderKanaContent(state.currentKanaType);
  }
  else if (state.currentTrack === "jlpt" && state.currentJLPTLevel) {
    const lvl = JLPT_DATA[state.currentJLPTLevel];
    document.getElementById("jlptHeroSub").textContent = localizeMeaning(lvl.subtitle) + ` · ${lvl.kanjiCount} ${localizeMeaning("kanji resmi")}`;
    renderJLPTContent();
  }
  else if (state.currentTrack === "jft" && state.currentJFTCategory) {
    document.getElementById("jftHeroTitle").textContent = localizeMeaning(JFT_DATA.categories[state.currentJFTCategory].title);
    renderJFTPhraseList(state.currentJFTCategory);
  }
  else if (state.currentTrack === "listening" && state.currentListeningLevel) {
    const levelKey = state.currentListeningLevel;
    const lvl = LISTENING_DATA[levelKey];
    document.getElementById("listeningHeroTitle").textContent = lvl.title + " - " + localizeMeaning(lvl.subtitle);
    document.getElementById("listeningDesc").textContent = localizeMeaning(lvl.desc);
    const pointsList = document.getElementById("listeningPoints");
    pointsList.innerHTML = "";
    lvl.points.forEach(p=>{
      const li = document.createElement("li");
      li.textContent = localizeMeaning(p);
      pointsList.appendChild(li);
    });
    renderPhraseList(levelKey);
  }
}

function applyInitialSettings(){
  applyLanguage();
  applyTheme();
  updateProgressPanel();
}

function initializeServerTime(){
  getServerTime().then(serverDate => {
    updateDailyStreak(serverDate);
    updateProgressPanel();
  });
}

function initializeApp(){
  loadProgress();
  if (!state.lastActiveDay) resetDailyMissions();
  if (!StorageLayer.isAvailable()){
    document.getElementById('storageNotice').classList.add('show');
  }
  applyInitialSettings();
  initializeServerTime();
}

function startApp(){
  initializeApp();
}

function escapeHtml(str){
  if (str === undefined || str === null) return "";
  return String(str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function shuffle(arr){
  const a = arr.slice();
  for (let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ---------- Text to speech ----------
let japaneseVoices = [];

function loadJapaneseVoices(){
  if (!('speechSynthesis' in window)) return [];
  const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
  japaneseVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("ja"));
  return japaneseVoices;
}

function primeSpeechSynthesis(){
  loadJapaneseVoices();
}

if ('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = loadJapaneseVoices;
  document.addEventListener('pointerdown', primeSpeechSynthesis, { once:true });
  document.addEventListener('touchstart', primeSpeechSynthesis, { once:true });
}

function speakJapanese(text, rate){
  try{
    if (!('speechSynthesis' in window)) { showToast("Text-to-speech tidak didukung di browser ini"); return; }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ja-JP";
    const voices = japaneseVoices.length ? japaneseVoices : loadJapaneseVoices();
    const jpVoice = voices[0];
    if (jpVoice) utter.voice = jpVoice;
    utter.rate = rate || state.speed || 0.85;
    window.speechSynthesis.speak(utter);
  }catch(e){
    showToast(state.language === 'en' ? "Audio could not play on this device" : "Suara belum bisa diputar di perangkat ini");
  }
}

function speakWithShadowPause(text, rate, onDone){
  speakJapanese(text, rate);
  if (state.shadowMode){
    // crude estimate: ~ (chars * 200ms / rate) + 1500ms pause for user to repeat
    const estMs = Math.min(6000, Math.max(1200, text.length * 220 / (rate||0.85)));
    setTimeout(()=>{ if (onDone) onDone(); }, estMs + 1800);
  } else if (onDone){
    setTimeout(onDone, 300);
  }
}

function romajiToKatakana(input){
  if (!input) return "";
  let text = String(input).toLowerCase().replace(/[^a-z-]/g, "");
  if (!text) return "";
  const map = {
    kya:"キャ", kyu:"キュ", kyo:"キョ", sha:"シャ", shu:"シュ", sho:"ショ",
    cha:"チャ", chu:"チュ", cho:"チョ", nya:"ニャ", nyu:"ニュ", nyo:"ニョ",
    hya:"ヒャ", hyu:"ヒュ", hyo:"ヒョ", mya:"ミャ", myu:"ミュ", myo:"ミョ",
    rya:"リャ", ryu:"リュ", ryo:"リョ", gya:"ギャ", gyu:"ギュ", gyo:"ギョ",
    ja:"ジャ", ju:"ジュ", jo:"ジョ", bya:"ビャ", byu:"ビュ", byo:"ビョ",
    pya:"ピャ", pyu:"ピュ", pyo:"ピョ", shi:"シ", chi:"チ", tsu:"ツ", fu:"フ",
    a:"ア", i:"イ", u:"ウ", e:"エ", o:"オ",
    ka:"カ", ki:"キ", ku:"ク", ke:"ケ", ko:"コ",
    sa:"サ", su:"ス", se:"セ", so:"ソ",
    ta:"タ", te:"テ", to:"ト",
    na:"ナ", ni:"ニ", nu:"ヌ", ne:"ネ", no:"ノ",
    ha:"ハ", hi:"ヒ", he:"ヘ", ho:"ホ",
    ma:"マ", mi:"ミ", mu:"ム", me:"メ", mo:"モ",
    ya:"ヤ", yu:"ユ", yo:"ヨ",
    ra:"ラ", ri:"リ", ru:"ル", re:"レ", ro:"ロ",
    wa:"ワ", wo:"ヲ", n:"ン",
    ga:"ガ", gi:"ギ", gu:"グ", ge:"ゲ", go:"ゴ",
    za:"ザ", ji:"ジ", zu:"ズ", ze:"ゼ", zo:"ゾ",
    da:"ダ", di:"ヂ", du:"ヅ", de:"デ", do:"ド",
    ba:"バ", bi:"ビ", bu:"ブ", be:"ベ", bo:"ボ",
    pa:"パ", pi:"ピ", pu:"プ", pe:"ペ", po:"ポ"
  };
  let out = "";
  while (text.length){
    if (text[0] === "-"){
      out += "ー";
      text = text.slice(1);
      continue;
    }
    if (text.length > 1 && text[0] === text[1] && !"aeioun".includes(text[0])){
      out += "ッ";
      text = text.slice(1);
      continue;
    }
    let matched = false;
    for (const size of [3,2,1]){
      const chunk = text.slice(0, size);
      if (map[chunk]){
        out += map[chunk];
        text = text.slice(size);
        matched = true;
        break;
      }
    }
    if (!matched) text = text.slice(1);
  }
  return out;
}

function getKanjiSpeechText(reading, fallbackChar){
  const raw = String(reading || "");
  const firstReading = raw.split("/")[0].split(/[,(]/)[0].trim();
  const firstKana = raw.match(/[ぁ-ゖァ-ヺー]+/u);
  return romajiToKatakana(firstReading) || (firstKana ? firstKana[0] : "") || fallbackChar;
}

// ============================================================
// RENDER: Overview grids
// ============================================================
function renderKanaOverview(){
  const grid = document.getElementById("kanaLevelGrid");
  grid.innerHTML = "";

  const defs = [
    { key:"hiragana", label:"ひらがな", title:"Hiragana", sub: state.language === 'en' ? "Basic script for native Japanese words" : "Aksara dasar untuk kata asli Jepang", color:"var(--indigo)", data:HIRAGANA },
    { key:"katakana", label:"カタカナ", title:"Katakana", sub: state.language === 'en' ? "Script for loanwords and foreign names" : "Aksara untuk kata serapan asing", color:"var(--hanko)", data:KATAKANA }
  ];

  defs.forEach(def => {
    const keys = [
      ...def.data.main.map((_,i)=>kanaKey(def.key,"main",i)),
      ...def.data.dakuten.map((_,i)=>kanaKey(def.key,"dakuten",i)),
      ...def.data.combo.map((_,i)=>kanaKey(def.key,"combo",i))
    ];
    const total = keys.length;
    const mastered = countMasteredKeys(keys, 'kana');
    const pct = getMasteryPercent(keys, 'kana');
    const isMastered = pct === 100;

    const card = document.createElement("button");
    card.className = "level-card" + (isMastered ? " mastered" : "");
    card.onclick = () => openKanaLevel(def.key);
    card.innerHTML = `
      <div class="hanko-stamp">済</div>
      <div class="lv-tag" style="color:${def.color}; font-size:20px;">${def.label}</div>
      <span class="lv-sub">${def.sub}</span>
      <div class="lv-progress"><div style="width:${pct}%; background:${def.color}"></div></div>
      <div class="lv-stats">${mastered}/${total} ${localizeMeaning("dikuasai")}</div>
    `;
    grid.appendChild(card);
  });
}

function renderJLPTOverview(){
  const grid = document.getElementById("jlptLevelGrid");
  grid.innerHTML = "";
  JLPT_ORDER.forEach(levelKey => {
    const lvl = JLPT_DATA[levelKey];
    const vocabKeys = lvl.vocab.map((_,i) => vocabKey(levelKey,i));
    const kanjiKeys = lvl.kanji.map((_,i) => kanjiKey(levelKey,i));
    const totalItems = vocabKeys.length + kanjiKeys.length;
    const masteredItems = countMasteredKeys(vocabKeys, 'vocab') + countMasteredKeys(kanjiKeys, 'kanji');
    const totalStrength = vocabKeys.reduce((sum, key) => sum + getMasteryStrength(key, 'vocab'), 0)
      + kanjiKeys.reduce((sum, key) => sum + getMasteryStrength(key, 'kanji'), 0);
    const pct = totalItems ? Math.round((totalStrength / (totalItems * MASTERY_MAX)) * 100) : 0;
    const isMastered = pct === 100;

    const card = document.createElement("button");
    card.className = "level-card" + (isMastered ? " mastered" : "");
    card.onclick = () => openJLPTLevel(levelKey);
    card.innerHTML = `
      <div class="hanko-stamp">済</div>
      <div class="lv-tag" style="color:${lvl.color}">${levelKey}</div>
      <span class="lv-sub">${escapeHtml(localizeMeaning(lvl.subtitle))}</span>
      <div class="lv-progress"><div style="width:${pct}%; background:${lvl.color}"></div></div>
      <div class="lv-stats">${masteredItems}/${totalItems} ${localizeMeaning("dikuasai")} &middot; ${lvl.kanjiCount} ${localizeMeaning("kanji resmi")}</div>
    `;
    grid.appendChild(card);
  });
}

function renderJFTOverview(){
  document.getElementById("jftFullName").textContent = JFT_DATA.overview.fullName;
  document.getElementById("jftDesc").textContent = localizeMeaning(JFT_DATA.overview.desc);
  const secWrap = document.getElementById("jftSections");
  secWrap.innerHTML = "";
  JFT_DATA.overview.sections.forEach(s => {
    const span = document.createElement("span");
    span.textContent = s;
    secWrap.appendChild(span);
  });

  const grid = document.getElementById("jftCatGrid");
  grid.innerHTML = "";
  JFT_ORDER.forEach(catKey => {
    const cat = JFT_DATA.categories[catKey];
    const keys = cat.items.map((_,i)=>phraseKey("jft_"+catKey,i));
    const mastered = countMasteredKeys(keys, 'phrase');
    const card = document.createElement("button");
    card.className = "jft-cat-card";
    card.onclick = () => openJFTCategory(catKey);
    card.innerHTML = `
      <span class="jcc-icon">${cat.icon}</span>
      <div class="jcc-title">${escapeHtml(localizeMeaning(cat.title))}</div>
      <div class="jcc-count">${mastered}/${cat.items.length} ${localizeMeaning("dikuasai")}</div>
    `;
    grid.appendChild(card);
  });
}

function renderListeningOverview(){
  const grid = document.getElementById("listeningLevelGrid");
  grid.innerHTML = "";
  LISTENING_ORDER.forEach(levelKey => {
    const lvl = LISTENING_DATA[levelKey];
    const keys = lvl.phrases.map((_,i) => phraseKey(levelKey,i));
    const total = keys.length;
    const mastered = countMasteredKeys(keys, 'phrase');
    const pct = getMasteryPercent(keys, 'phrase');
    const isMastered = pct === 100;

    const card = document.createElement("button");
    card.className = "level-card" + (isMastered ? " mastered" : "");
    card.onclick = () => openListeningLevel(levelKey);
    card.innerHTML = `
      <div class="hanko-stamp">済</div>
      <div class="lv-tag" style="color:${lvl.color}">${levelKey}</div>
      <span class="lv-sub">${escapeHtml(localizeMeaning(lvl.subtitle))}</span>
      <div class="lv-progress"><div style="width:${pct}%; background:${lvl.color}"></div></div>
      <div class="lv-stats">${mastered}/${total} ${localizeMeaning("frasa dikuasai")}</div>
    `;
    grid.appendChild(card);
  });
}

// ============================================================
// NAVIGATION
// ============================================================
function switchTrack(track){
  state.currentTrack = track;
  document.getElementById("trackKana").classList.toggle("active", track === "kana");
  document.getElementById("trackJLPT").classList.toggle("active", track === "jlpt");
  document.getElementById("trackJFT").classList.toggle("active", track === "jft");
  document.getElementById("trackListening").classList.toggle("active", track === "listening");
  showOverview();
}

function showOverview(){
  state.view = "overview";
  document.getElementById("overviewKana").style.display = state.currentTrack === "kana" ? "" : "none";
  document.getElementById("overviewJLPT").style.display = state.currentTrack === "jlpt" ? "" : "none";
  document.getElementById("overviewJFT").style.display = state.currentTrack === "jft" ? "" : "none";
  document.getElementById("overviewListening").style.display = state.currentTrack === "listening" ? "" : "none";

  document.getElementById("detailKana").classList.remove("active");
  document.getElementById("detailJLPT").classList.remove("active");
  document.getElementById("detailJFT").classList.remove("active");
  document.getElementById("detailListening").classList.remove("active");
  document.getElementById("quizScreen").classList.remove("active");

  renderKanaOverview();
  renderJLPTOverview();
  renderJFTOverview();
  renderListeningOverview();
  window.scrollTo({top:0, behavior:"instant"});
}

function goBack(){
  if (state.view === "detail") showOverview();
}

function hideAllDetailViews(){
  document.getElementById("overviewKana").style.display = "none";
  document.getElementById("overviewJLPT").style.display = "none";
  document.getElementById("overviewJFT").style.display = "none";
  document.getElementById("overviewListening").style.display = "none";
  document.getElementById("detailKana").classList.remove("active");
  document.getElementById("detailJLPT").classList.remove("active");
  document.getElementById("detailJFT").classList.remove("active");
  document.getElementById("detailListening").classList.remove("active");
}

function openKanaLevel(typeKey){
  state.currentKanaType = typeKey;
  state.view = "detail";
  hideAllDetailViews();
  document.getElementById("detailKana").classList.add("active");

  const isHira = typeKey === "hiragana";
  document.getElementById("kanaHeroChar").textContent = isHira ? "あ" : "ア";
  document.getElementById("kanaHeroChar").style.color = isHira ? "var(--indigo)" : "var(--hanko)";
  document.getElementById("kanaHeroTitle").textContent = isHira ? "Hiragana" : "Katakana";
  document.getElementById("kanaHeroSub").textContent = isHira
    ? (state.language === 'en' ? "Basic script for native Japanese words" : "Aksara dasar untuk kata-kata asli Jepang")
    : (state.language === 'en' ? "Script for loanwords and foreign names" : "Aksara untuk kata serapan dan nama asing");

  renderKanaContent(typeKey);
  window.scrollTo({top:0, behavior:"instant"});
}

function renderKanaContent(typeKey){
  const data = typeKey === "hiragana" ? HIRAGANA : KATAKANA;
  const container = document.getElementById("kanaContent");
  container.innerHTML = "";

  const groups = [
    { key:"main", label:"Dasar (Gojuuon)" },
    { key:"dakuten", label:"Dakuten / Handakuten (Bunyi Bertitik)" },
    { key:"combo", label:"Youon / Kombinasi" }
  ];

  groups.forEach(g => {
    const label = document.createElement("div");
    label.className = "kana-section-label";
    label.textContent = g.label;
    container.appendChild(label);

    const grid = document.createElement("div");
    grid.className = "kana-grid";
    data[g.key].forEach((item, idx) => {
      const [char, romaji] = item;
      const key = kanaKey(typeKey, g.key, idx);
      const learned = isItemMastered(key, 'kana');
      const card = document.createElement("button");
      card.className = "kana-card" + (learned ? " learned" : "");
      card.innerHTML = `<span class="kn-char">${escapeHtml(char)}</span><span class="kn-romaji">${escapeHtml(romaji)}</span>`;
      card.onclick = () => openKanaModal(typeKey, g.key, idx);
      grid.appendChild(card);
    });
    container.appendChild(grid);
  });
}

function openJLPTLevel(levelKey){
  state.currentJLPTLevel = levelKey;
  state.currentJLPTSubtab = "vocab";
  state.view = "detail";
  hideAllDetailViews();
  document.getElementById("detailJLPT").classList.add("active");

  const lvl = JLPT_DATA[levelKey];
  document.getElementById("jlptHeroKanji").textContent = levelKey;
  document.getElementById("jlptHeroKanji").style.color = lvl.color;
  document.getElementById("jlptHeroTitle").textContent = lvl.title;
  document.getElementById("jlptHeroSub").textContent = localizeMeaning(lvl.subtitle) + ` · ${lvl.kanjiCount} ${localizeMeaning("kanji resmi")}`;

  document.querySelectorAll("#jlptSubtabRow button").forEach(b=>{
    b.classList.toggle("active", b.dataset.sub === "vocab");
  });

  renderJLPTContent();
  window.scrollTo({top:0, behavior:"instant"});
}

function openJFTCategory(catKey){
  state.currentJFTCategory = catKey;
  state.view = "detail";
  hideAllDetailViews();
  document.getElementById("detailJFT").classList.add("active");

  const cat = JFT_DATA.categories[catKey];
  document.getElementById("jftHeroIcon").textContent = cat.icon;
  document.getElementById("jftHeroTitle").textContent = localizeMeaning(cat.title);

  renderJFTPhraseList(catKey);
  window.scrollTo({top:0, behavior:"instant"});
}

function openListeningLevel(levelKey){
  state.currentListeningLevel = levelKey;
  state.view = "detail";
  hideAllDetailViews();
  document.getElementById("detailListening").classList.add("active");

  const lvl = LISTENING_DATA[levelKey];
  document.getElementById("listeningHeroKanji").textContent = levelKey;
  document.getElementById("listeningHeroKanji").style.color = lvl.color;
  document.getElementById("listeningHeroTitle").textContent = lvl.title + " - " + localizeMeaning(lvl.subtitle);
  document.getElementById("listeningHeroSub").textContent =
    state.language === 'en'
      ? "Stage " + (LISTENING_ORDER.indexOf(levelKey) + 1) + " of 7 in the Listening path"
      : "Tahap " + (LISTENING_ORDER.indexOf(levelKey) + 1) + " dari 7 dalam jalur Listening";
  document.getElementById("listeningDesc").textContent = localizeMeaning(lvl.desc);

  const pointsList = document.getElementById("listeningPoints");
  pointsList.innerHTML = "";
  lvl.points.forEach(p=>{
    const li = document.createElement("li");
    li.textContent = localizeMeaning(p);
    pointsList.appendChild(li);
  });

  renderPhraseList(levelKey);
  window.scrollTo({top:0, behavior:"instant"});
}

function switchSubtab(track, sub){
  if (track === "jlpt"){
    state.currentJLPTSubtab = sub;
    document.querySelectorAll("#jlptSubtabRow button").forEach(b=>{
      b.classList.toggle("active", b.dataset.sub === sub);
    });
    renderJLPTContent();
    window.scrollTo({top:0, behavior:"instant"});
  }
}

// ============================================================
// RENDER: JLPT content
// ============================================================
function renderJLPTContent(){
  const container = document.getElementById("jlptContent");
  const levelKey = state.currentJLPTLevel;
  const lvl = JLPT_DATA[levelKey];
  const sub = state.currentJLPTSubtab;

  if (sub === "vocab"){
    container.innerHTML = `<div class="vocab-list" id="vocabList"></div>`;
    const list = document.getElementById("vocabList");
    lvl.vocab.forEach((item, idx) => {
      const [kana, kanji, indo, romaji] = item;
      const key = vocabKey(levelKey, idx);
      const learned = isItemMastered(key, 'vocab');
      const div = document.createElement("div");
      div.className = "vocab-item" + (learned ? " learned" : "");
      div.innerHTML = `
        <div class="vi-left">
          <div class="vi-jp">
            <span>${escapeHtml(kanji && kanji !== kana ? kanji : kana)}</span>
            ${kanji && kanji !== kana ? `<span class="vi-kana">${escapeHtml(kana)}</span>` : ""}
          </div>
          <div class="vi-id">${escapeHtml(localizeMeaning(indo))}</div>
          <div class="vi-romaji">${escapeHtml(romaji)}</div>
        </div>
        <button class="mastery-toggle vi-check" type="button" aria-label="${state.language === 'en' ? 'Toggle mastered' : 'Tandai dikuasai'}">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
        </button>
      `;
      div.querySelector(".mastery-toggle").addEventListener("click", () => toggleManualMastery(key, 'vocab', div));
      list.appendChild(div);
    });
  }

  else if (sub === "kanji"){
    container.innerHTML = `<div class="kanji-grid" id="kanjiGrid"></div>`;
    const grid = document.getElementById("kanjiGrid");
    lvl.kanji.forEach((item, idx) => {
      const [char, reading] = item;
      const key = kanjiKey(levelKey, idx);
      const learned = isItemMastered(key, 'kanji');
      const card = document.createElement("button");
      card.className = "kanji-card" + (learned ? " learned" : "");
      card.innerHTML = `
        <div class="tian-box"><span>${escapeHtml(char)}</span></div>
        <div class="kanji-reading">${escapeHtml(reading.split("/")[0].trim())}</div>
      `;
      card.onclick = () => openKanjiModal(levelKey, idx);
      grid.appendChild(card);
    });
  }

  else if (sub === "grammar"){
    container.innerHTML = `<div class="grammar-list" id="grammarList"></div>`;
    const list = document.getElementById("grammarList");
    lvl.grammar.forEach(g => {
      const card = document.createElement("div");
      card.className = "grammar-card";
      card.innerHTML = `
        <div class="gc-pattern">${escapeHtml(g.pattern)}</div>
        <div class="gc-meaning">${escapeHtml(localizeMeaning(g.meaning))}</div>
        <div class="gc-example">
          <div class="ex-jp">${escapeHtml(g.example)}</div>
          <div class="ex-id">${escapeHtml(localizeMeaning(g.translation))}</div>
        </div>
        <div class="gc-note"><span>💡</span><span>${escapeHtml(localizeMeaning(g.note))}</span></div>
      `;
      list.appendChild(card);
    });
  }
}

// ============================================================
// RENDER: JFT phrase list
// ============================================================
function renderJFTPhraseList(catKey){
  const cat = JFT_DATA.categories[catKey];
  const list = document.getElementById("jftPhraseList");
  list.innerHTML = "";
  const levelKeyForStorage = "jft_" + catKey;
  cat.items.forEach((item, idx) => {
    const key = phraseKey(levelKeyForStorage, idx);
    const learned = isItemMastered(key, 'phrase');
    const div = document.createElement("div");
    div.className = "phrase-item" + (learned ? " learned" : "");
    div.innerHTML = `
      <div class="ph-num">${String(idx+1).padStart(2,"0")}</div>
      <div class="ph-content">
        <div class="ph-jp">${escapeHtml(item.jp)}</div>
        <div class="ph-id">${escapeHtml(localizeMeaning(item.id))}</div>
        <div class="ph-romaji">${escapeHtml(item.romaji)}</div>
        <div class="ph-ctx">${escapeHtml(localizeMeaning(item.ctx))}</div>
      </div>
      <div class="ph-play" aria-label="Putar audio">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <button class="mastery-toggle ph-master" type="button" aria-label="${state.language === 'en' ? 'Toggle mastered' : 'Tandai dikuasai'}">
        <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
      </button>
    `;
    div.querySelector(".ph-play").addEventListener("click", (e)=>{
      e.stopPropagation();
      speakJapanese(item.jp);
    });
    div.querySelector(".mastery-toggle").addEventListener("click", () => toggleManualMastery(key, 'phrase', div));
    list.appendChild(div);
  });
}

// ============================================================
// RENDER: Listening phrase list
// ============================================================
function renderPhraseList(levelKey){
  const lvl = LISTENING_DATA[levelKey];
  const list = document.getElementById("phraseList");
  list.innerHTML = "";
  lvl.phrases.forEach((item, idx) => {
    const [jp, indo, romaji, tag] = item;
    const key = phraseKey(levelKey, idx);
    const learned = isItemMastered(key, 'phrase');
    const div = document.createElement("div");
    div.className = "phrase-item" + (learned ? " learned" : "");
    div.innerHTML = `
      <div class="ph-num">${String(idx+1).padStart(2,"0")}</div>
      <div class="ph-content">
        <div class="ph-jp">${escapeHtml(jp)}</div>
        <div class="ph-id">${escapeHtml(localizeMeaning(indo))}</div>
        <div class="ph-romaji">${escapeHtml(romaji)}</div>
        ${tag ? `<div class="ph-ctx">${escapeHtml(localizeMeaning(tag))}</div>` : ""}
      </div>
      <div class="ph-play" aria-label="Putar audio">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <button class="mastery-toggle ph-master" type="button" aria-label="${state.language === 'en' ? 'Toggle mastered' : 'Tandai dikuasai'}">
        <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
      </button>
    `;
    const playBtn = div.querySelector(".ph-play");
    playBtn.addEventListener("click", (e)=>{
      e.stopPropagation();
      speakWithShadowPause(jp, state.speed, () => {
        if (state.shadowMode) showToast(state.language === 'en' ? "Your turn to shadow! 🎙️" : "Giliranmu menirukan! 🎙️");
      });
    });
    div.querySelector(".mastery-toggle").addEventListener("click", () => toggleManualMastery(key, 'phrase', div));
    list.appendChild(div);
  });
}

function toggleShadowMode(){
  state.shadowMode = !state.shadowMode;
  document.getElementById("shadowToggle").classList.toggle("on", state.shadowMode);
  showToast(state.shadowMode ? "Mode shadowing aktif 🎙️" : "Mode shadowing nonaktif");
}

// speed buttons
document.addEventListener("click", (e)=>{
  const btn = e.target.closest("#speedButtons button");
  if (!btn) return;
  document.querySelectorAll("#speedButtons button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  state.speed = parseFloat(btn.dataset.speed);
  showToast("Kecepatan: " + btn.textContent);
});

// ============================================================
// MODAL: Kanji & Kana detail
// ============================================================
function openKanjiModal(levelKey, idx){
  const item = JLPT_DATA[levelKey].kanji[idx];
  const [char, reading, meaning, example] = item;
  const speechText = getKanjiSpeechText(reading, char);
  state.modalContext = { kind:"kanji", key: kanjiKey(levelKey, idx), char, reading, speechText };

  document.getElementById("modalKanjiChar").textContent = char;
  document.getElementById("modalKanjiReading").textContent = reading;
  document.getElementById("modalKanjiMeaning").textContent = localizeMeaning(meaning);
  document.getElementById("modalExampleRow").style.display = "";
  document.getElementById("modalKanjiExample").textContent = example;

  refreshModalMasterButton();
  document.getElementById("kanjiModal").classList.add("active");
}

function openKanaModal(typeKey, group, idx){
  const data = (typeKey === "hiragana" ? HIRAGANA : KATAKANA)[group][idx];
  const [char, romaji] = data;
  state.modalContext = { kind:"kana", key: kanaKey(typeKey, group, idx), char };
  // Render character(s) with separate spans for large + small kana so combos (youon) display correctly
  const modalCharEl = document.getElementById("modalKanjiChar");
  const smallKana = new Set(['ぁ','ぃ','ぅ','ぇ','ぉ','ゃ','ゅ','ょ','ゎ','ゕ','ゖ','っ','ァ','ィ','ゥ','ェ','ォ','ャ','ュ','ョ','ヮ','ッ']);
  if (group === 'combo' || char.length > 1){
    let html = "";
    for (const ch of char){
      if (smallKana.has(ch)){
        const isKatakanaSmall = /[ァィゥェォャュョヮッ]/.test(ch);
        const cls = isKatakanaSmall ? 'kn-small kn-small-katakana' : 'kn-small';
        html += `<span class="${cls}">${escapeHtml(ch)}</span>`;
      } else {
        html += `<span class="kn-large">${escapeHtml(ch)}</span>`;
      }
    }
    modalCharEl.innerHTML = html;
  } else {
    modalCharEl.textContent = char;
  }

  document.getElementById("modalKanjiReading").textContent = romaji;
  document.getElementById("modalKanjiMeaning").textContent = typeKey === "hiragana"
    ? (state.language === 'en' ? "Basic Japanese phonetic script" : "Aksara fonetik dasar Jepang")
    : (state.language === 'en' ? "Script for loanwords and foreign names" : "Aksara untuk kata serapan dan nama asing");
  document.getElementById("modalExampleRow").style.display = "none";

  refreshModalMasterButton();
  document.getElementById("kanjiModal").classList.add("active");
}

function refreshModalMasterButton(){
  const ctx = state.modalContext;
  const masterBtn = document.getElementById("modalMasterBtn");
  const itemType = ctx.kind === "kanji" ? "kanji" : "kana";
  const isMastered = isItemMastered(ctx.key, itemType);
  masterBtn.textContent = isMastered
    ? (state.language === 'en' ? "✓ Mastered" : "✓ Sudah Dikuasai")
    : (state.language === 'en' ? `Mark as Mastered (${getMasteryText(ctx.key, itemType)})` : `Tandai Dikuasai (${getMasteryText(ctx.key, itemType)})`);
  masterBtn.classList.toggle("is-active", isMastered);
}

function speakModalChar(){
  if (!state.modalContext) return;
  const text = state.modalContext.kind === "kanji"
    ? state.modalContext.speechText
    : state.modalContext.char;
  speakJapanese(text, 0.7);
}

function closeModal(){
  document.getElementById("kanjiModal").classList.remove("active");
  if (state.view === "detail"){
    if (state.currentTrack === "jlpt" && state.currentJLPTSubtab === "kanji") renderJLPTContent();
    if (state.currentTrack === "kana") renderKanaContent(state.currentKanaType);
  }
  renderJLPTOverview();
  renderKanaOverview();
  updateMasteredBadge();
}

function closeModalOutside(e){ if (e.target.id === "kanjiModal") closeModal(); }

function toggleMastered(){
  const ctx = state.modalContext;
  const itemType = ctx.kind === "kanji" ? "kanji" : "kana";
  if (isItemMastered(ctx.key, itemType)){
    setMasteryStrength(ctx.key, itemType, 0);
  } else {
    setMasteryStrength(ctx.key, itemType, MASTERY_MAX);
    const label = ctx.kind === "kanji" ? "Kanji" : (state.language === 'en' ? "Character" : "Aksara");
    showToast(label + (state.language === 'en' ? " mastered ✓" : " dikuasai ✓"));
  }
  refreshModalMasterButton();
  updateMasteredBadge();
  persistProgress();
}

// ============================================================
// QUIZ
// ============================================================
function buildJLPTQuiz(levelKey){
  const lvl = JLPT_DATA[levelKey];
  const questions = [];
  lvl.vocab.forEach((item, idx) => {
    const [kana, kanji, indo] = item;
    const display = kanji && kanji !== kana ? kanji : kana;
    const wrongPool = lvl.vocab.filter(v => v[2] !== indo).map(v => v[2]);
    const wrongs = shuffle(wrongPool).slice(0,3);
    questions.push({
      type:"vocab",
      label: state.language === 'en' ? "語彙 - What does this word mean?" : "語彙 — Apa arti kata ini?",
      jp:display,
      sub: kana !== display ? kana : "",
      options: shuffle([indo, ...wrongs]),
      correct: indo,
      masterKey: vocabKey(levelKey, idx),
      correctlyAnswered: false
    });
  });
  lvl.kanji.forEach((item, idx) => {
    const [char, reading, meaning] = item;
    const wrongPool = lvl.kanji.filter(k => k[2] !== meaning).map(k => k[2]);
    const wrongs = shuffle(wrongPool).slice(0,3);
    questions.push({
      type:"kanji",
      label: state.language === 'en' ? "漢字 - What does this kanji mean?" : "漢字 — Apa arti kanji ini?",
      jp:char,
      sub:reading,
      options: shuffle([meaning, ...wrongs]),
      correct: meaning,
      masterKey: kanjiKey(levelKey, idx),
      correctlyAnswered: false
    });
  });
  return shuffle(questions).slice(0, Math.min(10, questions.length));
}

function buildListeningQuiz(levelKey){
  const lvl = LISTENING_DATA[levelKey];
  const questions = [];
  lvl.phrases.forEach((item, idx)=>{
    const [jp, indo] = item;
    const wrongPool = lvl.phrases.filter(p => p[1] !== indo).map(p => p[1]);
    const wrongs = shuffle(wrongPool).slice(0,3);
    questions.push({
      type:"phrase",
      label: state.language === 'en' ? "聴解 - What does this phrase mean?" : "聴解 — Apa arti frasa ini?",
      jp,
      sub:"",
      options: shuffle([indo, ...wrongs]),
      correct: indo,
      playable:true,
      masterKey: phraseKey(levelKey, idx),
      correctlyAnswered: false
    });
  });
  return shuffle(questions).slice(0, Math.min(10, questions.length));
}

function buildKanaQuiz(typeKey){
  const data = typeKey === "hiragana" ? HIRAGANA : KATAKANA;
  const all = [...data.main, ...data.dakuten, ...data.combo];
  const questions = [];
  all.forEach((item, idx) => {
    const [char, romaji] = item;
    const wrongPool = all.filter(k => k[1] !== romaji).map(k => k[1]);
    const wrongs = shuffle(wrongPool).slice(0,3);
    const group = idx < data.main.length ? 'main' : idx < data.main.length + data.dakuten.length ? 'dakuten' : 'combo';
    const relativeIndex = idx < data.main.length ? idx : idx < data.main.length + data.dakuten.length ? idx - data.main.length : idx - data.main.length - data.dakuten.length;
    questions.push({
      type:"kana",
      label: state.language === 'en' ? "アクセント - What sound is this character?" : "アクセント — Bunyi aksara ini?",
      jp:char,
      sub:"",
      options: shuffle([romaji, ...wrongs]),
      correct: romaji,
      masterKey: kanaKey(typeKey, group, relativeIndex),
      correctlyAnswered: false
    });
  });
  return shuffle(questions).slice(0, Math.min(12, questions.length));
}

function startQuiz(track){
  let questions, title;
  if (track === "jlpt"){
    questions = buildJLPTQuiz(state.currentJLPTLevel);
    title = `クイズ ${state.currentJLPTLevel}`;
  } else if (track === "listening"){
    questions = buildListeningQuiz(state.currentListeningLevel);
    title = `クイズ ${state.currentListeningLevel}`;
  } else if (track === "kana"){
    questions = buildKanaQuiz(state.currentKanaType);
    title = state.currentKanaType === "hiragana" ? "クイズ ひらがな" : "クイズ カタカナ";
  }

  if (!questions || questions.length === 0){ showToast(state.language === 'en' ? "No questions for this level yet" : "Belum ada soal untuk level ini"); return; }

  state.quiz = {
    track,
    level: track === "jlpt" ? state.currentJLPTLevel : track === "listening" ? state.currentListeningLevel : state.currentKanaType,
    questions, currentIndex:0, score:0, answered:false, completed:false
  };

  document.getElementById("quizTitle").textContent = title;
  hideAllDetailViews();
  document.getElementById("quizScreen").classList.add("active");
  state.view = "quiz";

  renderQuizQuestion();
  window.scrollTo({top:0, behavior:"instant"});
}

function renderQuizQuestion(){
  const q = state.quiz.questions[state.quiz.currentIndex];
  const total = state.quiz.questions.length;
  document.getElementById("quizProgressFill").style.width = (state.quiz.currentIndex/total*100) + "%";

  const body = document.getElementById("quizBody");
  body.innerHTML = `
    <div class="quiz-question">
      <div class="qq-label">${escapeHtml(q.label)} (${state.quiz.currentIndex+1}/${total})</div>
      <div class="qq-jp">${escapeHtml(q.jp)}</div>
      ${q.sub ? `<div class="qq-sub">${escapeHtml(q.sub)}</div>` : ""}
      ${q.playable ? `<div style="margin-top:10px;"><button id="quizPlayButton" style="background:var(--indigo); color:#fff; border:none; padding:8px 16px; border-radius:10px; font-weight:700; cursor:pointer; font-size:12px;">🔊 ${state.language === 'en' ? 'Play Audio' : 'Putar Audio'}</button></div>` : ""}
    </div>
    <div class="quiz-options" id="quizOptions"></div>
  `;

  const playButton = document.getElementById("quizPlayButton");
  if (playButton) playButton.onclick = () => speakJapanese(q.jp, state.speed);

  const optionsContainer = document.getElementById("quizOptions");
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.dataset.value = opt;
    btn.textContent = localizeMeaning(opt);
    btn.onclick = () => handleQuizAnswer(opt, q.correct);
    optionsContainer.appendChild(btn);
  });

  state.quiz.answered = false;
}

function handleQuizAnswer(selected, correct){
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const currentQuestion = state.quiz.questions[state.quiz.currentIndex];
  currentQuestion.correctlyAnswered = selected === correct;
  if (!currentQuestion.masteryDeltaApplied && currentQuestion.masterKey){
    const result = adjustMasteryStrength(
      currentQuestion.masterKey,
      currentQuestion.type,
      currentQuestion.correctlyAnswered ? 1 : -1
    );
    currentQuestion.masteryDeltaApplied = true;
    currentQuestion.masteryAfter = result.after;
    currentQuestion.masteredNow = result.masteredNow;
    currentQuestion.lostMastery = result.lostMastery;
    persistProgress();
    updateMasteredBadge();
  }
  if (selected === correct) state.quiz.score++;

  document.querySelectorAll("#quizOptions .quiz-option").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.value === correct) btn.classList.add("correct");
    else if (btn.dataset.value === selected) btn.classList.add("incorrect");
  });

  setTimeout(() => {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1){
      state.quiz.currentIndex++;
      renderQuizQuestion();
    } else {
      renderQuizResult();
    }
  }, 900);
}

function renderQuizResult(){
  document.getElementById("quizProgressFill").style.width = "100%";
  const { score, questions, level } = state.quiz;
  const total = questions.length;
  const pct = Math.round((score/total)*100);

  let message;
  if (pct === 100) message = getString('perfectQuiz');
  else if (pct >= 80) message = getString('greatQuiz');
  else if (pct >= 50) message = getString('goodQuiz');
  else message = getString('retryQuizMessage');

  if (!state.quiz.completed){
    state.quiz.completed = true;
    autoMasterQuizResults();
    awardQuizRewards();
  }
  const strengthened = questions.filter(q => q.correctlyAnswered && q.masterKey).length;
  const weakened = questions.filter(q => q.correctlyAnswered === false && q.masterKey).length;
  const newlyMastered = questions.filter(q => q.masteredNow).length;
  const progressSummary = state.language === 'en'
    ? `Mastery: +${strengthened} strengthened, -${weakened} weakened${newlyMastered ? `, ${newlyMastered} mastered` : ''}.`
    : `Mastery: +${strengthened} naik, -${weakened} turun${newlyMastered ? `, ${newlyMastered} dikuasai` : ''}.`;
  const quizResultTitle = getString('quizResultTitle');
  const retryButton = getString('retryButton');
  const finishButton = getString('finishButton');

  document.getElementById("quizBody").innerHTML = `
    <div class="quiz-result">
      <div class="qr-emoji">${score}/${total}</div>
      <h3>結果 Hasil Kuis ${escapeHtml(String(level))}</h3>
      <p>${escapeHtml(message)}</p>
      <p>${escapeHtml(progressSummary)}</p>
      <div>
        <button onclick="retryQuiz()">${retryButton}</button>
        <button class="secondary" onclick="exitQuiz()">${finishButton}</button>
      </div>
    </div>
  `;
  const resultTitle = document.querySelector("#quizBody .quiz-result h3");
  if (resultTitle) resultTitle.textContent = `${quizResultTitle} ${String(level)}`;
}

function retryQuiz(){ startQuiz(state.quiz.track); }

function exitQuiz(){
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quizScreen").classList.remove("active");
  if (state.quiz.track === "jlpt") document.getElementById("detailJLPT").classList.add("active");
  else if (state.quiz.track === "listening") document.getElementById("detailListening").classList.add("active");
  else if (state.quiz.track === "kana") document.getElementById("detailKana").classList.add("active");
  state.view = "detail";
  window.scrollTo({top:0, behavior:"instant"});
}

// ============================================================
// INIT
// ============================================================
initializeApp();
renderKanaOverview();
renderJLPTOverview();
renderJFTOverview();
renderListeningOverview();
updateMasteredBadge();
