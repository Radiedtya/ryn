import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "Saya merancang pengalaman yang intuitif dan menyenangkan dengan memahami kebutuhan pengguna, melakukan riset, dan membuat wireframe serta prototipe yang meningkatkan kemudahan penggunaan.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "Saya merancang antarmuka yang menarik secara visual dan konsisten, dengan fokus pada tata letak, warna, dan tipografi untuk memastikan pengalaman pengguna yang lancar dan menarik.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Saya membangun aplikasi web yang responsif dan berkinerja tinggi menggunakan teknologi modern, dengan memastikan aksesibilitas, skalabilitas, dan pemeliharaan.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Apa yang saya kerjakan?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Saya berfokus pada perancangan pengalaman pengguna, pembuatan antarmuka
            yang menarik, serta pengembangan aplikasi web yang stabil, efisien,
            dan mudah digunakan.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Pendekatan saya menggabungkan kreativitas desain dan keahlian teknis
            untuk menghasilkan solusi yang tidak hanya menarik secara visual,
            tetapi juga fungsional dan bernilai bagi pengguna.
          </p>
        </div>

        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
