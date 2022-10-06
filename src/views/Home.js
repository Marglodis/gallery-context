import Galeria from "../components/Galeria";
import { useContext } from "react";
import MyContext from "../Context";

export default function Home() {
  const { fotos, onLike } = useContext(MyContext);

  return (
    <>
      <div className="container">
        <Galeria fotos={fotos} onLike={onLike} />
      </div>
    </>
  );
}
