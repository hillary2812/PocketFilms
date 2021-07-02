import React from "react";

function Input() {
  const Input = React.forwardRef((props, ref) => {
    const {
      placeholder,
      // type, // Schema information
      // value, // Current field value
      // readOnly, // Boolean if field is not editable
      // placeholder, // Placeholder text from the schema
      // markers, // Markers including validation rules
      // compareValue, // Value to check for "edited" functionality
      // onFocus, // Method to handle focus state
      // onBlur, // Method to handle blur state
      // onChange, // Method to handle patch events
    } = props;

    // Creates a unique ID for our input

    return (
      <Input
        // classname="input"
        // onChange={handleChange} // A function to call when the input value changes
        // value={value} // Current field value
        // readOnly={readOnly} // If "readOnly" is defined make this field read only
        placeholder={placeholder} // If placeholder is defined, display placeholder text
        // onFocus={onFocus} // Handles focus events
        // onBlur={onBlur} // Handles blur events
        ref={ref}
      />
    );
  });
}

export default Input;
