export const createError = (containerName, errorMessage, scroll = true) => {
    console.log(containerName)
    let container = document.getElementsByClassName(containerName)[0];
    let tagError = createTagError(errorMessage);
    let tagValue = container.getElementsByClassName(containerName + '-value')[0];
    
    container.appendChild(tagError);

    if (scroll) {
        console.log("Entered")
        container.scrollIntoView({ block: 'center'});
    }

    tagValue.focus()
    
    return false;
};

export const createTagError = (message) => {
    const pTag = document.createElement('p');
    pTag.innerHTML = message;
    pTag.classList.add('input-error');

    return pTag
};
