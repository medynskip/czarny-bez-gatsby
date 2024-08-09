import React from "react";

import Band from "../components/Band/Band";
import Concerts from "../components/Concerts";
import Hero from "../components/Hero";
import Layout from "../components/Layout";  
import Merch from "../components/Merch/Merch";
import SeoWrap from "../components/SeoWrap";
import VideosModule from "../components/VideosModule";

import * as  styles from "./index.module.scss";

const IndexPage = () => {
  return (
    <Layout pageTitle="Czarny Bez - strona główna">
      <Hero />
      <div className={styles.content}>
        <div id="bio">
          <p className={styles.welcomeText}>
            Przyszłość i przeszłość jest tu i teraz.
          </p>
          <p className={styles.welcomeText}>
            "… planetę okaleczyły kataklizmy o nieznanych wcześniej rozmiarach.
            Wypracowane modele społeczne, wartości przestały istnieć. Organizmy
            państwowe uległy destrukcji. Cywilizacja jaką znamy upadła.
            Nastąpiła era chaosu … Na wschodzie Europy, której obszar jeszcze
            nie ostygł pamiętając katastrofalny w skutkach konflikt
            międzynarodowy, krwawą wojnę religijną, śmiertelną zarazę i upadek
            człowieczeństwa tworzą się nowe formy ludzkich skupisk. Nasz rodzaj
            przetrwał a planeta się odradza. Potrzeba bezpieczeństwa i tęsknota
            za stabilizacją prowadzi nową społeczność do rzeczywistości, w
            której jak w zwierciadle odbijają się echa pradawnych tradycji i
            zwyczajów. Przestrzeni, gdzie namacalnie znów czują siłę potężnych
            starożytnych bogów. Do czasów burzliwych wieców i plemiennych
            rodowych władców. Świętych lasów i odwiecznych gór. Do
            cybernetycznej epoki żelaza ale też powrotu więzi międzyludzkich i
            bliskości z naturą. Życie w równowadze z przyrodą to jedyna szansa,
            żeby zacząć od nowa. Czas zatoczył krąg … to wtedy na gruzach
            cywilizacji u zarania nowej odmienionej ludzkości zrodził się Czarny
            Bez."
          </p>
          <p className={styles.welcomeText}>
            „Zapraszamy w muzyczną podróż do naszych korzeni, do historii często
            nieznanej, zapomnianej, do refleksji nad współczesnym światem i
            opowieści o prasłowiańskim duchu, waleczności i odwadze”.
          </p>
        </div>
      
        <Band />
        <VideosModule />
        <Concerts />
        <Merch />
      </div>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <SeoWrap title="Czarny Bez" />;

export default IndexPage;
