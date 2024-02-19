import ApiURI from "./ApiURI";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const uniqueKey = `${key}_${Date.now()}`;

const saveUserData = async (key, data,setIsSignedIn) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log('User Data saved successfully!');
    setIsSignedIn(true)
  } catch (error) {
    console.log('Error saving data:', error);
  }
};

const getUserData = (attribute,value,setLoad,setIsSignedIn) => {
  const URI = ApiURI();
  fetch(`${URI}/user/${attribute}/${value}`)
  .then(response => response.json())
  .then(data => {
    const userObject = data[0]
      console.log('[getUserData.js from Redux: ]',userObject);
      const user = {
        name : userObject?.name,
        email : userObject?.email,
        number : userObject?.number
      }
      saveUserData("UserName",user,setIsSignedIn,setLoad)
  })
  .catch(error => console.error('Error:', error));
  console.log("the current URL:", URI)
}

export default getUserData;