import DefaultLayout from "../layouts/DefaultLayout"
import 'tailwindcss/tailwind.css'
import '@fontsource/roboto';
import '@fontsource/poppins';


const  MyApp =({ Component, pageProps }) => {
    return (
        <DefaultLayout>
        <Component {...pageProps} />
        </DefaultLayout>
    )
  }
  
  export default MyApp