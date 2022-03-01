import { Profiler } from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component'

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="menu-container">
        <Profiler
          id="Directory"
          onRender={(id, phase, actualDuration) =>
            console.log({ id, phase, actualDuration })
          }
        >
          <Directory />
        </Profiler>
      </div>
    </div>
  )
}

export default Homepage
