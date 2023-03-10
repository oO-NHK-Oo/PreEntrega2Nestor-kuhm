import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';


  const Footer = () => {
  return (
    <div>
    <MDBFooter className='text-center text-dark' style={{ backgroundColor: 'rgba(34, 34 ,34)' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="dark"
            color='dark'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='dark'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='dark'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(10, 10, 10)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#'>
            www.NHK.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer