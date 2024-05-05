// utils/index.js
import axios from 'axios';

const BASE_URL = "https://api2.myauto.ge/ka/products"

export const fetchAllProducts = async (page = 1, sortOrder, sortTime, filters) => {
    try {
      const response = await axios.get(`${BASE_URL}?Page=${page}&SortOrder=${sortOrder.id}&Period=${sortTime.id}${filters}`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
};
  
export const fetchAllMans = async () => {
    try {
      const response = await axios.get(`https://static.my.ge/myauto/js/mans.json`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
};

export const fetchAllCats = async () => {
    try {
      const response = await axios.get(`https://api2.myauto.ge/ka/cats/get`);
      return response.data; 
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; 
    }
};