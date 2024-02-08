import React from 'react'
import './contacto.css'
import { useForm } from "react-hook-form"

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }
  return (
    <div className="d-flex justify-content-center m-0 p-0 w-100">
            <div className="bg-grey  m-2 card-size  p-2 my-4">
                <form className="formulario p-4 rounded" onSubmit={handleSubmit(enviar)}>
                    <div>
                        <h2 className="fs-3 fw-bold text-center text-primary">Contacto</h2>
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Nombre:</label>
                        <input type="text" placeholder="Ingresá tu nombre" className="form-control" id="exampleInputEmail1" {...register("nombre")} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Correo:</label>
                        <input type="email" placeholder="Ingresá tu e-mail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("email")} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Telefono:</label>
                        <input type="phone" placeholder="Ingresá tu teléfono" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("telefono")} />
                    </div>
                    <div className="mb-3 m-2">
                        <label htmlFor="exampleInputEmail1" className="form-label m-0">Comentarios:</label>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                    </div>
                    <div className="mb-3 m-2">
                        <div className="form-check d-flex justify-content-center m-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label ms-1" htmlFor="flexCheckDefault">
                                He leído y acepto los términos y condiciones de uso
                            </label>
                        </div>
                    </div>
                    <div className="mb-3 m-2">
                        <div className="row d-flex justify-content-center gap-4">
                            <button type="submit" className="button">Enviar</button>
                            <button type="reset" className="button">Limpiar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Contacto;