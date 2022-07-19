import './myStyle.css';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    <ImageList cols={4} gap={12} sx={{ width: 1535, height: 580 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>$ {item.price} USD</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
    {
    img: 'rsw.png',
    title: 'Reversible Sherpa Windbreaker',
    price: '69.95',
  },
  {
    img: 'tb.png',
    title: 'Travel Bagpack',
    price: '29.95',
  },
  {
    img: 'hsg.png',
    title: 'Hollister X Sunski Nicoya Sunglasses',
    price: '55.00',
  },
  {
    img: 'ibh.png',
    title: 'Icon Baseball Hat',
    price: '19.95',
  },
];
