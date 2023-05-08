const cardContainer = document.querySelector(".card-container");

const firstStudent = {
  faculty: "University of Oxford",
  subject: "IT",
  image: {
    src: "	https://www.kindpng.com/picc/m/237-2373477_entrepr…-clerk-vector-image-without-face-without-face.png",
    width: "600px",
    height: "900px",
  },
  nameStudent: "Filan Fisteku",
  DOB: "02.02.2002",
  IdNumber: 35556,
  email: "info@info.com",
};

const secondStudent = {
  faculty: "University of Cambridge",
  subject: "IT",
  image: {
    src: "	https://www.kindpng.com/picc/m/237-2373477_entrepr…-clerk-vector-image-without-face-without-face.png",
    width: "600px",
    height: "900px",
  },
  nameStudent: "Bardhyl Bardhyli",
  DOB: "20.20.2002",
  IdNumber: 655553,
  email: "info@info.com",
};

const thirdStudent = {
  faculty: "University of Gjilan",
  subject: "IT",
  image: {
    src: "	https://www.kindpng.com/picc/m/237-2373477_entrepr…-clerk-vector-image-without-face-without-face.png",
    width: "600px",
    height: "900px",
  },
  nameStudent: "Johe Deep",
  DOB: "20.20.2002",
  IdNumber: 655553,
  email: "info@info.com",
};

const fourthStudent = {
  faculty: "University of Prishtina",
  subject: "IT",
  image: {
    src: "	https://www.kindpng.com/picc/m/237-2373477_entrepr…-clerk-vector-image-without-face-without-face.png",
    width: "600px",
    height: "900px",
  },
  nameStudent: "Crisitano Ronaldo",
  DOB: "20.20.2002",
  IdNumber: 655553,
  email: "info@info.com",
  Rate: "⭐⭐⭐⭐",
};

const fivethStudent = {
  faculty: "UBT",
  subject: "IT",
  image: {
    src: "	https://www.kindpng.com/picc/m/237-2373477_entrepr…-clerk-vector-image-without-face-without-face.png",
    width: "600px",
    height: "900px",
  },
  nameStudent: "Linel Messi",
  DOB: "20.20.9999",
  IdNumber: 655553,
  email: "info@info.com",
};

const idFix = (card) => {
  const { faculty, subject, nameStudent, DOB, IdNumber, email, Rate } = card;
  const { src, width, height } = card.image;
  return `
    <div class = card>
      <h2>${faculty}</h2>
      <h3>${subject}</h3>
      <img src=${src} alt="" width=${width} height=${height}
      <h4>Name and surname: ${nameStudent}</h4>
      <p>DOB: ${DOB}</p>
      <p>ID No.: ${IdNumber}</p>
      <p>Email: ${email}</p>
      <p>Rate: ${Rate}</p>
    </div>
  `;
};
const ids = [
  firstStudent,
  firstStudent,
  firstStudent,

  secondStudent,
  secondStudent,
  secondStudent,

  thirdStudent,
  thirdStudent,
  thirdStudent,

  fourthStudent,
  fourthStudent,
  fourthStudent,

  fivethStudent,
  fivethStudent,
  fivethStudent,
];

ids.forEach((card) => {
  cardContainer.innerHTML += idFix(card);
});
