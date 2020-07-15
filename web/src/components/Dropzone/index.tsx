import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FiUpload} from 'react-icons/fi';
import  './styles.css';



interface Props{
 onfileUploaded:( file: File ) =>void;

}

const  Dropzone: React.FC <Props> = ({onfileUploaded})=> {
  const[selectcFileUrl, setSelectFileUrl] = useState('');
  const onDrop = useCallback(acceptedFiles => {
  const file = acceptedFiles[0];

  const fileUrl = URL.createObjectURL(file);
  setSelectFileUrl(fileUrl);
  onfileUploaded(file);
 
  }, [onfileUploaded])
  

  const {getRootProps, getInputProps} = useDropzone({
   onDrop, 
   accept: 'image/*' //somente arquivos de imagens
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*"/>

      { selectcFileUrl
        ?<img src={selectcFileUrl} alt="Estabelecimento"/>        
        
        :(        
          <p> 
             <FiUpload/>
            Imagem do Estabelecimento
         </p>
        )
      }
      
      
      
    </div>
  )
}

export default Dropzone;