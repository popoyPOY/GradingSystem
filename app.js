
let remarks = document.getElementById("test");

let video = document.querySelector("#video");

let source = document.querySelector("#source");

let english = document.getElementById("english");
let science = document.getElementById("science");
let math = document.getElementById("math");
let pe = document.getElementById("pe");
let prog_1 = document.getElementById("prog_1");
let data_algo = document.getElementById("data_algo");
let database = document.getElementById("database");

function Calculate() {
     let total = (Number(english.value) + Number(science.value) + Number(math.value) + Number(pe.value) + Number(prog_1.value) + Number(data_algo.value) + Number(database.value)) / 7;
     //console.log(english);
     return total;
}

let video_container = document.getElementById("video-container").style;



function showRemarks() {

     let number = Calculate();

     console.log(number)

     if (number <= 60) {
          remarks.textContent = "Remarks: DOES NOT EXIST";
     }
     else if (number <= 74) {
          remarks.textContent = "Remarks: Failed";
          Failed();
     } else if (number <= 79) {
          remarks.textContent = "Remarks: Fair";
          Fair();

     } else if (number <= 84) {
          remarks.textContent = "Remarks: Good";
          Good();
     } else if (number <= 89) {
          remarks.textContent = "Remarks: Very Good";
          veryGood();
     } else if (number <= 94) {
          remarks.textContent = "Remarks: Satisfactory";
          Satisfactory();
     }else if (number <= 100) {
          remarks.textContent = "Remarks: Very Satisfactory";
          verySatisfactory();
     }else if (number > 100) {
          remarks.textContent = "Remarks: DOES NOT EXIST";
     }
     else if (number) {
          remarks.textContent = "Remarks: DOES NOT EXIST";
     }
     else {
          remarks.textContent = "Remarks: DOES NOT EXIST";
     }
}

function Failed() {
     source.setAttribute('src', "/assets/2.mp4#t=34,40");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}

function Fair() {
     source.setAttribute('src', "/assets/1.mp4#t=4,5");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}

function Good() {
     source.setAttribute('src', "/assets/1.mp4#t=10,14");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}

function veryGood() {
     source.setAttribute('src', "/assets/1.mp4#t=15,18");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}

function Satisfactory() {
     source.setAttribute('src', "/assets/1.mp4#t=18,23");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}

function verySatisfactory() {
     source.setAttribute('src', "/assets/1.mp4#t=40,46");
     video.load();
     video.play();

     let a = setTimeout(() => {
     source.setAttribute('src', "");
     video.load();
     Clear();
     }, 6000)
}



function Clear() {
     english.value = "";
     math.value = "";
     science.value = "";
     pe.value = "";
     prog_1.value = "";
     data_algo.value = "";
     database.value = "";
     remarks.textContent = "Remarks:"
}



function darkMode() {
     let element = document.body;

     element.classList.toggle("dark-mode");

     
}