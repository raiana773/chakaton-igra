// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import React from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
// import TimelineDot from "@mui/lab/TimelineDot";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import HotelIcon from "@mui/icons-material/Hotel";
// import RepeatIcon from "@mui/icons-material/Repeat";
// import Typography from "@mui/material/Typography";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import { Box, Container } from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import Rating from "@mui/material/Rating";
// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/";

// // игровые картинки
// const itemData = [
//   {
//     img: "https://i.ytimg.com/vi/zk03t6ih2Dk/maxresdefault.jpg",
//     title: "Bed",
//   },

//   {
//     img: "https://i.pinimg.com/474x/cd/76/b7/cd76b7148ec9b063a8a7fe79b7170b21.jpg",
//     title: "Kitchen",
//   },
//   {
//     img: "http://s01.riotpixels.net/data/08/fa/08fa1270-940d-4e8b-853c-4ead6c8da5f4.jpg/artwork.grand-theft-auto-4.668x900.2008-12-19.457.jpg",
//     title: "Sink",
//   },
//   {
//     img: "https://i.pinimg.com/474x/93/00/f1/9300f1da41663916922a335f42db50e3.jpg",
//     title: "Лего",
//   },
//   {
//     img: "https://i.pinimg.com/474x/b6/e9/c4/b6e9c4e135fd50dd2e4af4575207f217.jpg",
//     title: "Наруто",
//   },
//   {
//     img: "https://i.pinimg.com/474x/a7/c3/71/a7c37101addb9c3f951e15ef8ce86861.jpg",
//     title: "Dota 2",
//   },
//   {
//     img: "https://i.pinimg.com/474x/8d/78/65/8d78654b34fda07ceff1e4a0580ec186.jpg",
//     title: "Forza Horizon 5",
//   },
//   {
//     img: "https://i.pinimg.com/474x/3a/8b/fb/3a8bfb01a136540cd1761ef92fc27e57.jpg",
//     title: "Fox Legends",
//   },
//   {
//     img: "https://i.pinimg.com/474x/dc/e3/28/dce328bdeabe4dfebe6d12566f54601d.jpg",
//     title: "Plants vs. Zombies",
//   },
//   {
//     img: "https://i.pinimg.com/474x/be/26/19/be2619dde8b130c55775dbf1fb0b92cb.jpg",
//     title: "Yakuza: Like a Dragon",
//   },
//   {
//     img: "https://i.pinimg.com/474x/12/cf/2b/12cf2bc6a88676cf297e8345663152ed.jpg",
//     title: "The Last of Us Part II",
//   },
//   {
//     img: "https://i.pinimg.com/474x/f7/5b/2e/f75b2e06d952061e98c163ffa887f1aa.jpg",
//     title: "Hi-Fi Rush",
//   },
// ];

const HommePage = () => {
  //   // отзыв
  //   const [value, setValue] = React.useState(2);
  //   return (
  //     <div>
  //       <Carousel fade>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="https://cdn2.unrealengine.com/social-image-battlepass-3840x2160-19b42864f188.jpg"
  //             alt="First slide"
  //           />
  //           <Carousel.Caption>
  //             <h2>ИГРЫ</h2>
  //             <h3>Самые лучшие игры только на нашем сайте</h3>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="https://insider-gaming.com/wp-content/uploads/2023/02/SuicideSquadFeatured.jpg"
  //             alt="Second slide"
  //           />
  //           <Carousel.Caption>
  //             <h2>Ваау</h2>
  //             <h3>Ты все еще здесь, молодец играй с нами</h3>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="https://mobimg.b-cdn.net/v3/fetch/10/10c396ccbafbe2a5f498d87e9eacfffe.jpeg"
  //             alt="Third slide"
  //           />
  //           <Carousel.Caption>
  //             <h2>Все ты попал</h2>
  //             <h3>Один раз зашел и все ты уже покойник</h3>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //       </Carousel>
  //       {/* <Footer />s */}
  //       <Container>
  //         <Box>
  //           <h3 className="footer_list">Компьютерные игры для мейнфреймов</h3>
  //           <p>
  //             В течение 1960-1970-х годов в университетской и научной среде США
  //             продолжали создаваться различные игры — как учебные программы, как
  //             упражнения в программировании и просто для развлечения студентов. Их
  //             количество и сложность росли по мере того, как компьютеры
  //             (мейнфреймы) становились всё более доступными, с развитием языков
  //             программирования и появлением первых компьютерных сетей (ARPAnet),
  //             позволявших пользователям взаимодействовать друг с другом и делиться
  //             программами. Система электронного обучения PLATO, особенно с
  //             запущенного в 1972 году поколения PLATO IV, стала особенно удобной
  //             для подобных проектов — на ней появились собственные версии
  //             Spacewar! и шахмат, многопользовательские стратегические 4X-игры
  //             наподобие Empire и Star Trek (1972); адаптации настольных ролевых
  //             игр типа Dungeons & Dragons — dnd (1974) и pedit5[en] (1975). Oregon
  //             Trail (1971), написанная для мейнфрейма HP 2100, предвосхитила
  //             симуляторы выживания; Maze War (1973) и Spasim (1974) стали первыми
  //             трёхмерными компьютерными играми. Текстовая игра Colossal Cave
  //             Adventure (1975) для мейнфрейма PDP-10, совмещавшая в себе симулятор
  //             спелеолога и элементы фэнтези в духе Dungeons & Dragons, открыла
  //             дорогу для квестов и interactive fiction. Если первые компьютерные
  //             ролевые игры, как dnd и pedit5, были относительно примитивными, их
  //             наследники становились всё сложнее — игры наподобие Moria (1975),
  //             Oubliette (1977) и Avatar (1979) использовали уже вид от первого
  //             лица, сложные многоуровневые подземелья и множество параметров для
  //             настройки персонажей
  //           </p>
  //         </Box>
  //         <Box>
  //           <h3 className="footer_list">Игровые приставки</h3>
  //           <p>
  //             В 1966 году американский инженер Ральф Бер, работавший в компании
  //             Sanders Associates — подрядчике Министерства обороны США — по
  //             собственной инициативе начал работу над проектом телевизионного
  //             устройства для игр, которое он называл Channel LP (с англ. — «let's
  //             play», «давай поиграем»). Хотя первые попытки Sanders Associates
  //             найти партнёра среди крупных производителей телевизоров, остались
  //             неудачными, в 1971 году Бер и его сотрудники сумели заключить
  //             контракт с компаний Magnavox; прототип устройства, в то время
  //             известный как Brown Box, был превращён в коммерческий продукт —
  //             первую домашнюю игровую приставку Magnavox Odyssey. Magnavox Odyssey
  //             была впервые представлена публике 24 мая 1972 года и выпущена на
  //             американский рынок в августе 1972 года; приставка содержала в себе
  //             13 игр, в том числе симуляторы футбола и тенниса, и продавалась
  //             вместе с различными аксессуарами для них, в том числе бумажными
  //             деньгами и накладками на экран. Несмотря на высокую стоимость, она
  //             завоевала огромную популярность — к 1975 году было продано больше
  //             350 тысяч устройств.
  //           </p>
  //         </Box>
  //         <Box>
  //           <h3 className="footer_list">Аркадные автоматы</h3>
  //           <p>
  //             Exidy выпускает аркадный автомат Death Race. Это первая игра
  //             получившая широкое осуждение общественности за высокий уровень
  //             насилия в игре, вызвавший массовые протесты и широкое освещение в
  //             СМИ, что в результате привело к быстрому завершению продаж данного
  //             автомата. В апреле Atari выпускает новый аркадный автомат Breakout —
  //             развитие классического Pong. Игра стала основоположником жанра
  //             Breakout-аркад. Концепция игры была разработана Ноланом Бушнелем
  //             (Nolan Bushnell) и Стивом Бристоу (Steve Bristow). Первая
  //             техническая реализация была выполнена Стивом Джобсом и Стивом
  //             Возняком. Несмотря на более сложный алгоритм, Breakout всё ещё
  //             строится на TTL-элементах и не содержит микропроцессора. Компания
  //             Atari весьма успешна в сфере развлечений, но продажи приставок Pong
  //             сокращаются и в компании понимают что весьма затратный проект Stella
  //             без дополнительных финансовых вливаний может погубить компанию. В
  //             октябре Warner Communications покупает компанию Atari за 28
  //             миллионов долларов и фактически спонсирует продолжение разработки
  //             проекта Stella.
  //           </p>
  //         </Box>
  //       </Container>
  //       <Box sx={{ display: "flex", justifyContent: "center" }}>
  //         <ImageList
  //           sx={{
  //             width: 500,
  //             height: 450,
  //           }}
  //           variant="woven"
  //           cols={3}
  //           gap={8}
  //         >
  //           {itemData.map((item) => (
  //             <ImageListItem key={item.img}>
  //               <img
  //                 src={`${item.img}?w=161&fit=crop&auto=format`}
  //                 srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
  //                 alt={item.title}
  //                 loading="lazy"
  //               />
  //             </ImageListItem>
  //           ))}
  //         </ImageList>
  //       </Box>
  //       <Timeline position="alternate">
  //         <h4
  //           style={{
  //             display: "flex",
  //             justifyContent: "center",
  //             marginTop: "10%",
  //           }}
  //         >
  //           Наши советы
  //         </h4>
  //         <TimelineItem>
  //           <TimelineOppositeContent
  //             sx={{ m: "auto 0" }}
  //             align="right"
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             9:30
  //           </TimelineOppositeContent>
  //           <TimelineSeparator>
  //             <TimelineConnector />
  //             <TimelineDot>
  //               <FastfoodIcon />
  //             </TimelineDot>
  //             <TimelineConnector />
  //           </TimelineSeparator>
  //           <TimelineContent sx={{ py: "12px", px: 2 }}>
  //             <Typography variant="h6" component="span">
  //               Есть
  //             </Typography>
  //             <Typography>Потому что вам нужна сила</Typography>
  //           </TimelineContent>
  //         </TimelineItem>
  //         <TimelineItem>
  //           <TimelineOppositeContent
  //             sx={{ m: "auto 0" }}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             11:30
  //           </TimelineOppositeContent>
  //           <TimelineSeparator>
  //             <TimelineConnector />
  //             <TimelineDot color="primary">
  //               <SportsEsportsIcon />
  //               {/* <LaptopMacIcon /> */}
  //             </TimelineDot>
  //             <TimelineConnector />
  //           </TimelineSeparator>
  //           <TimelineContent sx={{ py: "12px", px: 2 }}>
  //             <Typography variant="h6" component="span">
  //               Игры
  //             </Typography>
  //             <Typography>Потому что это здорово !</Typography>
  //           </TimelineContent>
  //         </TimelineItem>
  //         <TimelineItem>
  //           <TimelineSeparator>
  //             <TimelineConnector />
  //             <TimelineDot color="primary" variant="outlined">
  //               <HotelIcon />
  //             </TimelineDot>
  //             <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
  //           </TimelineSeparator>
  //           <TimelineContent sx={{ py: "12px", px: 2 }}>
  //             <Typography variant="h6" component="span">
  //               Спать
  //             </Typography>
  //             <Typography>Потому что тебе нужен отдых</Typography>
  //           </TimelineContent>
  //         </TimelineItem>
  //         <TimelineItem>
  //           <TimelineSeparator>
  //             <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
  //             <TimelineDot color="secondary">
  //               <RepeatIcon />
  //             </TimelineDot>
  //             <TimelineConnector />
  //           </TimelineSeparator>
  //           <TimelineContent sx={{ py: "12px", px: 2 }}>
  //             <Typography variant="h6" component="span">
  //               Повторить
  //             </Typography>
  //             <Typography>Потому что это жихнь которую ты любишь !</Typography>
  //           </TimelineContent>
  //         </TimelineItem>
  //       </Timeline>
  //       <footer>
  //         <div className="containerLS">
  //           <Container>
  //             <div className="navbar">
  //               <Box>
  //                 <ul className="navigation">
  //                   <li className="of_games" style={{ marginLeft: "40px" }}>
  //                     <p>
  //                       <a href="#">История игры</a>
  //                     </p>
  //                     <p>
  //                       <a href="#">Компьютерные игры для мейнфреймов</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Игровые приставки</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Аркадные автоматы</a>
  //                     </p>
  //                   </li>
  //                   <li className="of_games">
  //                     <p>
  //                       <a href="#">Виды игр</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Стрелялки</a>
  //                     </p>
  //                     <p>
  //                       <a href="">MMORPG.</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Квесты</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Симуляторы</a>
  //                     </p>
  //                     <p>
  //                       <a href="">Файтинги ...</a>
  //                     </p>
  //                   </li>
  //                 </ul>
  //               </Box>
  //               <span className="site-data">
  //                 © 2023 My Website
  //                 <div className="fisrt">
  //                   <Box>
  //                     <h4>
  //                       Online Store <CatchingPokemonIcon />
  //                     </h4>
  //                   </Box>
  //                 </div>
  //                 <Box
  //                   sx={{
  //                     "& > legend": { mt: 2 },
  //                   }}
  //                 >
  //                   <Typography component="legend">Controlled</Typography>
  //                   <Rating
  //                     name="simple-controlled"
  //                     value={value}
  //                     onChange={(event, newValue) => {
  //                       setValue(newValue);
  //                     }}
  //                   />
  //                 </Box>
  //               </span>
  //             </div>
  //           </Container>
  //         </div>
  //       </footer>
  //     </div>
  //   );

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Wep Designer", "ui/ux decrcnirenv"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aline-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm webdecoded`}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              ipsam, possimus quo accusamus minus a architecto quae delectus
              temporibus pariatur laborum cupiditate voluptatum maiores aut
              illum reprehenderit, molestiae quasi laudantium?
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Headder Img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HommePage;
