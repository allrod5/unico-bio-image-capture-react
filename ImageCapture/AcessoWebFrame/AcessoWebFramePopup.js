/* eslint-disable no-unused-expressions */
export default class AcessoWebFramePopup {
  constructor() {
    this.Message;
    this.boxLoading;
    this.boxOrientation;
  }

  showBoxLoading = () => {
    if (this.boxLoading) {
      this.boxLoading.style.backgroundColor = 'white';
      this.boxLoading.style.display = 'block';
    }
  };

  hideBoxLoading = () => {
    if (this.boxLoading) {
      this.boxLoading.style.display = 'none';
    }
  };

  showBoxLockOrientation = () => {
    if (this.boxOrientation) {
      this.boxOrientation.style.visibility = 'visible';
      this.boxOrientation.style.opacity = 1;
    }
  };

  hideBoxLockOrientation = () => {
    if (this.boxOrientation) {
      this.boxOrientation.style.visibility = 'hidden';
      this.boxOrientation.style.opacity = 0;
    }
  };

  showMessage = (message) => {
    if (this.Message && this.Message.innerHTML !== message) {
      this.Message.innerHTML = message;
      this.Message.style.visibility = 'visible';
      this.Message.style.opacity = 1;
    }
  };

  hideMessage = () => {
    if (this.Message) {
      this.Message.innerHTML = '';
      this.Message.style.visibility = 'hidden';
      this.Message.style.opacity = 0;
    }
  };
}
