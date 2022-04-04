import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TemplateApp from "../../components/TemplateApp/TemplateApp";
import Home from "../../views/Home/Home";
import Characters from "../Characters/Characters";
import Info from "../Info/Info";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import NoMatch from "../NoMatch/NoMatch";
import StarWarsLogo from "../../assets/images/starWarsLogo.png";
import UnimibLogo from "../../assets/images/unimibLogo.svg";

function App() {
    const nav = [
        {url: "/starWarsCharacters-webApp", text: "Home", exact: true},
        {url: "/characters", text: "Characters", exact: true},
        {url: "/info", text: "Info", exact: true}
    ];

    return (
      <BrowserRouter>
          <TemplateApp navItems={nav} starWarsLogo={StarWarsLogo} unimibLogo={UnimibLogo} urlUnimib="https://www.unimib.it/">
              <Routes>
                  <Route path="/starWarsCharacters-webApp" element={<Home />}/>
                  <Route path="/characters" element={<Characters />}/>
                  <Route path="/info" element={<Info />}/>
                  <Route path="/characters/:number" element={<CharacterDetails />}/>
                  <Route path="*" element={<NoMatch />} />
              </Routes>
          </TemplateApp>
      </BrowserRouter>
    );
    /* The NoMatch component is shown when the user enters an URL other than those defined in the other Route components */
}
export default App;