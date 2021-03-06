import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const DivGrid =  ({category}) => {
  
   const {images, isLoading } = useFetchGif(category);    

    return (
      <>
        <h3>{category}</h3>

        { isLoading && <h2> CARGANDO... </h2> }

        <div className="card-grid">
          { 
            images.map( (gif) => 
                <GifItem 
                key={gif.id}
                {...gif}
                />
                
            )}

        </div>
      </>
  )
}
