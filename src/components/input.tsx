import { ComponentProps } from 'react';

type LabeledInputProps = ComponentProps<'input'> & {
  label: string;
};

const LabeledInput = ({ id, label, ...props }: LabeledInputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} readOnly={!props.onChange} />
    </>
  );
};

export default LabeledInput;
