import React from 'react'
import { useState } from 'react'
import { useSignup } from '../../../hooks/useSignup';
import { Typography, Box } from '@mui/material';
import { Stack, TextField, MenuItem, Grid,Link } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import BoldVariant from '../../UI/Button/CustomVariantButton';
import { CustomTheme } from '../../UI/Themes/customButtonTheme';
import logo from '../../../assets/logoIlef.png';
import classes from './signup.module.css'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('learner');
    const [phone, setPhone] = useState('');
    const { Signup, error, isLoading } = useSignup();

    // à revoir 
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password, firstName, lastName, role, phone);
        await Signup(email, password, firstName, lastName, role, phone)
    }
    /* const form = INFO.map((info) => {
             <Stack className={classes.textFieldRow}>
                 <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>{info.label}</Typography>
 
                 <TextField className={classes.texfield} type={info.type}
                     variant="standard"
                     InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                     onChange={(e) => { info.fonc(e.target.value) }}
                     value={info.value}
                     required
                 />
             </Stack>
     }) */

    return (
        <Stack className={classes.signup}>
            <Box
                component="img" className={classes.logo}
                alt="logo ilef info service."
                src={logo}
            />
            <Grid className={classes.sGrid} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>First name</Typography>

                    <TextField className={classes.texfield} type="text"
                        variant="standard"
                        InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        value={firstName}
                        required
                    />
                </Stack>
                <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>Last name</Typography>
                    <TextField className={classes.texfield} type="text"
                        variant="standard"
                        InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                        onChange={(e) => { setLastName(e.target.value) }}
                        value={lastName}
                        required
                    />
                </Stack>

                <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>E-mail</Typography>
                    <TextField className={`${classes.texfield} ${classes.emailField}`} type="email"
                        variant="standard"
                        InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                        onChange={(e) => { setEmail(e.target.value) }}
                        value={email}
                        required
                    />
                </Stack>

                <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>Password</Typography>

                    <TextField className={classes.texfield} type="password"
                        variant="standard"
                        InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        required
                    />
                </Stack>
                <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>Role</Typography>
                    <TextField className={`${classes.texfield} ${classes.emailField}`}
                        variant="standard"
                        InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                        select
                        value={role}
                        required
                        onChange={(e) => { setRole(e.target.value) }}
                    >
                        <MenuItem value='learner'>Learner </MenuItem>
                        <MenuItem value='trainer'>Trainer </MenuItem>
                    </TextField>
                </Stack>
                {role === 'trainer' && (
                    <Stack className={classes.textFieldRow} sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography variant='h8' paddingBottom={1} sx={{ fontWeight: 'bold', color: "white" }}>phone</Typography>

                        <TextField className={`${classes.texfield} ${classes.emailField}`} type="text"
                            variant="standard"
                            InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                            onChange={(e) => { setPhone(e.target.value) }}
                            value={phone}
                            required
                        />
                    </Stack>)}
                <Typography variant='h8' color="white" marginBottom={0.5}> {error && error} </Typography>
                <Stack className={classes.btn} marginTop={5} sx={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around'
                }}>
                    <ThemeProvider theme={CustomTheme} >
                        <BoldVariant action='Sign up' isDisabled={isLoading} onClick={handleSubmit} />
                    </ThemeProvider>
                    <Typography variant='body2' color="white" >
                        <Link href='./signup' color='white' underline='hover'> Have an account ?</Link>
                    </Typography>
                </Stack>

            </Grid >
        </Stack >
    )
}

export default Signup


/*<form onSubmit={handleSubmit}>
                    <h3> Signup </h3>
                    <label> Email :</label>
                    <input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <label>First Name :</label>
                    <input type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label>Last Name :</label>
                    <input type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <label> Password :</label>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />

                    <label htmlFor="role">Choose a Role:</label>

                    <select id="role" onChange={(e) => setRole(e.target.value)}>
                        <option defaultValue="learner">Learner</option>
                        <option value="trainer">Trainer</option>
                    </select>
                    {role === 'trainer' && (<div>
                        <label> Phone: </label>
                        <input type="number"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    </div>)}
                    <button disabled={isLoading}>Sign up</button>
                    {error && <div> {error}</div>} */