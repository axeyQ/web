import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card1 from "../Cards/Card1";

const Purpose1 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline()
      .fromTo(
        ".purpose1-div",
        { y: 100 },
        {
          y: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".purpose1-div",
            start: "-30% center",
            end: "center center",
          },
        }
      )
      .fromTo(
        ".purpose1-div h1",
        { y: 100 },
        {
          y: 0,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".purpose1-div",
            start: "-40% center",
            end: "center center",
          },
        }
      )
      .fromTo(
        ".purpose1-div .card1-div",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".purpose1-div",
            start: "-40% center",
            end: "center center",

            stagger: true,
          },
        }
      );
  });
  return (
    <section className='purpose1-div'>
      <h1>Amenities that we want to provide our customers with</h1>
      <Card1 title='Valar Morgulis valar Dohaeres Lorem ipsum' />
      <Card1 title='Valar Morgulis valar Dohaeres Lorem ipsum' />
      <Card1 title='Valar Morgulis valar Dohaeres Lorem ipsum' />
      <Card1 title='Valar Morgulis valar Dohaeres Lorem ipsum' />
      <Card1 title='Valar Morgulis valar Dohaeres Lorem ipsum' />
    </section>
  );
};

export default Purpose1;
