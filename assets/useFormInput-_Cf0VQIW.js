import { aU as computed, aV as toValue } from "./vendor-q8C-Jnqr.js";
import { g as generateUuid } from "./AppFormLabel-ENSSOTUo.js";
function useFormInput({
  errors,
  isTouched,
  value,
  type,
  isPasswordVisible
}) {
  const id = `app-form-date-${generateUuid()}`;
  const isInvalid = computed(() => {
    return toValue(isTouched) && toValue(errors) != null;
  });
  const computedValue = computed({
    get: () => toValue(value),
    set: (newValue) => {
      if (toValue(type) === "number")
        value.value = newValue === "" ? "" : Number(newValue);
      else
        value.value = newValue;
    }
  });
  const computedType = computed(() => {
    if (toValue(type) === "password" && toValue(isPasswordVisible))
      return "text";
    return toValue(type) ?? "text";
  });
  return {
    id,
    isInvalid,
    computedValue,
    computedType
  };
}
export {
  useFormInput as u
};
