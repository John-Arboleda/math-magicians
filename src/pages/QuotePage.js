import style from './QuotePage.module.css';

const QuotesPage = () => (
  <div className={style.div}>
    <h2>
      <p className={style.quote}>
        Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding.
      </p>
      <p>
        — William Paul Thurston
      </p>
    </h2>
  </div>
);

export default QuotesPage;
