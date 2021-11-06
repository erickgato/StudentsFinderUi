import React from "react";
import { Box } from "@mui/system";
import { MultiSearchBarProps } from "./interface";
import {
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@material-ui/core";
import { useDebounce } from "../../../hooks/useDebounce";
import { SearchContainer } from "./styles";

export function MultiSearchBar<Options extends Record<string, string>>({
  placeholder,
  onOptionSelected,
  onValueDebounced,
  selectedOption,
  width,
  options,
}: MultiSearchBarProps<Options>): JSX.Element {
  const handleChangeText = useDebounce(onValueDebounced, 500);
  const theme = useTheme();

  return (
    <SearchContainer width={width || "100%"}>
      <Box borderRight={`1px solid ${theme.palette.divider}`} pl={2}>
        <Select
          value={selectedOption}
          onChange={(e) => onOptionSelected(e.target.value as string)}
          disableUnderline
          data-testid="select-field"
        >
          {Object.keys(options).map((value, index) => (
            <MenuItem key={index} value={value}>
              {options[value]}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Box width="70%" pl={1}>
        <TextField
          placeholder={placeholder}
          variant="standard"
          onChange={(e) => handleChangeText(e.target.value)}
          data-testid="search-field"
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Box>
    </SearchContainer>
  );
}
