import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card6,
    category: "Frontend",
    title: "Admin Dashboard",
    description:
      "Dashboard admin yang dirancang untuk memudahkan pengelolaan produk.",
    link: "#",
  }
];
// Jika ingin menambahkan lebih banyak proyek, tambahkan objek ke array projectData di atas.

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Proyek <span className="text-purple-800">Unggulan</span></p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            berikut adalah beberapa proyek unggulan yang telah saya kerjakan
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Lihat lebih banyak &rarr;
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
