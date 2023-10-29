import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DayOfWorkOut</h4>
          <h1>Join  The Legends Of The Fitness Wold</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure excepturi vitae quibusdam, eligendi doloribus adipisci!</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader