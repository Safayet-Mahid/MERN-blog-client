import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase"

const handleFileUploadToFirebase = async (file) => {
    const filename = new Date().getTime() + file.name
    const storageRef = ref(storage, filename);

    let uploadedURL


    const uploadTask = uploadBytesResumable(storageRef, filename);


    uploadTask.on('state_changed',
        (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                default: ;
            }
        },

        (error) => {
            console.log(error)
        },

        () => {

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // console.log('File available at', downloadURL);
                // return downloadURL
                uploadedURL = downloadURL
            });

        }


    )



    // const uploadLink = await getDownloadURL(uploadTask.snapshot.ref)
    // console.log(uploadLink)
    return uploadedURL

}
export default handleFileUploadToFirebase