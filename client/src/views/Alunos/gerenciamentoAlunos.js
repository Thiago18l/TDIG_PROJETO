import { Grid, MuiThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

const GerenciamentoAlunos = props => {
    const { useState } = React;
  
    const [columns, setColumns] = useState([
      { title: 'Nome', field: 'nome' },
      { title: 'Sobrenome', field: 'sobrenome', initialEditValue: 'Valor inicial de edição' },
      { title: 'Ano de Nascimento', field: 'anoNascimento', type: 'numerico' },
      {
        title: 'Naturalidade',
        field: 'cidadeOndeNasceu',
        lookup: { 34: 'João Pessoa-PB', 63: 'Campina Grande-PB' },
      },
    ]);
  
    const [data, setData] = useState([
      { nome: 'Luanderlandy', sobrenome: 'Fellipe', anoNascimento: 1990, cidadeOndeNasceu: 63 },
      { nome: 'Rodrigo', sobrenome: 'Brito', anoNascimento: 1990, cidadeOndeNasceu: 34 },
    ]);
  
    return (
      <MaterialTable
        title="Gerenciamento de Alunos"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }

  export default GerenciamentoAlunos;