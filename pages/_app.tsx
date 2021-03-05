import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    h4: {
      color: blue[900],
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
    },
    subtitle1: {
      fontWeight: 400,
      color: grey[800]
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
