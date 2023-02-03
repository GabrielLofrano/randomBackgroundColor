
const characters = 'abcdef0123456789'; //alfabeto para HexColor
const hexCharacters = '0123456789abcdef' //alfabeto na ordem para converter hex para rgb
const charactersLength = characters.length; //armazena o tamanho da string characters
let counter = 0; 
let hexColor = ''; 
let state = true;

//funcao para gerar uma background aleatorio utilizando o padrao Hex
function random_bg_color(){
    let background = document.getElementById("background") //localiza a div background no HTML

    //contador que seleciona 6 elementos aleatorios da Strig characters
    while(counter < 6) {

        hexColor += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter++;

    }

    //chama a funcão para converter o codigo hex para rgb
    hexToRgb(hexColor)

    //formata o hexcode, adicionando o # na frente
    let bgColor2 = "#" + hexColor;

    //zera o contador e o hexcode para a proxima cor
    counter = 0;
    hexColor = '';

    //joga o hexcode para o CSS da div
    background.style.backgroundColor = bgColor2;

    //Envia o codigo hex para a tag H1, mostrando ao usuario o codigo Hex da cor atual do plano de fundo
    document.getElementsByClassName('hex')[0].innerHTML = bgColor2;

}


//funcão para converter Hex para RGB
/*

Essa função basicamente seleciona os elementos de dois em dois, o codigo hex passado nao possui o #, ou seja, é passado um codigo como fefefe.

Utilizando fefefe como exemplo, ele é divido em 3, fe fe fe, os elementos de um codigo hex se comportam diferente, sempre o elemento impara vale 16 e o elemento para vale 1, por exemplo, o codigo 111111 tranformado para rgb seria rgb(17, 17, 17) isso porque dividindo esse codigo em 3, o primeiro elemento 1 vale 16 e o segundo vale 1, logo cada um dos tres elementos valem 17.
                                                 
*/
 function hexToRgb (hexColor) {

    let x = 0;
    let y = 0;
    let z = 0;


    for(let i = 0; i <= hexColor.length-1; i++){
        if(i <= 1){
            if(i % 2 == 0) {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        x += j * 16;

                    }
                }
            }else {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        x += j;
                        console.log(x)
                    }
                }
            }
        } else if (i > 1 && i <= 3) {
            if(i % 2 == 0) {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        y += j * 16;

                    }
                }
            }else {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        y += j;
                        console.log(y)
                    }
                }
            }
        }else {
            if(i % 2 == 0) {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        z += j * 16;

                    }
                }
            }else {
                for(let j = 0; j <= hexCharacters.length-1; j++){
                    if (hexColor[i] == hexCharacters[j]){
                        z += j;
                        console.log(z)
                    }
                }
            }
        }
    }

    let bgColor = "rgb("+ x +", "+ y +", "+ z +")";
    document.getElementById('rgbColor').innerHTML = bgColor;
 }


//funcao para mudar o padrao de cor
function changeColor() {
    let hex = document.getElementById('hexColor')
    let rgb = document.getElementById('rgbColor')

    if (state) {
        hex.style.opacity = 0;
        hex.style.visibility = 'hidden';
        rgb.style.opacity = 1;
        rgb.style.visibility = 'visible';
        state = false;
        document.getElementById('changeTemplate').innerHTML = 'HEX'
    }else {
        hex.style.opacity = 1;
        hex.style.visibility = 'visible';
        rgb.style.opacity = 0;
        rgb.style.visibility = 'hidden';
        state = true;
        document.getElementById('changeTemplate').innerHTML = 'RBG'
    }
}