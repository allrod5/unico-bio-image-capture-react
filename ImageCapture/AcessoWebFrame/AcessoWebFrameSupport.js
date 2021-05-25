/* eslint-disable no-undef */
import * as platform from 'platform';

export default class AcessoWebFrameSupport {
  constructor() {
    this.isMobile = this.isPlatformMobile();
    this.isIOS = this.isPlatformIOS();
    this.isAndroid = this.isPlatformAndroid();
    this.isFirefox = this.isBrowserFirefox();
    this.isSafari = this.isBrowserSafari();
    this.isOpera = this.isBrowserOpera();
    this.isEdge = this.isBrowserEdge();
    this.isChrome = this.isBrowserChrome();
    this.isSupportedBrowser = this.verifyBrowserSupport();
  }

  isPlatformMobile = () => !!(
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );

  isPlatformIOS = () => !!(
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Mac OS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i)
  );

  isPlatformAndroid = () => !!(navigator.userAgent.match(/Android/i));

  // Opera 8.0+
  isBrowserOpera = () => (
    ((!!window.opr && !!opr.addons) || !!window.opera) ||
    navigator.userAgent.indexOf(' OPR/') >= 0 ||
    platform.description.toLowerCase().indexOf('opera') > -1
  );

  // Firefox 1.0+
  isBrowserFirefox = () => (
    typeof InstallTrigger !== 'undefined' ||
    platform.description.toLowerCase().indexOf('firefox') > -1
  );

  // Safari 3.0+ "[object HTMLElementConstructor]"
  isBrowserSafari = () => (
    /constructor/i.test(window.HTMLElement) ||
    ((p) => (p !== undefined && p.toString() === '[object SafariRemoteNotification]')
    )(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification)) ||
    platform.description.toLowerCase().indexOf('safari') > -1
  );

  // Chrome 1 - 79
  isBrowserChrome = () => (
    !this.isFirefox && !this.isEdge && !this.isOpera && !this.isSafari &&
    ((!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) ||
    platform.description.toLowerCase().indexOf('chrome') > -1)
  );

  isBrowserEdge = () => platform.description.toLowerCase().indexOf('edge') > -1;

  verifyBrowserSupport = () => {
    if (this.isIOS) {
      return (this.isSafari && (!this.isChrome && !this.isOpera && !this.isEdge && !this.isFirefox));
    }
    return (this.isChrome || this.isOpera || this.isEdge || this.isFirefox);
  };

  getSupportedBrowsers = () => {
    if (this.isIOS) {
      return {
        message: 'Navegadores permitidos:',
        listBrowsersSupport: ['Safari'],
      };
    }
    return {
      message: 'Navegadores permitidos:',
      listBrowsersSupport: ['Chrome', 'Firefox', 'Edge', 'Opera'],
    };
  };
}
