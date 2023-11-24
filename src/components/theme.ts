import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/outfit';



const theme = extendTheme({
  fonts: {
    heading: 'Outfit Variable',
    body: 'Outfit Variable',
  },
})

export default theme