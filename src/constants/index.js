// import icons
import {
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import FotoInti from "../assets/img/foto-inti.png";
import Sekum2 from "../assets/img/sekum2.png";
import Sekum1 from "../assets/img/sekum1.png";
import Kahim from "../assets/img/kahim.png";
import Wakahim from "../assets/img/wakahim.png";
import Bendum1 from "../assets/img/bendum1.png";
import Bendum2 from "../assets/img/bendum2.png";
import Dinas1 from "../assets/img/dinas/dinas1.png";
import Dinas2 from "../assets/img/dinas/dinas2.png";
import Dinas3 from "../assets/img/dinas/dinas3.png";
import Dinas4 from "../assets/img/dinas/dinas4.png";
import Dinas5 from "../assets/img/dinas/dinas5.png";
import Dinas6 from "../assets/img/dinas/dinas6.png";
import Dinas7 from "../assets/img/dinas/dinas7.png";
export const navigation = [
  {
    name: "home",
    href: "#home",
  },
  {
    name: "about",
    href: "#about",
  },
  {
    name: "dinas",
    href: "#dinas",
  },
  {
    name: "contact",
    href: "#footer",
  },
];

export const hero = {
  title: "HMIF OPEN RECRUITMENT",
  subtitle:
    "Himpunan Mahasiswa Teknik Informatika alias HMIF adalah sebuah Organisasi Kemahasiswaan khusus Jurusan Teknik Informatika yang bergerak dalam bidang Akademik maupun Non-Akademik yang dapat menjadi wadah bagi para Mahasiswa Jurusan Teknik Informatika",
  buttonText: "Daftar Sekarang",
};

export const stats = [
  {
    value: "x",
    text: "Tahun berdiri",
  },
  {
    value: "7",
    text: "Dinas dan 10 divisi",
  },
  {
    value: "80+",
    text: "Anggota aktif",
  },
  {
    value: "100+",
    text: "Calon Staff baru",
  },
];

export const features = {
  image: <FotoInti />,
  title: "Mari join HMIF,dan taklukan Dunia bersama",
  subtitle:
    "Kami tentu saja memiliki banyak proker,dan 2 unggulan diantaranya adalah ",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Informatics Caring",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vehicula dui. Sed accumsan ante.",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Latest Technology",
      subtitle:
        "Membahasa mengenai Teknologi terbaru dan biasanya juga membahas mengenai Teknologi yang viral dan lagi On-Demand.",
    },
  ],
  feature2: {
    image: <Dinas1 />,
    title: "Bingung mau masuk Dinas mana? Akademik solusinya!",
    subtitle:
      "Dinas Akademik adalah dinas yang bertanggung jawab dalam meningkatkan hal-hal yang berkaitan dengan akademik dan pengembangan teknologi.",
  },
};

export const bphInti = {
  title: "BPH inti 2023",
  subtitle:
    "Sebelum join HMIF,wajib bagi CASTAFF untuk mengetahui BPH inti HMIF.",
  link: "Check disamping",
  icon: <IoIosArrowRoundForward />,
  paraInti: [
    {
      name: "Sekum II",
      image: <Sekum2 />,
    },
    {
      name: "Sekum I",
      image: <Sekum1 />,
    },
    {
      name: "Kahim",
      image: <Kahim />,
    },
    {
      name: "Wakahim",
      image: <Wakahim />,
    },
    {
      name: "Bendum I",
      image: <Bendum1 />,
    },
    {
      name: "Bendum II",
      image: <Bendum2 />,
    },
  ],
};

export const dinas = {
  title: "Semua Dinas",
  subtitle:
    "Kami memberikan Anda kebebasan dalam menentukan pilihan Dinas sesuai dengan Minat dan Bakat masing masing calon Staff.",
  pages: [
    {
      dinasList: [
        {
          image: <Dinas1 />,
        },
        {
          image: <Dinas2 />,
        },
        {
          image: <Dinas3 />,
        },
        {
          image: <Dinas4 />,
        },
        {
          image: <Dinas5 />,
        },
        {
          image: <Dinas6 />,
        },
        {
          image: <Dinas7 />,
        },
        {
          image: <Dinas1 />,
        },
      ],
    },
  ],
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "ht",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoLinkedin />,
      href: "#",
    },
  ],
  copyright: "Copyright Ⓒ 2023 ZildjianVito. All Rights Reserved.",
};
