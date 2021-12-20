import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr;
  height: 100vh;
`

export const HeaderContainer = styled.section`
  display: flex;
  color: #fff;

  background: url('img/pattern-bg.png') no-repeat center;
  background-size: cover;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 3rem 0;
  }

  form {
    display: flex;
    margin-bottom: -3rem;
    input {
      padding: 1.3rem;
      font-size: 1.3rem;
      width: 35rem;
      border: none;
      border-radius: 1rem 0 0 1rem;
      outline: none;

      transition: 0.5s;

      &::placeholder {
        color: lightgrey;
      }
    }
    button {
      background: #000;
      border: none;
      width: 4rem;
      border-radius: 0 1rem 1rem 0;
      cursor: pointer;

      &:hover {
        background: ${lighten(0.03, 'hsl(0, 0%, 17%)')};
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      margin: 2rem 0;
    }

    form {
      input {
        padding: 1rem;
        font-size: 0.9rem;
        width: calc(75vw - 4rem);
      }
    }
  }

  @media (max-width: 500px) {
    form input {
      width: calc(90vw - 4rem);

      &:placeholder {
        font-size: 0.7rem;
      }
    }
  }
`

export const SearchResults = styled.section`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0px 7px 17px 0px rgba(0, 0, 0, 0.2);
  bottom: -110px;
  padding: 1rem;
  z-index: 999;

  @media (max-width: 768px) {
    bottom: -165px;
    padding: 0;
  }

  @keyframes fadeUp {
    from {
      transform: translateY(0px);
      opacity: 0;
    }
    to {
      transform: translateY(110px);
      opacity: 1;
    }
  }
  animation: fadeUp 0.5s ease-in-out forwards;

  ul {
    display: flex;
    justify-content: space-around;
    padding: 2.5rem 4rem;
    width: 80vw;
    list-style: none;

    strong {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 700;
      color: var(--dark-gray);
      font-size: 0.9rem;
      display: block;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 2rem;
      font-weight: 500;
      color: var(--very-dark-gray);
    }

    @media (max-width: 1280px) {
      width: 90vw;
      p {
        font-size: 1.5rem;
      }
    }

    > li + li {
      margin-left: 3rem;
      position: relative;

      div {
        padding-left: 3rem;
      }

      &:before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 75px;
        background: var(--dark-gray);
        position: absolute;

        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 80vw;
      padding: 2rem;

      p {
        font-size: 1.5rem;
      }

      li + li {
        padding-top: 1.3rem;
        margin: 0;

        div {
          padding: 0;
        }

        &:before {
          display: none;
        }
      }
    }
    @media (max-width: 500px) {
      width: 90vw;
      padding: 1.5rem;
    }
  }
`

export const MapContainer = styled.section `
  width: 100%;
  background: #ccc;

  pointer-events: auto;
`
