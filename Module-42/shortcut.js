const isActive = false;
const isTrue = false;

const showUser = () => console.log('Show User');
const hideUser = () => console.log('Hide User');

// isActive && showUser();
// isTrue || hideUser()

isActive ? showUser() : hideUser();