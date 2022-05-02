import { Fragment } from "react";
import "./About.css"

function About() {
  return (
    <Fragment>
      <div className="header"> Notre mission</div>
      <p className="about_us">
        Nous sommes une organisation associative indépendante. Sous l'égide de
        la Croix-Rouge tunisienne, elle fait partie du Mouvement et du
        Croissant-Rouge. Notre mission s'articule autour de trois axes, à savoir
        défendre les intérêts des personnes vulnérables, être proactif dans la
        gestion des urgences, favoriser l'autonomie et l'organisation de
        l'approvisionnement en sang, et prendre soin des personnes vulnérables.
        Dans toutes nos activités, nous comptons beaucoup sur le dévouement des
        bénévoles.
      </p>
      <div className="header"> Promouvoir l'autonomie</div>
      <p className="about_us">
        Nous pensons qu'il est important que les gens puissent s'entraider en
        cas d'urgence, que cela se produise, par exemple, à la maison, au
        travail, à l'école, dans leur club de jeunesse ou dans leur club de
        sport. Notre objectif est d'enseigner les premiers secours au plus grand
        nombre, en Tunisie. À ce titre, nous aidons à élaborer des directives de
        premiers secours et à compiler les supports de formation qui les
        accompagnent.
      </p>
      <div className="header"> Fournir une assistance en cas d'urgence</div>
      <p className="about_us">
        Notre objectif est d'offrir l'assistance la plus efficace possible en
        cas d'urgence. Pour cela, nous veillons au déploiement rapide de nos
        sections locales de la Croix-Rouge ou travaillons en étroite
        collaboration avec d'autres services de secours . Nous nous assurons
        également de pouvoir fournir une assistance pour les urgences à long
        terme et développons constamment notre expertise en matière de secours
        d'urgence.
      </p>
      <div className="header"> Prendre soin des personnes vulnérables</div>
      <p className="about_us">
        D'innombrables bénévoles de la Croix-Rouge travaillent sans relâche pour
        aider les personnes vulnérables dans leurs collectivités. Une grande
        partie du travail que nous effectuons, dans les coulisses, fait toute la
        différence pour les milliers de personnes qui comptent sur nous pour
        obtenir de l'aide.  
      </p>
    </Fragment>
  );
}

export default About;
