import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from '@mui/material/ListItemIcon';
import ArticleIcon from '@mui/icons-material/Article';

export default function UploadDocs(props) {
  const [selectedFiles, setSelectedFiles] = React.useState(null);
  const [dense] = React.useState(false);

  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append("myFile", selectedFiles, selectedFiles.name);
    // Details of the uploaded file
    console.log(selectedFiles);
    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };
  const handleClose = () => {
    props.setOpenUpload(false);
  };

  const onFileChange = (event) => {
    setSelectedFiles({ selectedFiles: event.target.files });
  };

  return (
    <div>
      <Dialog open={props.openUpload} onClose={handleClose}>
        <DialogTitle>Claim Request Documents</DialogTitle>
        <DialogContent>
          {
            // <div>
            //         <input type="file" onChange={onFileChange} />
            //         <button onClick={onFileUpload}>
            //           Upload!
            //         </button>
            //     </div>
          }
          {selectedFiles && (
              <div>
                {Array.from(selectedFiles.selectedFiles).map((file) => (
                  <List dense={dense}>
                    <ListItem>
                    <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                      <ListItemText primary={file.name} />
                    </ListItem>
                  </List>
                ))}
              </div>
            )}
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={onFileChange} multiple />
          </Button>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={onFileUpload}>Upload</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
