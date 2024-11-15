import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-2 pt-5 py-2 bg-base-100">
            <p className="bg-red-400 text-black py-1">Latest</p>
           <Marquee pauseOnHover speed={100} className="space-x-10">
            <Link to = '/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem?</Link>
            <Link to = '/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem?</Link>
            <Link to = '/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, dolorem?</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;