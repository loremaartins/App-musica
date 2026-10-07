const musicas = [
  {titulo: "Acoustic Breeze", artista: "Bensound", arquivo: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"},
  {titulo: "Creative Minds", artista: "Bensound", arquivo: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"},
  {titulo: "Sunny", artista: "Bensound", arquivo: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"}
]

let indice = 0
const audio = document.getElementById('audio')
const btnPlay = document.getElementById('play')

function carregarMusica() {
  const m = musicas[indice]
  audio.src = m.arquivo
  document.getElementById('titulo').textContent = m.titulo
  document.getElementById('artista').textContent = m.artista
  atualizarLista()
}

function atualizarLista() {
  const lista = document.getElementById('lista')
  lista.innerHTML = ''
  musicas.forEach((musica, k) => {
    const li = document.createElement('li')
    li.textContent = musica.titulo + ' — ' + musica.artista
    li.onclick = () => {
      indice = k
      carregarMusica()
      audio.play()
      btnPlay.textContent = '⏸'
    }
    if (k === indice) li.classList.add('ativa')
    lista.appendChild(li)
  })
}

btnPlay.onclick = () => {
  if (audio.paused) { audio.play(); btnPlay.textContent = '⏸' }
  else { audio.pause(); btnPlay.textContent = '▶' }
}

document.getElementById('anterior').onclick = () => {
  indice = (indice - 1 + musicas.length) % musicas.length
  carregarMusica()
  audio.play()
  btnPlay.textContent = '⏸'
}

document.getElementById('proximo').onclick = () => {
  indice = (indice + 1) % musicas.length
  carregarMusica()
  audio.play()
  btnPlay.textContent = '⏸'
}

audio.onended = () => {
  indice = (indice + 1) % musicas.length
  carregarMusica()
  audio.play()
}

carregarMusica()
