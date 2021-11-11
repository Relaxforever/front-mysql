import axios from 'axios';

export const getAllUsers = async () => {
    const url = 'http://localhost:4000'
    const endpoint = '/users/'
    const response = await axios.get(`${url}${endpoint}`)

    return response
}



export const Createuser = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/users/'
    const bodyData = {
        "Codigo": state.codigo,
        "Nombre": state.nombre,
        "Contraseña": state.contrasena,
        "Cedula": state.cedula,
        "Correo": state.correo,
        "F_Nacimiento": state.fNacimiento,
        "Carrera": state.carrera
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateUser = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/users/'
    const params = state.codigo
    const bodyData = {
        "Codigo": state.codigo,
        "Nombre": state.nombre,
        "Contraseña": state.contrasena,
        "Cedula": state.cedula,
        "Correo": state.correo,
        "F_Nacimiento": state.fNacimiento,
        "Carrera": state.carrera
    }
    const response = await axios.put(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteUser = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/users/'
    const params = state.codigo
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}

export const getUserCode = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/users/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    console.log(response)
    return response
}

export const getAllMaterials = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/materials/'
    const response = await axios.get(`${url}${endpoint}`)
    state(response)
    return response
}


export const CreatePrestamo = async (state, statebook) => {
    const url = 'http://localhost:4000'
    const endpoint = '/prestamos/'
    const bodyData = {
        "Cod_Usuario": state.codigo,
        "Cod_Material": statebook.Codigo,
        "Fecha_Prestamo": state.fprestamo,
        "Fecha_Entrega": state.fentrega
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const getbookPrestamoName = async (state, stateset) => {
    const url = 'http://localhost:4000'
    const endpoint = '/prestamos/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    const response2 = await axios.get(`${url}/materials/${response.data.length !== 0 ? response.data[0].Cod_Material : ''}`)
    stateset({ response: response.data, response2: response2.data })
}

export const deletePrestamo = async (state, s) => {
    const url = 'http://localhost:4000'
    const endpoint = '/prestamos/'
    const params = state
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}

// Get all Salas
export const getAllSalas = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/salaestudio/'
    const response = await axios.get(`${url}${endpoint}`)
    state(response)
    return response
}

export const CreateReserva = async (state, statebook) => {
    const url = 'http://localhost:4000'
    const endpoint = '/reservas/'
    console.log(statebook.Codigo)
    const bodyData = {
        "Cod_Usuario": state.codigo,
        "Cod_Sala": statebook.Codigo,
        "Horario_Inicio": state.hinicial + ' ' + state.hhora,
        "Horario_Final": state.hinicial + ' ' + state.hhorafinal
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const getSalaPrestamoName = async (state, stateset) => {
    const url = 'http://localhost:4000'
    const endpoint = '/reservas/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    const response2 = await axios.get(`${url}/salaestudio/${response.data.length !== 0 ? response.data[0].Cod_Sala : ''}`)
    stateset({ response: response.data, response2: response2.data })
}

export const deleteReserva = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/reservas/'
    const params = state
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}






export const CreateMaterial = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/materials/'
    const bodyData = {
        "Codigo": state.codigomaterial,
        "F_Publicacion": state.fpublicacion,
        "Categoria": state.categoria,
        "Autores": {
            "Autor1": state.autor
        },
        "Disponibilidad": "Disponible",
        "Nombre": state.nombrelibro,
        "Num_Ejemplares": state.Num_Ejemplares,
        "Formato": state.formatomaterial,
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateMaterial = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/materials/'
    const params = state.codigomaterial
    const bodyData = {
        "Codigo": state.codigomaterial,
        "F_Publicacion": state.fpublicacion,
        "Categoria": state.categoria,
        "Autores": {
            "Autor1": state.autor
        },
        "Disponibilidad": "Disponible",
        "Formato": state.fomatomaterial,
        "Nombre": state.nombrelibro,
        "Num_Ejemplares": state.Num_Ejemplares
    }
    const response = await axios.put(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteMaterial = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/materials/'
    const params = state.codigomaterial
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}





export const CreateSalaEstudio = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/salaestudio/'
    const bodyData = {
        "Codigo": state.codigosala,
        "Nombre": state.nombresala,
        "Inventario": {
            "Mesas": state.mesas,
            "Sillas": state.sillas,
        },
        "Num_Personas_Max": state.num_max,
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateSalaEstudio = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/salaestudio/'
    const params = state.codigosala
    const bodyData = {
        "Codigo": state.codigosala,
        "Nombre": state.nombresala,
        "Inventario": {
            "Mesas": state.mesas,
            "Sillas": state.sillas,
        },
        "Num_Personas_Max": state.num_max,
    }
    const response = await axios.put(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteSalaEstudio = async (state) => {
    const url = 'http://localhost:4000'
    const endpoint = '/salaestudio/'
    const params = state.codigosala
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}