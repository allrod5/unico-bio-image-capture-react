import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Tag from '@material-ui/core/Tag';

const CustomBox = styled(Box)`
  position: absolute;
  width: 100%;
  z-index: 61;
  top: ${(props) => `${props.top}px`};
`;

const Message = ({ label, top, color }) => (
  <CustomBox textAlign="center" top={top}>
    <Tag label={label} color={color} />
  </CustomBox>
);

Message.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  top: PropTypes.number,
};

Message.defaultProps = {
  color: 'default',
};

export default Message;
