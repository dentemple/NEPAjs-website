import React, { Component } from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import jsonp from "jsonp";
import { fromJSONtoString, fromJSONtoDate } from "../../util/helpers";
import SECRET from "../../util/SECRET";

class NextMeetup extends Component {
  constructor() {
    super();
    this.state = {
      apiUrl: `https://api.meetup.com/2/events?key=${SECRET.MEETUP_API_KEY}&group_urlname=NEPA-js&sign=true`,
      meetupInfo: {}
    };
  }
  componentDidMount() {
    jsonp(this.state.apiUrl, null, (err, data) => {
      if (err) {
        this.setState({ meetupInfo: err });
      } else {
        this.setState({ meetupInfo: data.results[0] });
      }
    });
  }
  render() {
    const { name, time } = this.state.meetupInfo;
    return (
      <Row>
        <Col xs={12}>
          <p>
            {fromJSONtoString(name)}
          </p>
        </Col>
      </Row>
    );
  }
}

export default NextMeetup;
