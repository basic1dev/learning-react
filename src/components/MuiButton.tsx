import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlineIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

// This import is to create a functional button group for formatting. 
import { useState } from 'react';



// This is handling states in the buttons realted to formats
// Have to learn more about the function, I dont understand anything
export const MuiButton = () => {

    const [formats, setFormats] = useState<string | null>(null)
    // The function
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
        console.log({
            formats,
        })
    }


    return(
     <Stack spacing={4}> 
     
        {/* The stack of varients of buttons (Here I haved used the disable ripple prop)*/}
        <Stack spacing={2} direction={'row'}>
            <Button variant="text" href="https://www.google.com/" disableRipple>Text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
        </Stack>


        {/* The stack of color of buttons */}
        <Stack spacing={2} direction={'row'}>
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained" color="secondary">secondary</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="warning">warning</Button>
            <Button variant="contained" color="info">info</Button>
            <Button variant="contained" color="success">success</Button>
        </Stack>


        {/* The stack of size of buttons */}
        <Stack display='block' spacing={2} direction={'row'}>
            <Button variant="contained" size="small">small</Button>
            <Button variant="contained" size="medium">medium</Button>
            <Button variant="contained" size="large">large</Button>
        </Stack>

        {/* Lets add icons to the buttons */}

    <Stack spacing={2} direction={'row'}>
        {/* Here I will disable elevation to the send button*/}
        <Button variant="outlined" startIcon={<AccountCircleIcon />}>Profile</Button>
        <Button variant="contained" endIcon={<SendIcon />}  disableElevation onClick={()=> alert('Hello motherfucker')}>send</Button>

        {/* This is a button which is an iconbutton which has the Add icon  (The color and size can be added as well)*/}
        <Button>
            <IconButton aria-label="send" color="success" size="medium">
                <AddIcon />
            </IconButton>
        </Button>
    </Stack>

        {/* Here I am about to experiment with the button group */}
    <Stack direction='row'>
        <ButtonGroup 
            orientation='vertical' 
            variant='contained' 
            size='small' 
            color="secondary" 
            arai-aria-label="alignment button group">

                <Button>group button 1</Button>
                <Button>Group button 2</Button>
                <Button>group button 3</Button>
        </ButtonGroup>
    </Stack>

    <Stack direction='row'>
        <ToggleButtonGroup 
        size="small" 
        color="success" 
        orientation="vertical" 
        aria-label="text formattting" 
        value={formats} 
        onChange={handleFormatChange}
        exclusive
        >
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label='talic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underline' aria-label='underline'><FormatUnderlineIcon /></ToggleButton>
        </ToggleButtonGroup>
    </Stack>

    </Stack>

    )
};