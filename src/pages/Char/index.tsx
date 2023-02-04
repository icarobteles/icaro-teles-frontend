import { useParams } from "react-router-dom";
import { Container } from "./styles";

export const CharPage: React.FC = () => {
  const { id } = useParams();

  return <Container>Char {id} Page</Container>;
};
