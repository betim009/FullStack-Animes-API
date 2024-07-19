import Spinner from "react-bootstrap/Spinner";

function Spiner() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

export default Spiner;
