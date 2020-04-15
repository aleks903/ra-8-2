import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch.js';

export default function DataComponent(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);
  console.log('renders');
  console.log(data);
  return (
    <div>
      <p>Data</p>
      <span>{data}</span>
    </div>
  );
}
