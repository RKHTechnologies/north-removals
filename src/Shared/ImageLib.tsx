import removals from '../img/removals.jpg';
import box from '../img/box.jpg';
import boxTape from '../img/box-tape.jpg';
import homeMoves from '../img/House-Removals.jpg';
import wrappedSofa from '../img/wrapped-sofa.jpg';
import desk from '../img/desk.jpg';
import rkh from '../img/RKHT_logo.png';
import bubbleWrap from '../img/cutting-bubblewrap.jpg';

const Images = {
  'rkh': rkh,
  'removals': removals,
  'box': box,
  'boxTape': boxTape,
  'homeMoves': homeMoves,
  'wrappedSofa': wrappedSofa,
  'desk': desk,
  'bubbleWrap': bubbleWrap,
}

export type imageLib = 'rkh' | 'removals' | 'box' | 'boxTape' | 'homeMoves' | 'wrappedSofa' | 'desk' | 'bubbleWrap';

export default Images;