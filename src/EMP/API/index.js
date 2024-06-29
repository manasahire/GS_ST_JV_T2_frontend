export const getTotalPending = () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};

export const getTotalResolved= () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};

export const getTotalAccept= () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};

export const getTotalReject= () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};
export const getComments = () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};


