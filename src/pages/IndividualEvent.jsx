import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

const IndividualEvent = () => {
    const params = useParams();
    console.log(params.id, 'params')
    useEffect(() => {
    }, [params.id])
  return (
    <div>IndividualEvent {params.id}</div>
  )
}

export default IndividualEvent