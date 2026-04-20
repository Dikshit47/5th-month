// PASSWORD
function check(){
  if(document.getElementById("pass").value==="bhoomi"){
    window.location="home.html";
  } else alert("Wrong password 😢");
}

// FLOATING HEARTS
setInterval(()=>{
  let heart=document.createElement("div");
  heart.innerHTML="❤️";
  heart.className="heart";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(10+Math.random()*20)+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},300);

// TYPING TEXT
let msg = [
"Hey Bhoomi ❤️",
"",
"5 months... and still it feels magical ✨",
"",
"You are my bachcha 😘",
"You are my panda 🐼",
"You are my princess 👑",
"You are my life ❤️",
"You are my everything 🌍",
"",
"You are my peace, my happiness, my home 💭",
"",
"Click anywhere for a surprise 💌"
];

let i=0;
function typing(){
  if(document.getElementById("content") && i<msg.length){
    document.getElementById("content").innerHTML += msg[i] + "<br>";
    i++;
    setTimeout(typing,1000);
  }
}
typing();

// LOVE COUNTER
let start = new Date("Nov 21, 2025").getTime();

setInterval(()=>{
  let now = new Date().getTime();
  let diff = now - start;

  let days = Math.floor(diff/(1000*60*60*24));
  let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

  if(document.getElementById("counter")){
    document.getElementById("counter").innerHTML =
    "⏳ It's been " + days + " days & " + hours + " hours ❤️";
  }
},1000);

// CLICK EVENT
document.onclick = ()=>{
  if(document.getElementById("secret")){
    document.getElementById("secret").style.display="block";
    setTimeout(()=>{
      window.location="letter.html";
    },3000);
  }
};
