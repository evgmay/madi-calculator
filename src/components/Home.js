import React from "react";
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <>
      <div className="bg-1">
        <Fade className="text-center" delay={500} direction="up">
          <p className="display-1 text-light">Привет!</p>
        </Fade>
      </div>
      <div className="bg-2">
        <Fade className="text-center" delay={500} direction="up">
          <p className="display-1 text-light">Я калькулятор калорий</p>
        </Fade>
      </div>
      <div className="bg-3">
        <Fade className="text-center" delay={500} direction="up">
          <p className="display-1 text-light">С моей помощью ты можешь проверить свое физическое состояние</p>
        </Fade>
      </div>
      <div className="bg-4">
        <Fade className="text-center" delay={500} direction="up">
          <p className="display-1 text-light">Переходи к приложению или посети другие страницы нашего сайта</p>
        </Fade>
      </div>
      <div className="bg-5">
        <Fade className="text-center" delay={500} direction="up">
          <p className="display-1 text-light">Ты прокрутил до конца!</p>
        </Fade>
      </div>
    </>
  );
}

export default Home;
