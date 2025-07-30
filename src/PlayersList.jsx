import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player.jsx';
import players from './players';

const PlayersList = () => {
  const containerStyle = {
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '50px'
  };

  return (
    <Container fluid style={containerStyle}>
      <h1 style={titleStyle}>⚽ Football Stars</h1>
      <p style={subtitleStyle}>Meet the world's most talented football players</p>
      <Row className="justify-content-center">
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;