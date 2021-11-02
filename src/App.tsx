import { ThemeProvider } from '@material-ui/core/styles';
import { Routes } from './routes';
import { DocumentTemplate } from './templates/DocumentTemplate/DocumentTemplate';
import { theme } from './themes/main.theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <DocumentTemplate>
        <Routes />
      </DocumentTemplate>
    </ThemeProvider>
  );
}

export default App;
