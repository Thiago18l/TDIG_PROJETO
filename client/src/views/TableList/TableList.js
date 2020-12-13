import React, {useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import api from '../../api/api'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {

    const [alunos, setAlunos] = useState([]);
    const [professores, setProfessores] = useState([])
    const [projetos, setProjetos] = useState([])
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Matricula',
        accessor: 'matricula',
      },
      {
        Header: 'Nome',
        accessor: 'nome',
      },
      {
        Header: 'CPF',
        accessor: 'cpf',
      },
      {
        Header: 'Curso',
        accessor: 'curso'
      },
    ]
  const columns_prof = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Matricula',
      accessor: 'matricula',
    },
    {
      Header: 'Nome',
      accessor: 'nome',
    },
    {
      Header: 'Curso',
      accessor: 'curso'
    },
  ]
  const columns_projetos = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Titulo',
      accessor: 'titulo',
    },
    {
      Header: 'Resumo',
      accessor: 'resumo',
    },
    {
      Header: 'Palavra chave 1',
      accessor: 'key1'
    },
    {
      Header: 'Palavra chave 2',
      accessor: 'key2'
    },
    {
      Header: 'Palavra chave 3',
      accessor: 'key3'
    },
    {
      Header: 'URL',
      accessor: 'url'
    },
    {
      Header: 'ID professor',
      accessor: 'id_professor'
    },
    {
      Header: 'ID Aluno',
      accessor: 'id_aluno'
    },
  ]


    useEffect(() => {
      api.get('alunos')
      .then(response => {
        setAlunos(response.data)
      })
      api.get('professores')
      .then(response => {
        console.log(response.data)
        setProfessores(response.data)
      })
      api.get('projetos')
      .then(response => {
        setProjetos(response.data)
      })
    }, [setAlunos, setProfessores, setProjetos])
    
    const classes = useStyles();
    return (
      
        <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Alunos</h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os alunos
                    </p>
                </CardHeader>
                <CardBody>
                    <ReactTable 
                    data={alunos}
                    columns={columns}
                    />
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
                <CardHeader plain color="primary">
                    <h4 className={classes.cardTitleWhite}>
                    Professores
                    </h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os professores
                    </p>
                </CardHeader>
                <CardBody>
                  <ReactTable 
                  data={professores}
                  columns={columns_prof}
                  />
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Projetos</h4>
                    <p className={classes.cardCategoryWhite}>
                    Tabela de todos os projetos
                    </p>
                </CardHeader>
                <CardBody>
                    <ReactTable
                    data={projetos}
                    columns={columns_projetos}
                    />
                </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
    );
}
