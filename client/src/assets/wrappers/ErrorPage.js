import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
    color: var(--primary-500);
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
    color: var(--text-primary-color);
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
    max-width: 500px;
  }

  a,
  button {
    color: var(--primary-500);
    text-transform: capitalize;
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-700);
      text-decoration: underline;
    }
  }

  .error-code {
    font-size: 8rem;
    font-weight: bold;
    color: var(--primary-500);
    margin: 0;
    line-height: 1;
  }

  .error-message {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  .back-home {
    display: inline-block;
    background: var(--primary-500);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 1rem;

    &:hover {
      background: var(--primary-700);
      text-decoration: none;
      transform: translateY(-2px);
    }
  }
`;

export default Wrapper;
