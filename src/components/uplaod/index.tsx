import { useState } from "react";
import { useApp } from "../../hooks";

const UploadFileComponent = () => {
  const { app, setApp } = useApp();
  const [title, setTitle] = useState(" Click to Upload Image");
  return (
    <div>
      <label
        htmlFor="file"
        className="flex cursor-pointer items-center border border-dashed rounded-md justify-center p-3 text-sm"
      >
        {title}
      </label>
      <input
        onChange={(e) => {
          if (e.target.files) {
            setApp({ ...app, file: e.target.files[0] });
            // get the name of the file
            setTitle(e.target.files[0].name);
          }
        }}
        accept=".png,.jpg,webp"
        hidden
        type="file"
        id="file"
      />
    </div>
  );
};

export default UploadFileComponent;
