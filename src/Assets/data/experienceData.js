import projectImage from "../images/skills/adobe-xd.svg";
// import projectImage from "../images/Beer-Api.png";


const getBase64FromUrl = async (imageUrl) => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

export const experienceData = [
    {
        image: projectImage,
        title: "Frontend Developer | Freelancer.com",
        location: "London, UK",
        date: " May 2019 _ Jul 2022",
        details: [
            "Developed web applications using React, Redux, Next.js",
            "Building a landing page with high speed and high scores in speed test gtmetrix and lighthouse, etc",
            "Creating a web application (Windows, Android and iOS)",
            "Create website with modern monorepo architecture",
            "Collaborated closely with other developers on projects that require multiple people to complete tasks",
        ],
    },
    {
        image: projectImage,
        title: "Frontend Developer | Upwork",
        date: "Sep 2019 - Jan 2022",
        details: [
            "Worked with a team of 5 developers to create an e-commerce website using React and NodeJS",
            "Built a dashboard for monitoring server performance using NodeJS, React, Material-ui",
            "Created reusable components that were easily maintainable, reducing the time spent on future development by 50%",
        ],
    },
];


Promise.all(
    experienceData.map(async (item) => {
      if (item.imageUrl) {
        item.imageBase64 = await getBase64FromUrl(item.imageUrl);
      }
      return item;
    })
  ).then((dataWithBase64) => {
    console.log(dataWithBase64);
  });