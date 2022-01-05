import React from "react";
import Exalumnos from "../../data";


const Tarjeta = () => {
  const exalumnos = Exalumnos;

  return (
    <>
      <h1 className="title">Integrantes de la Promocion 1998 - Santa Rosa de Chosica</h1>

      <div className="container">
        {exalumnos.map((exalumno, index) => {
          return (
            <div className="profile-card-1" key={index}>
              {/* <!--image--> */}
              <div className="img">
                <img src={exalumno.foto ? exalumno.foto : "default.jpg" } />
              </div>
              {/* <a className="view-more" href="">
                <i className="fa fa-plus-circle"></i>
              </a> */}
              {/* <!--text--> */}
              <div className="mid-section">
                <div className="name">{exalumno.nombre}</div>
                <div className="description">{exalumno.descripcion}</div>

                <div className="line"></div>
                {/* <div className="stats">
                <div className="stat">
                  53.4M
                  <div className="subtext">Followers</div>
                </div>
                <div className="stat">
                  324K
                  <div className="subtext">Liks</div>
                </div>
                <div className="stat">
                  236K
                  <div className="subtext">Shares</div>
                </div>
              </div> */}
              </div>
              {/* <!--social icons--> */}
              <div className="links">
                <a className="fb" href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a className="twitter" href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="linkedin" href="" >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                 
                </a>
                <a className="envelope" href="" placeholder="xx">
                  <i className="fa fa-briefcase" aria-hidden="true" ></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* <footer className="footer">
        <p className="footer__title">Hecho por Giovanni Ascarza</p>
        <div className="footer__social">
            <a href="#" className="footer__icon"><i className='fa fa-facebook'></i></a>
            <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
            <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
        </div>
        <p>&#169; 2021 todos los izquierdos reservados</p>
    </footer> */}
    </>
  );
};

export default Tarjeta;
