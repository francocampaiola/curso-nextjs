import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './ActiveLink.module.css';

export const ActiveLink = ({text, href}) => {

  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a href={href} className={asPath === href ? styles.link : null}>{text}</a>
    </Link>
  )
}

