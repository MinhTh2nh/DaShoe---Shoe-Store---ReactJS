import classNames from 'classnames/bind';
import styles from './AddCustomer.module.scss';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const cx = classNames.bind(styles);

function AddCustomer() {
  return (
    <div className={cx('container')}>
      <div className={cx('row-form')}>
        <TextField autoFocus margin="dense" id="fullWidth" label="name" type="text" fullWidth variant="standard" />
        <TextField autoFocus margin="dense" id="fullWidth" label="Phone" type="text" fullWidth variant="standard" />
      </div>
      <div className={cx('row-form')}>
        <TextField autoFocus margin="dense" id="fullWidth" label="email" type="email" fullWidth variant="standard" />
        <TextField autoFocus margin="dense" id="fullWidth" label="dob" type="date" fullWidth variant="standard" />
      </div>
      <div className={cx('row-form')}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </div>
      <TextField autoFocus margin="dense" id="fullWidth" label="address" type="text" fullWidth variant="standard" />
      <TextField autoFocus margin="dense" id="fullWidth" label="country" type="text" fullWidth variant="standard" />
    </div>
  );
}

export default AddCustomer;
