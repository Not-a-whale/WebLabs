<template>
  <main class="main">
    <h4>Ми гарантуємо нашим випускникам працевлаштування</h4>
    <h2>В не залежності від віку</h2>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 d d-none d-lg-block main__left">
          <img src="../assets/img/girl_2.png" alt="girl image">
        </div>
        <div class="col-lg-10 col-sm-12 col-md-12 main__right my-2 px-4">
          <div class="main__block">
            <h3><span></span>Навіть у зрілому віці</h3>
            <p>
              В Україні поширений міф про те, що програмування – це справа молодих людей. Це не так. Навіть у зрілому віці
              ви можете навчитися програмувати. Індійський вчений Сати Шахарі здобув своє перше досвід програмування в 80 роках.
            </p>
          </div>
          <div class="main__block">
            <h3><span></span>Навіть без знання англійської</h3>
            <p>
              Адже в нашому курсі включено вивчення англійської мови. Ви зможете вивчати англійську мову разом з програмуванням.
            </p>
          </div>
          <div class="main__block">
            <h3><span></span>Навіть без профільної освіти та навичок</h3>
            <p>
              70% вже мають професію, але вони хочуть змінити своє життя. Вони хочуть змінити свою професію, або просто
              підвищити свої заробітні платні. Інші 30% – це студенти, які хочуть зробити своє життя кращим.
            </p>
          </div>
          <div class="main__block">
            <h3><span></span>Навіть без знань програмування</h3>
            <p>
              Більшість наших студентів не мають жодних знань програмування та починають з нуля.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <section class="description">
    <h4>Курс програмування</h4>
    <h2>Java з працевлаштуванням</h2>
    <p class="description__banner d-none d-md-block">JAVA</p>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6 description__left d-none d-lg-block">
          <img src="../assets/img/girl_1.png" alt="girl 1">
        </div>
        <div class="col-lg-6 description__right">
          <div class="description__block">
            <h3><span></span>Стажування в IT-компанії</h3>
            <p>
              Покажи себе на курсі і ще до закінчення навчання отримай пропозицію про стажування в IT-компанії.
            </p>
          </div>
          <div class="description__block">
            <h3><span></span>Три випускних проекти</h3>
            <p>
              Наприкінці курсу ти зможеш показати свої знання на трьох реальних проектах.
            </p>
          </div>
          <div class="description__block">
            <h3><span></span>Інтенсивність</h3>
            <p>
              На відміну від інших курсів, наші студенти навчаються 6 днів на тиждень, а не 2.
              Саме тому вони здобувають навички швидше та легко знаходять роботу.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import {defineComponent} from "vue";
import Carousel from "@/components/Carousel/Carousel.vue";

export default defineComponent({
  name: 'Main',
  components: {
    Carousel
  },
  mounted() {
  }
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/variables.scss';
  h4 {
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 10px 0 10px;
      margin-top: 0;
    }
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    margin-top: .2rem;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 1.3rem;
      padding: 10px;
      margin-top: 0.5rem;
    }
  }
  .main {
    background-color: $main-black;
    padding: 0;
    width: 100%;
    overflow: hidden;

    h4 {
      color: $main-white;

      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 30px 0 10px 0;
      }
    }

    h2 {
      color: $main-blue;
    }

    &__left {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .filler {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 50px;
        z-index: 2;
        background-color: $main-black;
      }

      img {
        top: -15%;
        left: -15px;
        position: absolute;
        object-fit: contain;

        @media screen and (max-width: 1444px) {
          top: 0%;
          width: 125%;
        }
      }
    }

    &__right {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
      padding: 20px 40px 40px 70px !important;

      @media screen and (max-width: 1444px) {
        display: flex;
        flex-direction: column;
        padding: 50px 50px 50px 100px !important;
      }

      @media screen and (max-width: 992px) {
        padding: 0 40px 20px 40px !important;
      }
      h3 {
        text-align: left;
        color: $heading-orange;
      }
     p {
       text-align: left;
       color: $main-white;
     }
    }

    &__block {
      h3 {
        position: relative;
        span {
          position: absolute;
          display: block;
          top: 0;
          left: -30px;
          width: 20px;
          height: 20px;
          background-color: #3c3c3c;
          border-radius: 50%;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 20px;
            border-right: 3px solid #6cbc34;
            border-bottom: 3px solid #6cbc34;
            transform: rotate(40deg) translate(-125%, -50%);
          }
        }
      }
    }
  }

  .description {
    position: relative;
    z-index: 2;
    margin-top: 1rem;

    &__banner {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 10rem;
      font-weight: 900;
      z-index: -1;
      color: $secondary-blue;

      @media screen and (max-width: 1444px) {
        font-size: 8rem;
      }
    }

    h4 {
      color: orange;
    }

    h2 {
      color: $main-black;
    }

    &__left {
      display: flex;
      align-items: center;
      justify-content: left;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 10%;
        left: 0;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        z-index: -2;
        background-color: transparent;
        border: 25px solid $secondary-blue;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 17.5%;
        left: 7%;
        width: 60%;
        height: 60%;
        border-radius: 50%;
        z-index: -2;
        background-color: $secondary-blue;
        border: 25px solid $secondary-blue;
      }

      img {
        width: 80%;
        object-fit: cover;
      }
    }

    &__right {
      display: flex;
      flex-direction: column;
      margin-top: 4rem;


      @media screen and (max-width: 1444px) {
        margin-top: 2rem;
        padding: 0 40px !important;
      }
    }

    &__block {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      h3 {
        text-align: left;
        margin-bottom: 1rem;
        font-weight: bold;
        position: relative;

        span {
          display: block;
          width: 15px;
          height: 15px;
          background-color: $main-black;
          border-radius: 50%;
          position: absolute;
          top: 8px;
          left: -30px;

          &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background-color: orange;
            transform: translate(-50%, -50%);
          }
        }
      }

      p {
        text-align: left;
        font-weight: 300;
      }
    }
  }
</style>

