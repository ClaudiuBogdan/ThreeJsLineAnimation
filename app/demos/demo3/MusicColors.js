import { color } from "color-blend";
import { Color } from 'three'

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
    return new Color(1, 1, 1);
  };

 export {SoundToColor, getBlendedColor};