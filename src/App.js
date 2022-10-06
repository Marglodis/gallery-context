import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

import MyContext from "./Context";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const urlAPI = "/fotos.json";

  const onLike = (id) => {
    const resultsLike = fotos.map((foto) => {
      return foto.id === Number(id)
        ? { ...foto, liked: !foto.liked }
        : { ...foto };
    });
    setFotos(resultsLike);
  };

  const likedPhotos = fotos.filter((elem) => {
    return elem.liked === true;
  });

  const consultaAPI = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFotos(data.photos);
    } catch (e) {
      alert("Algo anda mal con la solicitud.", e.message);
      return null;
    }
  };
  useEffect(() => {
    consultaAPI(urlAPI);
  }, []);

  return (
    <MyContext.Provider value={{ fotos, onLike, likedPhotos }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}
