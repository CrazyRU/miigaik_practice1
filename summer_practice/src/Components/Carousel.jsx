import caro1 from '../Assets/caro1.png';
import caro2 from '../Assets/caro2.png';
import caro3 from '../Assets/caro3.png';

import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Slider () {
  return(
    <>
      <Carousel>
        <Carousel.Item>
          <img class='caro'
            className='d-block w-100'
            src={caro1}
            alt='First slide'
          />
          <Carousel.Caption>
            <Link to="/advice" class='n'><h3>100 слухов для вашего города.</h3></Link>
            <p>Все любят слухи – они могут сбивать с толку, могут быть тем самым «крюком», который вытянет вашу кампанию, а могут и просто взбодрить заскучавших игроков.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img class='caro'
            className='d-block w-100'
            src={caro2}
            alt='Second slide'
          />
          <Carousel.Caption>
            <Link to="/cowlevel" class='n'><h3>Советы по созданию собственных видов существ.</h3></Link>
            <p>Уникальные чудовища, играющие важную роль в приключении, заслуживают такого же внимания, что и гуманоидные ПМ, с манерами, идеалами, привязанностями, слабостями и тайнами. Муу!</p>
          </Carousel.Caption>
        </Carousel.Item>

      <Carousel.Item>
        <img class='caro'
          className='d-block w-100'
          src={caro3}
          alt='Third slide'
        />
        <Carousel.Caption>
          <Link to="/advice" class='n'><h3>Карты тоже важны!</h3></Link>
          <p>Большой выбор карт на любую ситуацию и приключение! От деревни на границы королевства, до тронного зала императора.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </>
  );
}