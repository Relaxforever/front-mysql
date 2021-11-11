import React, { useState, useEffect } from 'react';
import InputForm from '../atoms/input-form/inputForm'
import { validateIndependent } from "../../utils/validate.js"
import {
    useIndependent,
    useChangeIndependent,
} from "../../context/ApplicationContext"
import {
    Createuser, updateUser, deleteUser, getUserCode, getAllMaterials, CreatePrestamo, getbookPrestamoName,
    deletePrestamo, getAllSalas, CreateReserva, getSalaPrestamoName, deleteReserva, CreateMaterial, updateMaterial,
    deleteMaterial, CreateSalaEstudio, updateSalaEstudio, deleteSalaEstudio
} from "../../services/services"
import './Form.css'

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0);

    // console.log('Pagina actual, ', currentPage)
    const independentInfo = useIndependent()
    const changeValues = useChangeIndependent()

    // const example = getAllUsers()
    //console.log(example)
    const goBack = (numberpage) => {
        if (currentPage !== 1) setCurrentPage(currentPage - numberpage)
    }

    const getUserInfo = () => {
        const UserInfo = getUserCode(independentInfo)
        return UserInfo
    }

    const goNext = (numberpage) => {
        if (validateIndependent(independentInfo, currentPage)) {
            console.log("Just fine")
            console.log("Next")
            const result = getUserInfo()

            if (result) {
                setCurrentPage(currentPage + numberpage)
            }
        }
    }

    const goNext2 = (numberpage) => {

        setCurrentPage(numberpage)
    }


    const CheckDataandSend = (call) => {
        if (validateIndependent(independentInfo, currentPage)) {
            console.log("Validacion pasada")
            if (call === 1) {
                const CreatedUser = Createuser(independentInfo);
                if (CreatedUser) {
                    console.log("Usuario Creado con Exito")
                }
            } else if (call === 2) {
                const UpdatedUser = updateUser(independentInfo);
                if (UpdatedUser) {
                    console.log("Usuario Actualizado con Exito")
                }
            } else if (call === 3) {
                const deletedUser = deleteUser(independentInfo);
                if (deletedUser) {
                    console.log("Usuario Borrado con Exito")
                }
            }
        }
    }

    const CheckDataMaterialandSend = (call, statebook) => {
        if (validateIndependent(independentInfo, currentPage)) {
            if (call === 1) {
                const CreatedUser = CreatePrestamo(independentInfo, statebook);
                if (CreatedUser) {
                    console.log("Prestamo Creado con Exito")
                }
            }
        }
    }
    const CheckDataSalaandSend = (call, statebook) => {
        if (validateIndependent(independentInfo, currentPage)) {
            if (call === 1) {
                const CreatedUser = CreateReserva(independentInfo, statebook);
                if (CreatedUser) {
                    console.log("Prestamo Creado con Exito")
                }
            }
        }
    }

    const CheckDataandMaterial = (call) => {
        if (validateIndependent(independentInfo, currentPage)) {
            console.log("Validacion pasada")
            if (call === 1) {
                const CreatedUser = CreateMaterial(independentInfo);
                if (CreatedUser) {
                    console.log("Usuario Creado con Exito")
                }
            } else if (call === 2) {
                const UpdatedUser = updateMaterial(independentInfo);
                if (UpdatedUser) {
                    console.log("Usuario Actualizado con Exito")
                }
            } else if (call === 3) {
                const deletedUser = deleteMaterial(independentInfo);
                if (deletedUser) {
                    console.log("Usuario Borrado con Exito")
                }
            }
        }
    }

    const CheckDataSala = (call) => {
        if (validateIndependent(independentInfo, currentPage)) {
            console.log("Validacion pasada")
            if (call === 1) {
                const CreatedUser = CreateSalaEstudio(independentInfo);
                if (CreatedUser) {
                    console.log("Usuario Creado con Exito")
                }
            } else if (call === 2) {
                const UpdatedUser = updateSalaEstudio(independentInfo);
                if (UpdatedUser) {
                    console.log("Usuario Actualizado con Exito")
                }
            } else if (call === 3) {
                const deletedUser = deleteSalaEstudio(independentInfo);
                if (deletedUser) {
                    console.log("Usuario Borrado con Exito")
                }
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
                    <button className="button-5" onClick={() => goNext(1)}> Iniciar Sesion</button>
                    <button className="button-5" onClick={() => setCurrentPage(currentPage + 10)}> Registrarse </button>
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
                    value={independentInfo.nombre}
                    className="self-form_container-nombre"
                    required
                    name="nombre"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Cedula"
                    type="text"
                    value={independentInfo.cedula}
                    className="self-form_container-cedula"
                    required
                    name="cedula"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Fecha Nacimiento"
                    type="date"
                    value={independentInfo.fNacimiento}
                    className="self-form_container-fNacimiento"
                    required
                    name="fNacimiento"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Carrera"
                    type="text"
                    value={independentInfo.carrera}
                    className="self-form_container-carrera"
                    required
                    name="carrera"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Correo"
                    type="text"
                    value={independentInfo.correo}
                    className="self-form_container-correo"
                    required
                    name="correo"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(10)}> Atras </button>
                    <button className="button-5" onClick={() => CheckDataandSend(1)}> Enviar Registro </button>

                </div>
                <div className="m-buttons">
                    <button className="button-5" onClick={() => CheckDataandSend(3)}>Eliminar Usuario</button>
                    <button className="button-5" onClick={() => CheckDataandSend(2)}>Actualizar Usuario</button>
                </div>
            </div>
        )
    }

    // Pantalla Seleccion
    const CuadroMandos = () => {
        return (
            <div className="m-LoginSession">
                <div className="m-buttons-cuadro">
                    <button className="button-5" onClick={() => goNext2(2)}> Pedir un Prestamo</button>

                    <button className="button-5" onClick={() => goNext2(3)}> Reservar Sala de Estudio </button>

                    <button className="button-5" onClick={() => goNext2(4)}> Registrar Material</button>

                    <button className="button-5" onClick={() => goNext2(5)}> Registrar Salas </button>

                    <button className="button-5" onClick={() => goNext2(6)}> Devolver Prestamo </button>

                    <button className="button-5" onClick={() => goNext2(7)}> Cancelar Reserva </button>

                </div>
            </div>
        )
    }


    // Pantalla Prestamo
    const Prestamo = () => {
        const [currentCodeSelected, setCurrentCode] = useState(0);
        const [allMaterial, setAllMaterial] = useState([])
        useEffect(() => {
            getAllMaterials(setAllMaterial);
        }, [])

        console.log(allMaterial)
        return (
            <div className="m-LoginSession">
                <div className="m-titulopeliculas">
                    Lista de Materiales
                </div>
                <div className="m-all-books">
                    {allMaterial.data && allMaterial.data.map((element, index) => (
                        <div className="m-libros" onClick={() => {
                            setCurrentCode(element)
                        }} key={index}>
                            <div className="m-formato">{element.Formato}</div>
                            <div className="m-libro">{element.Nombre}</div>
                        </div>
                    ))}

                </div>
                <div className="m-display">
                    <p>Actualmente selecciono {currentCodeSelected.Nombre}</p>
                </div>
                <InputForm
                    label="Fecha de prestamo"
                    type="date"
                    value={independentInfo.fprestamo}
                    className="self-form_container-fprestamo"
                    required
                    name="fprestamo"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Fecha Entrega"
                    type="date"
                    value={independentInfo.fentrega}
                    className="self-form_container-fentrega"
                    required
                    name="fentrega"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(1)}> Atras</button>
                    <button className="button-5" onClick={() => CheckDataMaterialandSend(1, currentCodeSelected)}> Crear Prestamo </button>
                </div>
            </div>
        )
    }


    const DevolverPrestamo = () => {
        const [currentCodeSelected, setCurrentCode] = useState(0);
        const [allPrestamos, setallPrestamos] = useState([])
        useEffect(() => {
            getbookPrestamoName(independentInfo, setallPrestamos);

        }, [])
        //console.log(currentCodeSelected)
        console.log(allPrestamos)
        return (
            <div className="m-LoginSession">
                <div className="m-titulopeliculas">
                    Prestamos Actuales
                </div>
                <div className="m-all-books">
                    {(allPrestamos.response && allPrestamos.response2) && allPrestamos.response.length !== 0 ? (
                        <div className="m-libros" onClick={() => {
                            setCurrentCode(allPrestamos.response[0].Codigo)
                        }}>
                            <div className="m-formato">{allPrestamos.response2[0].Formato}</div>
                            <div className="m-libro">{allPrestamos.response2[0].Nombre}</div>
                        </div>
                    ) : ''
                    }


                </div>


                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(5)}> Atras</button>
                    <button className="button-5" onClick={() => deletePrestamo(currentCodeSelected)}> Devolver Prestamo </button>
                </div>
            </div>
        )
    }
    // Reservar Sala
    const ReservaSala = () => {
        const [currentCodeSelected, setCurrentCode] = useState(0);
        const [allSalas, setAllSalas] = useState([])
        useEffect(() => {
            getAllSalas(setAllSalas);
        }, [])

        console.log(allSalas)
        //const example = independentInfo.hinicial + ' ' + independentInfo.hhora
        return (
            <div className="m-LoginSession">
                <div className="m-titulopeliculas">
                    Lista de Salas
                </div>
                <div className="m-all-books">
                    {allSalas.data && allSalas.data.map((element, index) => (
                        <div className="m-libros" onClick={() => {
                            setCurrentCode(element)
                        }} key={index}>
                            <div className="m-formato">{element.Nombre}</div>
                            <div className="m-libro">{element.Num_Personas_Max}</div>
                        </div>
                    ))}

                </div>
                <div className="m-display">
                    <p>Actualmente selecciono {currentCodeSelected.Nombre}</p>

                </div>
                <InputForm
                    label="Dia"
                    type="date"
                    value={independentInfo.hinicial}
                    className="self-form_container-hinicial"
                    required
                    name="hinicial"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Horario Inicial"
                    type="time"
                    value={independentInfo.hhora}
                    className="self-form_container-hhora"
                    required
                    name="hhora"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Horario Final"
                    type="time"
                    value={independentInfo.hhorafinal}
                    className="self-form_container-hhorafinal"
                    required
                    name="hhorafinal"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(2)}> Atras</button>
                    <button className="button-5" onClick={() => CheckDataSalaandSend(1, currentCodeSelected)}> Crear Reserva </button>
                </div>
            </div>
        )
    }



    const CancelarReserva = () => {
        const [currentCodeSelected, setCurrentCode] = useState(0);
        const [allPrestamos, setallPrestamos] = useState([])
        useEffect(() => {
            getSalaPrestamoName(independentInfo, setallPrestamos);

        }, [])
        //console.log(currentCodeSelected)
        console.log(allPrestamos)
        return (
            <div className="m-LoginSession">
                <div className="m-titulopeliculas">
                    Prestamos Actuales
                </div>
                <div className="m-all-books">
                    {(allPrestamos.response && allPrestamos.response2) && allPrestamos.response.length !== 0 ? (
                        <div className="m-libros" onClick={() => {
                            setCurrentCode(allPrestamos.response[0].Codigo)
                        }}>
                            <div className="m-formato">{allPrestamos.response2[0].Nombre}</div>
                            <div className="m-libro">{/*allPrestamos.response2[0].Nombre*/}</div>
                        </div>
                    ) : ''
                    }


                </div>


                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(6)}> Atras</button>
                    <button className="button-5" onClick={() => deleteReserva(currentCodeSelected)}> Cancelar Reserva </button>
                </div>
            </div>
        )
    }

    const RegisterMaterial = () => {
        return (
            <div className="m-LoginSession">
                <InputForm
                    label="Codigo"
                    type="number"
                    value={independentInfo.codigomaterial}
                    className="self-form_container-codigomaterial"
                    required
                    name="codigomaterial"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Fecha Publicacion"
                    type="date"
                    value={independentInfo.fpublicacion}
                    className="self-form_container-fpublicacion"
                    required
                    name="fpublicacion"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="categoria"
                    type="text"
                    value={independentInfo.categoria}
                    className="self-form_container-categoria"
                    required
                    name="categoria"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="autor"
                    type="text"
                    value={independentInfo.autor}
                    className="self-form_container-autor"
                    required
                    name="autor"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Formato"
                    type="text"
                    value={independentInfo.formatomaterial}
                    className="self-form_container-formatomaterial"
                    required
                    name="formatomaterial"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Nombre"
                    type="text"
                    value={independentInfo.nombrelibro}
                    className="self-form_container-nombrelibro"
                    required
                    name="nombrelibro"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Numero Ejemplares"
                    type="text"
                    value={independentInfo.num_ejemplares}
                    className="self-form_container-num_ejemplares"
                    required
                    name="num_ejemplares"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(3)}> Atras </button>
                    <button className="button-5" onClick={() => CheckDataandMaterial(1)}> Enviar Material </button>

                </div>
                <div className="m-buttons">
                    <button className="button-5" onClick={() => CheckDataandMaterial(3)}>Eliminar Material</button>
                    <button className="button-5" onClick={() => CheckDataandMaterial(2)}>Actualizar Material</button>
                </div>
            </div>
        )
    }


    const RegisterSala = () => {
        return (
            <div className="m-LoginSession">
                <InputForm
                    label="Codigo"
                    type="number"
                    value={independentInfo.codigosala}
                    className="self-form_container-codigosala"
                    required
                    name="codigosala"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Nombre"
                    type="text"
                    value={independentInfo.nombresala}
                    className="self-form_container-nombresala"
                    required
                    name="nombresala"
                    onChangeInput={changeValues}
                />

                <InputForm
                    label="Mesas"
                    type="text"
                    value={independentInfo.mesas}
                    className="self-form_container-mesas"
                    required
                    name="mesas"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Sillas"
                    type="text"
                    value={independentInfo.sillas}
                    className="self-form_container-sillas"
                    required
                    name="sillas"
                    onChangeInput={changeValues}
                />
                <InputForm
                    label="Numero Personas Max"
                    type="text"
                    value={independentInfo.num_max}
                    className="self-form_container-num_max"
                    required
                    name="num_max"
                    onChangeInput={changeValues}
                />

                <div className="m-buttons">
                    <button className="button-5" onClick={() => goBack(4)}> Atras </button>
                    <button className="button-5" onClick={() => CheckDataSala(1)}> Enviar Sala </button>

                </div>
                <div className="m-buttons">
                    <button className="button-5" onClick={() => CheckDataSala(3)}>Eliminar Sala</button>
                    <button className="button-5" onClick={() => CheckDataSala(2)}>Actualizar Sala</button>
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

            {currentPage === 1 && <CuadroMandos />}

            {currentPage === 2 && <Prestamo />}
            {currentPage === 6 && <DevolverPrestamo />}


            {currentPage === 3 && <ReservaSala />}
            {currentPage === 7 && <CancelarReserva />}

            {currentPage === 4 && <RegisterMaterial />}

            {currentPage === 5 && <RegisterSala />}


            {currentPage === 10 && <RegisterCrud />}

        </div>
    );
};

export default Form;
