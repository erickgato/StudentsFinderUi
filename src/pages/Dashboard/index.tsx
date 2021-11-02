import React from "react";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const students = [
  {
    id: 1,
    name: "erick",
    email: "erick@sample.com.br",
    document: "000.000.000-00",
  },
];

export function Dashboard(): JSX.Element {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Nome",
      flex: 1,
    },
    {
      field: "document",
      headerName: "Nome",
      flex: 1,
    },
  ];

  return <DataGrid rows={students} columns={columns} />;
}
