import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        {/*<img*/}
          {/*src={profilePic}*/}
          {/*alt={`Kyle Mathews`}*/}
          {/*style={{*/}
            {/*marginRight: rhythm(1 / 2),*/}
            {/*marginBottom: 0,*/}
            {/*width: rhythm(2),*/}
            {/*height: rhythm(2),*/}
          {/*}}*/}
        {/*/>*/}
        <p>
            Hello! I am <strong>Vladislav Nabatov</strong>. Software engineer, currently doing React.
          <br/>
          <a href="https://twitter.com/nabatov_v">
            Follow me on twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
