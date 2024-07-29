import React from 'react';

function Card(props) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='card col-md-12'>
          <h6 className='badge'>{props.item.title}</h6>
          <div className='col-md-6 p-2'>
            <img
              className='card-img-top'
              src={props.item.image}
              alt='Card image'
            />
          </div>

          <div className='card-body col-md-6'>
            <h6>
              <i class='fa-solid fa-location-dot'></i>
              {props.item.location}
            </h6>
            <p>{props.item.date}</p>
            <h3 className='card-title'>{props.item.title}</h3>
            <p className='card-text'>{props.item.discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
