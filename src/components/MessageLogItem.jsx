import styles from './MessageLogItem.module.css';

import { parseISO, format } from 'date-fns';

export function MessageLogItem(props) {
  return (
    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.dateTime}>
            <strong>{props.category}</strong>
            <time
              title={props.datetime}
              dateTime={Date(props.datetime)}>{format(parseISO(props.datetime), "MM/dd/yyyy hh:mm:ss")}</time>
          </div>
        </header>
        <p>{props.message}</p>
      </div>
    </div>
  )
}