import { Box, Link } from '@chakra-ui/react';
import React from 'react'
import ig from "./../../assets/icon-ig.png";
import ws from "./../../assets/icon-ws.png";
import iconbook from "./../../assets/icon-book.png";
import '../scss/NavBar.scss';



const NAvBar = () => {
    return (
        <div className='navbar'>
            {/* contenedor de Links de Redireccionamiento */}
            <div className='navbar_map'>
                <div>
                    Budaiya, Bahrain
                </div>
                <div>
                    009336194
                </div>
                <div>
                Adliya
                </div>
                <div>
                    009336194
                </div>
            </div>

            <Box display="flex" gap="90px" fontSize="5xl" color="#A97535" >
                
                <Box display="flex" gap="90px" fontSize="5xl" color="#A97535" className='navbar_containerLinks'>
                <Link width={25} height={25} href="http://instagram.com"> <img src={ig} alt="icon-ig" width={25} /> </Link>
                <Link className='navbar_iconws' href="http://wa.me/573134312454"> <img src={ws} alt="icon-ig" width={35} /> </Link>
                </Box>
                

            </Box>
            <Box display="flex" gap="90px" fontSize="5xl" color="#A97535" className='navbar_button'>
                <Link href="/book" className='button-book'> <img src={iconbook} alt="icon-ig" width={130} height={140}/> </Link>
            </Box>


        </div>
    )
}

export default NAvBar