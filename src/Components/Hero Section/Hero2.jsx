import Button from "../Button";
import VDO from "../../assets/【Anime food】肆式青春 詩季織々 _ Flavors of Youth _ しきおりおり_舌尖上的米粉Rice noodles.mp4";
import IMG from "../../assets/logo.webp";

const Hero2 = () => {
  return (
    <div className='hero-2-div'>
      <img src={IMG} alt='companyLogo' className='hero-2-img' />

      <video autoPlay muted loop className='bgVideo'>
        <source src={VDO} type='video/mp4' />
      </video>
      <Button />
    </div>
  );
};

export default Hero2;
