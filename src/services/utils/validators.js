import * as cpfLib from "@fnando/cpf";

export const validator = (name, value) => {
  switch (name) {
    case "email":
      // eslint-disable-next-line no-useless-escape
      if (!/^[\w_\-\.]+@[\w_\-\.]{2,}\.[\w]{2,}(\.[\w])?/.test(value))
        return true;
      break;
    case "cpf":
      if (value === "") return true;
      if (!cpfLib.isValid(value)) return true;
      break;
    case "celular":
      if (value === "") return true;
      value = value.replace(/\D/gi, "");
      if (value.length !== 11) return true;
      break;
    case "codigo":
      if (value === "") return true;
      value = value.replace(/\D/gi, "");
      if (value.length !== 7) return true;
      break;
    default:
      return false;
  }
  return false;
};

export const masks = (name, value) => {
  let length = NaN;
  switch (name) {
    case "cpf":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 11);

      length = value.length;

      if (length > 3 && length <= 6)
        value = value.replace(/(\d{3})(\d{1,3})/, "$1$2");
      if (length > 6 && length <= 9)
        value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1$2$3");
      if (length > 9 && length <= 11)
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1$2$3/$4");

      return { name, value };
    case "celular":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 11);

      length = value.length;

      if (length > 2 && length <= 7)
        value = value.replace(/(\d{2})(\d{4})?/, "($1) $2");

      if (length > 7)
        value = value.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");

      return { name, value };
    case "codigoUm":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoDois":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoTres":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoQuatro":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoCinco":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoSeis":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };
    case "codigoSete":
      value = value.replace(/\D/gi, "");
      value = value.slice(0, 1);
      return { name, value };

    default:
      return { name, value };
  }
};
