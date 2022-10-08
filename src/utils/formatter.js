import { v4 as uuid } from "uuid";

export const userFormatter = (user) => {
  const data = {
    uuid: user.uuid,
    role: user.role,
    username: user.username,
    name: user.name,
    lastName: user.lastName,
    surname: user.surname,
    lastSurname: user.lastSurname,
    birthDate: user.birthDate,
    email: user.email,
    phone: user.phone,
    avatar: user.avatar,
    createdAt: user.createdAt,
    lastEdit: user.lastEdit,
    verified: user.verified,
    isConnected: user.isConnected,
  };
  return data;
};

export const newUserFormatter = (user) => {
  const { username, email, password } = user;
  const initialUser = {
    uuid: uuid(),
    role: "default",
    username: username,
    password: password,
    name: "",
    lastName: "",
    surname: "",
    lastSurname: "",
    birthDate: "",
    email: email,
    phone: "",
    avatar: "",
    createdAt: Date.now(),
    lastEdit: "",
    verified: false,
    isConnected: false,
  };
  return initialUser;
};

export const productFormatter = (product) => {
  const data = {
    uuid: product.uuid,
    name: product.name,
    category: product.category,
    quantity: product.quantity,
    brand: product.brand,
    createdAt: product.createdAt,
    lastEdit: product.lastEdit,
    expirationDate: product.expirationDate,
    bought: product.bought,
  };
  return data;
};

export const newProductFormatter = (product) => {
  const { name, quantity } = user;
  const initialUser = {
    uuid: uuid(),
    name,
    category,
    quantity,
    brand: "",
    createdAt: Date.now(),
    lastEdit: "",
    expirationDate: "",
    bought: "",
  };
  return initialUser;
};

export const responseFormatter = (response) => {
  const data = {
    data: response.data || {},
    success: response.success || false,
    message: response.message || "",
    token: response.token || "",
  };
  return data;
};
