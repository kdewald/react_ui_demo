import React, { useState } from "react";
import { Checkbox as MuiCheckbox, createFilterOptions } from "@mui/material";
// import { createFilterOptions } from "@mui/core";
// import { createFilterOptions } from "@mui/lab/Autocomplete";

import { Autocomplete, AutocompleteData } from "mui-rff";
import Chip from "@mui/material/Chip";

const autocompleteData: AutocompleteData[] = [
  { label: "Earth", value: "earth" },
  { label: "Mars", value: "mars" },
  { label: "Venus", value: "venus" },
  { label: "Brown Dwarf Glese 229B", value: "229B" },
];

type Props = {
  name: string;
  label: string;
  autocompleteOptions?: AutocompleteData[];
  helperText?: string;
  placeholder?: string;
  required?: boolean;
};

const TextFieldMultiple = ({
  name,
  label,
  helperText,
  placeholder,
  autocompleteOptions = [],
  required,
}: Props) => {
  // const [options, setOptions] = useState<AutocompleteData[]>(
  //   autocompleteOptions
  // )

  const filter = createFilterOptions<AutocompleteData>();

  return (
    <Autocomplete
      label={label}
      name={name}
      required={!!required}
      multiple
      options={autocompleteOptions}
      // defaultValue={autocompleteOptions.map((option) => option.value)}
      limitTags={4}
      filterSelectedOptions
      // getOptionValue={(option) => {
      //   console.log('optionvalue', option)

      //   if (typeof option === 'string') {
      //     return option
      //   }
      //   // Add "xxx" option created dynamically
      //   if (option.inputValue) {
      //     return option.inputValue
      //   }
      //   // Regular option
      //   console.log('option.value', option.value)
      //   return option.value
      // }}
      // getOptionLabel={(option) => option.label}
      // getOptionLabel={(option) => {
      //   console.log('optionlabel', option)
      //   // Value selected with enter, right from the input
      //   if (typeof option === 'string') {
      //     return option
      //   }
      //   // Add "xxx" option created dynamically
      //   if (option.inputValue) {
      //     return option.inputValue
      //   }
      //   // Regular option
      //   return option.label
      // }}
      disableCloseOnSelect={true}
      renderOption={(option: any, { selected, ...props }) => {
        return option.inputValue ? (
          option.label
        ) : (
          <>
            <MuiCheckbox style={{ marginRight: 8 }} checked={selected} />
            {option.label}
          </>
        );
      }}
      helperText={helperText}
      freeSolo={true}
      // onChange={(_event, newValue, reason, details: any) => {
      //   console.log('newValue', newValue)
      //   console.log('reason', reason)
      //   console.log('details', details)

      //   // switch (reason) {
      //   //   case 'create-option':
      //   // }

      //   // if (typeof details?.option === 'string' && reason === 'create-option') {
      //   //   setOptions([
      //   //     ...options,
      //   //     {
      //   //       value: details?.option,
      //   //       label: details?.option
      //   //     }
      //   //   ])
      //   //   return
      //   // }

      //   // if (
      //   //   details?.option &&
      //   //   details?.option.inputValue &&
      //   //   reason !== 'remove-option'
      //   // ) {
      //   //   // Create a new value from the user input
      //   //   setOptions([
      //   //     ...options,
      //   //     {
      //   //       value: details?.option.inputValue,
      //   //       label: details?.option.inputValue
      //   //     }
      //   //   ])
      //   // }
      //   // // else if (!['remove-option', 'blur', 'clear'].includes(reason)) {
      //   // //   setOptions([...options, details?.option])
      //   // // }
      // }}
      renderTags={(value: any, getTagProps: any) => {
        return value.map((option: any, index: number) => (
          <Chip
            variant="outlined"
            label={option?.label || option}
            {...getTagProps({ index })}
          />
        ));
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        // Suggest the creation of a new value
        // if (params.inputValue !== '') {
        //   filtered.push({
        //     inputValue: params.inputValue,
        //     label: `Add "${params.inputValue}"`,
        //     value: params.inputValue
        //   })
        // }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
    />
  );
};

// /* eslint-disable no-use-before-define */
// import React from 'react'
// import Chip from '@mui/material/Chip'
// import Autocomplete, {
//   createFilterOptions
// } from '@mui/lab/Autocomplete'
// import { createStyles, makeStyles, Theme } from '@mui/material/styles'
// // import TextField from '@mui/material/TextField'
// import { TextField, AutocompleteData } from 'mui-rff'
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {}
//   })
// )

// type Props = {
//   name: string
//   label: string
//   helperText: string
//   placeholder: string
//   required: boolean
// }

// export default function TextFieldMultiple({
//   name,
//   label,
//   helperText,
//   placeholder,
//   required
// }: Props) {
//   const classes = useStyles()
//   const filter = createFilterOptions<AutocompleteData>()

//   return (
//     <Autocomplete
//       multiple
//       // name={name}
//       // label={label}
//       // required={required}
//       // helperText={helperText}
//       id='tags-filled'
//       options={top100Films.map((option) => option.title)}
//       defaultValue={[top100Films[13].title]}
//       freeSolo
//       renderTags={(value: string[], getTagProps: any) => {
//         console.log('value', value)
//         return value.map((option: string, index: number) => (
//           <Chip variant='outlined' label={option} {...getTagProps({ index })} />
//         ))
//       }}
//       renderInput={(params: any) => (
//         <TextField
//           name={name}
//           // label={label}
//           placeholder={placeholder}
//           {...params}
//         />
//       )}
//     />
//   )
// }

export default TextFieldMultiple;
