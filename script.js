function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

 //   if(html.classList.contains('light')) {
 //       html.classList.remove('light')
 //   } else {
 //       html.classList.add('light')
 //   }
    
    const img = document.querySelector("#profile img")
    const imgAlt = document.querySelector("#profile img")
    
    // substituir a imagem
    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
        imgAlt.setAttribute("alt", "Foto de Mayk Brito")

    } else {
        img.setAttribute("src", "./assets/avatar.png")
        imgAlt.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
    }
}