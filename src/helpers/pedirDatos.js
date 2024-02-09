import data from "../data/products.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const success = Math.random() < 0.8; 
  
        if (success) {
          resolve(data);
        } else {
          reject({
            error: "Error al obtener datos"
          });
        }
      }, 500);
    });
  };
  
  export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
      const item = data.find((el) => el.id === id);
  
      if (item) {
        resolve(item);
      } else {
        reject({
          error: "No se encontró el producto"
        });
      }
    });
  };