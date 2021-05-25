import * as faceapi from 'face-api.js';

export default class AcessoWebFrameModel {
  constructor() {
    this.isfaceApiLoaded = false;
    this.faceDetectorOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 });
  }

  loadModelsCameraInteligence = async () => {
    const path = this.getHostUrlBase('assets/models/selfie-capture');
    if (!this.isfaceApiLoaded) {
      return await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(path),
        faceapi.nets.faceLandmark68Net.loadFromUri(path),
      ])
        .then(() => {
          this.isfaceApiLoaded = true;
        })
        .catch(() => Promise.reject(new Error('Não foi possível baixar os modelos.')));
    }
    return Promise.resolve();
  };

  isFaceDetectionModelLoaded = () => !!faceapi.nets.tinyFaceDetector.params;

  isFaceLandmark68NetLoaded = () => !!faceapi.nets.faceLandmark68Net.params;

  getHostUrlBase = (path) => `${window.location.protocol}//${window.location.host}/${path}`
}
