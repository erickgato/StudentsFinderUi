import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { Box } from "@mui/system";
import {
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useDebounce } from "../../hooks/useDebounce";
import { GridLoadingSkeleton } from "../../components/organisms";

type SearchField = "document" | "name" | "email";

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
  React.useEffect(() => {
    getStudents();
  }, []);
  const searchStudents = useDebounce(getStudents, 500);


  React.useEffect(() => {
    searchStudents({
      variables: {
        [searchField as string]: searchValue,
      },
    });
  }, [searchField, searchValue]);

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

  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      flexDirection="column"
    >
      <Box display="flex" alignItems="center" p={4}>
        <TextField
          label="Buscar"
          variant="outlined"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Box pl={2}>
          <InputLabel id="search-field">Campo</InputLabel>
          <Select
            labelId="search-field"
            value={searchField}
            onChange={(e) => setSearchField(e?.target?.value as SearchField)}
          >
            <MenuItem value={"name"}>Nome</MenuItem>
            <MenuItem value={"document"}>Documento</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
          </Select>
        </Box>
      </Box>

      {loading ? (
        <GridLoadingSkeleton rowCount={3} />
      ) : (
        <DataGrid rows={data?.students || []} columns={columns} />
      )}
    </Box>
  );
}
