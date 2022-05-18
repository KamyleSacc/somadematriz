document.write('<h3>Soma de matrizes:</h3>');
var matriz = []; 
matriz.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]);
matriz.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]); 
matriz.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]);
console.table(matriz); 

var matriz2 = []; 
matriz2.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]);
matriz2.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]); 
matriz2.push([Math.round(Math.random()*20), Math.round(Math.random()*20), Math.round(Math.random()*20)]);
console.table(matriz2);


document.write("<div class='container'>");


document.write( "<table border=1>");
for (i = 0; i < matriz.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz[i].length; x++) {
linha = linha + "<td>" + matriz[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table >");

document.write( "<table border=1>");
for (i = 0; i < matriz2.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz2[i].length; x++) {
linha = linha + "<td>" + matriz2[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");

document.write( "<table border=1>");
for (i = 0; i < matriz.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz[i].length; x++) {
	var soma=matriz[i][x]+matriz2[i][x]
linha = linha + "<td>" + soma + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table >");


document.write("</div>");