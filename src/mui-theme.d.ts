import '@mui/material/Button';
import '@mui/material/TextField';

// Not worked
declare module '@mui/material/TextField' {
  export interface TextFieldPropsVariantOverrides {
    noborder: true;
  }
}
