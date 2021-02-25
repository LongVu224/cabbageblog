import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';

export const Cards = (props) => {
  console.log(props.blogs)

  const [cardList, setCardList] = useState(null)

  useEffect(() => {
    const temp = Object.keys(props.blogs).map((curr) => {
      return props.blogs[curr]
    })
    checkCardList(temp);
  }, [props.blogs]);

  const checkCardList = (data) => {
    const arr = []
    for (let i = 0; i < data.length; i+=3) {
      if (i%3===0) {
        arr.push(<ul className='cards__items'>
        {data[i] ? <CardItem 
          src={data[i].blogImg}
          text={data[i].text}
          label={data[i].tag}
          path={`/${data[i]._id}`}
        /> : null}
        {data[i+1] ? <CardItem 
          src={data[i+1].blogImg}
          text={data[i+1].text}
          label={data[i+1].tag}
          path={`/${data[i+1]._id}`}
        /> : null}
        {data[i+2] ? <CardItem 
          src={data[i+2].blogImg}
          text={data[i+2].text}
          label={data[i+2].tag}
          path={`/${data[i+2]._id}`}
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
        <div className='cards__wrapper'>
          {cardList}
        </div>
      </div>
    </div>
  );
}