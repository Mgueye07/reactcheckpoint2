import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    margin: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    overflow: 'hidden'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover',
    borderRadius: '12px 12px 0 0'
  };

  const bodyStyle = {
    background: 'white',
    color: '#333',
    padding: '20px'
  };

  const titleStyle = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '10px',
    textAlign: 'center'
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '0.95rem',
    color: '#555'
  };

  const jerseyStyle = {
    display: 'inline-block',
    backgroundColor: '#3498db',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  };

  return (
    <Card 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
      }}
    >
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={name}
        style={imageStyle}
      />
      <Card.Body style={bodyStyle}>
        <Card.Title style={titleStyle}>{name}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Jersey Number:</strong> <span style={jerseyStyle}>#{jerseyNumber}</span>
        </Card.Text>
        <Card.Text style={textStyle}>
          <strong>Age:</strong> {age} years old
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Free Agent',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400'
};

export default Player;