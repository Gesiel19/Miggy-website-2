import React from 'react';
import NAvBar from './NAvBar';
import "../scss/FrontPage.scss";
import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import lg from "./../../assets/logoMiggy.png";
import bnr from "./../../assets/banner-p.svg";
import iconline from "./../../assets/icon-line.svg";
import imgc from "./../../assets/img-center.png";
import bnrt from "./../../assets/banner-p2.svg";
import { Button } from '@chakra-ui/react'
import {  useNavigate } from 'react-router-dom';
import eyb from "./../../assets/eyb.jpeg";

// import lipsn from "./../../assets/lips-n.jpeg";
import lips from "./../../assets/lips.png";
// import lmnt from "./../../assets/lamination.jpeg";
import lash from "./../../assets/lash.jpeg";
import nails from "./../../assets/nails.png";
import hair from "./../../assets/hair.jpeg";
import lipsn from "./../../assets/lips-n.jpeg";
import Footer from './Footer';






const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NAvBar />
      {/* Espacio Logo y Links de redicrección*/}
      <header>
        <Box className='header'>
          <div>
            <Link href="#" className='header_lg' > <img src={lg} alt="icon-ig" width={140} /> </Link>
          </div>
          <div className='header_list'>
            <a href="www.google.com">HOME</a>
            <a href="#ejemplo">SERVICES</a>
            <a href="www.google.com">CONTAC</a>
            <a href="www.google.com">LOCATIONS</a>
          </div>
        </Box>

        <Box className='header_banner'>
          <Image

            src={bnr}
            alt="banner principal"
            w={1350}

          // h={600}


          />

          <Text className='header_textb'>
            Latinas Salon In Bahrain
          </Text>
        </Box>
      </header>

      <main className='main'>

        {/* BOX 1 imagen + presentación*/}
        <Box className='main_banner1'>

          <div>
            <img src={imgc} alt="br" width={380} />
          </div>

          <div className='main_section1'>
            <div className='main_section1-2' >
              Welcome to Miss Miggy
            </div>
            <div className='main_section1-3'>
              <img src={iconline} alt="br" width={150} />
            </div>
            <div className='main_section1-4'>
              The integral beauty of women is our priority. Our salon has professionals in the beauty area: hair, eyebrows, eyelashes, lips and face.
            </div>
          </div>
        </Box>

        {/* BOX 2 reserva*/}

        <Box className='main_banner2'>

          <div>
            <Image

              src={bnrt}
              alt="banner secundario"
              w={1349}
            // h={600}
            />
            <Text className='header_textb2'>
              If you are looking for trends in beauty <br />
              This is the right place!
            </Text>

            <Button

              className='main_banner3'
              background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
              _hover={{
                cursor: "pointer",
                boxShadow: "inset 120px 0 0 0 rgba(256 ,256, 256)",


              }}

              onClick={() => {
                navigate('/book');
              }}
            >
              Booking
            </Button>
          </div>
        </Box>

        {/* BOX 3 reserva*/}

        {/* panel 1*/}

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'  >
          <div className='main_banner5' id='ejemplo'>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5'>  Perfect Eyebrows </Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'> <img style={{ boxShadow: ' rgba(254, 166, 220, 0.913) 0px 22px 60px 4px' }} src={eyb} alt="eyebrows" width={200} /></Text>
                </CardBody>
                <CardFooter>
                  <Button

                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",

                    }}
                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5'> Lips </Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'><img src={lips} alt="eyebrows" width={200} /></Text>



                </CardBody>
                <CardFooter>
                  <Button
                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",
                    }}

                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5' > Lash</Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'><img style={{ boxShadow: ' rgba(254, 166, 220, 0.913) 0px 22px 60px 4px' }} src={lash} alt="eyebrows" width={200} /></Text>
                </CardBody>
                <CardFooter>
                  <Button

                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",


                    }}

                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >
                    View Details
                  </Button>

                </CardFooter>
              </Card>
            </div>
          </div>

        </SimpleGrid>

        {/* panel 2*/}

        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'  >
          <div className='main_banner5' id='ejemplo'>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5'>  NAils Art </Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'> <img style={{ boxShadow: ' rgba(254, 166, 220, 0.913) 0px 22px 60px 4px' }} src={nails} alt="eyebrows" width={200} /></Text>
                </CardBody>
                <CardFooter>
                  <Button

                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",

                    }}
                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5'> Beautiful Lips </Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'><img src={lipsn} alt="eyebrows" width={200} /></Text>



                </CardBody>
                <CardFooter>
                  <Button
                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",
                    }}

                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className='main_banner4'>
                <CardHeader>
                  <Heading size='md' className='main_section1-5' > Hair</Heading>
                </CardHeader>
                <CardBody>
                  <Text className='main_section1-7'><img style={{ boxShadow: ' rgba(254, 166, 220, 0.913) 0px 22px 60px 4px' }} src={hair} alt="eyebrows" width={200} /></Text>
                </CardBody>
                <CardFooter>
                  <Button

                    className='main_banner6'
                    background="linear-gradient(0deg, rgba(162,109,41), rgba(250,241,164), rgba(184,140,51), rgba(201,166,76))"
                    _hover={{
                      cursor: "pointer",
                      boxShadow: "inset 400px 0 0 0 rgba(256 ,256, 256)",


                    }}

                  // onClick={() => {
                  //   navigate('/book');
                  // }}
                  >
                    View Details
                  </Button>

                </CardFooter>
              </Card>
            </div>
          </div>

        </SimpleGrid>

        
      </main>

      <Footer />



    </>
  )
}

export default FrontPage




