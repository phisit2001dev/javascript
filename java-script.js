let loto = prompt("ใส่คะแนนมาเดี๋ยวนี่นะ !")
let omg = document.getElementById("res").innerHTML = loto;
if(omg>=80){
    alert("คุณได้ A นะ")
}
else if(omg>=70){
    alert("คุณได้ B นะ")
}
else if(omg>=60){
    alert("คุณได้ C นะ")
}
else if(omg>=50){
    alert("คุณได้ D นะ")
}
else{
    alert("ไม่ให้ผ่านนะครับ");
}
