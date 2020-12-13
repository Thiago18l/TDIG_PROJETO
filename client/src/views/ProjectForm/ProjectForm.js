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

export default function ProjectForm() {
    const [titulo, setTitulo] = useState("")
    const [area, setArea] = useState("")
    const [resumo, setResumo] = useState("")
    const [key1, setKey1] = useState("")
    const [key2, setKey2] = useState("")
    const [key3, setKey3] = useState("")
    const [url, setUrl] = useState("")
    const [id_professor, setIdProfessor] = useState("")
    const [id_aluno, setIdAluno] = useState("")

    const handleInput = async (e) => {
        e.preventDefault()
        const data = {
            titulo,
            area,
            resumo,
            key1,
            key2,
            key3,
            url,
            id_professor,
            id_aluno
        }
        console.log(data)
        try {
            await api.post('adicionarProjeto', data)
            alert('Projeto cadastrado')
        } catch (e) {

        }
    }
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="danger">
                            <h4 className={classes.cardTitleWhite}>Projeto</h4>
                            <p className={classes.cardCategoryWhite}>
                                Insira os dados do Projeto
                            </p>
                        </CardHeader>
                        <CardBody>
                            <form action="">
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Título"
                                            id="title"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: titulo,
                                                onChange: (e) => setTitulo(e.target.value)
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Area de atuação"
                                            id="area"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: area,
                                                onChange: (e) =>
                                                    setArea(e.target.value),
                                            }} />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Resume"
                                            id="resume"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                multiline: true,
                                                rows: 5,
                                                value: resumo,
                                                onChange: (e) =>
                                                    setResumo(e.target.value),
                                            }} />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Palavra chave 1"
                                            id="key1"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: key1,
                                                onChange: (e) =>
                                                    setKey1(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Palavra chave 2"
                                            id="key2"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: key2,
                                                onChange: (e) =>
                                                    setKey2(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Palavra chave 3"
                                            id="key3"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: key3,
                                                onChange: (e) =>
                                                    setKey3(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="URL"
                                            id="URL"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: url,
                                                onChange: (e) =>
                                                    setUrl(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="ID professor"
                                            id="professor"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: id_professor,
                                                onChange: (e) =>
                                                    setIdProfessor(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput 
                                            labelText="ID aluno"
                                            id="aluno"
                                            formControlProps={{
                                                fullWidth: true,
                                            }}
                                            inputProps={{
                                                value: id_aluno,
                                                onChange: (e) =>
                                                    setIdAluno(e.target.value),
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <CardFooter>
                                    <Button color="danger">Cancel</Button>
                                    <Button color="success" onClick={handleInput} type="submit">Save</Button>
                                </CardFooter>
                            </form>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
