export const validate = inputs => {
    const errors = {};
    if (!inputs.username) {
      errors.username = 'Введите имя пользователя';
    } else if (inputs.username !== 'Юрчик') {
      errors.username = 'Имя пользователя неверно';
    }
    if (!inputs.password) {
      errors.password = 'Введите ваш пароль';
    }
    return errors;
  };

  export const required = value => {
    if (value) return undefined;

    return 'Field is required'

}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
} 
 