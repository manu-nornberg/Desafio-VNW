import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./home.scss";

function Home() {
  return (
    <body>
      <Header />
      <section class="banner">
        <img
          src="https://s3-alpha-sig.figma.com/img/2a5c/c693/7890858efe64f97587eb82330aa2163a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqqJF8PvjzFYHHk7HmtMR6DLZ8Aqwv-mMG2JoCHc4FdcOsslImwGw1Bwr~0tJHvP3dAoL0Rb0PfVchDNqK5mGhKsUnsbapwqSVivYsSHERPdifwNiJ58Yq1KFkv~Dxrio1csDnh2COLRHWHBmugyAkeohUaegK2kEpwrFQcD5eYFr~YnKTMwT0puOBbLJd2nvKCEpk1oy2RJ9-fjpYWutsZm7gFK7h7fPAbghTHztUTJrUCgeTfhWM~5u28X4juwOZxfk0~OcX1MvNgjAn8w6AqO4LNW~FPH~YTHGv3zk0R0HBSnZgI0gt44BGqUuvMv6JkE1SFMOceCYqtE6phlkA__"
          alt="pessoa segurando uma pilha de livros"
        />
        <h1> VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h1>
      </section>
      <h1>Porque devo doar?</h1>
      <section class="cards">
        <section class="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/f2bf/f052/0fe1fd652a3688430f6b49ec2f8d004f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZPx8iBPjxM0v005U-Dy-u70wXlK1U9klPjfUTyHCv9ZOytrWoveMDrL6AqYxMvi-mMYLTaASnNZdRtkzXf8pId7V7W-1Aep2lZ3Pp560Ey-Qc0WrNwz0ifxVb1C4M~qBgEO4aKskCkIj~EhePDCC-KC3DaXVu37b1AcBAQZia2S4mWmLZXklohFILN4siQRtRaf9XbJvBmDH5P8Q0oBG1RkcuNQEAY0LJOtIgcCrpkli7vymOrbvVR~N8UM1KaQZDKqGssOiJki1V9IiE93lNQvgK3DexkJi0K8cxhjdE0EuoOn-6FcrqLXxib0DtquniPzHzliVxNgcNN8ahlY8cQ__"
            alt="varias pessoas reunidas"
          />
          <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </section>
        <section class="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/ef2f/696d/61ff00e449c47d77feabefe50eb27302?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aNje6L5kFAWY4SPWDiJISsVEP0JxqkxUj9Lr1Z~zBnvaschAc~QmfeBS-NcABSwIamC51Wo1tCwxc301TIuDs4yRdE3btdXwUd2NjQlMU9KH-juOAJARTa5z9dcNDvNE7Ybh3rGWB8wTOcBJzDf21VF1kjZla1qEF74vB9kX-4-X0uCOP95RPWMZ7env8rW-TTudPCh~YHdZr9UhU8Cm6Ro053u8A5-u0u6kjEQiEpjI6KIyaJf3Tqr9T9oHfqdT-t-OoUW5wts7mFRM~nEMHenoQIaOffEp-WgoXem7pUan77MGNGxp5ppffszNcz-2gAULYL5pTqcCL3DFKB2drg__"
            alt="uma pessoa com um livro"
          />
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </section>
        <section class="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/ab0e/395c/c8bf3d0b334f2c6c06110f618bb127b4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZFIt53OFwKwOBnJ68CGkqIy-G93DjsahLQl67zOd73NtNzchCjS7wJj6zzcgPLu0tWmgcy-5oDDZTD9nnF2ofKlGTl7s3AZTFUUsIrcJlG8rn7hUEiB9gnwAN04emyTm6lS~ghQT7RypDIWGINN5GdwXh5nxBY3UPHTL02pwWl7EjHbS9lWZI1XcVQ4FmbaYHMk0hrb914vHfhQk56eqTVdjE~wd030zkmrlo4G1amWFSIO7iKsd5r3MyKcWQJ19YVamA9F1uioaj2iQMFFbOuuVJ21XX6Ehyy2pdrj1nPQkMHYPmcOntb8V83dEtak94xwPsUCp~VzKoGVo3Oj2Sg__"
            alt="uma mão unindos varias pessoas"
          />
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </section>
        <section class="card">
          <img
            src="https://s3-alpha-sig.figma.com/img/ad24/ad63/219a08598b4e64afdf609e849645bb80?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ljd4obFabaqKqQFqPnEvtpL4c1Men7SuxCyUk4w7-8wJFGt3c5AgUOT0MxU7d9LFu31ZuwTbcBEyUajY-p4Cp0hAqKQeKkB6rSlQp7W4DOLszYPyzAFt01xsbvBrosD2p5LriSvKvOMq0ofmSHj-jurBX2ICqPbrGMrZ0RE81~PvML-jVgN8~F~yX9gyzhtWRkXVCdQVhPnDfKfEpbDUmEp6s3LLLaBL97MWNMZJSK2SvRyTdfMZgMlPAA5wmUmhZbf9bwuMSNzw1sh6iAvGcpGl1N4Naf3-VaJVIaupXTRW6S0Zbx3NJe9B3WRU~K~zyMEov8EQsDwROl~V3uHQ3A__"
            alt="uma balança"
          />
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </section>
      </section>
      <Footer />
    </body>
  );
}

export default Home;
