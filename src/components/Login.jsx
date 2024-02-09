import React from 'react'

const Login = () => {
  return (
    <div className="container-login">
        <div className="div-login  d-flex justify-content-center m-5 ">
            <div className="login rounded text-white bg-white p-5 ">
                <h2 className="text-primary">Iniciar Sesion</h2>
                <div className="logo-login">
                    <img src="/img/logo-gaming.png" alt="" width="320"/>
                </div>
                <form >
                    <div className="mb-3 gap-2">
                        <label className='text-dark'>Email:</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                        <label className='text-dark'>Contraseña:</label>
                        <input type="password" className="form-control" id="password" placeholder="password"/>
                    </div>
                    <div className="div-boton gap-3">
                        <button type="button" className="button" id="btnLogIn">LogIn</button>
                        <button className="button">Registrarse</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Login