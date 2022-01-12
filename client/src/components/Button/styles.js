import styled from 'styled-components';
import Button from "@material-ui/core/Button";

export const CustomButton = styled(Button)`
  && {
  color: black;
  border: 1px solid red;
    :hover {
      background-color: red;
      color: #454545;
      border: 1px solid red;
      font-weight: bold;
    }
  }
`;