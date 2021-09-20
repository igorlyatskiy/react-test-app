import styled from "styled-components";

import loader from '../../assets/svg/spinner.svg'

const StyledLoader = styled.img`
  display: block;
  margin: 0 auto;
  object-position: center center;
`

export default () => <StyledLoader src={loader}></StyledLoader>