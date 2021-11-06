import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { gql, useLazyQuery } from "@apollo/client";
import { Box } from "@mui/system";
import {
  Typography,
} from "@material-ui/core";
import { GridLoadingSkeleton } from "../../components/organisms";
import { MultiSearchBar } from '../../components/molecules/MultiSearchBar';

type SearchField = "document" | "name" | "email"
export function Dashboard(): JSX.Element {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchField, setSearchField] = React.useState<SearchField>("name");
  const [getStudents, { loading, data }] = useLazyQuery(gql`
    query Student($name: String, $document: String, $email: String) {
      students(name: $name, document: $document, email: $email) {
        id
        name
        document
        email
      }
    }
  `);

  React.useEffect(getStudents, [getStudents]);
  React.useEffect(() => {
    getStudents({
      variables: {
        [searchField as string]: searchValue,
      },
    });
  }, [searchField, searchValue, getStudents]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell(params: GridRenderCellParams) {
        return <Box data-testid={`names-${params.id}`}>{params.getValue(params.id, 'name')}</Box>
      }
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell(params: GridRenderCellParams) {
        return <Box data-testid={`emails-${params.id}`}>{params.getValue(params.id, 'email')}</Box>
      }
    },
    {
      field: "document",
      headerName: "CPF",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell(params: GridRenderCellParams) {
        return <Box data-testid={`documents-${params.id}`}>{params.getValue(params.id, 'document')}</Box>
      }
    },
  ];

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box py={3}>
          <Typography variant="h4" color="textSecondary">Alunos</Typography>
        </Box>
        <Box pb={4}>
          <MultiSearchBar  
            width={'20rem'}
            selectedOption={searchField}
            placeholder='Buque aqui'
            options={{
              name: 'Nome',
              document: 'Documento',
              email: 'Email'
            }}
            onOptionSelected={(option) => setSearchField(option as SearchField)}
            onValueDebounced={(text) => setSearchValue(text)}
          />
        </Box>
      </Box>

      <Box height={'70vh'}>
        {loading ? (
          <GridLoadingSkeleton rowCount={3} />
        ) : (
          <DataGrid rows={data?.students || []} columns={columns} />
        )}
      </Box>
    </>
  );
}
