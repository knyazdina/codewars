function abbrevName(name){

    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0).toUpperCase()).join('.');
    return initials;

}