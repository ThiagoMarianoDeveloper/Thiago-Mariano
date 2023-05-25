/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/esse2.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Marketing Digital",
    description:
      "Marketing digital são ações de comunicação que as empresas podem utilizar por meio da internet, da telefonia celular e outros meios digitais, para assim divulgar e comercializar seus produtos ou serviços, conquistando novos clientes e melhorando a sua rede de relacionamentos.",
    url: "https://github.com/ThiagoMarianoDeveloper",
  },
  {
    title: "Desenvolvimento Web",
    description:
      "O desenvolvimento web inclui criação, codificação e programação de sites e seus respectivos elementos e linguagens. Ele também envolve integração com sistemas e ferramentas, armazenamento de banco de dados, cibersegurança, entre outros, com o objetivo de estruturar cada detalhe de uma página da internet.",
    url: "https://github.com/ThiagoMarianoDeveloper",
  },
  {
    title: "Tecnologia",
    description:
      "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.",
    url: "https://github.com/ThiagoMarianoDeveloper",
  },
  {
    title: "Tecnólogo em Sistemas para Internet",
    description:
      "O tecnólogo em Sistemas para Internet desenvolve e implanta sistemas informatizados, dimensionando requisitos e funcionalidades, especificando sua arquitetura, escolhendo ferramentas de desenvolvimento e programas e codificando aplicativos.",
    url: "https://github.com/ThiagoMarianoDeveloper",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
