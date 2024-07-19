import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { allGenres } from "../../dataMock/allGenres";
import { useEffect, useState } from "react";
import { fetchByGenre } from "../../services/fetchApi";
import ListAnimes from "../../components/ListAnimes";
import Spiner from "../../components/Spiner";

function Genre() {
  const params = useParams();
  const findGenre = allGenres.find((e) => e._id === params.slug);
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    const handleApi = async () => {
      const data = await fetchByGenre(findGenre._id);
      setAnimes(data);
    };

    handleApi();
  }, [params, findGenre]);

  if (!findGenre) {
    return (
      <>
        <h2>Ops!</h2>
        <Link to="/">Back to home</Link>
      </>
    );
  }

  if (!animes) {
    return <Spiner />;
  }

  return (
    <Container className="mt-5">
        {animes && <h2>Genre {params.slug}</h2>}
      <ListAnimes animes={animes.data} />
    </Container>
  );
}

export default Genre;
