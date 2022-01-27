export const range0to5 = (props, propName, componentName) => {
  if (props[propName]) {
    const value = props[propName] * 1;
    if (!isNaN(value)) {
      return value < 0 || value > 5
        ? new Error(propName + ' in ' + componentName + ' is not within 0 to 5')
        : null;
    } else {
      return new Error(propName + ' in ' + componentName + ' is not Number');
    }
  }
};
