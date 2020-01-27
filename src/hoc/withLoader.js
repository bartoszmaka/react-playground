import React from 'react';

const withLoader = Component => {
  const enhancedComponent = (props) => {
    const { isLoading, ...componentProps } = props
    return props.isLoading
      ? <p>Loading...</p>
      : <Component {...componentProps} />
  }

  return enhancedComponent
}

export default withLoader
