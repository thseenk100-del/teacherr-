const phoneNumber="966551961517";

function sendToWhatsApp(serviceName){
const message=`السلام عليكم، أرغب في طلب: ${serviceName}`;
const url=`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
window.open(url,"_blank");
}