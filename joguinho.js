var posicao;
function gerar() {
	let gride = document.getElementById("gride");
	gride.style.backgroundColor = "white";
	let red1 = Math.floor(Math.random() * 256);
	let blue1 = Math.floor(Math.random() * 256);
	let green1 = Math.floor(Math.random() * 256);
	let red0 = Math.floor(Math.random() * 256);
	let blue0 = Math.floor(Math.random() * 256);
	let green0 = Math.floor(Math.random() * 256);
	let red2 = Math.floor(Math.random() * 256);
	let blue2 = Math.floor(Math.random() * 256);
	let green2 = Math.floor(Math.random() * 256);
	posicao = Math.floor(Math.random() * 3);
	var visor = document.getElementById("visor");
	if (posicao == 0) {
		var nova_string = red0 + "," + green0 + "," + blue0;
	} else if (posicao == 1) {
		var nova_string = red1 + "," + green1 + "," + blue1;
	} else if (posicao == 2) {
		var nova_string = red2 + "," + green2 + "," + blue2;
	}
	visor.innerHTML = nova_string;
	btn1 = document.getElementById("1");
	btn1.style.backgroundColor = "rgb("+red0+", "+green0+", "+blue0+")";
	btn2 = document.getElementById("2");
	btn2.style.backgroundColor = "rgb("+red1+", "+green1+", "+blue1+")";
	btn3 = document.getElementById("3");
	btn3.style.backgroundColor = "rgb("+red2+", "+green2+", "+blue2+")";
}
function resultado(num) {
	let gride = document.getElementById("gride");
	if (posicao+1 == num) {
		gride.style.backgroundColor = "#6EFF7E";
	} else {
		gride.style.backgroundColor = "#FF7B7B";
	}
}