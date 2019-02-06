// action creater
export const inc = () => ({type: 'INC'}); // тоже самое что и ниже
export const dec = () => ({type: 'DEC'});
export const rst = () => ({type: 'RST'});
// export const rst = (value) => {
//   return {type: 'RST, value: Math.floor(Math.random() * 10)}
// };