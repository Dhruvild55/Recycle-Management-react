/* eslint-disable react/prop-types */
import { Spinner } from "react-bootstrap";

export function Loader({ animation, width, height }) {
  return (
    <div>
      <Spinner animation={animation} style={{ width: width, height: height }} />
    </div>
  );
}
