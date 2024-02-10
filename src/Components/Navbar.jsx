import Logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <div className='navbar-div'>
      <img src={Logo} alt='logo' className='navbar-logo' />
      <div className='navbar-links'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <a href='#'>Blog</a>
        <a href='#'>Careers</a>
      </div>
    </div>
  );
};

export default Navbar;
