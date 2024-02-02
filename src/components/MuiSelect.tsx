import { Box, TextField, MenuItem } from "@mui/material";
import React, {useState} from "react";

export const MuiSelect = () => {
    const [country, setCountries] = useState<string[]>([]);
    console.log({country})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

  return (
    <Box width='250px'>
        <TextField
            label='Select Country'
            select
            value={country}
            onChange={handleChange}
            fullWidth
            SelectProps={{
                multiple: true,
            }}
            error
            size="small"
            helperText = 'Enter the countries here'
            color="secondary"
        >
            <MenuItem value="SL">Sri Lanka</MenuItem>
            <MenuItem value="CA">Canada</MenuItem>
            <MenuItem value="US">United States</MenuItem>
        </TextField>
    </Box>
  )
}
