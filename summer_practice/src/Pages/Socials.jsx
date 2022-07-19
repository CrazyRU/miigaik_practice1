import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import cont1 from '../Assets/cont1.png';
import cont2 from '../Assets/cont2.png';
import cont3 from '../Assets/cont3.png';

const Socials = () =>{
    return(
      <div class='socials-bd'>
        <h1 class='social-title'>Над проектом работали следующие прекрасные люди.</h1>
        <div class='cont-card'>
            <Row xs={1} md={5} className="g-4">
            <Col></Col>
            
            <Col>
            <Card>
            <Card.Img variant="top" src={cont1}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><a href='https://vk.com/engi_died'>Волощенко Алексей</a></div></Card.Title>
                <Card.Text>
                Считает, что 12 глаз это норм. Движение происходит слева направо.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
            <Card.Img variant="top" src={cont2}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><a href='https://vk.com/id231930802'>Гем Иван</a></div></Card.Title>
                <Card.Text>
                Считает, что подобные "квесты" в учебном проекте излишни.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card>
            <Card.Img variant="top" src={cont3}
            height={200}
            />
            <Card.Body>
                <Card.Title><div class="card_title"><a href='https://vk.com/nthk92'>Кобец Кузьма</a></div></Card.Title>
                <Card.Text>
                Любит песни про коров.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col></Col>
            </Row>
        </div>
        <h3 class='cont'>Так же вы можете отправлять нам свои пожелания/статьи или сценарии на почту: voloshchenko.alexey01@gmail.com </h3>
      </div>
    )
  }
  
  export {Socials}