import "./App.css";
import TopNavbar from "./components/navbars/TopNavbar";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductWithId from "./Pages/ProductPage/ProductWithId";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import { useDataContext } from "./contexts/DataContext";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import StickyNavbar from "./components/navbars/StickyNavbar";

function App() {
  const { isLogin } = useDataContext();
  
  return (
    <Router>
      <TopNavbar />
      <StickyNavbar />
      <Box h={"120vh"} bg={"#f2f4f8"}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product" component={ProductPage} />
            <Route exact path="/product/:id" component={ProductWithId} />
            <Route
              exact
              path="/login"
              render={() => {
                return isLogin ? <Redirect to="/" /> : <LoginPage />;
              }}
            />
            <Route
              exact
              path="/profile"
              render={() => {
                return isLogin ? <ProfilePage /> : <Redirect to="/login" />;
              }}
            />
            <Route path="*" component={NotFound} />
          </Switch>
      </Box>
    </Router>
  );
}

export default App;
