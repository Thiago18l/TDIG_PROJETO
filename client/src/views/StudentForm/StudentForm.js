import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import api from '../../api/api'

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function StudentForm() {
    const classes = useStyles();
    const [matricula, setMatricula] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [curso, setCurso] = useState("")

    async function handleCreate(e){
        e.preventDefault()
        const data = {
            matricula,
            nome,
            cpf,
            curso
        }
        console.log(data)
        try {
            await api.post('adicionaAluno', data)
            alert('Aluno cadastrado')
        } catch (e) {

        }
    }

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Estudante</h4>
                            <p className={classes.cardCategoryWhite}>
                                Insira os dados do Aluno
                            </p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="matricula"
                                        id="mat"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: matricula,
                                            onChange: (e) =>
                                                setMatricula(e.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Nome"
                                        id="nome"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: nome,
                                            onChange: (e) =>
                                                setNome(e.target.value),
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="CPF"
                                        id="cpf"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: cpf,
                                            onChange: (e) =>
                                                setCpf(e.target.value),
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="idEndereço"
                                        id="endereco"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        labelText="Curso"
                                        id="curso"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            value: curso,
                                            onChange: (e) =>
                                                setCurso(e.target.value),
                                        }} />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="danger">Cancel</Button>
                            <Button color="success" onClick={handleCreate}>Save</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
