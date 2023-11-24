import Project from "./Project";
import styles from "./ProjectGrid.module.scss";
import PassGenOne from "../Assets/WebsitesScreenshots/PassGen1.jpg";
import PassGenTwo from "../Assets/WebsitesScreenshots/PassGen2.jpg";
import PassGenThree from "../Assets/WebsitesScreenshots/PassGen3.jpg";
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
    description: "",
    screenshots: [ZimkaOne, ZimkaTwo, ZimkaThree],
  },
  mtg: {
    title: "Magic: The Gathering Database",
    description: "Jak sama nazwa wskazuje, strona ta przeznaczona jest do wyszukiwania oraz przeglądania kart popularnej na całym świecie gry karcianej \"Magic: The Gathering\". Użytkownik może zawęzić wyszukiwanie używając zarówno kilku dostępnych filtrów jak i pola, które umożliwia wyszukanie karty po wpisaniu jej nazwy. Za pośrednictwem aplikacji oraz z wykorzystaniem API mamy dostęp do kilkudziesięciu tysięcy oficjalnych kart wydanych przez twórców gry.",
    screenshots: [MTGOne, MTGTwo, MTGThree],
  },
  connectFour: {
    title: "Connect Four",
    description: "\"Connect Four\" jest grą dla dwóch osób polegającą na zapełnianiu pustych miejsc planszy używając żetonów we dwóch kolorach. Gracze poruszają się naprzemiennie, a na każdy ruch przewidziane jest maksymalnie 30 sekund. Wygrywa osoba, której jako pierwszej uda się ułożyć cztery żetony tego samego koloru poziomo, pionowo bądź na ukos. Aplikacja stworzona została z myślą gry dla dwóch osób, ale użytkownik może wybrać opcję gry przeciwko komputerowi, w której prosty algorytm imituje ruch przeciwnika.",
    screenshots: [ConnectOne, ConnectTwo, ConnectThree],
  },
  passwordGenerator: {
    title: "Password Generator",
    description:
      "Jest to jeden z pierwszych projektów, które zdecydowałem się zbudować, aby uporządkować wiedzę związana z podstawami oraz najważniejszymi pojęciami dotyczącymi programowania. Aplikacja pozwala na wygenerowanie unikatowego hasła składającego się liter, cyfr lub innych znaków, zależnie od dokonanego przez użytkownika wyboru.",
    screenshots: [PassGenOne, PassGenTwo, PassGenThree],
  },
};

export default function ProjectGrid(props: Props) {
  return (
    <div className={styles.projectGrid}>
      <Project
        title={projects.zimka.title}
        description={projects.zimka.description}
        screenshots={projects.zimka.screenshots}
        style={
          props.projectsFirstDisplay ? styles.firstDisplayed : styles.leftOne
        }
      />
      <Project
        title={projects.mtg.title}
        description={projects.mtg.description}
        screenshots={projects.mtg.screenshots}
        style={
          props.projectsFirstDisplay ? styles.secondDisplayed : styles.rightOne
        }
      />
      <Project
        title={projects.connectFour.title}
        description={projects.connectFour.description}
        screenshots={projects.connectFour.screenshots}
        style={props.projectsSecondDisplay ? styles.leftTwo : undefined}
      />
      <Project
        title={projects.passwordGenerator.title}
        description={projects.passwordGenerator.description}
        screenshots={projects.passwordGenerator.screenshots}
        style={props.projectsSecondDisplay ? styles.rightTwo : undefined}
      />
    </div>
  );
}
