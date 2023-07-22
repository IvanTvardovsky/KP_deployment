import React from "react";
import Navbar from "./components/navbar";
import Blocks from "./components/blocks";
import Welcome from "./components/welcome";
import Mainpage from "./components/links/mainpage";
import Instrument from "./components/links/instrument";
import Calculator from "./components/links/calculator";
import Handbook from "./components/links/handbook";
import Footer from "./components/footer"
import Dictionary from "./components/links/dictionary"
import ScrollToTop from './components/scrollToTop';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [
            {label: 'Копия/Фото паспорта продавца', checked: false},
            {label: 'Выписка из ЕГРН', checked: false},
            {label: 'Нотариальное согласие супруга продавца (при наличии)', checked: false},
            {label: 'Копия/фото паспорта доверенного лица (при наличии)', checked: false},
            {label: 'Брачный договор между супругами (при наличии)', checked: false},
            {label: 'Генеральная доверенность (при наличии)', checked: false},
            {label: 'Справка продавца из психоневрологического диспансера (при наличии)', checked: false},
            {label: 'Справка продавца из наркологического диспансера (при наличии)', checked: false}
         ]
      };
   }

   render() {
      const {items} = this.state;

      return (
         <BrowserRouter>
            <ScrollToTop/>
            <div>
               <Navbar/>
               <div className="App">
                  <Routes>
                     <Route path="/KP_deployment" element={<Mainpage/>}/>
                     <Route path="/instrument" element={<Instrument items={items}/>}/>
                     <Route path="/blocks" element={<Blocks/>}/>
                     <Route path="/calculator" element={<Calculator/>}/>
                     <Route path="/dictionary" element={<Dictionary/>}/>
                     <Route path="/handbook" element={<Handbook/>}/>
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;