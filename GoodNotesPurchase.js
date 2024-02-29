/***********************************

 > 应用名称：GoodNotes6
 > 软件版本：6.0.1

 [rewrite_local]

 ^https:\/\/isi\.csan\.goodnotes(app)?\.com(\.cn)?\/nest\/api\/apple\/purchases\/sync url script-echo-response https://raw.githubusercontent.com/JILJEKLFI/Shark/master/GoodNotesPurchase.js

 [mitm]

 hostname = isi.csan.goodnotes.com, isi.csan.goodnotesapp.com.cn

 ***********************************/

$done({
    status: "HTTP/1.1 201 Created",
});
