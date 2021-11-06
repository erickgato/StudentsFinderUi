import { styled } from "@material-ui/core";
import { Box } from "@mui/system";

export const SearchContainer = styled(Box)(({theme}) => ({
	border: `1px solid ${theme.palette.divider}`,
	display: 'flex',
	paddingTop: theme.spacing(1),
	paddingBottom: theme.spacing(1),
	alignItems: 'center',
	borderRadius: '10px',
}));