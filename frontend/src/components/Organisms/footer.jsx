import '../../utils/style/footer.scss'

import { useNavigate, Link } from 'react-router-dom'

import UserService from '../../api/Services/UserServices'

export default function Footer() {
  const userServices = new UserService()
  const navigate = useNavigate()

  return (
    <>
      <footer className="footer">
        <div className="footer__nav">
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/"
          ></Link>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to="/"
          ></Link>
        </div>
      </footer>
    </>
  )
}
