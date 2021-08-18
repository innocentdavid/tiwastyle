import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <Head>
        <title>TIWASTYLE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Kids first!" />
        <meta property="og:title" content="TIWASTYLE" />
        <meta property="og:url" content="https://innocentdavid.github.io/tiwastyle/" />
        <meta property="og:description" content="Kids first!" />
        <meta property="og:image" content="/favicon/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,700" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/main/main.css" />

      </Head>

      <section className="ftco-section" style={{ background: '#fd93b2' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">TIWASTYLE</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">TIWASTYLE</a>
              <div className="social-media order-lg-last">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-whatsapp"><i className="sr-only">Whatsapp</i></span></a>
                </p>
              </div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setShowMenu(!showMenu)}}>
                <span className="fa fa-bars" /> Menu
              </button>
              <div className={`mt-2 navbar-collapse ${showMenu ? '' : 'collapse'}`} id="ftco-nav">
                <ul className="navbar-nav ml-auto mr-md-3">
                  <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {/* END nav */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row" id="products">
            <center>
              <h1>LOADING...</h1>
            </center>
          </div>
          <br />
        </div>
      </section>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/favicon/favicon-32x32.png" alt="Tiwastyle Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
