"use client";

import { Card, Container, Flex, Separator } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBlog } from "react-icons/fa6";
import classnames from "classnames";

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white'>
      <Flex justify='between'>
        <div className='gap-3 items-center flex py-2 px-5'>
          <Link href='/' className=''>
            <FaBlog className='h-8 w-8' />
          </Link>
          <NavLinks />
        </div>
      </Flex>
      <Separator size='4' />
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Feed", href: "/" },
    { label: "New Post", href: "new" },
  ];

  return (
    <ul className='flex space-x-6 ml-3'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "!text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
