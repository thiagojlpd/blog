import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import MenuEmTodasPaginas from "./componentes/menu";
import RodapeEmTodasPaginas from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuEmTodasPaginas />

      <Routes>
        <Route path="/" element={ <PaginaPadrao /> }>
          <Route index element={ <Inicio/> } />
          <Route path='sobremim' element={ <SobreMim /> } />
        </Route>
        
        <Route path="posts/:id/*" element={ <Post />} />
        <Route path='*' element={ <NaoEncontrada /> } />
      </Routes>

      <RodapeEmTodasPaginas />
    </BrowserRouter>   
  );
}

export default AppRoutes;
