function toggleMode() {
  const html = document.documentElement //document é a representação do documento (página) em formato de objeto no javascript o "."  vai estar acessando as funcionalidades do objeto!
  html.classList.toggle("light")

  //if(html.classList.contains('light')) { //SE na lista de classes do html conter a class LIGHT vai ser removida
    //html.classList.remove('light')
  //} else {                               //SE NÃO vai adicionar a classe LIGHT
      //html.classList.add('light')
   // }  

 // html.classList.toggle("light") ou usando essa função

const img = document.querySelector("#profile img")

if (html.classList.contains("light")) {
  // Se estiver no modo claro, adicionar a imagem light e alterar a borda
  img.setAttribute("src", "./assets/light-avatar.png")
  img.setAttribute("alt", "avatar do light mode")
} else {
  // Se estiver no modo escuro, adicionar a imagem night e alterar a borda
  img.setAttribute("src", "./assets/night-avatar.jpg")
  img.setAttribute("alt", "avatar do night mode")
}






 

}
