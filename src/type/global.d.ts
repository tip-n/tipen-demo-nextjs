declare namespace JSX {
    interface IntrinsicElements {
      'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        // Add more properties
        navigation?: boolean 
        pagination?: any
        "slides-per-view"?: string
        speed?: string
        loop?: boolean
        "css-mode"?: boolean
        init?: boolean
        breakpoints?: {
          [breakpoint: string]: {
            "slidesPerView": number,
          },
        }
      };
      'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        // Add more properties
        lazy?: boolean
      };
    }
}