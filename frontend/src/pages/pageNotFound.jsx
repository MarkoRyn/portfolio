import '../utils/style/pageNotFound.scss'

import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1 className="pageNotFound__404">404</h1>
      <h2 className="pageNotFound__title">Page Not Found !</h2>

      <Link to="/portfolio" className="pageNotFound__link">
        Back to
        <br />
        <span>Home</span>
      </Link>
    </div>
  )
}
