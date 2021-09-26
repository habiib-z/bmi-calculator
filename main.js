document.querySelector(".submit").addEventListener("click", start);
function start(){
    let cm = document.getElementById("cm");
    let kg = document.getElementById("kg");
    if (cm.value == "" || kg.value == "") {
      notification("لطفا تمام بخش ها را تکمیل کنید");
    } else {
      let kg_value = Number(kg.value);
      let cm_value = Number(cm.value / 100);
      let bmi = kg_value / (cm_value * cm_value);
      let show = document.querySelector("#show");
      show.innerHTML = bmi + "</br>";
      if (bmi < 18.5) {
        show.innerHTML += "کمبود وزن";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        show.innerHTML += "وزن ایده ال";
      } else if (bmi >= 25 && bmi < 29.9) {
        show.innerHTML += "وزن بالا";
      } else if (bmi >= 30 && bmi < 34.9) {
        show.innerHTML += "اضافه وزن";
      } else {
        show.innerHTML += "چاقی";
      }
    }
}
document.querySelector('body').addEventListener('keydown' ,(e)=>{
        if(e && e.keyCode == 13) {
           start();
        }
})
function notification(message="متنی وارد نشده است"){
   let w_item = 100;
  let container = document.querySelector('.notification');
  document.querySelector('.message').innerHTML=message;
  container.style.display = 'block';
  let timer2 = setInterval(()=>{
    w_item--;
    document.querySelector('.timer').style.width = `${w_item}%`;
  },28);
  setTimeout(()=>{
    container.style.display = "none";
  },3000)
}
