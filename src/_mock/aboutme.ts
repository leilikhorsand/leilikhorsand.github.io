import { birthDate } from "../config";

// ----------------------------------------------

function getAge() {
  const tempBirthDate = new Date(birthDate);
  const tempToday = new Date();
  let age = tempToday.getFullYear() - tempBirthDate.getFullYear();
  const month = tempToday.getMonth() - tempBirthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && tempToday.getDate() < tempBirthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export const aboutMe = {
  title: "hi hi hiiii",
  details: [
    {
      id: 1,
      text: ` i am , ${getAge()} years old. `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: " and this is this. ",
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              good good.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: " hi ",
      icon: "💻",
    },
    {
      id: 5,
      text: `
              yes
           `,
      icon: "🔎",
    },
    {
      id: 6,
      text: `
              yoo
           `,
      icon: "💭",
    },
  ],
};
