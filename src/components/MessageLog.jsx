import styles from './MessageLog.module.css';

import { MessageLogItem } from './MessageLogItem';

export function MessageLog(props) {
  return (<div className={styles.messagelog}>
    {props.messages.map((message) => (<MessageLogItem
      key={message.id}
      category={message.category}
      datetime={message.createdat}
      message={message.messagetext} />))}
  </div>)
}