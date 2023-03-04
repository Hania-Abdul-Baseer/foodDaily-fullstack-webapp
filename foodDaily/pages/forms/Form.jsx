import FormWrapper from "../forms/FormWrapper";

export function Form({ title, children }) {
  return <FormWrapper title={title}>{children}</FormWrapper>;
}
