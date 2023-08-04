import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main>
      <div>
        <div>
          <span>404 error</span>
          <span>página não encontrada</span>
        </div>
        <svg viewBox="0 0 200 600">
          <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8"></polygon>
        </svg>
      </div>
      <svg className={styles.crack} viewBox="0 0 200 600">
        <polyline points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514"></polyline>
      </svg>
      <div>
        <svg viewBox="0 0 200 600">
          <polygon points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8"></polygon>
        </svg>
        <div>
          <span>nos desculpe por isto!</span>
          <span>
            <a>
              <b>voltar para casa?</b>
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
