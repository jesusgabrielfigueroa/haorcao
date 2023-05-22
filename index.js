const btn = document.querySelectorAll(".btn");
const tema = document.querySelector("#tema")
const display = document.getElementById("display");
const letters = document.getElementsByClassName("letter");
const form = document.querySelector("#more-form");
const moreWord = document.querySelector("#more-word");
const moreTema = document.querySelector("#more-tema");
const more = document.querySelector("#more");
const add = document.querySelector("#add");
const delet = document.querySelector("#delete");
const nextWord = document.querySelector(".nextWord");
const reload = document.querySelector(".reload");
const score = document.querySelector("#score");
const table = document.querySelector("table");

var life = 6;
var words = [];
var count = 0;
var win = 0;
var level = 0;

score.innerText = life;

reload.onclick = function(){
	life = 6;
	score.innerText = life;
	reload.classList.toggle("hidden");
	table.classList.toggle("hidden");
	clear();
	color();
}

nextWord.onclick = function(){
	life = 6;
	score.innerText = life;
	nextWord.classList.toggle("hidden");
	table.classList.toggle("hidden");
	remochild();
	next();
	color();
}

more.onclick = function(){
	form.classList.toggle("hidden");
}

add.onclick = function(){
	if(moreTema.value != "" && moreWord.value != ""){
		let obj = {
			teme: moreTema.value.toLowerCase(),
			word: moreWord.value.toLowerCase()
		}
		form.classList.toggle("hidden");
		words.push(obj);
		moreTema.value = "";
		moreWord.value = "";
		console.log(words);
	}else{
		console.log("error");
	}

	if(letters.length == 0){
		tema.innerText = words[level].teme;
		for(i in words[level].word){
			let divi = document.createElement("DIV");
			divi.classList.add("letter");
			display.appendChild(divi);
		}
	}
	
}



btn.forEach(item =>{
	item.onclick = ()=>{
		if(words[level].word.includes(item.innerText)){
			
			for(i in letters){
				if(item.innerText == words[level].word[i]){
					letters[i].innerText = item.innerText;
					count++;
				}
				else{

				}
			}
			item.classList.add("green");
			
		}
		else{
			item.classList.add("red");
			life--;
			score.innerText = life;
		}

		if(count == words[level].word.length){
			level++;
			nextWord.classList.toggle("hidden");
			table.classList.toggle("hidden");
		}

		if(life == 0){
			reload.classList.toggle("hidden");
			table.classList.toggle("hidden");
		}
	}
})

function remochild(){
	let child = display.children.length;
	for(let i = 0; i < child; i++){
		let d = display.children[0];
		display.removeChild(d);
	}
}


function next(){
	tema.innerText = words[level].teme;
	for(i in words[level].word){
		let divi = document.createElement("DIV");
		divi.classList.add("letter");
		display.appendChild(divi);
	}
	const letters = document.getElementsByClassName("letter");
	count = 0;
}

function color(){
	btn.forEach(item =>{
		item.classList.remove("green");
		item.classList.remove("red");
	})
}

function clear(){
	for(s of display.children){
		s.innerText = "";
	}
	count = 0;
}



