const apiRequest = async(url ="", optionObj = null, errMsg = null) => {
   try {
      const response = await fetch(url, optionObj);
      if(!response.ok) throw Error('Error Message');
   } catch (error) {
      errMsg = error.message;
   } finally{

   }
}


export default apiRequest;