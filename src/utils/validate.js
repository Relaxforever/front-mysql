
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



    const inputErrors = Array.from(document.getElementsByClassName('input-error'))
    inputErrors.forEach(elem => elem.remove())

    if (currentPage === 0) {
        return validateBasicIndependent(state)
    }
};