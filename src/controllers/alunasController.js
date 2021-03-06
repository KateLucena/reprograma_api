const alunas = require('../model/alunas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if( id == 0 || id > 17){
        res.redirect(301, "https://www.mercadolivre.com.br")
    }
    console.log(id)
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}
exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if(!aluna){
        res.send("Nao encontrei essa aluna")
    }
    const livrosAluna = aluna.livros
    const tituloLivros = livrosAluna.map(livro => livro.titulo)
    res.status(200).send(tituloLivros)
}
exports.getSp = (req, res) => {
    
    const sp = alunas.filter(aluna => aluna.nasceuEmSp == 'true')
    
    const paulista = sp.map(aluna => aluna.nome)
    res.status(200).send(paulista)
}

exports.getIdade = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)

    if(!aluna){
        res.send("Nao encontrei essa aluna")
    }

    const niverAluna = aluna.dateOfBirth
    const idadeSep = niverAluna.split('/',3)
    const ano = idadeSep[2]
    const mes = idadeSep[1]
    const dia = idadeSep[0]
    

    const idade = calcularIdade(ano,mes,dia)
   
    res.status(200).send(`A idade da aluna é ${idade}`)
}
function calcularIdade(anoDeNasc, mesDeNasc, diaDeNasc) {
      const now = new Date()
      const anoAtual = now.getFullYear()
      const mesAtual = now.getMonth() + 1
      const hoje = now.getDate()
    
      let idade = anoAtual - anoDeNasc
    
      if (mesAtual < mesDeNasc || (mesAtual == mesDeNasc && hoje < diaDeNasc)) {
        idade -= 1
      }
      return idade
    }
    