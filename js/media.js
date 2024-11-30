const breakpoints = {
    xs: '(max-width: 575.98px)',
    sm: '(min-width: 576px) and (max-width: 767.98px)',
    md: '(min-width: 768px) and (max-width: 991.98px)',
    lg: '(min-width: 992px) and (max-width: 1199.98px)',
    xl: '(min-width: 1200px) and (max-width: 1399.98px)',
    xxl: '(min-width: 1400px)',
};

for (const [key, query] of Object.entries(breakpoints)) {
    const mediaQueryList = window.matchMedia(query);
    
    const handleMediaChange = (e) => {
        if (e.matches) {
            console.log(`Current breakpoint: ${key}`);
            if(key == "sm" || key == "xs") {
                
            } else {
                
            }
        }
    };

    handleMediaChange(mediaQueryList);
    
    mediaQueryList.addEventListener('change', handleMediaChange);
}