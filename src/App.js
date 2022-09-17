import "./App.css";
import TopNavbar from "./components/navbars/TopNavbar";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import ProductWithId from "./Pages/ProductPage/ProductWithId";
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import { useDataContext } from "./contexts/DataContext";
import SubProductwithId from "./Pages/ProductPage/SubProductwithId";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import StickyNavbar from "./components/navbars/StickyNavbar";
import Footer from "./Pages/Footer";
import NavbarDataContextProvider from "./components/navbars/NavbarDataContext";

function App() {
  const { isLogin } = useDataContext();

  return (
    <Router>
      <NavbarDataContextProvider>
        <TopNavbar />
        <StickyNavbar />
      </NavbarDataContextProvider>
      <Box bg={"#f2f4f8"} overflowX={"hidden"} mt={{ xl: "0px", base: "50px" }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product" component={ProductPage} />
          <Route exact path="/product/:id" component={ProductWithId} />
          <Route exact path="/product/:id/:sid" component={SubProductwithId} />
          <Route
            exact
            path="/account/:id"
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
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
