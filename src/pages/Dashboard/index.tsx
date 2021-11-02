import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery, gql } from "@apollo/client";
import { Box } from "@mui/system";
import { CircularProgress } from "@material-ui/core";

const students = [
  {
    id: 1,
    name: "erick",
    email: "erick@sample.com.br",
    document: "000.000.000-00",
  },
];


export function Dashboard(): JSX.Element {
  const { loading, data } = useQuery(gql`
    query {
      students {
        id,
        name,
        document,
        email,
      }
    }
  `);

  if(loading) {
    return <CircularProgress />;
  }
  
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "document",
      headerName: "CPF",
      flex: 1,
    },
  ];

  return <DataGrid rows={data.students} columns={columns} />;
}
