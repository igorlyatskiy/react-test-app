import styled from "styled-components"

export const PostElement = styled.div`
  width: calc(50% - 20px);
  max-width: 40vw;
  margin: 20px 0;
  border: 1px solid #EA0042;
  border-radius: 20px;
  padding: 20px;
  position: relative;
`
export const PostHeading = styled.h2`
font-family: Roboto;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 36px;
letter-spacing: 2px;
text-align: left;
color: #fff;
margin-bottom: 20px;
`

export const LittlePostHeading = styled.h3`
  margin-bottom: 5px;
`;

export const PostCommentsHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 0px;
  width: 100%;
  margin-top: 5px;
`

export const PostUserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #fff;
  width: 100%;
  padding-top: 10px;
  margin-bottom: 0px;
  `

export const PostUserContent = styled.span`
  font-size: 16px;
  margin-bottom: 0px;
  margin-top: 0px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: left;
  color: #fff;
  margin-bottom: 7px;
`