import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 20px;
`;

export default CustomLink