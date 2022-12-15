import logo from '../assets/images/logo.png'
import main from '../assets/images/main4.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components/index'
import {Link} from 'react-router-dom'

const landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        This is a job hiring website!
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>
            </div>
        </Wrapper>
    )
}


export default landing
