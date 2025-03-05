
"use client";
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from next/image
import logoImg from '@/assets/logo.png'; // Ensure the path is correct

import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background.js';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const path = usePathname();
  return (

<> 

<MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food on it" priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li><Link href="/meals" className={path.startsWith('/meals') ? classes.active : classes.undefined}>
          Browse Meals
          
          </Link></li>
          <li><Link href="/community" className={path.startsWith('/community') ? classes.active : classes.undefined}>Foodies Community</Link></li> {/* Fixed lowercase */}
        </ul>
      </nav>
    </header>

    </>
  );
}
