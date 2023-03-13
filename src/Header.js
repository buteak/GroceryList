
const Header = ({title}) => {

  return(
   <header className="header">
    <h1>{title}</h1>
   </header>
  )
}

Header.defaultProps = {
  title: "default Title"
}
export default Header;

