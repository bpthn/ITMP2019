txt = prompt("What is your name?");

fortuneWord = [txt+"วันนี้คุณจะโชคดี!","ก้าวเท้าซ้ายออกจากบ้านสิ "+txt+ "แล้ววันนี้จะมีแต่สิ่งดีๆ",txt+" วันนี้เลข 5 จะเป็นเลขนำโชคนะ", txt+"ลองใส่เสื้อสีชมพูออกจากบ้านสิ", txt+ " อย่าลืมให้กำลังใจตัวเองและคนรอบตัวด้วยล่ะ", txt +" ,May the Force Be with You"];

function play(){
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");


	setTimeout(function(){
		getFortune();
	},3000);
}

function play2(){
	
	cookie2.classList.add("cookie-shake");
	cookie2.classList.add("cookie-shake2");
	

	setTimeout(function(){
		getFortune();
	},1000);
}


function getFortune(){
	random = Math.floor(Math.random()*fortuneWord.length);
	fortune.innerText = fortuneWord[random];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}