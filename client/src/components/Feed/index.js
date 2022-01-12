import React from 'react';
import { CustomButton } from './styles';

const Feed = (props) => {

  const { titulo } = props;
  return (
    <CustomButton
      variant="contained"
      color="secondary"
    >
      {titulo}
    </CustomButton>
  )
}

export default Feed;