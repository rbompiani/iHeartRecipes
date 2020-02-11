import React, { useRef } from "react";

import Button from "../../shared/Button/Button";

import "./ImageUpload.css";

const ImageUpload = props => {

    const filePickerRef = useRef();
    const selectImageHandler = props => {
        filePickerRef.current.click();
    }
    const selectedHandler = event => {
        console.log(event.target);
    }

    return (
        <div className="form-control">
            <input
                id={props.id}
                ref={filePickerRef}
                style={{ display: 'none' }}
                type="file" accept=".jpg, .png, .jpeg"
                onChange={selectedHandler}
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview" >
                    <img src="" alt="Preview" />
                </div>
                <Button type="button" onClick={selectImageHandler}>Select Image</Button>
            </div>
        </div>
    )

}

export default ImageUpload;