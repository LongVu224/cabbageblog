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
    setCardList(data.map((cur, i) => {
      if (i%3===0) {
        return (
          <ul className='cards__items'>
            {data[i] ? <CardItem 
              src={data[i].blogImg}
              text={data[i].title}
              label={data[i].tag}
              path={`/${data[i]._id}`}
            /> : null}
            {data[i+1] ? <CardItem 
              src={data[i+1].blogImg}
              text={data[i+1].title}
              label={data[i+1].tag}
              path={`/${data[i+1]._id}`}
            /> : null}
            {data[i+2] ? <CardItem 
              src={data[i+2].blogImg}
              text={data[i+2].title}
              label={data[i+2].tag}
              path={`/${data[i+2]._id}`}
            /> : null}
          </ul>
        )}
    }));
  }

  return (
    <div className='cards'>
      <h1>Check out my PURFECT Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/blogs'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          {cardList}
        </div>
      </div>
    </div>
  );
}