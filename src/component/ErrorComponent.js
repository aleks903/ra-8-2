import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch.js';

export default function ErrorComponent(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);
  console.log('renders');
  console.log(error);
  return (
    <div>
      <p>Error</p>
      <span>{error}</span>
    </div>
  );
}
