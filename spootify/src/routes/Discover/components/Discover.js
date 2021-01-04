import React from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const listTypes = [
  {
    id: 'released',
    imagesKey: 'images',
    text: 'RELEASED THIS WEEK',
    type: 'new-releases',
  },
  {
    id: 'featured',
    imagesKey: 'images',
    text: 'FEATURED PLAYLISTS',
    type: 'featured-playlists',
  },
  {
    id: 'browse',
    imagesKey: 'icons',
    text: 'BROWSE',
    type: 'categories',
  },
];

const Discover = () => {
  return (
    <div className="discover">
      {
        listTypes.map(
          ({ id, imagesKey, type, text}) => (
            <DiscoverBlock
              id={id}
              imagesKey={imagesKey}
              key={id}
              type={type}
              text={text}
            />
          )
        )
      }
    </div>
  )
};

export default Discover;