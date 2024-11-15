import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../layout/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();

  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9">
          <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={news.image_url}
                alt="Shoes"
                className="rounded-xl w-full"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions">
                <Link to = {'/category/01'} className="btn btn-primary">Back To Category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
