import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import CreateRecipe from "./pages/CreateRecipe";
import CreateShowcase from "./pages/CreateShowcase";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Layout from "./components/Layout";
import Showcase from "./pages/Showcase";
import Commissions from "./pages/Commissions";
import CreateCommission from "./pages/CreateCommission";
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: teal,
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/recipes">
              <Recipes />
            </Route>
            <Route path="/createRecipe">
              <CreateRecipe />
            </Route>
            <Route path="/showcase">
              <Showcase />
            </Route>
            <Route path="/createShowcase">
              <CreateShowcase />
            </Route>
            <Route path="/commsionsOverview">
              <Commissions />
            </Route>
            <Route path="/createCommission">
              <CreateCommission />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
