import { default as React, useContext, createContext } from 'react';

import { apiConfig } from '../config';

const ApiContext = createContext();
const useApi = () => useContext(ApiContext);

const ApiProvider = ({children}) => {
  const BASE_URL = `${apiConfig.baseURL || "https://open-poortje-api.herokuapp.com"}`;

  const setCookie =(name,value,days) => {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  const getCookie = (name) => {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  const eraseCookie = (name) => {   
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const updateUserData = async () => {
    const auth = JSON.parse(getCookie('auth'));
    const url = `${BASE_URL}/${auth.role}`;

    const options = {
      method:'GET',
      headers: new Headers({
          'Authorization': 'Bearer '+ auth.token, 
          'Content-Type': 'application/json',
        }), 
    }

    const response = await fetch(url, options).then((result) => result.json());

    setCookie('user', JSON.stringify(response), 1);

    return response;
  }


  return (
    <ApiContext.Provider value={{ 
      setCookie,
      getCookie,
      eraseCookie,
      updateUserData
     }}>
      {children}
    </ApiContext.Provider>
  );
};

export {
  ApiContext,
  ApiProvider,
  useApi,
}

//   const findAllTrash = async (query = null) => {
//     let url = `${BASE_URL}/hunt_list`;
//     if (query !== null) {
//       url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(query);
//     }
//     const response = await fetch(url);
//     return response.json();
//   }

//   const findPost = async (id) => {
//     let url = `${BASE_URL}/hunt/collect/${id}`;
//     const response = await fetch(url);
//     return response.json();
//   }

//   const createPostViewModel = async (post) => {
//     let url = `${BASE_URL}/posts/create`;
//     const response = await fetch(url);
//     return response.json();
//   }

//   const storePost = async (post) => {
//     const options = {
//       method: "post",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(post)
//     };

//     let url = `${BASE_URL}/posts`;
//     const response = await fetch(url, options);
//     return response.json();
//   }

//   const editPostViewModel = async (postId) => {
//     const options = {
//       method: "get",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     };

//     let url = `${BASE_URL}/posts/${postId}/edit`;
//     const response = await fetch(url, options);
//     return response.json();
//   }

//   const updatePost = async (post) => {
//     const options = {
//       method: "put",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(post)
//     };

//     let url = `${BASE_URL}/posts/${post._id}`;
//     const response = await fetch(url, options);
//     return response.json();
//   }

//   const deletePost = async (id, mode = 0) => {
//     const options = {
//       method: "delete",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }
//     const response = await fetch(`${BASE_URL}/posts/${id}?mode=${mode}`, options);
//     return await response.json();
//   }

//   const queryParams = (options) => {
//     return Object.keys(options)
//       .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(options[key])).join('&');
//   }

//   return (
//     <ApiContext.Provider value={{ createPostViewModel, deletePost, findAllTrash, findPost, storePost, editPostViewModel, updatePost }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };

// export {
//   ApiContext,
//   ApiProvider,
//   useApi,
// }
