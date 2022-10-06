import MyContext from "../Context";
import { useContext } from "react";
import Galeria from "../components/Galeria";

export default function Favoritos() {
  const { likedPhotos } = useContext(MyContext);

  return (
    
      <div className="container">
        <Galeria fotos={likedPhotos} />
      </div>
    
  );
}