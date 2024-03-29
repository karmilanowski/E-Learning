import { alpha } from "@mui/system"

export const offerItemStyle = {
    mainContainer: {
        margin: '30px',
        flexDirection: 'column', 
    },

    userImg: {
            width: {
                xs: '70vw',
                sm: '25vw',
                lg: '17vw',
                xl: '17vw',
            },
            height: {
                xs: '70vw',
                sm: '25vw',
                lg: '17vw',
                xl: '17vw',
            },
            borderRadius: '30px',
            boxShadow: `0 10px 10px ${alpha("#000000", 0.3)}`,
        '&:hover': {
            boxShadow: `0 10px 10px ${alpha("#fcba03", 1)}`,
            cursor: 'pointer',
        },    
    },
    name: {
       color: 'white',
       fontWeight: 'bold',
       position: 'relative',
       top: "-70px",
       left: '30px',
       userSelect: 'none',
       fontSize: {
           xs: '30px',
           sm: '30px',
           md: '30px',
           lg: '30px',
       }
    },

    descItem: {
    position: 'relative',
    top: '-10px',
    },

    descText: {
        margin: 0
    }
} as const