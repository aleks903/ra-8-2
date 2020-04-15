import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch.js';

export default function LoadingComponent(props) {
  const { url } = props;
  const [data, loading, error] = useJsonFetch(url);
  console.log('renders');
  console.log(loading);
  return (
    <div>
      <p>Load</p>
      <span>{loading && 'Loading...'}</span>
    </div>
  );
}
