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
        <p>
          Hello! I am <strong>Vladislav Nabatov</strong>. Software engineer, currently doing React.
          <br />
          Say <a href="mailto:hi@vladislavnabatov.com">hi@vladislavnabatov.com</a>
        </p>
      </div>
    )
  }
}

export default Bio
