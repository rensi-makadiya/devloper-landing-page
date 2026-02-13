import { HashRouter, Routes, Route } from "react-router-dom";
import { Applayout } from "./Layout/AppLayout";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Case } from "./Pages/Case";
import { Blog } from "./Pages/Blog";
import { Works } from "./Pages/Works";
import { Hire } from "./Pages/Hire";

import "./App.css";
import "./Css/ui.css";
import "./Css/Header.css";
import "./Css/Hero.css";
import "./Css/Services.css";
import "./Css/Devlop.css";
import "./Css/Work.css";
import "./Css/Customer.css";
import "./Css/Case.css";
import "./Css/Software.css";
import "./Css/Card.css";
import "./Css/Approach.css";
import "./Css/Stack.css";
import "./Css/Alcaline.css";
import "./Css/Feature.css";
import "./Css/Hire.css";
import "./Css/Footor.css";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="case" element={<Case />} />
          <Route path="blog" element={<Blog />} />
          <Route path="works" element={<Works />} />
          <Route path="hire" element={<Hire />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
