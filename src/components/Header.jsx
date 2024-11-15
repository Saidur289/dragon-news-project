import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center py-2'>
            <img src={logo} className='w-[300px]' alt="" />
            <h2 className='text-gray-400'>Journalism Without Fear And Favour</h2>
            <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;