import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div class='last_block'>
        <div class='inner_footer'>
          <Row xs={1} md={3}>
            <Col><a href='#' class='foot-item'>Вверх страницы</a></Col>
            <Col><Link to='/socials' class='foot-item'>Контакты</Link></Col>
            <Col><Link to='/quest' class='foot-item'>К*Н*О*П*К*А</Link></Col>
          </Row>
        </div>
      </div>
    )
  }
}
