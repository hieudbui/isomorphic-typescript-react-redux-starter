import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
  auth: AuthToken;
}

const Header: React.SFC<Props> = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }: Props) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
