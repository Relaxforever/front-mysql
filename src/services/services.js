import axios from 'axios';

export const getAllUsers = async () => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios'
    const response = await axios.get(`${url}${endpoint}`)

    return response
}



export const Createuser = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios'
    const bodyData = {
        "codigo": state.codigo,
        "nombre": state.nombre,
        "pass": state.contrasena,
        "cedula": state.cedula,
        "correo": state.correo,
        "fechaNacimiento": state.fNacimiento,
        "carrera": state.carrera
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateUser = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/'
    const params = state.codigo
    const bodyData = {
        "codigo": state.codigo,
        "nombre": state.nombre,
        "pass": state.contrasena,
        "cedula": state.cedula,
        "correo": state.correo,
        "fechaNacimiento": state.fNacimiento,
        "carrera": state.carrera
    }
    const response = await axios.patch(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteUser = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/'
    const params = state.codigo
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}

export const getUserCode = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    console.log(response)
    return response
}

export const getAllMaterials = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/materiales'
    const response = await axios.get(`${url}${endpoint}`)
    state(response)
    return response
}


export const CreatePrestamo = async (state, statebook) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/prestamo/'
    const params = state.codigo
    const bodyData = {
        "codigoMaterial": statebook.codigo,
        "fecha_prestamo": state.fprestamo,
        "fecha_entrega": state.fentrega,
        "nombre": statebook.nombre,
        "multa": 1500
    }
    const response = await axios.patch(`${url}${endpoint}${params}`, bodyData)

    return response
}

export const getUserCodePrestamo = async (state, stateset) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    console.log(response)
    stateset({ response: response.data.prestamos_material })
}




export const getbookPrestamoName = async (state, stateset) => {
    const url = 'http://localhost:5000'
    const endpoint = '/prestamos/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    const response2 = await axios.get(`${url}/api/materiales${response.data.length !== 0 ? response.data[0].Cod_Material : ''}`)
    stateset({ response: response.data, response2: response2.data })
}

export const deletePrestamo = async (state, name) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/prestamo/borrar/'
    const params = state.codigo
    const response = await axios.patch(`${url}${endpoint}${params}`, { nombre: name })
    return response
}

// Get all Salas
export const getAllSalas = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/salas'
    const response = await axios.get(`${url}${endpoint}`)
    state(response)
    return response
}

export const CreateReserva = async (state, statebook) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/salas/'
    console.log(statebook.codigo)
    const params = state.codigo
    const bodyData = {
        "codigoSala": statebook.codigo,
        "fecha_prestamo": state.hinicial + ' ' + state.hhora,
        "fecha_entrega": state.hinicial + ' ' + state.hhorafinal,
        "nombre": statebook.nombre
    }
    const response = await axios.patch(`${url}${endpoint}${params}`, bodyData)

    return response
}

export const getSalasNames = async (state, stateset) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    console.log(response)
    stateset({ response: response.data.reserva })
}






export const getSalaPrestamoName = async (state, stateset) => {
    const url = 'http://localhost:5000'
    const endpoint = '/reservas/'
    const params = state.codigo
    const response = await axios.get(`${url}${endpoint}${params}`)
    const response2 = await axios.get(`${url}/api/salas${response.data.length !== 0 ? response.data[0].Cod_Sala : ''}`)
    stateset({ response: response.data, response2: response2.data })
}

export const deleteReserva = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/usuarios/salas/borrar/'
    const params = state.codigo
    const response = await axios.patch(`${url}${endpoint}${params}`)
    return response
}






export const CreateMaterial = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/materiales'
    const bodyData = {
        "codigo": state.codigomaterial,
        "fechaPublicacion": state.fpublicacion,
        "categoria": state.categoria,
        "autores": state.autor,
        "disponibilidad": true,
        "nombre": state.nombrelibro,
        "numejemplares": state.num_ejemplares,
        "formato": state.formatomaterial,

    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateMaterial = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/materiales/'
    const params = state.codigomaterial
    const bodyData = {
        "codigo": state.codigomaterial,
        "fechaPublicacion": state.fpublicacion,
        "categoria": state.categoria,
        "autores": state.autor,
        "disponibilidad": true,
        "nombre": state.nombrelibro,
        "numejemplares": state.num_ejemplares,
        "formato": state.formatomaterial,

    }
    const response = await axios.patch(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteMaterial = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/materiales/'
    const params = state.codigomaterial
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}





export const CreateSalaEstudio = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/salas'
    const bodyData = {
        "codigo": state.codigosala,
        "nombre": state.nombresala,
        "inventario": ` Mesas: ${state.mesas}, Sillas: ${state.sillas},`,
        "numpersonas": state.num_max,
    }
    const response = await axios.post(`${url}${endpoint}`, bodyData)

    return response
}

export const updateSalaEstudio = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/salas/'
    const params = state.codigosala
    const bodyData = {
        "codigo": state.codigosala,
        "nombre": state.nombresala,
        "inventario": ` Mesas: ${state.mesas}, Sillas: ${state.sillas},`,
        "numpersonas": state.num_max,
    }
    const response = await axios.patch(`${url}${endpoint}${params}`, bodyData)
    return response
}

export const deleteSalaEstudio = async (state) => {
    const url = 'http://localhost:5000'
    const endpoint = '/api/salas/'
    const params = state.codigosala
    const response = await axios.delete(`${url}${endpoint}${params}`)
    return response
}