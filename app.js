const focus=[
['Niyet ve başlangıç','Haşr 59:18'],['Nefsi tanıma','Şems 91:9–10'],['Dil terbiyesi','Hucurât 49:12'],['Tevazu','Âl-i İmrân 3:134'],['Kul hakkı ve telafi','Nisâ 4:58'],['Gizli sadaka','Bakara 2:271'],['Haftalık muhasebe','Zümer 39:53'],
['Sessiz zikir','Ra’d 13:28'],['Kelime-i tevhid','Muhammed 47:19'],['İhsan bilinci','Cibril hadisi (Müslim, İman)'],['Gün içinde kalp huzuru','Ahzâb 33:41'],['Salavat ve sünnet','Ahzâb 33:56'],['Sessiz murakabe','A’râf 7:205'],['İhlas ve istikamet','Hûd 11:112'],
['Acz ve teslimiyet','Fâtır 35:15'],['Fakr ve şükür','İbrâhîm 14:7'],['Şefkat ve merhamet','Enbiyâ 21:107'],['Yaratılışı tefekkür','Âl-i İmrân 3:190–191'],['Esma tefekkürü','A’râf 7:180'],['Feraset ve delil','İsrâ 17:36'],['Tefekkür muhasebesi','Hac 22:46'],
['İhlas','İnsân 76:8–9'],['Muhabbet ve salavat','Ahzâb 33:56'],['Kalp hayatı','Ra’d 13:28'],['Sabır ve rıza','Bakara 2:153'],['Hizmet','Nisâ 4:36'],['Tevekkül','Âl-i İmrân 3:159'],['Murakabede istikrar','Kaf 50:16'],['Genel muhasebe','Haşr 59:18'],['Şükür ve devamlılık','İbrâhîm 14:7'] ];
const descriptions=['Niyetini yaz, samimi tevbe et.','Öfke, kıskançlık veya takdir beklentini gözlemle.','Gıybetten ve kırıcı sözlerden kaçın.','Hatalı olduğun bir konuda bunu kabul et.','Bir hakkı veya kırgınlığı telafi etmek için adım at.','Kimseye duyurmadan iyilik yap.','Haftanın üç önemli farkındalığını yaz.','5 dakika sessizce Allah’ı hatırla.','Tevhidin anlamı üzerine düşün.','İhsan hadisini oku; gün içinde üç kez hatırla.','Gün içinde üç kısa farkındalık arası ver.','Peygamberimizin merhametinden bir örneği uygula.','12 dakika normal nefesle sessiz murakabe yap.','İmam Rabbânî’nin Mektûbât eserinden ihlas konusunu oku.','Said Nursî’nin acz anlayışı üzerine düşün.','Sahip olduğun nimetleri yaz.','Karşılık beklemeden birine yardım et.','Doğada 20 dakika tefekkür et.','Dört ilahi ismin anlamını araştır.','Bir kararındaki bilgi ve varsayımları ayır.','Âyetü’l-Kübrâ’dan bir bölüm oku.','Gizli iyilik yap, niyetini sorgula.','Salavat ve güzel ahlaka odaklan.','Kalbin Zümrüt Tepeleri’nden murakabe konusunu oku.','Küçük bir zorlukta sabır göster.','Birine zaman ayır veya yardım et.','Somut adım at, sonra sonucu Allah’a bırak.','15 dakika sakin murakabe yap.','İlk günkü niyetini tekrar değerlendir.','Gelecek 90 gün için üç sürdürülebilir alışkanlık seç.'];
const dhikrs=[
["kuddus", "Yâ Kuddûs", "Her türlü eksiklikten uzak, mukaddes.", 170, "يا قدوس", "Geleneksel hedef; قدوس için yaygın ebced hesabı 170."],
["vehhab", "Yâ Vehhâb", "Karşılıksız bağışlayan.", 14, "يا وهاب", "وهاب = 14 (Yâ hariç)."],
["fettah", "Yâ Fettâh", "Kapıları açan, hüküm veren.", 489, "يا فتاح", "فتاح = 489 (Yâ hariç)."],
["alim", "Yâ Alîm", "Her şeyi bilen.", 150, "يا عليم", "عليم = 150 (Yâ hariç)."],
["basit", "Yâ Bâsıt", "Genişleten, ferahlık veren.", 72, "يا باسط", "باسط = 72 (Yâ hariç)."],
["rafi", "Yâ Râfi‘", "Yükselten.", 351, "يا رافع", "رافع = 351 (Yâ hariç)."],
["muizz", "Yâ Muizz", "İzzet ve şeref veren.", 117, "يا معز", "معز = 117 (Yâ hariç)."],
["latif", "Yâ Latîf", "İncelikle lütfeden.", 129, "يا لطيف", "لطيف = 129 (Yâ hariç). Günlük hedef 129."],
["habir", "Yâ Habîr", "Her şeyden haberdar olan.", 812, "يا خبير", "خبير = 812 (Yâ hariç)."],
["halim", "Yâ Halîm", "Yumuşak davranan, cezalandırmakta acele etmeyen.", 88, "يا حليم", "حليم = 88 (Yâ hariç)."],
["vedud", "Yâ Vedûd", "Çok seven, sevgiye layık olan.", 400, "يا ودود", "ودود = 20 (و=6, د=4, و=6, د=4); 400 geleneksel evrad hedefidir."],
["kaviyy", "Yâ Kaviyy", "Sonsuz kuvvet sahibi.", 116, "يا قوي", "قوي = 116 (Yâ hariç)."],
["muhsi", "Yâ Muhsî", "Her şeyi sayıp bilen.", 148, "يا محصي", "محصي = 148 (Yâ hariç)."],
["batin", "Yâ Bâtın", "Mahiyeti duyularla kavranamayan.", 62, "يا باطن", "باطن = 62 (Yâ hariç)."],
["nur", "Yâ Nûr", "Nurlandıran, nurun kaynağı.", 256, "يا نور", "نور = 256 (Yâ hariç)."],
["bedi", "Yâ Bedî‘", "Eşsiz biçimde yaratan.", 86, "يا بديع", "بديع = 86 (Yâ hariç)."],
["baki", "Yâ Bâkî", "Varlığı son bulmayan.", 113, "يا باقي", "باقي = 113 (Yâ hariç)."],
["lahavle", "Lâ havle ve lâ kuvvete illâ billâh", "Güç ve kuvvet ancak Allah’ın yardımıyladır.", 100, "لا حول ولا قوة إلا بالله", "100: günlük hedef; ebced sayısı değildir."],
["hasbunallah", "Hasbünallâhu ve ni‘mel vekîl", "Allah bize yeter, O ne güzel vekildir.", 100, "حسبنا الله ونعم الوكيل", "Âl-i İmrân 3:173; 100: günlük hedef."],
["hasbiyallah", "Hasbiyallâhu lâ ilâhe illâ Hû", "Allah bana yeter; O’ndan başka ilah yoktur.", 7, "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم", "Tevbe 9:129; 7: seçilen tekrar hedefi."],
["istigfar", "Estağfirullah", "Allah’tan bağışlanma dilerim.", 100, "أستغفر الله", "100: günlük hedef."],
["tevhid", "Lâ ilâhe illallah", "Allah’tan başka ilah yoktur.", 100, "لا إله إلا الله", "100: günlük hedef."],
["subhan", "Sübhânallâhi ve bihamdihî", "Allah’ı hamdiyle tesbih ederim.", 100, "سبحان الله وبحمده", "100 tekrar hakkında sahih rivayetler vardır."],
["vahdehu", "Lâ ilâhe illallâhu vahdehû lâ şerîke leh", "Allah’tan başka ilah yoktur; O tektir, ortağı yoktur.", 100, "لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير", "100 tekrar hakkında sahih rivayetler vardır; tam lafız gösterilir."]
];

// Manevi odaklar geleneksel tefekkür önerileridir; belirli sonuçların garantisi değildir.
const esmaOdaklari={
 kuddus:'Kalp temizliği, kötü alışkanlıklardan uzaklaşma ve arınma niyetiyle dua ve tefekkür.',
 vehhab:'Karşılıksız ihsanı hatırlamak; şükür, cömertlik ve hayırlı nimet istemek.',
 fettah:'Hayırlı kapıların açılması, doğru çözüm ve kolaylık için dua etmek.',
 alim:'Faydalı ilim, öğrenme ve doğru bilgiye yönelmek.',
 basit:'Gönül ferahlığı, ümit ve paylaşma üzerinde düşünmek.',
 rafi:'Manevi olgunlaşma ve güzel ahlakla yükselmek için dua etmek.',
 muizz:'İzzeti Allah’tan bilmek; onur, tevazu ve dürüstlük istemek.',
 latif:'Allah’ın ince lütfunu hatırlamak; nezaket, şefkat ve kolaylık dilemek.',
 habir:'Allah’ın her şeyden haberdar olduğunu hatırlayıp niyeti ve davranışları gözden geçirmek.',
 halim:'Öfkeyi yönetmek, sabır ve yumuşak huyluluk geliştirmek.',
 vedud:'Allah’ın sevgisini anmak; sevgi, merhamet ve aile bağlarını güçlendirmek.',
 kaviyy:'Güçlüklerde sebat, sorumluluk ve hayırlı kuvvet istemek.',
 muhsi:'Davranışlarının hesabını düşünmek, düzen ve öz muhasebe yapmak.',
 batin:'Görünenden ötesinde Allah’ın bilgisi olduğunu hatırlamak; tevazu ve ihlas.',
 nur:'Hidayet, kalp aydınlığı ve doğruyu ayırt edebilme için dua etmek.',
 bedi:'Yaratılışın eşsizliğini tefekkür etmek; şükür ve yaratıcılığa değer vermek.',
 baki:'Dünyanın geçiciliğini ve kalıcı iyilikleri hatırlamak.'
};
const duaOdaklari={
 lahavle:'Kendi gücünün sınırlarını kabul edip Allah’tan yardım istemek.',
 hasbunallah:'Tevekkül ve güven; tedbiri aldıktan sonra sonucu Allah’a bırakmak.',
 hasbiyallah:'Allah’a dayanmak ve korku karşısında tevekkülü hatırlamak.',
 istigfar:'Hatalardan dönmek, bağışlanma istemek ve telafiye yönelmek.',
 tevhid:'Allah’ın birliğini ve ibadette ihlası hatırlamak.',
 subhan:'Allah’ı tenzih ve hamd ile anmak; şükür bilincini artırmak.',
 vahdehu:'Tevhid, hamd, mülkün Allah’a ait oluşu ve kudretini tefekkür etmek.'
};

const ayetler=[
['Haşr 59:18','Ey iman edenler! Allah’a karşı sorumluluğunuzun bilincinde olun; herkes yarın için ne hazırladığına baksın.'],
['Şems 91:9–10','Nefsini arındıran kurtuluşa erer; onu kötülüğe gömen ise kaybeder.'],
['Hucurât 49:12','Zannın çoğundan sakının; birbirinizin kusurlarını araştırmayın, gıybet etmeyin.'],
['Âl-i İmrân 3:134','Takva sahipleri bollukta da darlıkta da verir; öfkelerini yener ve insanları affeder.'],
['Nisâ 4:58','Allah emanetleri ehline vermenizi ve insanlar arasında adaletle hükmetmenizi emreder.'],
['Bakara 2:271','Sadakayı açıkça vermek güzeldir; yoksullara gizlice vermek sizin için daha hayırlıdır.'],
['Zümer 39:53','Allah’ın rahmetinden ümit kesmeyin; Allah bütün günahları bağışlayabilir.'],
['Ra’d 13:28','Kalpler ancak Allah’ı anmakla huzur bulur.'],
['Muhammed 47:19','Allah’tan başka ilah olmadığını bil ve bağışlanma dile.'],
['Ahzâb 33:41','Ey iman edenler, Allah’ı çokça anın.'],
['Ahzâb 33:41–42','Allah’ı çokça anın; sabah akşam O’nu tesbih edin.'],
['Ahzâb 33:56','Allah ve melekleri Peygamber’e salât eder; iman edenler de ona salât ve selam getirsin.'],
['A’râf 7:205','Rabbini içinden, yalvararak ve saygıyla, sabah akşam an; gafillerden olma.'],
['Hûd 11:112','Emrolunduğun gibi dosdoğru ol.'],
['Fâtır 35:15','Ey insanlar, Allah’a muhtaç olan sizsiniz; Allah ise hiçbir şeye muhtaç değildir.'],
['İbrâhîm 14:7','Şükrederseniz nimetimi artırırım.'],
['Enbiyâ 21:107','Seni ancak âlemlere rahmet olarak gönderdik.'],
['Âl-i İmrân 3:190–191','Göklerin ve yerin yaratılışında, gece ile gündüzün değişmesinde akıl sahipleri için deliller vardır.'],
['A’râf 7:180','En güzel isimler Allah’ındır; O’na o isimlerle dua edin.'],
['İsrâ 17:36','Hakkında bilgin olmayan şeyin ardına düşme; kulak, göz ve kalp sorumludur.'],
['Hac 22:46','Kör olan gözler değil, göğüslerdeki kalplerdir.'],
['İnsân 76:8–9','Yemeği, sevdikleri hâlde muhtaçlara verirler; karşılık ve teşekkür beklemezler.'],
['Ahzâb 33:56','Peygamber’e salât ve selam getirin.'],
['Ra’d 13:28','Kalpler Allah’ı anmakla huzur bulur.'],
['Bakara 2:153','Sabır ve namazla yardım isteyin; Allah sabredenlerle beraberdir.'],
['Nisâ 4:36','Allah’a kulluk edin; anne babaya, akrabaya, komşulara ve ihtiyaç sahiplerine iyilik edin.'],
['Âl-i İmrân 3:159','Kararını verdikten sonra Allah’a tevekkül et.'],
['Kaf 50:16','İnsanı yarattık; nefsinin ona fısıldadığını biliriz.'],
['Haşr 59:18','Herkes yarın için ne hazırladığına baksın.'],
['İbrâhîm 14:7','Şükrederseniz nimetimi artırırım.']];
const hadisler=[
['Niyet','Ameller niyetlere göredir.','Buhârî, Bed’ü’l-vahy 1; Müslim, İmâre 155'],
['İhsan','Allah’ı görüyormuşçasına ibadet etmendir; sen O’nu görmesen de O seni görür.','Müslim, Îmân 1 (Cibril hadisi)'],
['Devamlılık','Allah’a en sevimli amel, az da olsa devamlı olanıdır.','Buhârî, Rikâk 18; Müslim, Müsâfirîn 216'],
['Merhamet','Merhamet etmeyene merhamet edilmez.','Buhârî, Edeb 18; Müslim, Fezâil 65'],
['Güzel söz','Allah’a ve ahiret gününe inanan ya hayır söylesin ya sussun.','Buhârî, Edeb 31; Müslim, Îmân 74'],
['Öfke','Güçlü kişi güreşte yenen değil, öfkelendiğinde kendine hâkim olandır.','Buhârî, Edeb 76; Müslim, Birr 107'],
['Kardeşlik','Kendisi için sevdiğini kardeşi için de sevmedikçe imanını olgunlaştırmış olmaz.','Buhârî, Îmân 7; Müslim, Îmân 71'],
['Kolaylık','Din kolaylıktır; kim dini aşırı zorlaştırırsa güç yetiremez.','Buhârî, Îmân 29']];
const readingNotes=[
'Gazâlî: Niyetin doğruluğunu günlük davranışlarınla sınamaya çalış.',
'Gazâlî: Nefsin eğilimlerini suçlayıcı değil dürüst bir gözlemle tanı.',
'Gazâlî: Dilin korunması kalbin terbiyesinin görünür işaretidir.',
'Abdülkâdir Geylânî geleneği: Tevazu, hizmet ve içten tevbe üzerinde düşün.',
'Kul hakkı: Manevi disiplinin adalet ve telafiden ayrı olmadığını hatırla.',
'İhlas: Gizli iyilikte takdir beklentini fark et.',
'Haftalık muhasebe: En belirgin huy değişimini yaz.',
'Nakşibendî gelenek: Sessiz zikri gündelik hayatın içine taşı.',
'Tevhid: Bağlılıklarını ve korkularını dürüstçe gözden geçir.',
'Cibril hadisi: İhsan, olağanüstü görüntü değil Allah’ın huzurunda yaşama bilincidir.',
'Kalp huzuru: İşini yaparken dikkati ve ahlakı koru.',
'Salavat: Merhameti davranışa dönüştür.',
'Murakabe: Dikkat dağıldığında sakin biçimde yeniden odaklan.',
'İmam Rabbânî: İstikamet ve sünnete bağlılık, manevi iddialardan önce gelir.',
'Said Nursî: Acz, insanın sınırlarını kabul etmesidir.',
'Said Nursî: Fakr, insanın nimetlere muhtaçlığını fark etmesidir.',
'Said Nursî: Şefkat, kalp terbiyesinin toplumsal meyvesidir.',
'Said Nursî: Tefekkürde yaratılışın işaretlerini düşün.',
'Esma tefekkürü: İsimlerin anlamını davranışlarınla ilişkilendir.',
'Basiret: Sezgi ile doğrulanabilir bilgiyi ayır.',
'Said Nursî: Tefekkürden doğan sorumlulukları yaz.',
'İhlas: Kimsenin bilmediği bir iyilik yap.',
'Muhabbet: Güzel ahlakı görünür kıl.',
'Kalbin Zümrüt Tepeleri yaklaşımı: Muhasebe ve murakabeyi gündelik yaşama taşı.',
'Sabır: Tepkini geciktir, sonra adaletle hareket et.',
'Hizmet: Birine somut yarar sağla.',
'Tevekkül: Önce tedbir, sonra teslimiyet.',
'Murakabe: Olağanüstü tecrübe aramadan ihsanı hatırla.',
'Muhasebe: İlk niyetinle bugünkü davranışlarını karşılaştır.',
'İstikamet: Önümüzdeki 90 gün için sürdürülebilir üç alışkanlık belirle.'];
const KEY='kalp-yolculugu-v1';let state;try{state=JSON.parse(localStorage.getItem(KEY))||{}}catch{state={}};state.tasks ||= {};state.readings ||= {};state.counts ||= {};state.targets ||= {};state.journals ||= {};state.murakaba ||= {};state.day ||= 1;if(Number(state.targets.latif)===1269)state.targets.latif=129;let day=state.day;const $=id=>document.getElementById(id),save=()=>localStorage.setItem(KEY,JSON.stringify(state)),key=(d,x)=>`${d}:${x}`;
function taskDefs(d){return [['sabah','Sabah zikirleri','İstiğfar, tevhid, salavat ve dua'],['kuran','Kur’an ve meal','Günün ayetlerini oku'],['ozel',focus[d-1][0],descriptions[d-1]],['murakaba','Murakabe','En az 5 dakika sessiz tefekkür'],['muhasebe','Akşam muhasebesi','Günün değerlendirmesini yaz']]}function taskCount(d){return taskDefs(d).filter(t=>state.tasks[key(d,t[0])]).length}function renderHome(){state.day=day;save();$('todayLabel').textContent=`Gün ${day} / 30`;$('dayFocus').textContent=`${focus[day-1][0]} · ${focus[day-1][1]}`;let c=taskCount(day);$('progressLabel').textContent=`${c}/5 · %${c*20}`;$('progressBar').style.width=`${c*20}%`;$('tasks').innerHTML='';taskDefs(day).forEach(([id,title,desc])=>{let el=document.createElement('div');el.className='task';let cb=document.createElement('input');cb.type='checkbox';cb.checked=!!state.tasks[key(day,id)];cb.onchange=()=>{state.tasks[key(day,id)]=cb.checked;save();renderHome()};let label=document.createElement('label');label.textContent=title;let sm=document.createElement('small');sm.textContent=desc;label.append(sm);el.append(cb,label);$('tasks').append(el)});$('days').innerHTML='';for(let i=1;i<=30;i++){let b=document.createElement('button');b.className='day'+(i===day?' selected':'')+(taskCount(i)===5?' done':'');b.textContent=i;b.onclick=()=>{day=i;renderAll()};$('days').append(b)}}
function renderDhikr(){let id=$('dhikrSelect').value||dhikrs[0][0],entry=dhikrs.find(x=>x[0]===id),n=state.counts[key(day,id)]||0,target=state.targets[id]||entry[3];$('dhikrMeaning').textContent='Anlamı: '+entry[2];$('dhikrPurpose').textContent='Ne için okunur? '+(esmaOdaklari[id]||duaOdaklari[id]||'Dua, zikir ve tefekkür için.');$('dhikrArabic').textContent=entry[4];$('dhikrEbced').textContent=entry[5];$('dhikrCount').textContent=n;$('dhikrTarget').value=target;const done=n>=target;$('tapDhikr').disabled=done;$('tapDhikr').textContent=done?'✓ Zikir tamamlandı':'+1 Zikir';$('dhikrStatus').textContent=done?'Elhamdülillah, zikir tamamlandı.':`Hedefe ${Math.max(0,target-n)} zikir kaldı.`;$('dhikrBar').style.width=`${Math.min(100,n/target*100)}%`;$('dhikrSummary').innerHTML='';dhikrs.forEach(x=>{let p=document.createElement('div');p.className='row';p.style.padding='7px 0';let a=document.createElement('span');a.textContent=x[1];let b=document.createElement('strong');b.textContent=`${state.counts[key(day,x[0])]||0} / ${state.targets[x[0]]||x[3]}`;p.append(a,b);$('dhikrSummary').append(p)})}
const dailyReadingGoals=[['yarimcuz','Kur’an-ı Kerim · Yarım cüz','Günlük hedef: ½ cüz (yaklaşık 10 sayfa; mushaf baskısına göre değişebilir).'],['risale10','Risale-i Nur · 10 sayfa','Okuduğun baskıdaki 10 sayfayı tamamlayınca işaretle.'],['pirlanta10','Pırlanta · 10 sayfa','Günlük 10 sayfa; hangi ciltte kaldığını muhasebe notuna yazabilirsin.'],['cevsen10','Cevşen · 10 bab','Her gün 10 bab oku; takip ettiğin bölüm aralığını not edebilirsin.'],['kulub1','Kulûbü’d-Dâria · 1 sayfa','Günlük 1 sayfa; kullandığın baskıya göre ilerle.']];
function renderReading(){let a=ayetler[day-1],h=hadisler[(day-1)%hadisler.length];let arr=[...dailyReadingGoals,['ayet','Kur’an · '+a[0],a[1]+'\n\nNot: Bu metin ayetin kısa anlam özetidir, birebir meal değildir.'],['hadis','Hadis · '+h[0],h[1]+'\nKaynak: '+h[2]],['eser','Manevi okuma ve tefekkür',readingNotes[day-1]],['tefekkur','Günün uygulaması',descriptions[day-1]]];$('readings').innerHTML='';arr.forEach(([id,title,desc])=>{let el=document.createElement('div');el.className='reading';let cb=document.createElement('input');cb.type='checkbox';cb.checked=!!state.readings[key(day,id)];cb.onchange=()=>{state.readings[key(day,id)]=cb.checked;save();if(id==='ayet'){state.tasks[key(day,'kuran')]=cb.checked;save();renderHome()}};let t=document.createElement('strong');t.textContent=' '+title;let sm=document.createElement('small');sm.style.whiteSpace='pre-line';sm.style.fontSize='14px';sm.style.lineHeight='1.65';sm.textContent=desc;el.append(cb,t,sm);$('readings').append(el)})}
function renderProgress(){$('totalTasks').textContent=Object.values(state.tasks).filter(Boolean).length;$('completedDays').textContent=Array.from({length:30},(_,i)=>taskCount(i+1)===5).filter(Boolean).length;$('totalDhikr').textContent=Object.values(state.counts).reduce((a,b)=>a+(Number(b)||0),0);$('totalMurakaba').textContent=Object.values(state.murakaba).reduce((a,b)=>a+(Number(b)||0),0);$('journalDay').textContent=`Gün ${day} — ${focus[day-1][0]}`;$('journal').value=state.journals[day]||''}
function renderAll(){renderHome();renderDhikr();renderReading();renderProgress()}
dhikrs.forEach(x=>{let o=document.createElement('option');o.value=x[0];o.textContent=x[1];$('dhikrSelect').append(o)});$('dhikrSelect').onchange=renderDhikr;$('dhikrTarget').onchange=()=>{let id=$('dhikrSelect').value;state.targets[id]=Math.max(1,Math.min(10000,Number($('dhikrTarget').value)||1));save();renderDhikr()};function adjust(n){let id=$('dhikrSelect').value,k=key(day,id);state.counts[k]=Math.max(0,(state.counts[k]||0)+n);save();renderDhikr()}$('tapDhikr').onclick=()=>{const id=$('dhikrSelect').value,entry=dhikrs.find(x=>x[0]===id),target=Math.max(1,Number(state.targets[id]||entry[3])),current=Number(state.counts[key(day,id)]||0);if(current>=target)return;adjust(1);const left=target-current-1;if(navigator.vibrate){if(left===0)navigator.vibrate([350,100,450]);else if(left===1)navigator.vibrate(180);else if(left===2)navigator.vibrate(110);else if(left===3)navigator.vibrate(65);else navigator.vibrate(12)}};$('minusDhikr').onclick=()=>adjust(-1);$('resetDhikr').onclick=()=>{if(confirm('Bu zikrin bugünkü sayacı sıfırlansın mı?')){state.counts[key(day,$('dhikrSelect').value)]=0;save();renderDhikr()}};$('prevDay').onclick=()=>{day=Math.max(1,day-1);renderAll()};$('nextDay').onclick=()=>{day=Math.min(30,day+1);renderAll()};document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));$(b.dataset.tab).classList.remove('hidden');document.querySelectorAll('[data-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.tab==='progress')renderProgress()});$('saveJournal').onclick=()=>{state.journals[day]=$('journal').value;state.tasks[key(day,'muhasebe')]=!!state.journals[day].trim();save();renderHome();renderProgress();$('saveMessage').textContent='Not kaydedildi.'};
let remaining=600,running=false,interval=null,finishMinutes=10;function clock(){let m=Math.floor(remaining/60),s=remaining%60;$('timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}function stop(){running=false;clearInterval(interval);interval=null}function resetClock(){stop();remaining=Number($('minutes').value)*60;clock();$('timerMessage').textContent=''}$('minutes').onchange=resetClock;$('startTimer').onclick=()=>{if(running)return;running=true;finishMinutes=Number($('minutes').value);$('timerMessage').textContent='Murakabe sürüyor.';interval=setInterval(()=>{remaining--;clock();if(remaining<=0){stop();state.murakaba[day]=(state.murakaba[day]||0)+finishMinutes;state.tasks[key(day,'murakaba')]=true;save();renderHome();$('timerMessage').textContent='Murakabe tamamlandı ve kaydedildi.';if(navigator.vibrate)navigator.vibrate([100,80,100])}},1000)};$('pauseTimer').onclick=()=>{stop();$('timerMessage').textContent='Duraklatıldı.'};$('resetTimer').onclick=resetClock;
$('exportData').onclick=()=>{let blob=new Blob([JSON.stringify({app:'Kalp Yolculuğu',version:1,data:state},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='kalp-yolculugu-yedek.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};$('importData').onclick=()=>$('importFile').click();$('importFile').onchange=async e=>{let f=e.target.files[0];if(!f)return;try{let obj=JSON.parse(await f.text());if(obj.app!=='Kalp Yolculuğu'||!obj.data||typeof obj.data!=='object')throw Error('Geçersiz yedek');if(!confirm('Mevcut veriler yedekteki verilerle değiştirilsin mi?'))return;state=obj.data;state.tasks||={};state.readings||={};state.counts||={};state.targets||={};state.journals||={};state.murakaba||={};day=Math.min(30,Math.max(1,Number(state.day)||1));save();renderAll();alert('Yedek yüklendi.')}catch(err){alert('Yedek okunamadı: '+err.message)}e.target.value=''};renderAll();clock();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

// V7: Yerel, çevrimdışı kitap arşivi. Telifli kitaplar paketlenmez.
(()=>{
const DB='kalp-kitaplar-v7',STORE='books';let currentUrl=null,currentId=null;
const $b=id=>document.getElementById(id);
function db(){return new Promise((resolve,reject)=>{let r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE,{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function txn(mode,fn){let d=await db();return new Promise((resolve,reject)=>{let tr=d.transaction(STORE,mode),req=fn(tr.objectStore(STORE));req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);tr.oncomplete=()=>d.close();tr.onerror=()=>reject(tr.error)})}
const all=()=>txn('readonly',s=>s.getAll()),get=id=>txn('readonly',s=>s.get(id)),put=o=>txn('readwrite',s=>s.put(o)),del=id=>txn('readwrite',s=>s.delete(id));
function msg(s){$b('bookMessage').textContent=s}
async function render(){try{let items=await all(),list=$b('bookList');list.replaceChildren();if(!items.length){let p=document.createElement('p');p.className='muted';p.textContent='Henüz kitap eklenmedi.';list.append(p)}for(let item of items){let line=document.createElement('div');line.className='reading';let name=document.createElement('strong');name.textContent=item.name;name.style.display='block';name.style.overflowWrap='anywhere';let details=document.createElement('small');details.textContent=(item.type==='pdf'?'PDF':'EPUB')+' · '+(item.page||1)+'. sayfa yer imi';let actions=document.createElement('div');actions.className='actions';let open=document.createElement('button');open.textContent=item.type==='pdf'?'Oku':'EPUB’u aç / indir';open.onclick=()=>openBook(item.id);let remove=document.createElement('button');remove.className='danger';remove.textContent='Sil';remove.onclick=async()=>{if(confirm('Bu kitabı cihazdan silmek istiyor musun?')){await del(item.id);if(currentId===item.id)close();render()}};actions.append(open,remove);line.append(name,details,actions);list.append(line)}}catch(e){msg('Kitap listesi açılamadı: '+e.message)}}
function close(){if(currentUrl)URL.revokeObjectURL(currentUrl);currentUrl=null;currentId=null;$b('bookFrame').removeAttribute('src');$b('bookViewerPanel').classList.add('hidden')}
async function openBook(id){try{let item=await get(id);if(!item)return;close();let url=URL.createObjectURL(item.blob);if(item.type==='epub'){let a=document.createElement('a');a.href=url;a.download=item.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);msg('EPUB cihazının kitap okuyucusunda açılabilir. Uygulama içi EPUB okuyucu sonraki aşamada.');return}currentUrl=url;currentId=id;$b('bookViewerTitle').textContent=item.name;$b('bookPage').value=item.page||1;$b('bookFrame').src=url+'#page='+(item.page||1);$b('bookViewerPanel').classList.remove('hidden');$b('bookViewerPanel').scrollIntoView({behavior:'smooth'});}catch(e){msg('Kitap açılamadı: '+e.message)}}
$b('bookFile').addEventListener('change',async e=>{let files=[...e.target.files];for(let f of files){let type=/\.pdf$/i.test(f.name)?'pdf':/\.epub$/i.test(f.name)?'epub':null;if(!type){msg('Yalnızca PDF ve EPUB kabul edilir.');continue}try{await put({id:crypto.randomUUID(),name:f.name,type,blob:f,page:1,added:Date.now()});msg(f.name+' eklendi.')}catch(err){msg('Kaydedilemedi (depolama dolmuş olabilir): '+err.message)}}e.target.value='';render()});
$b('closeBook').onclick=close;
$b('bookPage').onchange=async e=>{if(!currentId)return;let n=Math.max(1,Math.floor(Number(e.target.value)||1));let item=await get(currentId);if(!item)return;item.page=n;await put(item);$b('bookFrame').src=currentUrl+'#page='+n;render()};
render();
})();


// V7.1: Kişisel Kur’an meali EPUB okuyucu. İçerikler uygulama paketine eklenmez.
(()=>{
const $q=id=>document.getElementById(id);let active=null, chapters=[],chapterIndex=0;
const database=()=>new Promise((resolve,reject)=>{let req=indexedDB.open('kalp-kuran-mealleri',1);req.onupgradeneeded=()=>req.result.createObjectStore('meals',{keyPath:'id'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});
async function transact(mode,operation){let db=await database();return new Promise((resolve,reject)=>{let tx=db.transaction('meals',mode),req=operation(tx.objectStore('meals'));req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);tx.oncomplete=()=>db.close();tx.onerror=()=>reject(tx.error)})}
const getAll=()=>transact('readonly',s=>s.getAll()),get=id=>transact('readonly',s=>s.get(id)),put=o=>transact('readwrite',s=>s.put(o)),remove=id=>transact('readwrite',s=>s.delete(id));
const note=t=>$q('quranMessage').textContent=t;
async function list(){let entries=await getAll(),host=$q('quranBooks');host.replaceChildren();if(!entries.length){host.textContent='Henüz meal eklenmedi.';return}for(let b of entries){let line=document.createElement('div');line.className='reading';let title=document.createElement('strong');title.textContent=b.name;let actions=document.createElement('div');actions.className='actions';let open=document.createElement('button');open.textContent='Uygulamada oku';open.onclick=()=>read(b.id);let del=document.createElement('button');del.textContent='Sil';del.className='danger';del.onclick=async()=>{if(confirm('Bu meali cihazdan silmek istiyor musun?')){await remove(b.id);if(active===b.id)$q('quranReader').classList.add('hidden');list()}};actions.append(open,del);line.append(title,actions);host.append(line)}}
const xml=(s)=>new DOMParser().parseFromString(s,'application/xml');
const elements=(root,tag)=>[...root.getElementsByTagName('*')].filter(x=>x.localName===tag);
function normalize(path){let arr=[];for(let segment of path.split('/')){if(segment==='..')arr.pop();else if(segment&&segment!=='.')arr.push(segment)}return arr.join('/')}
async function read(id){try{note('EPUB açılıyor…');let book=await get(id);let zip=await JSZip.loadAsync(book.blob);let container=xml(await zip.file('META-INF/container.xml').async('string'));let rootfile=elements(container,'rootfile')[0];if(!rootfile)throw Error('EPUB paket bilgisi yok');let opfPath=rootfile.getAttribute('full-path');let opf=xml(await zip.file(opfPath).async('string'));let base=opfPath.includes('/')?opfPath.slice(0,opfPath.lastIndexOf('/')+1):'';let manifest={};for(let e of elements(opf,'item'))manifest[e.getAttribute('id')]=e.getAttribute('href');let spine=elements(opf,'itemref');chapters=[];for(let e of spine){let href=manifest[e.getAttribute('idref')];if(!href)continue;let path=normalize(base+decodeURIComponent(href.split('#')[0]));if(zip.file(path))chapters.push({path,title:'Bölüm '+(chapters.length+1)})}if(!chapters.length)throw Error('Okunabilir EPUB bölümü bulunamadı');active=id;chapterIndex=Math.max(0,Math.min(chapters.length-1,book.chapter||0));let sel=$q('quranChapter');sel.replaceChildren();chapters.forEach((c,i)=>{let opt=document.createElement('option');opt.value=i;opt.textContent=c.title;sel.append(opt)});$q('quranTitle').textContent=book.name;$q('quranReader').classList.remove('hidden');await show();$q('quranReader').scrollIntoView({behavior:'smooth'});note('Meal cihazda çevrimdışı okunabilir.')}catch(e){note('EPUB açılamadı: '+e.message)}}
async function show(){if(!active)return;let book=await get(active);let zip=await JSZip.loadAsync(book.blob),c=chapters[chapterIndex];let html=await zip.file(c.path).async('string');let doc=new DOMParser().parseFromString(html,'text/html');for(let el of doc.querySelectorAll('script,style,svg,iframe,object,form'))el.remove();let parts=[];for(let el of doc.body.querySelectorAll('h1,h2,h3,h4,p,li,blockquote')){if(el.closest('p,li,blockquote')!==el){let t=el.textContent.trim();if(t)parts.push(t)}}if(!parts.length)parts=[doc.body.textContent.trim()];$q('quranContent').textContent=parts.join('\n\n');$q('quranContent').scrollTop=0;$q('quranChapter').value=String(chapterIndex);$q('quranPosition').textContent='EPUB bölümü '+(chapterIndex+1)+' / '+chapters.length+' · Bu sayı cüz veya sure numarası değildir.';$q('quranPrev').disabled=chapterIndex===0;$q('quranNext').disabled=chapterIndex===chapters.length-1}
$q('quranFile').onchange=async e=>{let f=e.target.files[0];if(!f)return;try{if(!/\.epub$/i.test(f.name))throw Error('EPUB dosyası seç');await JSZip.loadAsync(f);await put({id:crypto.randomUUID(),name:f.name,blob:f,chapter:0});note('Meal eklendi.');await list()}catch(err){note('Dosya eklenemedi: '+err.message)}e.target.value=''};
$q('quranChapter').onchange=async e=>{chapterIndex=Number(e.target.value);await show()};$q('quranPrev').onclick=async()=>{if(chapterIndex>0){chapterIndex--;await show()}};$q('quranNext').onclick=async()=>{if(chapterIndex<chapters.length-1){chapterIndex++;await show()}};
$q('quranBookmark').onclick=async()=>{if(!active)return;let b=await get(active);b.chapter=chapterIndex;await put(b);note('Kaldığın EPUB bölümü kaydedildi.')};$q('quranClose').onclick=()=>$q('quranReader').classList.add('hidden');list().catch(e=>note('Kütüphane açılamadı: '+e.message));
})();
