// @flow

import React from "react"
import ReactLoading from "react-loading"

// For use with react-loadable

const Loading = (isLoading: boolean, error: Error) => {
  if (isLoading) {
    return (
      <div>
        <ReactLoading type="spokes" color="#444" />
      </div>
    )
  } else if (error) {
    return <div>Err</div>
  }
}

export default Loading
