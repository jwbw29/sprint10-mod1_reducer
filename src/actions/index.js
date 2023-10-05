export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const STORE_TO_MEMORY = "STORE_TO_MEMORY"; //M+
export const MEMORY_CLEAR = "MEMORY_CLEAR"; //MC

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: "CE" };
};

export const storeToMemory = () => {
  return { type: STORE_TO_MEMORY, payload: "M+" };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR, payload: "MC" };
};
