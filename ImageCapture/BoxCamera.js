import styled from 'styled-components';

const BoxCamera = styled.div`
  overflow: hidden;
  background-color: transparent;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  & .canvas {
    position: absolute;
    z-index: 50;
    margin: 0 auto;
    top: 0;
    bottom: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scaleX(-1);
  }

  & #camera--canvas {
    display: none;
  }

  & #svgMask {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  & #camera--video,
  & #camera--canvas {
    transform: scaleX(-1);
    filter: FlipH;
    width: 100%;
    height: 100%;
  }

  & #camera--overlay {
    transform: scaleX(-1);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  & audio,
  & canvas,
  & video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
  }

  & #svgMask .cls-text {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  & #svgMask .cls-text-medium {
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
  }

  & #svgMask .cls-text-big {
    font-size: 29px;
    font-family: 'Roboto', sans-serif;
  }

  & *::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & *::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  & *::--webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & video::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
  }

  & video::--webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
  }

  & #camera--trigger {
    width: 60px;
    height: 60px;
    font-size: 16px;
    border-radius: 30px;
    border: none;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    margin: 0 auto;
    display: none;
    cursor: pointer;
  }
`;

export default BoxCamera;
