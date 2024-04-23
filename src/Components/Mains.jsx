import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Mains() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create');
  };

  return (
    <button >Go to other page</button>
  );

}

export default Mains