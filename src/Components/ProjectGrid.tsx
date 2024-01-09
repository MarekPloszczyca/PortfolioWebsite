import Project from "./Project";
import styles from "./ProjectGrid.module.scss";
import ShopOne from "../Assets/WebsitesScreenshots/Shop1.jpg";
import ShopTwo from "../Assets/WebsitesScreenshots/Shop2.jpg";
import ShopThree from "../Assets/WebsitesScreenshots/Shop3.jpg";
import ConnectOne from "../Assets/WebsitesScreenshots/ConnectFour1.jpg";
import ConnectTwo from "../Assets/WebsitesScreenshots/ConnectFour2.jpg";
import ConnectThree from "../Assets/WebsitesScreenshots/ConnectFour3.jpg";
import MTGOne from "../Assets/WebsitesScreenshots/MTGDatabase1.jpg";
import MTGTwo from "../Assets/WebsitesScreenshots/MTGDatabase2.jpg";
import MTGThree from "../Assets/WebsitesScreenshots/MTGDatabase3.jpg";
import ZimkaOne from "../Assets/WebsitesScreenshots/Zimka1.jpg";
import ZimkaTwo from "../Assets/WebsitesScreenshots/Zimka2.jpg";
import ZimkaThree from "../Assets/WebsitesScreenshots/Zimka3.jpg";
interface Props {
  projectsFirstDisplay: boolean;
  projectsSecondDisplay: boolean;
}

const projects = {
  zimka: {
    title: "Maciej Zimka Website",
    description:
      "The website was created in cooperation with an accordionist who performs successfully not only in Poland, but also throughout Europe. This is an extensive artist's business card, consisting of several subpages where we can learn more about the musician, his work and future concerts. The user can also listen to selected artist's music on a popular streaming platform and purchase available CDs. (Due to waiting for access to the rest of the materials and links, some of the functions available on the website (e.g. changing the language) are not yet active, work on the website is still in progress).",
    screenshots: [ZimkaOne, ZimkaTwo, ZimkaThree],
    codeHref: "https://github.com/MarekPloszczyca/maciej-zimka",
    liveHref: "https://maciej-zimka.netlify.app",
  },
  mtg: {
    title: "Magic: The Gathering Database",
    description:
      "As the name suggests, this website is intended for searching and viewing cards of the world's popular card game \"Magic: The Gathering\". The user can narrow the search using both several available filters and a field that allows you to search for a card after entering its name. Through the application and using the API, we have access to several dozen thousand official cards issued by the game's creators.",
    screenshots: [MTGOne, MTGTwo, MTGThree],
    codeHref:
      "https://github.com/MarekPloszczyca/MagicTheGatheringCardDatabase",
    liveHref: "https://mtgdatabase.netlify.app/",
  },
  connectFour: {
    title: "Connect Four",
    description:
      '"Connect Four" is a game for two people that involves filling empty spaces on the board using two-colored tokens. Players move alternately, and each move is limited to a maximum of 30 seconds. The winner is the first person to arrange four tokens of the same color horizontally, vertically or diagonally. The application was created to be played by two people, but the user can choose to play against the computer, in which a simple algorithm imitates the opponent\'s movement.',
    screenshots: [ConnectOne, ConnectTwo, ConnectThree],
    codeHref: "https://github.com/MarekPloszczyca/ConnectFourGame",
    liveHref: "https://four-connect-game.netlify.app",
  },
  shop: {
    title: "Product.",
    description:
      'This website is a e-commerce shop, where user can order products. "Product." website allows user to search for items through different categories and sort them using filters. Products can be added to cart as in the real shop and might be ordered only after form is completed correctly. All items are available thanks to "Fake Store API".',
    screenshots: [ShopOne, ShopTwo, ShopThree],
    codeHref: "https://github.com/MarekPloszczyca/E-commerce-shop",
    liveHref: "https://product-e-commerce.netlify.app",
  },
};

export default function ProjectGrid(props: Props) {
  return (
    <div className={styles.projectGrid}>
      <Project
        title={projects.shop.title}
        description={projects.shop.description}
        screenshots={projects.shop.screenshots}
        style={
          props.projectsFirstDisplay ? styles.firstDisplayed : styles.leftOne
        }
        codeHref={projects.shop.codeHref}
        liveHref={projects.shop.liveHref}
      />
      <Project
        title={projects.zimka.title}
        description={projects.zimka.description}
        screenshots={projects.zimka.screenshots}
        style={
          props.projectsFirstDisplay ? styles.secondDisplayed : styles.rightOne
        }
        codeHref={projects.zimka.codeHref}
        liveHref={projects.zimka.liveHref}
      />
      <Project
        title={projects.mtg.title}
        description={projects.mtg.description}
        screenshots={projects.mtg.screenshots}
        style={props.projectsSecondDisplay ? styles.leftTwo : undefined}
        codeHref={projects.mtg.codeHref}
        liveHref={projects.mtg.liveHref}
      />
      <Project
        title={projects.connectFour.title}
        description={projects.connectFour.description}
        screenshots={projects.connectFour.screenshots}
        style={props.projectsSecondDisplay ? styles.rightTwo : undefined}
        codeHref={projects.connectFour.codeHref}
        liveHref={projects.connectFour.liveHref}
      />
    </div>
  );
}
