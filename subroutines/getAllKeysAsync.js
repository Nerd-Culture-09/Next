import AsyncStorage from "@react-native-async-storage/async-storage";

const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log('All keys:', keys);
      return keys;
    } catch (error) {
      console.log('Error retrieving keys:', error);
      return [];
    }
  };  
  export default getAllKeys;