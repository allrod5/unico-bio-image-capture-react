import { defineMessages } from 'react-intl';

const prefix = 'app.Base.Components.ImageCapture';

export default defineMessages({
  loadingTitle: {
    id: `${prefix}.loadingTitle`,
    defaultMessage: 'Carregando',
  },
  loadingDescription: {
    id: `${prefix}.loadingDescription`,
    defaultMessage: 'Isso pode demorar alguns segundos.',
  },
  orientationTitle: {
    id: `${prefix}.orientationTitle`,
    defaultMessage: 'Ops! Sua câmera está na posição errada',
  },
  orientationDescription: {
    id: `${prefix}.orientationDescription`,
    defaultMessage: 'Segure seu celular na vertical para tirar a foto.',
  },
});
