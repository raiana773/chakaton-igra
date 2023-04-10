// import React from "react";
// // import add from "./image/add.jpg";
// import Stack from "@mui/material/Stack";
// import IconButton from "@mui/material/IconButton";
// import Fingerprint from "@mui/icons-material/Fingerprint";
// import { Link } from "react-router-dom";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import { FormControl } from "@mui/material";
// // import Timeline from "@mui/lab/Timeline";
// // import TimelineItem from "@mui/lab/TimelineItem";
// // import TimelineSeparator from "@mui/lab/TimelineSeparator";
// // import TimelineConnector from "@mui/lab/TimelineConnector";
// // import TimelineContent from "@mui/lab/TimelineContent";
// // import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// // import TimelineDot from "@mui/lab/TimelineDot";
// // import FastfoodIcon from "@mui/icons-material/Fastfood";
// // import LaptopMacIcon from "@mui/icons-material/LaptopMac";
// // import HotelIcon from "@mui/icons-material/Hotel";
// // import RepeatIcon from "@mui/icons-material/Repeat";
// // import Typography from "@mui/material/Typography";

// function HommePage() {
//   return (
//     <div
//       style={{
//         // background: `url(${add})`,
//         height: "100vh",
//         width: "100%",
//         maxWidth: "1280px",
//         objectFit: "cover",
//         backgroundSize: "cover",
//       }}
//     >
//       {/* img - Главный фон */}
//       <Carousel fade>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://insider-gaming.com/wp-content/uploads/2023/02/SuicideSquadFeatured.jpg"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         {/* <Stack direction="row" spacing={1}>
//           <IconButton
//             LinkComponent={Link}
//             to="/list"
//             aria-label="fingerprint"
//             color="secondary"
//           >
//             <Fingerprint />
//           </IconButton>
//           <IconButton
//             LinkComponent={Link}
//             to="/add"
//             aria-label="fingerprint"
//             color="success"
//           >
//             <Fingerprint />
//           </IconButton>
//         </Stack> */}

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://oboi-download.ru/files/wallpapers/980/27043.jpg"
//             alt="Second slide"
//           />

//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://mobimg.b-cdn.net/v3/fetch/10/10c396ccbafbe2a5f498d87e9eacfffe.jpeg"
//             alt="Third slide"
//           />

//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       {/* <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src="https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-19b42864f188.jpg"
//           alt="Four slide"
//         />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item> */}

//       {/*  */}
//       <FormControl>
//         <Timeline position="alternate">
//           <TimelineItem>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               align="right"
//               variant="body2"
//               color="text.secondary"
//             >
//               9:30 am
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot>
//                 <FastfoodIcon />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span">
//                 Eat
//               </Typography>
//               <Typography>Because you need strength</Typography>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineOppositeContent
//               sx={{ m: "auto 0" }}
//               variant="body2"
//               color="text.secondary"
//             >
//               10:00 am
//             </TimelineOppositeContent>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot color="primary">
//                 <LaptopMacIcon />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span">
//                 Code
//               </Typography>
//               <Typography>Because it&apos;s awesome!</Typography>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineSeparator>
//               <TimelineConnector />
//               <TimelineDot color="primary" variant="outlined">
//                 <HotelIcon />
//               </TimelineDot>
//               <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span">
//                 Sleep
//               </Typography>
//               <Typography>Because you need rest</Typography>
//             </TimelineContent>
//           </TimelineItem>
//           <TimelineItem>
//             <TimelineSeparator>
//               <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
//               <TimelineDot color="secondary">
//                 <RepeatIcon />
//               </TimelineDot>
//               <TimelineConnector />
//             </TimelineSeparator>
//             <TimelineContent sx={{ py: "12px", px: 2 }}>
//               <Typography variant="h6" component="span">
//                 Repeat
//               </Typography>
//               <Typography>Because this is the life you love!</Typography>
//             </TimelineContent>
//           </TimelineItem>
//         </Timeline>
//       </FormControl>
//     </div>
//   );
// }

// export default HommePage;
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

const HommePage = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-19b42864f188.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://insider-gaming.com/wp-content/uploads/2023/02/SuicideSquadFeatured.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mobimg.b-cdn.net/v3/fetch/10/10c396ccbafbe2a5f498d87e9eacfffe.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default HommePage;
