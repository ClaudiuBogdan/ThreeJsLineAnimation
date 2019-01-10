const ColorJs = require('color');
import { Color } from 'three';

const SoundToColor = [
    {
      r: 40,
      g: 255,
      b: 0,
      a: 0
    },
    {
      r: 0,
      g: 255,
      b: 242,
      a: 0
    },
    {
      r: 0,
      g: 122,
      b: 255,
      a: 0
    },
    {
      r: 5,
      g: 0,
      b: 255,
      a: 0
    },
    {
      r: 71,
      g: 0,
      b: 237,
      a: 0
    },
    {
      r: 99,
      g: 0,
      b: 178,
      a: 0
    },
    {
      r: 174,
      g: 0,
      b: 0,
      a: 0 
    },
    {
      r: 255,
      g: 0,
      b: 0,
      a: 0
    },
    {
      r: 255,
      g: 0,
      b: 0,
      a: 0
    },
    {
      r: 255,
      g: 102,
      b: 0,
      a: 0
    },
    {
      r: 255,
      g: 239,
      b: 0,
      a: 0
    },
    {
      r: 153,
      g: 255,
      b: 0,
      a: 0
    }
  ];

  const getBlendedColor = (pichArray) => {
    pichArray = [
      0.292,
      0.149,
      0.292,
      0.109,
      0.035,
      0.035,
      0.082,
      0.059,
      0.093,
      0.286,
      0.244,
      1
  ];
  let colorsToBlend = [];
  for(let i = 0; i < pichArray.length; i++){
    if(pichArray[i]> 0.5)
      colorsToBlend.push(new ColorJs({r: SoundToColor[i].r, g: SoundToColor[i].g, b: SoundToColor[i].b}));
  }
  let lastBlendedColor = colorsToBlend[0];
  for(let i = 1; i < colorsToBlend.length; i++){
      lastBlendedColor = lastBlendedColor.mix(colorsToBlend[i])
  }
  let resultColor = new Color(lastBlendedColor.color[0]/255, lastBlendedColor.color[1]/255, lastBlendedColor.color[2]/255);
  return resultColor;
};

 export {SoundToColor, getBlendedColor};