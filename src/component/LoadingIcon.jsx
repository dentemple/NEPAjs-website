// @flow

import React from "react"

import FaSpinner from "react-icons/lib/fa/spinner"
import FaExclamationCircle from "react-icons/lib/fa/exclamation-circle"

// For use with react-loadable

const Loading = (isLoading: boolean, error: Error) => {
  if (isLoading) {
    return (
      <span>
        <FaSpinner />
      </span>
    )
  } else if (error) {
    return (
      <span>
        <FaExclamationCircle />
      </span>
    )
  }
}

export default Loading
