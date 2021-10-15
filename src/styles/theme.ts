import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#FFFFFF",
      "100": "#F5F8FA",
      "200": "#DADADA",
      "300": "#999999",
      "600": "#47585B",
      "1000": "#000000"
    },

    yellow: "#FFBA08"
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.600"
      },
      ".swiper-button-next, .swiper-button-prev": {
        color: "yellow",
        transition: "filter .2s",
        //fontSize: ["5px !important", "80px !important"],
        _hover: {
          filter: "brightness(0.8)"
        }
        
      },
      ".swiper-button-next::after, .swiper-button-prev::after ": {
        fontSize: ["20px", "40px"]
      },
      ".swiper-pagination-bullet-active": {
        background: "yellow",
        transition: "filter .2s",
        _hover: {
          filter: "brightness(0.8)"
        }
      }
    }
  }
})