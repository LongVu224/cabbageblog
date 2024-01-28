import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Spinner } from '../Spinner';
import { getImgUrl } from '../helper/helper'

export const Cards = (props) => {
  const [cardList, setCardList] = useState(null)

  useEffect(() => {
    if (props.blogs) {
      const temp = Object.keys(props.blogs).map((curr) => {
        return props.blogs[curr]
      })
      checkCardList(temp);
    }
  }, [props.blogs]);

  const checkCardList = (data) => {
    if (!data) return null
    const arr = []
    for (let i = 0; i < data.length; i+=3) {
      if (i%3===0) {
        arr.unshift(<ul className='cards__items'>
        {data[i+2] ? <CardItem 
        src={data[i+2].blogImg ? getImgUrl(data[i+2].blogImg[0]) : null}
        text={data[i+2].title}
        label={data[i+2].tag}
        path={`/blog/${data[i+2]._id}`}
        /> : null}
        {data[i+1] ? <CardItem 
        src={data[i+1].blogImg ? getImgUrl(data[i+1].blogImg[0]) : null}
        text={data[i+1].title}
        label={data[i+1].tag}
        path={`/blog/${data[i+1]._id}`}
        /> : null}
        {data[i] ? <CardItem 
          src={data[i].blogImg ? getImgUrl(data[i].blogImg[0]) : null}
          text={data[i].title}
          label={data[i].tag}
          path={`/blog/${data[i]._id}`}
        /> : null}
      </ul>)
      }
    }
    setCardList(arr)
  }

  return (
    <div className='cards'>
      <h1>Check out my PURFECT Collections!</h1>
      <div className='cards__container'>
        {props.loading ? 
          <Spinner /> : 
          <div className='cards__wrapper'>
            {cardList}
          </div>
        }
      </div>
    </div>
  );
}