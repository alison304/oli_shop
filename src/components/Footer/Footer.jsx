import "./Footer.css"

function Footer() {
  return (
    <div className="footer_container">
        <ul className="social-media">
          <li>
            <a href="https://www.linkedin.com/in/alison-janise-paico-quispe/" without rel="noreferrer" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          
          </li>
          <li>
            <a href="https://github.com/alison304/" without rel="noreferrer" target="_blank">
                <i class="fab fa-github-square"></i>
            </a>
          </li>
          <li>
          <a href="https://es-la.facebook.com/" without rel="noreferrer" target="_blank">
              <i class="fab fa-facebook-square"></i>
          </a>
          </li> 
        </ul>
        <p>Follow me alison304</p>
    </div>
  )
}

export default Footer