import { useState } from 'react';

import {
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import s from './SignIn.module.scss';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const handleContinue = () => {
    // Handle continue logic here
    console.log('Continue button clicked');
  };
  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password button clicked');
  };

  return (
    <main className={s.SignIn}>
      <h1>Login</h1>
      <form onSubmit={handleContinue} className={s.InputContainer}>
        <FormControl>
          <div className={s.ContainerForTextAndBtn}>
            <InputLabel shrink={true} className={s.label} htmlFor='email'>
              Пароль
            </InputLabel>
            <Button
              disableRipple
              disableFocusRipple
              variant='text'
              onClick={handleForgotPassword}
            >
              Забули пароль?
            </Button>
          </div>
          <OutlinedInput
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Введіть пароль'
            autoComplete='current-password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            endAdornment={
              <InputAdornment position='end'>
                <EyeToggle
                  status={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputAdornment>
            }
          />
          <FormHelperText id='my-helper-text'>
            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage text={formik.errors.password} />
            ) : null}
          </FormHelperText>
        </FormControl>
        <Button
          type='submit'
          variant='blue'
          endIcon={<NorthEastIcon />}
          disabled={isPending}
        >
          Увійти
        </Button>
      </form>
    </main>
  );
}
