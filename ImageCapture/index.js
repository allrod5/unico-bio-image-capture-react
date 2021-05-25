import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { createMuiTheme } from '@material-ui/core/styles';

import Capture from 'assets/images/capture.svg';
import LoadingDialog from 'components/LoadingDialog';

import AcessoWebFrame from './AcessoWebFrame';
import BoxCamera from './BoxCamera';
import Message from './Message';
import messages from './messages';
import OrientationDialog from './OrientationDialog';
import { CAMERA_TYPES } from './contants';

const theme = createMuiTheme();

const ImageCapture = ({
  cameraType,
  onBrowserNotSupported,
  onDeniedCapture,
  onFailedCapture,
  onSuccessCapture,
}) => {
  const acessoWebFrame = useRef(new AcessoWebFrame());

  const [isLoading, setIsLoading] = useState(true);
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  const [isWrongOrientation, setIsWrongOrientation] = useState(false);
  const showWrongOrientation = () => setIsWrongOrientation(true);
  const hideWrongOrientation = () => setIsWrongOrientation(false);

  const [message, setMessage] = useState('');
  const showMessage = (newMessage) => setMessage(newMessage);
  const hideMessage = () => setMessage('');

  const [messageTop, setMessageTop] = useState(0);
  const setTopLabelMessage = () => {
    setMessageTop(acessoWebFrame.current.calcTopLabelMessagePosition());
  };

  const initCamera = (type) => {
    const baseMaskColor = theme.palette.common.white;
    switch (type) {
      case CAMERA_TYPES.SELFIE:
        showLoading();
        acessoWebFrame.current.initCameraNormal(baseMaskColor);
        break;
      case CAMERA_TYPES.CNH:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.CNH,
          baseMaskColor);
        break;
      case CAMERA_TYPES.OTHERS:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.OTHERS,
          baseMaskColor,
          'RNE');
        break;
      case CAMERA_TYPES.FRONT_RG:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.RG_FRONT,
          baseMaskColor);
        break;
      case CAMERA_TYPES.BACK_RG:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.RG_BACK,
          baseMaskColor);
        break;
      case CAMERA_TYPES.FRONT_NEW_RG:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.NEW_RG_FRONT,
          baseMaskColor);
        break;
      case CAMERA_TYPES.BACK_NEW_RG:
        acessoWebFrame.current.initDocument(
          acessoWebFrame.current.TYPE_DOCUMENT.NEW_RG_BACK,
          baseMaskColor);
        break;
      default:
        acessoWebFrame.current.initCameraNormal(baseMaskColor);
    }
  };

  useEffect(() => {
    acessoWebFrame.current.onSuccessCaptureJS = onSuccessCapture;
    acessoWebFrame.current.onFailedCaptureJS = onFailedCapture;
    acessoWebFrame.current.onDeniedCaptureJS = onDeniedCapture;
    acessoWebFrame.current.onBrowserNotSupportJS = onBrowserNotSupported;
    acessoWebFrame.current.acessoWebFramePopup.showMessage = showMessage;
    acessoWebFrame.current.acessoWebFramePopup.hideMessage = hideMessage;
    acessoWebFrame.current.acessoWebFramePopup.showBoxLoading = showLoading;
    acessoWebFrame.current.acessoWebFramePopup.hideBoxLoading = hideLoading;
    acessoWebFrame.current.acessoWebFramePopup.showBoxLockOrientation = showWrongOrientation;
    acessoWebFrame.current.acessoWebFramePopup.hideBoxLockOrientation = hideWrongOrientation;
    acessoWebFrame.current.setTopLabelMessage = setTopLabelMessage;
    acessoWebFrame.current.createBoxDocumentInfo = () => { };
    acessoWebFrame.current.setButtonCaptureNormalPosition = () => {
      acessoWebFrame.current.buttonCapture.style.top = '';
      acessoWebFrame.current.buttonCapture.style.bottom =
        `${(acessoWebFrame.current.cameraVideo.offsetHeight - acessoWebFrame.current.mHeight) *
        (cameraType === CAMERA_TYPES.SELFIE ? 0.2 : 0.4)}px`;
    };
    acessoWebFrame.current.setButtonCaptureDocumentPosition = acessoWebFrame.current.setButtonCaptureNormalPosition;
    initCamera(cameraType);
    return () => acessoWebFrame.current.stopStuffsAfterTake();
  }, []);

  return (
    <BoxCamera id="box-camera">
      {
        message &&
        <Message
          label={message}
          top={messageTop}
          color={
            message === acessoWebFrame.current.INTELLIGENT_CAMERA_FEEDBACK.STAY_STILL ?
              'success' : 'error'
          }
        />
      }
      <img id="camera--trigger" src={Capture} alt="" />
      <LoadingDialog
        isOpen={isLoading}
        title={messages.loadingTitle}
        content={messages.loadingDescription}
      />
      <OrientationDialog isOpen={isWrongOrientation} />
    </BoxCamera>
  );
};

ImageCapture.propTypes = {
  cameraType: PropTypes.number.isRequired,
  onBrowserNotSupported: PropTypes.func.isRequired,
  onDeniedCapture: PropTypes.func.isRequired,
  onFailedCapture: PropTypes.func.isRequired,
  onSuccessCapture: PropTypes.func.isRequired,
};

export default ImageCapture;
