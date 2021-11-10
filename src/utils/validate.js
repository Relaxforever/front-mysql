
import { createError } from './createErrorTag.js';



export const validateIndependent = (state, currentPage) => {

    const validateBasicIndependent = (state) => {
        if (state.codigo.length === 0) {
            createError('self-form_container-codigo', 'Debes diligenciar Codigo');
            console.log('Error')
            return false;
        } else if (state.contrasena.length === 0) {
            createError('self-form_container-contrasena', 'Debes diligenciar la contraseña');
            return false;
        }
        return true;
    };

    const validateBasicRegister = (state) => {
        if (state.codigo.length === 0) {
            createError('self-form_container-codigo', 'Debes diligenciar Codigo');
            console.log('Error')
            return false;
        } else if (state.nombre.length === 0) {
            createError('self-form_container-nombre', 'Debes diligenciar el nombre');
            return false;
        } else if (state.cedula.length === 0) {
            createError('self-form_container-cedula', 'Debes diligenciar la cedula');
            return false;
        } else if (state.fNacimiento.length === 0) {
            createError('self-form_container-fNacimiento', 'Debes diligenciar la fecha de nacimiento');
            return false;
        } else if (state.carrera.length === 0) {
            createError('self-form_container-Carrera', 'Debes diligenciar la contraseña');
            return false;
        } else if (state.correo.length === 0) {
            createError('self-form_container-Carrera', 'Debes diligenciar el correo');
            return false;
        }
        return true;
    };





    const inputErrors = Array.from(document.getElementsByClassName('input-error'))
    inputErrors.forEach(elem => elem.remove())

    if (currentPage === 0) {
        return validateBasicIndependent(state)
    }
    if (currentPage === 10) {
        return validateBasicRegister(state)
    }
    if (currentPage === 2) {
        return true // validacion prestamos
    }
    if (currentPage === 3) {
        return true // validacion Reserva
    }
    if (currentPage === 0) {
        return validateBasicIndependent(state)
    }
    if (currentPage === 0) {
        return validateBasicIndependent(state)
    }
};