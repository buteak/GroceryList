const Footer = ({items}) => {

  return (
    <footer className="footer">
     <p> {items.length} List {items.length === 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer;