import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import { theme } from '../../styles/theme';

import { Toolbar, InputBase } from "@material-ui/core";
import { Search, AccountBox, Mail } from '@material-ui/icons';

export const LargeTitle = styled(Typography)`
  && {
 
  display: ${theme.breakpoints.up("sm") ? "block" : "none"}
  }
`;

export const SmallTitle = styled(Typography)` 
  display: ${theme.breakpoints.up('sm') ? 'none' : 'block'}
`;

export const SearchBox = styled.div` 
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: #A6A6A6;

  :hover {
      background-color: #b1aeae;
    }

`;

export const IconsWrapper = styled.div` 
  display: flex;
  align-items: center;
  margin-right: 10px;  
`;
export const SearchIcon = styled(Search)`
  && {
    margin-right: 5px;
    margin-left: 5px;    
  }
`;

export const UserIcon = styled(AccountBox)`
  && {
    margin-right: 5px;
    margin-left: 15px;    
  }
  :hover {
      color: #b1aeae;
      cursor: pointer;
    }

`;

export const MailIcon = styled(Mail)`
  && {
    margin-right: 5px;
    margin-left: 15px;    
  }
  :hover {
      color: #b1aeae;
      cursor: pointer;
    }

`;

export const Input = styled(Toolbar)`
  && {
   color: white;
  }
`;

export const ToolbarCustom = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;     
  }
`;