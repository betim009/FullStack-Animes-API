import { useEffect, useState } from "react";
import { fetchTopAnimes } from "../../services/fetchApi";
import { Container } from "react-bootstrap";
import ListAnimes from "../../components/ListAnimes";
import Spiner from "../../components/Spiner";
// import { data } from "../../dataMock/topAnimes";

function Home() {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    const handleApi = async () => {
      const data = await fetchTopAnimes();
      return setAnimes(data.data);
    };

    handleApi();
  }, []); // Array de dependências vazio para rodar apenas uma vez ao montar o componente

  if (!animes) {
    return (
      <Spiner />
    );
  }

  return (
    <div>
      <Container>
        <ListAnimes animes={animes} />
      </Container>
    </div>
  );
}

export default Home;
