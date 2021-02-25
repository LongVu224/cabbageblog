import React, {useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';

export const Cards = (props) => {

  const [frontList, setFrontList] = useState(null)

  useEffect(() => {
    checkFrontList(props.blogs);
    const temp = Object.keys(props.blogs).map((curr) => {
      return props.blogs[curr]
    })
  }, [props.blogs]);

  const checkFrontList = (data) => {
    const arr = Object.keys(data)
    if (data) {
      if (arr[arr.length - 2] && arr[arr.length - 1]) {
        const prop1 = data[arr.length-2]
        const prop2 = data[arr.length-1]
        return setFrontList(
        <ul className='cards__items'>
          <CardItem
            src={prop1.blogImg}
            text={prop1.title}
            label={prop1.tag}
            path={`/${prop1.id}`}
          />
          <CardItem
            src={prop2.blogImg}
            text={prop2.title}
            label={prop2.tag}
            path={`/${prop2.id}`}
          />
        </ul>)
      }
      else if (data[data.length - 1] && !data[data.length - 2]) {
        const prop = data[arr.length-1]
        return setFrontList(
          <ul className='cards__items'>
            <CardItem
              src={prop.blogImg}
              text={prop.title}
              label={prop.tag}
              path={`/${prop.id}`}
            />
          </ul>
        )
      }
    }
  }

  return (
    <div className='cards'>
      <h1>Check out my PURFECT Collections!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {frontList}
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
        </div>
      </div>
    </div>
  );
}