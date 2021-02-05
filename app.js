const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
/////////////////
const BotName = 'FDL BOT 0.1'; 
const instagram = 'https://www.instagram.com/febri_swag12';  
const kapanbotaktif = 'TERGANTUNG INTERNET'; 
//const youtube = 'belum ada youtube';
//const grupch1 = 'belum ada grup';
//const grupch2 = 'belum ada grup' ; 
const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReclientectMode,
    ProxyAgent,
    waChatKey,
} = require("@adiwajshing/baileys")

var jam = moment().format("HH:mm")

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const client = new WAConnection()
client.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp!`);
});

client.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = client.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
// uncomment the following line to proxy the clientection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//client.clientectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
client.clientect();

client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log('Bot by ig:@AriiqChan._')
client.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by ig:@reuz.id`)
})

client.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// Groups

if (text.includes("!buatgrup"))
   {
var nama = text.split("!buatgrup")[1].split("-nomor")[0];
var nom = text.split("-nomor")[1];
var numArray = nom.split(",");
for ( var i = 0; i < numArray.length; i++ ) {
    numArray[i] = numArray[i] +"@s.whatsapp.net";
}
var str = numArray.join("");
console.log(str)
const group = await client.groupCreate (nama, str)
console.log ("Grup telah dibuat dengan id: " + group.gid)
client.sendMessage(group.gid, "Halo semua!!!", MessageType.extendedText) // say hello to everyone on the group

}
//chat
if (text == 'halo')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'hai')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'assalamualaikum')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'bro')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'p')
{
client.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'test')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HALO')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Halo')
{
client.sendMessage(id, tambahan.halo ,MessageType.text);
}
else if (text == 'Hai')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'Assalamualaikum')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'Bro')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'P')
{
client.sendMessage(id, tambahan.p ,MessageType.text);
}
else if (text == 'Test')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
else if (text == 'HAI')
{
client.sendMessage(id, tambahan.hai ,MessageType.text);
}
else if (text == 'ASSALAMUALAIKUM')
{
client.sendMessage(id, tambahan.ass ,MessageType.text);
}
else if (text == 'BRO')
{
client.sendMessage(id, tambahan.bro ,MessageType.text);
}
else if (text == 'TEST')
{
  client.sendMessage(id, tambahan.test, MessageType.text);
}
// Fitur
if(text.includes("!cek")){
var num = text.replace(/!cek/ , "")
var idn = num.replace("0","+62");

console.log(id);
const gg = idn

const exists = await client.isOnWhatsApp (gg)
console.log(exists);
client.sendMessage(id ,`nomor hp ${gg} ${exists ? " tersedia " : " tidak tersedia"} di whatsapp`, MessageType.text)
}

if (text.includes("!say")){
  const teks = text.replace(/!say /, "")
client.sendMessage(id, teks, MessageType.text)
}

if (text.includes("!nulis")){
  const teks = text.replace(/!nulis /, "")
axios.get(`https://mhankbarbar.herokuapp.com/nulis?text=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Silahkan download hasil dibawah ini agar hasilnya lebih bagus! ðŸ‘Œ\n\n${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ytmp3")){
const teks = text.replace(/!ytmp3 /, "")
axios.get(`https://st4rz.herokuapp.com/api/yta?url=${teks}`).then((res) => {
    let hasil = `Audio telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nJudul: ${res.data.title}\n\nUkuran audio: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!yt")){
const teks = text.replace(/!yt /, "")
axios.get(`https://st4rz.herokuapp.com/api/ytv?url=${teks}`).then((res) => {
    let hasil = `Video telah tersedia pada link di bawah, silahkan klik link dan download hasilnya\nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nJudul: ${res.data.title}\n\nUkuran video: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/epbe?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nJudul: ${res.data.title}\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!ig")){
const teks = text.replace(/!ig /, "")
axios.get(`https://st4rz.herokuapp.com/api/ig?url=${teks}`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nUkuran: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

if (text.includes("!twt")){
const teks = text.replace(/!twt /, "")
axios.get(`https://mhankbarbar.herokuapp.com/api/twit?url=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then((res) => {
    let hasil = `Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nSize: ${res.data.filesize}\n\nLink: ${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!tiktok")) {
const tictoc = text.replace(/!tiktok /, "")
axios.get(`https://st4rz.herokuapp.com/api/tiktok?url=${tictoc}`).then((res) => {
     let titoe = `Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \nðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡ðŸ‘‡\n\nJudul: ${res.data.deskripsi} \n\nDurasi: ${res.data.durasi}\n\nNama: ${res.data.nama}\n\nUrl: ${res.data.urlvideo}`;
client.sendMessage(id, titoe, MessageType.text);
})
}
if (text.includes("!wikia")){
const teks = text.replace(/!wikia /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${text}`).then((res) => {
    let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}
if (text.includes("!sholat")){
  const teks = text.replace(/!sholat /, "")
  axios.get(`https://mhankbarbar.herokuapp.com/api/jadwalshalat?daerah=${teks}&apiKey=zFuV88pxcIiCWuYlwg57`).then ((res) =>{
  let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\nðŸ‘‰Imsyak : ${res.data.Imsyak}\nðŸ‘‰Subuh : ${res.data.Subuh} WIB\nðŸ‘‰Dzuhur : ${res.data.Dzuhur}WIB\nðŸ‘‰Ashar : ${res.data.Ashar} WIB\nðŸ‘‰Maghrib : ${res.data.Maghrib}\nðŸ‘‰Isya : ${res.data.Isya} WIB\nðŸ‘‰Tengah malam : ${res.data.Dhuha} WIB`;
  client.sendMessage(id, hasil, MessageType.text);
})
}
if (text == '!menu'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
client.sendMessage(id, menu.menu(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}
else if (text == '!quran'){
axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
    const sr = /{(.*?)}/gi;
    const hs = res.data.acak.id.ayat;
    const ket = `${hs}`.replace(sr, '');
    let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
    client.sendMessage(id, hasil ,MessageType.text);
})
}

else if (text == '!donasi'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
client.sendMessage(id, donasi.donasi(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}
else if (text == '!info'){
const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
client.sendMessage(id, info.info(id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif) ,MessageType.text);
}
else if (text == '!pict'){
client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok' ,MessageType.text);
}
   if (messageType == 'imageMessage')
   {
      let caption = imageMessage.caption.toLocaleLowerCase()
      const buffer = await client.downloadMediaMessage(m) // to decrypt & use as a buffer
      if (caption == '!sticker')
      {
         const stiker = await client.downloadAndSaveMediaMessage(m) // to decrypt & save to file

         const
         {
            exec
         } = require("child_process");
         exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) =>
         {
            let stik = fs.readFileSync('temp/' + jam + '.webp')
            client.sendMessage(id, stik, MessageType.sticker)
         });
      }
   }
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!pantun')
      {

         fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let pantun = pjr.replace(/pjrx-line/g, "\n");
               client.sendMessage(id, pantun, MessageType.text)
            });
      }

   };
      if (text.includes("!covid"))
   {
const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {

    }).json();
    var positif = (body[0]['positif']);
    var sembuh  = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    client.sendMessage(id,`ðŸ˜­ðŸ¤’DATA WABAH COVID-19 TERBARU DI INDONESIAðŸ˜”ðŸ˜Š\n\nðŸ˜”Positif ==> ${positif} \nðŸ˜ŠSembuh ==> ${sembuh} \nðŸ˜­Meninggal ==> ${meninggal}\nðŸ¤’Dirawat ==> ${dirawat}`, MessageType.text);
}
   if (text.includes("!quotes"))
   {
      var url = 'https://jagokata.com/kata-bijak/acak.html'
      axios.get(url)
         .then((result) =>
         {
            let $ = cheerio.load(result.data);
            var author = $('a[class="auteurfbnaam"]').contents().first().text();
            var kata = $('q[class="fbquote"]').contents().first().text();

            client.sendMessage(
               id,
               `
      Quotes untuk 
*${id.split("@s.whatsapp.net")[0]}*
     _${kata}_
        
    
	*~${author}*
         `, MessageType.text
            );

         });
   }
   else if (text.includes("!nama ")) 
  {
    const cheerio = require('cheerio');
    const request = require('request');
    var nama = text.split("!nama ")[1];
    var req = nama.replace(/ /g,"+");
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ req +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      client.sendMessage(id,
            `
      Halo *${id.split("@s.whatsapp.net")[0]}*
      Arti dari namamu adalah

  ***********************************
         Nama _*${nama}*_ ${h}
  ***********************************

`,
 MessageType.text);
  });
  }
  else if (text.includes("!pasangan ")) {
    const request = require('request');
    var gh = text.split("!pasangan ")[1];
    var namamu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+ namamu +'&nama2='+ pasangan +'&proses=+Submit%21+',

    },function(error, response, body){
        let $ = cheerio.load(body);
      var y = $.html().split('<b>KECOCOKAN JODOH BERDASARKAN NAMA PASANGAN</b><br><br>')[1];
        var t = y.split('.<br><br>')[1];
        var f = y.replace(t ," ");
        var x = f.replace(/<br\s*[\/]?>/gi, "\n");
        var h  = x.replace(/<[^>]*>?/gm, '');
        var d = h.replace("&amp;", '&')
      console.log(""+ d);
      client.sendMessage(id, `

************************************

 *Kecocokan berdasarkan nama*


 ${d}


************************************
    `, MessageType.text);
  });
  }
   if (text.includes("!pict cewek"))
   {
    var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

   if (text.includes("!pict cowok"))
   {
    var items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;
    
    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok =  z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok) 
        .then(
            (response) => {
  var buf = Buffer.from(response, 'base64'); 
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }

if (text.includes("!animepict"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic", "anime hd", "gambar anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
 else if (text.includes("!ttsid")) {
  var teks = text.split("!ttsid ")[1];
  var path = require('path');
  var text1 = teks.slice(6);
  text1 = suara;
  var suara = text.replace(/#ttsid/g, text1);
  var filepath = 'mp3/bacot.wav';
  
  
/*
 * save audio file
 */

gtts.save(filepath, suara, function() {
  console.log(`${filepath} MP3 SAVED!`)
});
await new Promise(resolve => setTimeout(resolve, 500));

	if(suara.length > 200){ // check longness of text, because otherways google translate will give me a empty file
  client.sendMessage("Text kepanjangan bro!")
}else{

const buffer = fs.readFileSync(filepath)
	client.sendMessage(id , buffer , MessageType.audio);

};
}
if (text.includes("!lirik")){
	const teks = text.split("!lirik")[1]
	axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
	 	let hasil = `LIRIK DARI LAGU ${teks} ADALAH\n\n\n ${res.data.result.lirik}`
	client.sendMessage(id, hasil, MessageType.text)
	})
}
if (text.includes("!alay")){
	const alay = text.split("!alay")[1]
	axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then ((res) =>
		{ let hasil = `${res.data.text}`
		client.sendMessage(id, hasil, MessageType.text)
	})
}

if (text.includes("!hentai"))
   {
    var items = ["nsfwneko","anime hentai"];
    var anim = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.computerfreaker.cf/v1/";
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var anim =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(anim) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }

if (text.includes("!loli"))
   {
    var items = ["anime loli","anime loli sange","anime loli fackgirll","anime loli i love you"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
    
if (text.includes("!pokemon"))
   {
    var items = ["anime pokemon"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              client.sendMessage(
            id,
              buf,MessageType.image)
       
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
  
if (is == '!katabijak')
      {

         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/katabijax.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let randombijak = pjr.replace(/pjrx-line/g, "\n");
               client.sendMessage(id, randombijak, MessageType.text)
            });
      }   
   }
   if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!fakta')
      {

         fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let randomnix = pjr.replace(/pjrx-line/g, "\n");
               client.sendMessage(id, randomnix, MessageType.text)
            });
      }   
   }










//AKHIRNYAAAAAAAA


})
