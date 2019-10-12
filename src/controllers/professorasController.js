const professoras = require('../model/professoras.json')

exports.get = (req,res) => {
    console.log(req.url)
    res.status(200).send(professoras)
}

exports.getSemCPF = (req,res) => {
    const profSemCpf = professoras.map(item => { 
        delete item.cpf
        return item
    })
    // const profSemCpf = []
    // for(let i = 0; i < professoras.length; i++){
    //     const semCpf = {}
    //     semCpf.id = professoras[i].id
    //     semCpf.nome = professoras[i].nome
    //     semCpf.especialidades = professoras[i].especialidade
    //     semCpf.signo = professoras[i].signo
    //     profSemCpf.push(semCpf)
        
    // }
res.status(200).send(profSemCpf)
}
exports.getId = (req, res) => {
    const id = req.params.id
    const prof = professoras.find(item => item.id == id)
    delete prof.cpf
    res.status(200).send(prof)

}
