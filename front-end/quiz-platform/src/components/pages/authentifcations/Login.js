import React from 'react'
import { useState } from 'react'
import { Typography, Box } from '@mui/material';
import { useSLogin } from './../../../hooks/useLogin';
import { Stack, TextField, Link } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import BoldVariant from '../../UI/Button/CustomVariantButton';
import { CustomTheme } from '../../UI/Themes/customButtonTheme';
import logo from '../../../assets/logoIlef.png';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { Login, isLoading, error } = useSLogin();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const _id = email;
        console.log(_id, password);
        await Login(_id, password);
    }

    return (
        <Stack sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: "#C23838" }}>Let's get started now ! </Typography>
            <Typography variant='h8' padding={2} paddingBottom={12} sx={{ fontWeight: 'bold'}}>
                 
                 <Link href='./signup' color='#702616' underline='hover'>Or create an account if not registred yet</Link>
                 </Typography>
            <Box
                component="img"
                sx={{
                    height: 90,
                    width: 120,
                    borderRadius: '50%',
                    position: 'absolute',
                    bgcolor: '#F9F7F7',
                    top: '215px'
                    /*maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 }, */
                }}
                alt="logo ilef info service."
                src={logo}
            />
            <Stack
                sx={{
                    height: '400px',
                    width: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    bgcolor: '#C23838',
                    borderRadius: '14px'
                }}
            >
                <Typography variant='h8' paddingBottom={2} sx={{ fontWeight: 'bold', color: "white" }}>E-mail : </Typography>
                <TextField sx={{
                    bgcolor: '#F9F7F7',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    height: '40px',
                    width: '80%'
                }}

                    type='email'
                    variant="standard"
                    InputProps={{ disableUnderline: true, style: { textAlign: 'center' } }}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <Typography variant='h8' paddingBottom={2} sx={{ fontWeight: 'bold', color: "white" }}>password : </Typography>
                <TextField
                    sx={{
                        bgcolor: '#F9F7F7',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        width: '80%',
                        height: '40px',
                        alignItems: 'center',
                    }}
                    type='password'
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required

                />
                <Typography variant='h8' color="white" marginBottom={0.5}> {error && error} </Typography>
                <ThemeProvider theme={CustomTheme}>
                    <BoldVariant action='Log in' isDisabled={isLoading} onClick={handleSubmit} />
                </ThemeProvider>
                {/*  { <Button variant="contained" sx={{ bgcolor: '#F9F7F7', }} disabled={isLoading} > Log in </Button>
                <button disabled={isLoading}>Log in</button> }
                {error && <div>{error}</div>}*/}
            </Stack>
        </Stack>
    )
};
export default Login;
/*<input type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}/>

                    <label> Password :</label>
                    <input type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />*/