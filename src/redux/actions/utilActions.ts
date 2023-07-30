export const modifyInputs = (payload: any, type: any, campo: any = null, index: any = null) => {
  if (campo !== null) {
    payload = {valor: payload, campo, index};
  }
  return {payload, type, campo, index};
};
