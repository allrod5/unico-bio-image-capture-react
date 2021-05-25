import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import Typography, { variantType } from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import messages from './messages';

export const OrientationDialog = ({ isOpen }) =>
  <Dialog
    open={isOpen}
    maxWidth="xs"
    fullWidth={false}
  >
    <DialogTitle>
      <FormattedMessage {...messages.orientationTitle} />
    </DialogTitle>
    <DialogContent>
      <Typography pb={3} color="textSecondary" variant={variantType.subheading}>
        <FormattedMessage {...messages.orientationDescription} />
      </Typography>
    </DialogContent>
  </Dialog>;

OrientationDialog.propTypes = {
  isOpen: PropTypes.bool,
};

OrientationDialog.defaultProps = {
  isOpen: false,
};

export default OrientationDialog;
