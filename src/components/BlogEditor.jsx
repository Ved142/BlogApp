import {
  Avatar,
  Box,
  Button,
  Input,
  ListItemAvatar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Blog_1 from "./Templates/Blog_1";
import Blog_2 from "./Templates/Blog_2";
import ImgIcon from "../images/icon1.png";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const BlogEditor = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [title, setTitle] = useState("");
  const [para1, setPara1] = useState("");
  const [para2, setPara2] = useState("");
  const [primaryImg, setPrimaryImg] = useState(null);
  const [image1Url, setImage1Url] = useState(null);
  const [secondaryImg, setSecondaryImg] = useState(null);
  const [image2Url, setImage2Url] = useState(null);
  const [downloadUrl1, setDownloadUrl1] = useState("");
  const [downloadUrl2, setDownloadUrl2] = useState("");
  const storage = getStorage();

  const handleUpload1 = () => {
    console.log("hello");
    const storage = getStorage();
    const storageRef = ref(storage, primaryImg.name);

    uploadBytes(storageRef, primaryImg).then((snapshot) => {
      getDownloadURL(ref(storage, primaryImg.name)).then((url) => {
        console.log(url);
        setDownloadUrl1(url);
      });
    });
  };

  const handleUpload2 = () => {
    console.log("hello2");

    const storageRef = ref(storage, secondaryImg.name);

    uploadBytes(storageRef, secondaryImg).then((snapshot) => {
      getDownloadURL(ref(storage, secondaryImg.name)).then((url) => {
        console.log(url);
        setDownloadUrl2(url);
      });
    });

    // console.log(downloadUrl);
  };

  const blink = () => {
    // see this is imp , it will not work since state of these url are not changing immedietly
    console.log(downloadUrl1);
    console.log(downloadUrl2);
  };

  useEffect(() => {
    if (primaryImg) {
      setImage1Url(URL.createObjectURL(primaryImg));
    }

    console.log(image1Url);
  }, [primaryImg]);

  useEffect(() => {
    if (secondaryImg) {
      setImage2Url(URL.createObjectURL(secondaryImg));
    }
  }, [secondaryImg]);

  return (
    <Box>
      <Navbar />

      {!previewMode && (
        <>
          <Box
            sx={{
              // background: "floralwhite",
              border: "1px solid silver",
              borderRadius: "20px",
              padding: "40px 70px",
              display: "flex",
              flexDirection: "column",
              margin: "20px 50px 20px 50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: '"Montserrat",sans-serif',
                marginBottom: "10px",
              }}
            >
              Your thoughts, your voice, your blog
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Let's pen your thoughts and share your voice, one step at a time
            </Typography>
            <input
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              placeholder="captivate your audience with a compelling blog title"
            />

            {/* // uploading images */}

            <Box
              sx={{
                background: "ghostwhite",
                display: "flex",
                justifyContent: "space-around",
                margin: "20px 0",
                padding: "20px 0px",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "300px",
                  width: "400px",
                  border: "1px solid hotpink",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                {!image1Url ? (
                  <>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        border: "1.5px dashed silver",
                        width: "70%",
                        padding: "5px",
                      }}
                      htmlFor="file-upload"
                    >
                      <img
                        style={{ height: "55px", width: "55px" }}
                        src={ImgIcon}
                        alt={"select image"}
                      />{" "}
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "'Lato', sans-serif",
                          marginLeft: "10px",
                        }}
                      >
                        Upload primary image for your Blog
                      </Typography>
                    </label>

                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      onChange={(e) => {
                        setPrimaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      height: "300pxx",
                      width: "400px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        height: "250px",
                        width: "350px",
                        objectFit: "contain",
                      }}
                      src={image1Url}
                      alt="Image 1"
                    />
                    <label
                      style={{
                        fontFamily: '"Lato",sans-serif',
                        color: "blue",
                        marginTop: "10px",
                      }}
                      htmlFor="file-reupload"
                    >
                      Change
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-reupload"
                      type="file"
                      onChange={(e) => {
                        setPrimaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </Box>
                )}
              </Box>

              {/* // Code for Secondary Image */}
              <Box
                sx={{
                  display: "flex",
                  height: "300px",
                  width: "400px",
                  border: "1px solid forestgreen",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                {!image2Url ? (
                  <>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        border: "1.5px dashed silver",
                        width: "70%",
                        padding: "5px",
                      }}
                      htmlFor="file-upload2"
                    >
                      <img
                        style={{ height: "55px", width: "55px" }}
                        src={ImgIcon}
                        alt={"select image"}
                      />{" "}
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontFamily: "'Lato', sans-serif",
                          marginLeft: "10px",
                        }}
                      >
                        Upload secondary image for your Blog
                      </Typography>
                    </label>

                    <input
                      style={{ display: "none" }}
                      id="file-upload2"
                      type="file"
                      onChange={(e) => {
                        setSecondaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </>
                ) : (
                  <Box
                    sx={{
                      height: "300pxx",
                      width: "400px",
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      style={{
                        height: "250px",
                        width: "350px",
                        objectFit: "contain",
                      }}
                      src={image2Url}
                      alt="Image 2"
                    />
                    <label
                      style={{
                        fontFamily: '"Lato",sans-serif',
                        color: "blue",
                        marginTop: "10px",
                      }}
                      htmlFor="file-reupload2"
                    >
                      Change
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-reupload2"
                      type="file"
                      onChange={(e) => {
                        setSecondaryImg(e.target.files[0]);
                        console.log(e);
                      }}
                    />
                  </Box>
                )}
              </Box>
            </Box>

            {/* // end here */}

            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "10px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Hook your readers from the start - share your first paragraph with
              the world!{" "}
            </Typography>
            <textarea
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              value={para1}
              onChange={(e) => {
                setPara1(e.target.value);
              }}
              rows="5"
              cols="50"
              placeholder="Opening Paragraph"
            />
            <Typography
              sx={{
                marginTop: "20px",
                marginBottom: "10px",
                fontFamily: '"Lato",sans-serif',
                color: "gray",
              }}
              variant="p"
            >
              Don't leave your readers hanging - share the next part of your
              story now!{" "}
            </Typography>
            <textarea
              style={{
                border: "1px solid silver",
                borderRadius: "10px",
                padding: "15px",
                color: "black",
                fontSize: "16px",
                fontFamily: '"Lato",sans-serif',
              }}
              value={para2}
              onChange={(e) => {
                setPara2(e.target.value);
              }}
              rows="5"
              cols="50"
              placeholder="Second Paragraph"
            />
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <Button
                style={{
                  marginRight: "40px",
                }}
                onClick={() => {
                  if (previewMode) {
                    setPreviewMode(false);
                  } else {
                    setPreviewMode(true);
                  }
                }}
              >
                Preview
              </Button>
              <Button
                onClick={() => {
                  handleUpload1();
                  handleUpload2();
                  alert("both success");
                  blink();
                }}
              >
                Publish
              </Button>
            </Box>
          </Box>
        </>
      )}

      {previewMode && (
        <>
          <Button
            onClick={() => {
              if (previewMode) {
                setPreviewMode(false);
              } else {
                setPreviewMode(true);
              }
            }}
            sx={{ position: "sticky", top: "90px" }}
          >
            Toggle
          </Button>
          <Blog_2
            title={title}
            para1={para1}
            para2={para2}
            image1Url={image1Url}
            image2Url={image2Url}
          />
        </>
      )}
    </Box>
  );
};

export default BlogEditor;

//
// title : String, ( easy hai upr khi )
// tag : String, (ye tujhe add krna hai , iska khi koi option dena hai tujhe form me, bas form me dede ki databse me save ho jaye baki bad me dekh lenge)
// blog_image : String (downloadurl1 , downloadurl2 , inme state ka lafda hai so jab inki state change ho tabhi db me push krio),
// blog_text: String (para1 and para2),
// time_stamp : Date ( kr lega tu ),

// ye data nikalne ke liye simple bas in cheezo ka use krna hai
// import { AuthContext } from "../context/AuthContext"; -> pehle import kr liyo
// const { currentUser } = useContext(AuthContext); -> ise component and andar declare krio
//   console.log(currentUser.displayName); ->is tarah se property access kr payega fir tu , ye displayname bataeha logged in user ki
// userdata :{
// userid: String (),
// username : String,
// photo_URL : String,
// email: String