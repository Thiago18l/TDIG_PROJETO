const express = require('express')
const routes = express.Router()

let aluno = []
let professores = []
let projetos = []

let uuid = 1;
let uuid_teacher = 1;
let uuid_projetos = 1;

const removeAluno = (id) => {
    let index = 0;
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].id === id && aluno[i] !== null) {
            index = i;
        }
    }
    if (index !== -1) return aluno.splice(index, 1)[0]
}
const removeProfessor = (id) => {
    let index = 0;
    for (let i = 0; i < professores.length; i++) {
        if (aluno[i].id === id) {
            index = i;
        }
    }
    if (index !== -1) return professores.splice(index, 1)[0]
}
const removerProjeto = (id) => {
    let index = 0;
    for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].id === id) {
            index = i
        }
    }
    if (index !== -1) return projetos.splice(index, 1)[0]
}
const searchAluno = (id) => {
    const _id = parseInt(id)
    let index = 0;
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].id === _id) {
            index = i
            return index
        }
    }
}

const findAlunoByID = (id) => {
    const _id = parseInt(id)
    let index = 0;
    for (let i = 0; i < aluno.length; i++) {
        if (aluno[i].id === _id) {
            index = i
            return index
        }
    }
}
const findProfessorByID = (id) => {
    const _id = parseInt(id)
    let index = 0;
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].id === _id) {
            index = i
            return index
        }
    }
}

const searchProfessor = (id) => {
    let index = 0;
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].id === id) {
            index = i
            return index
        }
    }
}

const searchProjeto = (id) => {
    let index = 0
    for (let i = 0; i < professores.length; i++) {
        if (professores[i].id === id) {
            index = i
            return index
        }
    }
}

routes.get('/alunos', (req, res) => {
    try {
        res.send(aluno)
    } catch (e) {
        console.log(e)
    }
})

routes.post('/adicionaAluno', (req, res) => {
    try {
        let id = uuid++
        const { matricula, nome, cpf, curso } = req.body;
        const user = { id, nome, matricula, cpf, curso }
        aluno.push(user)
        res.status(201).send(user)
    } catch (e) {
        console.log(e)
    }
})
routes.put('/alterarAluno/:id', (req, res) => {
    try {
        let { id } = req.params
        const { matricula, nome, cpf, curso } = req.body
        const index = searchAluno(id)
        id = parseInt(id)
        console.log(aluno[index])
        aluno[index] = { id, matricula, nome, cpf, curso }
        console.log(aluno[index])
        res.status(200).send(aluno[index])
    } catch (e) {
        console.log(e)
    }
})
routes.delete('/removerAluno/:id', (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const removed = removeAluno(id)
        res.status(200).json(removed)

    } catch (e) {
        console.log(e)
    }
})

routes.get('/alunos/:id', (req, res) => {
    try {
        const { id } = req.params
        const index = findAlunoByID(parseInt(id))
        console.log(aluno[index])
        res.status(200).send(aluno[index])
    } catch (e) {
        console.log(e)
    }
})

// Professores
routes.get('/professores', (req, res) => {
    try {
        res.status(200).send(professores)
    } catch (e) {
        console.log(e)
    }
})
routes.get('/professores/:id', (req, res) => {
    try {
        const { id } = req.params
        const _id = parseInt(id)
        const index = findProfessorByID(_id)
        res.status(200).send(professores[index])
    } catch (e) {
        console.log(e)
    }
})
routes.post('/adicionarProfessor', (req, res) => {
    try {
        let _id =  uuid_teacher++;
        const { matricula, nome, curso } = req.body
        const professor = { _id, matricula, nome, curso }
        professores.push(professor)
        res.status(201).send(professor)
    } catch (e) {
        console.log()
    }
})

routes.put('/alterarProfessor/:id', (req, res) => {
    try {
        let { id } = req.params
        const { matricula, nome, curso } = req.body
        id = parseInt(id)
        const index = searchProfessor(id)
        professores[index] = { id, matricula, nome, curso }
        res.status(200).send(professores[index])
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/removeProfessor/:id', (req, res) => {
    try {
        const { id } = req.params
        const _id = parseInt(id)
        const removed = removeProfessor(_id)
        res.status(200).send(removed)
    } catch (e) {
        console.log(e)
    }
})

// projetos

routes.get('/projetos', (req, res) => {
    try {
        res.status(200).send(projetos)
    } catch (e) {
        console.log(e)
    }
})

routes.post('/adicionarProjeto', (req, res) => {
    try {
        let id = uuid_projetos++;
        const { titulo, areaAtuacao, resumo, palavrachave1, 
                palavrachave2, palavrachave3, url, 
                id_professor, id_aluno } = req.body
        const projeto = { id, titulo, areaAtuacao, resumo, palavrachave1, palavrachave2, palavrachave3,
            url, id_professor, id_aluno
        }
        projetos.push(projeto)
        res.status(201).send(projeto)
    } catch (e) {
        console.log(e)
    }
})

routes.put('/alterarProjeto/:id', (req, res) => {
    try {
        let { id } = req.params
        id = parseInt(id)
        const { titulo, areaAtuacao, resumo, palavrachave1,
            palavrachave2, palavrachave3, url,
            id_professor, id_aluno } = req.body
        const index = searchProjeto(id)
        projetos[index] = {
            id, titulo, areaAtuacao, resumo, palavrachave1, palavrachave2, palavrachave3,
            url, id_professor, id_aluno }
        res.status(200).send(projetos[index])
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/removerProjeto/:id', (req, res) => {
    try {
        const { id } = req.params
        const _id = parseInt(id)
        const removed = removerProjeto(_id)
        res.status(200).send(removed)
    } catch (e) {
        console.log(e)
    }
})


module.exports = routes