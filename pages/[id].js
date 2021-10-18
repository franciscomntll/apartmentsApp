import ImagesGallery from "../components/ImagesGallery";

const SinglePage = () => {
    return (
        <div>
            <ImagesGallery />
        </div>
    )
}

export default SinglePage



export async function getStaticPaths() {
    return {
      paths: [
        { params: { id: "hola" } } // See the "paths" section below
      ],
      fallback: false // See the "fallback" section below
    };
  }

  export async function getStaticProps({ params }) {
    return { props: { } }
  }