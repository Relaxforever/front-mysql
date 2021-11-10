import React from "react";
import "./inputForm.scss";

interface InputFormInter {
  label: string;
  type: string;
  value: string | number;
  onChangeInput?: (name: string, value: string | number) => any;
  onChangeEmployee?: (
    index: number | undefined,
    name: string,
    value: string | number
  ) => any;
  placeholder?: string;
  className?: string;
  required?: boolean;
  name: string;
  index?: number;
  readonly?: boolean | undefined;
}

const InputForm = (props: InputFormInter) => {
  let {
    label,
    type,
    value,
    placeholder,
    className,
    required,
    name,
    onChangeInput,
    //index,
    // onChangeEmployee,
    readonly,
  } = props;

  return (
    <div className={`input-form ${className ? ` ${className}` : ""}`}>
      <div className="input-form_div">
        <label className="input-form_div_label">
          {label}
          <span
            className={`
                input-form_label-aster ${required ? "show" : "not-show"}
                `}
          >
            *
          </span>
        </label>
      </div>

      <input
        type={type}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        className={`input-form_input ${className}-value`}
        onChange={(e) =>
          onChangeInput ? onChangeInput(name, e.target.value) : null
        }
        readOnly={readonly ? true : false}
        required
      />
    </div>
  );
};

export default InputForm;
