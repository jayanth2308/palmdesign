import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [uploadedImage, setUploadedImage] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, such as saving it to local storage
    console.log('Uploaded file:', file);
    setUploadedImage(file);
    if(uploadedImage){
      alert('Palm not detected');
    }else{
      alert('Palm detected');
    }
    
  }

  return (
    <>
     <div className='bg-fuchsia-100 p-4 pb-10 my-2 rounded-2xl flex flex-col'>
        <div className='relative pb-4'>
          <div className='absolute top-0 left-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </div>
          <div className='text-center'>
              <p className='text-purple-900 text-lg'>Palm Reading</p>
          </div>
          
        </div>
        <div>
          <p className='text-zinc-900'>*Please upload Left Palm Image to Reveal Your Fortune</p>
        </div>
        <div className='grid grid-cols-5  mx-10 my-5 py-4 bg-gray-300 rounded-2xl mx-6 gap-4 items-align-center '>
          <div className='col-span-2'>
          <img src={'/download.png'} alt='palm' className='p-10 m-10'/>
          </div>
          <div className='col-span-3 items-cneter py-10 my-10  w-full items-center  border-l-2 border-gray-600'>
            <div className='flex flex-col justify-cneter   w-full items-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
              </svg>
              <label htmlFor="file-upload" className="bg-white px-10 py-2 rounded-xl shadow-md shadow-lg:shadow-bottom cursor-pointer">
                Browse
              </label>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
              <p className='p-2'> or drag files here</p>
            </div>
            
          </div>
        </div>
     </div>
    </>
  )
}

export default App
