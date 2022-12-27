import "./share.scss";
//import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Button } from "@mui/material";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function Share({open,handleClose}) {

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };
  return (
    <div>
      <Modal open={open} onClose={handleClose} className="modal">
        
          <div className="modal-box">
            <div className="modal-head">
              <Typography variant="span">Create New Post </Typography>
            </div>
          
          <form className="modal-body">
            <div className="modal-body-top">
              <Avatar
                alt="Remy Sharp"
                src="/images/person/0.png"
                sx={{ width: 46, height: 46 }}
              />
              <input type="text" className="modal-text-input" 
              placeholder="write a post"/>
              <Button type="submit" variant="contained" height='10px'>Share</Button>
            </div>
            <div className="modal-buttons">
              <button><AddAPhotoOutlinedIcon /> <b>Foto</b></button>
              <button><VideoLibraryOutlinedIcon /><b>Video</b></button>
              <button><CalendarMonthOutlinedIcon /><b>Event</b></button>
              <button><ShortTextOutlinedIcon /><b>Write</b></button>
              
            </div>
            <div className="share-img-wrapper">
              <img src="/images/post/2.png" alt="" className="share-img"/>
              <CancelOutlinedIcon className='cancel-icon' color='error'/>
            </div>
          </form>
          </div>
      </Modal>
    </div>
  );
}

export default Share;
