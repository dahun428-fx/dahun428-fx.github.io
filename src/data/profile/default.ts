import { profile } from "@/models/profile";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import myImage from "./assets/images/my-image.jpg";

export const profileData: profile = {
  image: myImage.src,
  name: {
    title: "정다훈",
  },
  contact: [
    {
      title: "rubcustomer@gmail.com",
      link: "mailto:rubcustomer@gmail.com",
      icon: faEnvelope,
    },
    {
      title: "https://github.com/dahun428-fx",
      link: "https://github.com/dahun428-fx",
      icon: faGithub,
    },
  ],
};
