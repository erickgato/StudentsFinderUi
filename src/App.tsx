import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import { Routes } from "./routes";
import { client } from "./services/graphql.service";
import { DocumentTemplate } from "./templates/DocumentTemplate/DocumentTemplate";
import { theme } from "./themes/main.theme";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <DocumentTemplate>
          <Routes />
        </DocumentTemplate>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
