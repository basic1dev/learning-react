import {Stack, TextField, InputAdornment, Input} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {
    return(
        <Stack spacing={4}>
            {/* The first prop: variants  */}
            <Stack direction='row' spacing={2}>
                <TextField label="Outlined" variant="outlined"/>
                <TextField label="filled" variant="filled"/>
                <TextField label="standard" variant="standard"/>
            </Stack>

            {/* The second prop: size  */}
            <Stack direction='row' spacing={2}>
                <TextField label="small"  size="small"/>
                <TextField label="medium" size="medium"/>
            </Stack>
            
            {/* The third prop: color  */}
            <Stack direction='row' spacing={2}>
                <TextField label="primary color"  color="primary"/>
                <TextField label="secondary color" color="secondary"/>
                <TextField label="Error color" color="error"/>
            </Stack>
                        
            {/* The fourth parameterless and helpertext props prop:  */}
            <Stack direction='row' spacing={2}>
                <TextField label="Required"  required/>
                <TextField label="Disabled"  disabled/>
                <TextField label="Read Only" InputProps={{readOnly:true}}/>
                <TextField label="Helper text" helperText="This is called a helper text"/>
            </Stack>

            {/* The fifth type prop: password  */}
            <Stack direction='row' spacing={2}>
                <TextField label="password" helperText="Enter your password"  type="password"/>
            </Stack>

            {/* The sixth type prop: prefix and suffix adornments */}
            <Stack direction='row' spacing={2}>
                <TextField label="Amount" helperText="In the beginning" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>,}}/>
                <TextField label="Weight" helperText="In the end" InputProps={{endAdornment: <InputAdornment position="end">$</InputAdornment>,}}/>
                <TextField label="Password" helperText="Enter your password here" type="password" InputProps={{endAdornment: <InputAdornment position="end"><VisibilityIcon/></InputAdornment>,}}/>
            </Stack>
        </Stack>
    )
}