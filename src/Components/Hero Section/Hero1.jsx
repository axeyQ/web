import IMG from "../../assets/logo.webp";
import Button from "../Button";
const Hero1 = () => {
  return (
    <div className='hero-1-div'>
      <img src={IMG} alt='companyLogo' className='hero-1-img' />
      <Button />
    </div>
  );
};

export default Hero1;
