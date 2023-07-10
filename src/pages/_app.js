import '../style/global.css'

import MainContainer from "@/app/components/mainContainer"

function MyApp({Component, pageProps}) {
    return ( <MainContainer>
         <Component {...pageProps} /> </MainContainer>
    )
}


export default MyApp