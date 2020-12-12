let aluno = []
let professor = []
let projeto = []


module.exports = {
    createAluno(req, res) {
        try {
            let id = 0
            const {matricula, nome, cpf, curso} = req.body;
            const user = {id, nome, matricula, cpf, curso}
            aluno.push(user)
            console.log(user)
            res.status(201).send(user)
            id++;
        } catch (e) {
            console.log(e)
        }
    }
}