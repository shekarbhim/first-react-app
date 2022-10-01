import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

export default function ViewDocs(props) {
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);
  const handleClose = () => {
      props.setViewDocsOpen(false);
  };

  return (
    <div>
      <Dialog open={props.viewDocs} onClose={handleClose}>
        <DialogTitle>Claim Request Documents</DialogTitle>
        <DialogContent>
        <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DownloadForOfflineIcon color='primary' />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
