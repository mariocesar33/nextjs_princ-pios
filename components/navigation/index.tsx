import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './navigation.module.css';

const link = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
];

type navAnchor = {
  path: string,
  children: ReactNode,
}

function NavAnchor ({ path, children }: navAnchor) {
  return(
    <Link href={path}>
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  )
}

const Navigation = () => {
  const { pathname } = useRouter();
  return(
    <nav>
      <ul className={styles.list}>
        {link.map(({name, path}) => (
          <li key={path}>
            {path === pathname 
              ? <span>{name}</span> 
              : <NavAnchor path={path}>{name}</NavAnchor>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;