import { Box, TextField, MenuItem } from "@mui/material";
import React, {useState} from "react";

export const MuiSelect = () => {
    const [country, setCountry] = useState('');
    console.log({country})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
  return (
    <Box width='250px'>
        <TextField
            label='Select Country'
            select
            value={country}
            onChange={handleChange}
            fullWidth
        >
            <MenuItem value="SL">Sri Lanka</MenuItem>
            <MenuItem value="CA">Canada</MenuItem>
            <MenuItem value="US">United States</MenuItem>
        </TextField>
    </Box>
  )
}
