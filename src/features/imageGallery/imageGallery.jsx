import { Piano } from '@mui/icons-material';
import {
  Buildings,
  Motherboard,
  Plane,
  Shoes,
  Skate,
  Supra,
} from '../../assets';
import './imageGallery.style.css';

const ImageGallery = () => {
  return (
    <div className="imageGalleryHolder">
      <div className="imageGalleryMiddle">
        <Buildings />
        <Motherboard />
        <Plane />
        <Shoes />
        <Skate />
        <Supra />
      </div>
    </div>
  );
};

export default ImageGallery;
