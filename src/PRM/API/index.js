// export const getTotalPending = () => {
//   return fetch("http://localhost:8082/grievance/getAllGrivance")
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .catch((error) => {
//       console.error('There has been a problem with your fetch operation:', error);
//       throw error; // Re-throw to handle it elsewhere if necessary
//     });
// };
export const getTotalResolved= () => {
  return fetch("http://localhost:8082/prm/grievances").then((res) => res.json());
};

export const getTotalForwarded= () => {
  return fetch("http://localhost:8082/prm/grievances/getAll").then((res) => res.json());
};

export const getTotalReject= () => {
  return fetch("http://localhost:8082/prm/grievances/").then((res) => res.json());
};
export const getComments = () => {
  return fetch("http://localhost:8082/prm/grievances/").then((res) => res.json());
};


