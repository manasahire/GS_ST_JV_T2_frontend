export const getTotalPending = () => {
  return fetch("http://localhost:8082/grievance/getAllGrivance").then((res) => res.json());
};

export const getTotalResolved= () => {
  return fetch("").then((res) => res.json());
};

export const getTotalAccept= () => {
  return fetch("").then((res) => res.json());
};

export const getTotalForward= () => {
  return fetch("").then((res) => res.json());
};

export const getTotalReject= () => {
  return fetch("").then((res) => res.json());
};
export const getComments = () => {
  return fetch("").then((res) => res.json());
};


