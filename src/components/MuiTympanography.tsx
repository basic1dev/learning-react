import react from 'react';
import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return(
        <div>
            <Typography variant='h1'>h1 heading</Typography>
            <Typography variant='h2'>h2 heading</Typography>
            <Typography variant='h3'>h3 heading</Typography>
            <Typography variant='h4'>h4 heading</Typography>
            <Typography variant='h5'>h5 heading</Typography>
            {/* Here the component changing would keep the style of h6 and also add a gutter to the bottom */}
            <Typography variant='h6' component='h1' gutterBottom>h6 heading</Typography>

            <Typography variant='subtitle1'>Sub title 1</Typography>
            <Typography variant='subtitle2'>Sub title 2</Typography>

            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequatur molestias et, at molestiae, eius veniam similique repudiandae laborum error quidem quas labore possimus ipsum sequi ipsa voluptatem a? Veniam.</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos doloremque soluta adipisci saepe. Explicabo suscipit nam dolore voluptatum neque ducimus perspiciatis distinctio modi, tempore iusto, temporibus, provident totam ipsa!</Typography>
        </div>
    )   
};