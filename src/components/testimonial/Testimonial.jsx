import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Bekerja dengan tim ini adalah pengalaman yang luar biasa. Mereka sangat profesional dan perhatian terhadap detail.",
    quote: `Dari konsultasi awal hingga pengiriman akhir, setiap langkah ditangani secara profesional. Hasil akhirnya adalah produk yang tidak hanya memenuhi kebutuhan kami tetapi juga membuat para pemangku kepentingan kami terkesan. Sangat direkomendasikan!`,
    name: "Davin G.M",
    designation: "CEO, NLFTs Company",
  },
  {
    message:
      "Keahlian mereka dalam desain UI/UX membantu kami mentransformasi kehadiran digital kami dan meningkatkan keterlibatan pengguna.",
    quote: `Tim tersebut menunjukkan pemahaman yang mendalam tentang kebutuhan kami dan memberikan solusi yang menarik secara visual dan sangat fungsional. Komunikasi berjalan lancar sepanjang proyek.`,
    name: "Kaka V",
    designation: "UI/UX Specialist, NLFTs Company",
  },
  {
    message:
      "Profesional, andal, dan kreatif-semua yang Anda inginkan dari mitra pengembangan.",
    quote: `Mereka menyelesaikan proyek kami tepat waktu dan melakukan upaya ekstra untuk memastikan kepuasan kami. Fitur-fitur baru tersebut telah memberikan perbedaan yang signifikan bagi pengguna kami. Kami berharap dapat bekerja sama lagi di masa mendatang.`,
    name: "Haitsam",
    designation: "Cyber Security, NLFTs Company",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimoni</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
