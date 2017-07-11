// @flow

import React, { Component } from "react"
import { Link } from "react-router-dom"
import FaSpinner from "react-icons/lib/fa/spinner"

class PageLoading extends Component {
  render() {
    return (
      <div>
        <p style={{ margin: 20 }}>Page Loading...</p>
        <p style={{ margin: 30, textAlign: "center", fontSize: "3em" }}>
          <FaSpinner />
        </p>
        <p style={{ margin: 30, textAlign: "center" }}>
          <Link to="/">Return Home</Link>
        </p>
      </div>
    )
  }
}

export default PageLoading
