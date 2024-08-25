"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <div className="container">
        <span>The Planets</span>
        <ul>
          <li>
            <Link href="/mercury" className={`${pathname === "/mercury" ? "active" : ""}`}>
              Mercury
            </Link>
          </li>
          <li>
            <Link href="/venus" className={`${pathname === "/venus" ? "active" : ""}`}>
              Venus
            </Link>
          </li>
          <li>
            <Link href="/earth" className={`${pathname === "/earth" ? "active" : ""}`}>
              Earth
            </Link>
          </li>
          <li>
            <Link href="/mars" className={`${pathname === "/mars" ? "active" : ""}`}>
              Mars
            </Link>
          </li>
          <li>
            <Link href="/jupiter" className={`${pathname === "/jupiter" ? "active" : ""}`}>
              Jupiter
            </Link>
          </li>
          <li>
            <Link href="/saturn" className={`${pathname === "/saturn" ? "active" : ""}`}>
              Saturn
            </Link>
          </li>
          <li>
            <Link href="/uranus" className={`${pathname === "/uranus" ? "active" : ""}`}>
              Uranus
            </Link>
          </li>
          <li>
            <Link href="/neptune" className={`${pathname === "/neptune" ? "active" : ""}`}>
              Neptune
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
