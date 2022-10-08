export const genActivationCode = () => {
  let otp = "";
  for (let i = 0; i <= 3; i++) {
    const random = Math.round(Math.random() * 9);
    otp = otp + random;
  }
  return otp;
};
