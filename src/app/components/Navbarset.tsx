import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image'
 
function Navbarset() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
      ];
  return (
    <Navbar className='mx-0 w-screen' disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"/>
      </NavbarContent>

      <NavbarContent className=" sm:hidden pr-3" >
        <NavbarBrand >
        <Image
      src="/logo/ops.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
          {/* <AcmeLogo /> */}
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="container sm:flex gap-4 item-center justify-center" >
        <NavbarBrand>
        <Image
      src="/logo/ops.png"
      width={200}
      height={200}
      alt="opscraft logo"
    />
          {/* <AcmeLogo /> */}
          {/* <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" className='hover:text-teal-700' href="#">
         Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className='hover:text-teal-700' color="success">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className='hover:text-teal-700' href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='flex-row-reverse  '>
        
        <NavbarItem>
          <Button as={Link} color="primary" className='hover:bg-green-400 text-sky-700' href="#" variant="flat">
            Contact Us
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className='hover:text-teal-700'>Careers</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Navbarset