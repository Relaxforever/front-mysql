import React, { useState } from 'react';
import InputForm from '../atoms/input-form/inputForm'
import { validateIndependent } from "../../utils/validate.js"
import {
    useIndependent,
    useChangeIndependent,
} from "../../context/ApplicationContext"



const Form = () => {
    const [currentPage, setCurrentPage] = useState(0);
    console.log(currentPage)
    const independentInfo = useIndependent()
    const changeValues = useChangeIndependent()

    const goBack = (numberpage) => {
        if (currentPage !== 1) setCurrentPage(currentPage - numberpage)
    }

    const goNext = (numberpage) => {
        if (validateIndependent(independentInfo, currentPage, numberpage)) {
            console.log("Just fine")
            if (currentPage !== 3) {
                console.log("Next")
                setCurrentPage(currentPage + numberpage)
            }
        }
    }

    // Pantalla Login
    const Login = () => {
        return (
            <div className="m-LoginSession">
                <InputForm
                    label="Codigo"
                    type="number"
                    value={independentInfo.codigo}
                    className="self-form_container-codigo"
                    required
                    name="codigo"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Contraseña"
                    type="password"
                    value={independentInfo.contrasena}
                    className="self-form_container-contrasena"
                    required
                    name="contrasena"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button onClick={() => goNext(1)}> Iniciar Sesion</button>
                    <button onClick={() => setCurrentPage(currentPage + 2)}> Registrarse </button>
                </div>
            </div>
        )
    }

    // Pantalla Registro.

    const RegisterCrud = () => {
        return (
            <div className="m-LoginSession">
                <InputForm
                    label="Codigo"
                    type="number"
                    value={independentInfo.codigo}
                    className="self-form_container-codigo"
                    required
                    name="codigo"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Contraseña"
                    type="password"
                    value={independentInfo.contrasena}
                    className="self-form_container-contrasena"
                    required
                    name="contrasena"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Nombre"
                    type="text"
                    value={independentInfo.codigo}
                    className="self-form_container-nombre"
                    required
                    name="nombre"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Cedula"
                    type="password"
                    value={independentInfo.contrasena}
                    className="self-form_container-cedula"
                    required
                    name="cedula"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Fecha Nacimiento"
                    type="date"
                    value={independentInfo.contrasena}
                    className="self-form_container-fNacimiento"
                    required
                    name="fNacimiento"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Carrera"
                    type="text"
                    value={independentInfo.contrasena}
                    className="self-form_container-carrera"
                    required
                    name="carrera"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button onClick={() => goNext(1)}> Iniciar Sesion</button>
                    <button onClick={() => setCurrentPage(currentPage + 2)}> Registrarse </button>
                </div>
            </div>
        )
    }


    return (

        <div className="form">
            {currentPage === 0 &&
                <>
                    <Login></Login>
                </>}

            {currentPage === 1 && <>
            </>}

            {currentPage === 2 && <RegisterCrud />
            }

        </div>
    );
};

export default Form;
