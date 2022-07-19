import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.png';
import card3 from '../Assets/card3.png';
import card4 from '../Assets/card4.png';
import card5 from '../Assets/card5.png';
import card6 from '../Assets/card6.png';

function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
        <Col>
        <Card>
        <Card.Img variant="top" src={card1}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>"Броня бесполезна без хорошего оружия..."</Link></div></Card.Title>
            <Card.Text>
            Подборка 20 артефактов брони, наносящих пассивный урон противнику и не ломающих систему игры.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Img variant="top" src={card2}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>Битва - как цель приключения.</Link></div></Card.Title>
            <Card.Text>
            "Методы построения интересных и сложных боёв" или "Сказание о том, как не сделать бой повседневной рутиной".
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Img variant="top" src={card3}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>100 слухов для вашего города.</Link></div></Card.Title>
            <Card.Text>
            Все любят слухи – они могут сбивать с толку, могут быть тем самым «крюком», который вытянет вашу кампанию, а могут и просто взбодрить заскучавших игроков.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Img variant="top" src={card4}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>Советы по созданию собственных видов существ.</Link></div></Card.Title>
            <Card.Text>
            Уникальные чудовища, играющие важную роль в приключении, заслуживают такого же внимания, что и гуманоидные ПМ, с манерами, идеалами, привязанностями и тайнами.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Img variant="top" src={card5}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>А какой маг сегодня ты?</Link></div></Card.Title>
            <Card.Text>
            Считаешь, что маг - это всегда старец в серой накидке, кричащий: "Ты не пройдёшь!"? Вот тебе 50 предысторий и особенных черт для отыграша мага.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card>
        <Card.Img variant="top" src={card6}
        height={300}
        />
        <Card.Body>
            <Card.Title><div class="card_title"><Link to='/advice'>Карты тоже важны!</Link></div></Card.Title>
            <Card.Text>
            Большой выбор карт на любую ситуацию и приключение! От деревни на границы королевства, до тронного зала императора.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
    </Row>
  );
}

export default GridExample;